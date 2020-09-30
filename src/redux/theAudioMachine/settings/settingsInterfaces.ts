export interface Trigger {
    id: number
    velocity: number
    pitch: number
}

export interface Layer {
    id: number
    name: string
    sampleFilePath: string
    volume: number
    pan: number
    isMute: boolean
    isSolo: boolean
    rhythm: Trigger[]
}

export interface Settings {
    bpm: number
    volume: number
    layers: Layer[]
}