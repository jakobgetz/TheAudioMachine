import store, { Settings, togglePlay, incrementPlayHeadPosition } from '../../../redux'
import { samples } from './samples'


let settings: Settings = store.getState().tam.settings
let isPlaying: boolean = false
let isRecording: boolean = false
let playHeadPosition: number = 0
// window.AudioContext = window.AudioContext || window.webkitAudioContext
let ctx: AudioContext = new AudioContext()
let masterGain: GainNode = ctx.createGain()
let volumes: GainNode[]
let layerPans: StereoPannerNode[]
let audioBuffer: number = 0.01
let samplePlayer: AudioBufferSourceNode[]
let sampleGain: GainNode[]
let delay: number

//Audio recording
let mediaRecorder: MediaRecorder
let audioChunks: BlobPart[];
const audioType = 'audio/wav';
let downloadButton = document.querySelector("DOWNLOAD");

masterGain.gain.setValueAtTime(settings.volume, ctx.currentTime)
masterGain.connect(ctx.destination)

store.subscribe(() => settings = store.getState().tam.settings)
store.subscribe(() => masterGain.gain.setValueAtTime(settings.volume / 100, ctx.currentTime))

/**
  * Create an Array and fill it with one Gain Node per Layer
  */
const fillvolumeArray = () => {
    volumes = new Array(settings.layers.length)
    for (let i = 0; i < settings.layers.length; i++) {
        volumes[i] = ctx.createGain()
    }
}

/**
 * Create an Array and fill it with one StereoPan Node per Layer
 */
const fillLayerPanArray = () => {
    layerPans = new Array(settings.layers.length)
    for (let i = 0; i < settings.layers.length; i++) {
        if (ctx.createStereoPanner)
            layerPans[i] = ctx.createStereoPanner()
    }
}

fillvolumeArray()
fillLayerPanArray()

export const toggleRecording = () => {
    isRecording = !isRecording
}

export const play = () => {
    if (isPlaying) {
        store.dispatch(togglePlay())
        playHeadPosition = 0
        isPlaying = false
        if (isRecording) {
            isRecording = false
            stopRecording()
        }
        masterGain.disconnect()
    } else {
        store.dispatch(togglePlay())
        isPlaying = true
        if (isRecording) {
            startRecording()
        }
        masterGain.connect(ctx.destination)
        playSequence()
    }
}

const playSequence = () => {
    delay = new Date().getTime()
    samplePlayer = Array(settings.layers.length)
    sampleGain = Array(settings.layers.length)
    if (isPlaying) {
        playHeadPosition %= settings.layers[0].rhythm.length
        setUpNodes()
        playBackSamples()
        store.dispatch(incrementPlayHeadPosition())
        playHeadPosition++
        delay = new Date().getTime() - delay + 1
        const timeout = 1000 / (settings.bpm / 60 * 4) - delay
        setTimeout(playSequence, timeout)
    }
}

const setUpNodes = () => {
    for (let i = 0; i < settings.layers.length; i++) {
        if (settings.layers[i].rhythm[playHeadPosition].velocity !== 0) {
            samplePlayer[i] = ctx.createBufferSource()
            sampleGain[i] = ctx.createGain()
            samplePlayer[i].connect(sampleGain[i])
            sampleGain[i].connect(layerPans[i])
            layerPans[i].connect(volumes[i])
            volumes[i].connect(masterGain)
            setVelocity(i)
            setPitch(i)
            setVolume(i)
            setLayerPan(i)
            setLayerMute(i)
            if (samples[i] !== null)
                samplePlayer[i].buffer = samples[i]
        }
    }
}

const setVelocity = (i: number) => {
    sampleGain[i].gain.setValueAtTime(settings.layers[i].rhythm[playHeadPosition].velocity / 127, ctx.currentTime)
}

const setPitch = (i: number) => {
    samplePlayer[i].playbackRate.value = settings.layers[i].rhythm[playHeadPosition].pitch
}

const setVolume = (i: number) => {
    volumes[i].gain.value = settings.layers[i].volume / 100
}

const setLayerPan = (i: number) => {
    layerPans[i].pan.value = settings.layers[i].pan / 50
}

const setLayerMute = (i: number) => {
    if (settings.layers[i].isMute) {
        samplePlayer[i].disconnect();
    } else {
        volumes[i].connect(masterGain);
    }
}

const playBackSamples = () => {
    let playTime = ctx.currentTime + audioBuffer
    for (let i = 0; i < settings.layers.length; i++) {
        if (settings.layers[i].rhythm[playHeadPosition].velocity !== 0) {
            samplePlayer[i].start(playTime);
        }
    }
}

const startRecording = () => {
    var dest = ctx.createMediaStreamDestination();
    mediaRecorder = new MediaRecorder(dest.stream);
    mediaRecorder.ondataavailable = e => {
        if (e.data && e.data.size > 0) {
            audioChunks.push(e.data);
        }
    };
    audioChunks = [];
    mediaRecorder.start(10);
}

const stopRecording = () => {
    mediaRecorder.stop();
    saveAudio();
}

const saveAudio = () => {
    const blob = new Blob(audioChunks, { type: audioType });
    if (blob != undefined) {

    }
}