//global variables
let setBPM, setTrigger, addLayer, removeLayer, backToStart, play, samples = [], rhythm = [],
    playHead = 0,
    layer = 5,
    plays;
const grid = 16;
const defaultSamples = ["Samples/Kick.wav", "Samples/Snare.wav", "Samples/Clap.wav", "Samples/Hat.wav", "Samples/Crash.wav"];

//For legacy browsers
const AudioContext = window.AudioContext || window.webkitAudiokontext;
const ctx = new AudioContext();

/**
 * This function gets called when the website is loaded, it sets up the sequncer
 */
window.onload = function () {

    for (let i = 0; i < layer; i++) {

        //set up rhythm
        rhythm[i] = "";
        for (let j = 0; j < grid; j++) {
            rhythm[i] += "0";
        }

        // load default samples
        fetch(defaultSamples[i])
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
            .then(decodedAudio => samples[i] = decodedAudio);
    }

}

/**
 * Get the selected Sample of a layer
 */
const input = document.getElementById("input1");
input.addEventListener("change", function (e) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(input.files[0]);
    reader.onload = function () {
        ctx.decodeAudioData(reader.result).then(result => samples[0] = result);
    }
})


/**
 * setBPM stops the audio while typing setting a new tempo
 */
setBPM = function () {
    if (plays) {
        play();
    }
}

/**
 * Sets the Trigger
 */
setTrigger = function () {
    let counter = 0;
    let newRhythm;
    for (let i = 1; i <= layer * grid; i++) {
        if (document.getElementById(i.toString()).checked) {
            newRhythm = rhythm[counter].substring(0, (i - 1) % grid) + '1' + rhythm[counter].substring((i - 1) % grid + 1);
        } else {
            newRhythm = rhythm[counter].substring(0, (i - 1) % grid) + '0' + rhythm[counter].substring((i - 1) % grid + 1);
        }
        rhythm[counter] = newRhythm;
        if (i % grid == 0) {
            counter++;
        }
    }
}

/**
 * Adds a Layer to the Arrangement
 */
addLayer = function () {

    // stop Playback
    if (plays) {
        play();
    }

    layer++;
    let newDiv = document.createElement("div");
    let name = nameLayer();
    newDiv.id = "layer" + layer;
    newDiv.appendChild(document.createTextNode(name));
    let newInput;
    for (let i = 1; i <= 16; i++) {
        newInput = document.createElement("input");
        newInput.type = "checkbox";
        newInput.id = (layer * grid - grid + i).toString();
        newInput.onchange = setTrigger;
        newDiv.appendChild(newInput);
    }
    newInput = document.createElement("input");
    newInput.type = "file";
    newInput.id = "input" + layer;
    //newInput.value = "Samples/Ayy.wav";
    newDiv.appendChild(newInput);
    newDiv.appendChild(document.createElement("br"));
    document.getElementById("layer").appendChild(newDiv);
    rhythm[layer - 1] = "";
    for (let i = 0; i < grid; i++) {
        rhythm[layer - 1] += "0";
    }
    if (name == null) {
        removeLayer();
    }
}

/**
 * Removes a Layer from the Arrangement
 */
removeLayer = function () {
    document.getElementById("layer" + layer).remove();
    layer--;
}

/**
 * Resets the Playhead
 */
backToStart = function () {
    playHead = 0;
}

/**
 * Starts or stops the sequence
 */
play = function () {
    if (plays) {
        plays = false;
        setPlayButtonStyle();
    } else {
        plays = true;
        setPlayButtonStyle();
        playSequence();
    }

}

/**
 * Sets the Style of the playbutton which indicates if the sequence is playing or not
 */
function setPlayButtonStyle() {
    if (plays) {
        document.getElementById("playbutton").textContent = "&#10074&#10074";
        document.getElementById("playbutton").style.backgroundColor = "red";
    } else {
        document.getElementById("playbutton").textContent = "&#9658";
        document.getElementById("playbutton").style.backgroundColor = "lawngreen";
    }
}

/**
 * Plays the Sequence
 */
function playSequence() {
    let samplePlayer = [];
    if (plays) {
        playHead %= grid;
        //showPlayHead();
        for (let i = 0; i < layer; i++) {
            if (rhythm[i].charAt(playHead) == '1') {
                samplePlayer[i] = ctx.createBufferSource();
                samplePlayer[i].connect(ctx.destination);
                samplePlayer[i].buffer = samples[i];
                samplePlayer[i].start(ctx.currentTime);
            }
        }
        playHead++;
        setTimeout(playSequence, 1000 / (document.getElementById("bpm").value / 60 * 4));
    }
}

/**
 * shows where the play head is located
 */

/*function showPlayHead() {
    for (let i = 0; i < grid * layer; i++) {
        if (i == playHead) {
            document.getElementById(i.toString()).style.backgroundColor = "black";
        }
    }
}*/

/**
 * Askes you for the layer name when you add a new layer
 * @returns {your entered name}
 */
function nameLayer() {
    let name = prompt("Name", "Layer " + layer);
    while (name == "") {
        name = prompt("No Name was given, please type a name", "Layer " + layer);
    }
    return name;
}