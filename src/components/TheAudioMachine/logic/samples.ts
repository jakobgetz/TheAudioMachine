import store, {Layer} from '../../../redux'

export let samples: any[] = []
let AudioContext = window.AudioContext || (window as any).webkitAudioContext

export const loadSamples = () => {
    const layers = store.getState().tam.settings.layers as Layer[]
    const loadedSamples = layers.map(layer => loadWaveFile(layer.sampleFilePath))
    Promise.all(loadedSamples).then(loadedSamples => samples = loadedSamples)
}

const loadWaveFile = async (sampleFilePath: string) => {
    const res = await fetch(sampleFilePath)
    const arrayBuffer = await res.arrayBuffer()
    return await new AudioContext().decodeAudioData(arrayBuffer)
}

export const uploadSample = (file: File, layerId: number) => {
    //let { layers } = store.getState().tam.settings as Settings
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
        new AudioContext().decodeAudioData(reader.result as ArrayBuffer)
            .then(result => {
                samples = samples.map((sample, i) => {
                    if (i === layerId) {
                        return result
                    } else {
                        return sample
                    }
                })
                console.log(samples)
            })
    }
}
