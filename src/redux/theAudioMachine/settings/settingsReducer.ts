import { Settings } from './settingsInterfaces'

import {
    SET_SETTINGS,
    SET_BPM,
    SET_VOLUME,
    SET_TRIGGER,
    SET_LAYER_VOLUME,
    SET_LAYER_PAN,
    SET_MUTE,
    SET_SOLO
} from './settingsTypes'

const initialState: Settings = {
    bpm: 120,
    volume: 80,
    layers: [
        {
            id: 0,
            name: 'KICK',
            sampleFilePath: '/DefaultSamples/Kick.wav',
            volume: 80,
            pan: 0,
            isMute: false,
            isSolo: false,
            rhythm: [
                { id: 0, velocity: 0, pitch: 1 },
                { id: 1, velocity: 0, pitch: 1 },
                { id: 2, velocity: 0, pitch: 1 },
                { id: 3, velocity: 0, pitch: 1 },
                { id: 4, velocity: 0, pitch: 1 },
                { id: 5, velocity: 0, pitch: 1 },
                { id: 6, velocity: 0, pitch: 1 },
                { id: 7, velocity: 0, pitch: 1 },
                { id: 8, velocity: 0, pitch: 1 },
                { id: 9, velocity: 0, pitch: 1 },
                { id: 10, velocity: 0, pitch: 1 },
                { id: 11, velocity: 0, pitch: 1 },
                { id: 12, velocity: 0, pitch: 1 },
                { id: 13, velocity: 0, pitch: 1 },
                { id: 14, velocity: 0, pitch: 1 },
                { id: 15, velocity: 0, pitch: 1 }
            ]
        },
        {
            id: 1,
            name: "SNARE",
            sampleFilePath: "/DefaultSamples/Snare.wav",
            volume: 80,
            pan: 0,
            isMute: false,
            isSolo: false,
            rhythm: [
                { id: 0, velocity: 0, pitch: 1 },
                { id: 1, velocity: 0, pitch: 1 },
                { id: 2, velocity: 0, pitch: 1 },
                { id: 3, velocity: 0, pitch: 1 },
                { id: 4, velocity: 0, pitch: 1 },
                { id: 5, velocity: 0, pitch: 1 },
                { id: 6, velocity: 0, pitch: 1 },
                { id: 7, velocity: 0, pitch: 1 },
                { id: 8, velocity: 0, pitch: 1 },
                { id: 9, velocity: 0, pitch: 1 },
                { id: 10, velocity: 0, pitch: 1 },
                { id: 11, velocity: 0, pitch: 1 },
                { id: 12, velocity: 0, pitch: 1 },
                { id: 13, velocity: 0, pitch: 1 },
                { id: 14, velocity: 0, pitch: 1 },
                { id: 15, velocity: 0, pitch: 1 }
            ]
        },
        {
            id: 2,
            name: "CLAP",
            sampleFilePath: "/DefaultSamples/Clap.wav",
            volume: 80,
            pan: 0,
            isMute: false,
            isSolo: false,
            rhythm: [
                { id: 0, velocity: 0, pitch: 1 },
                { id: 1, velocity: 0, pitch: 1 },
                { id: 2, velocity: 0, pitch: 1 },
                { id: 3, velocity: 0, pitch: 1 },
                { id: 4, velocity: 0, pitch: 1 },
                { id: 5, velocity: 0, pitch: 1 },
                { id: 6, velocity: 0, pitch: 1 },
                { id: 7, velocity: 0, pitch: 1 },
                { id: 8, velocity: 0, pitch: 1 },
                { id: 9, velocity: 0, pitch: 1 },
                { id: 10, velocity: 0, pitch: 1 },
                { id: 11, velocity: 0, pitch: 1 },
                { id: 12, velocity: 0, pitch: 1 },
                { id: 13, velocity: 0, pitch: 1 },
                { id: 14, velocity: 0, pitch: 1 },
                { id: 15, velocity: 0, pitch: 1 }
            ]
        },
        {
            id: 3,
            name: "HAT",
            sampleFilePath: "/DefaultSamples/Hat.wav",
            volume: 80,
            pan: 0,
            isMute: false,
            isSolo: false,
            rhythm: [
                { id: 0, velocity: 0, pitch: 1 },
                { id: 1, velocity: 0, pitch: 1 },
                { id: 2, velocity: 0, pitch: 1 },
                { id: 3, velocity: 0, pitch: 1 },
                { id: 4, velocity: 0, pitch: 1 },
                { id: 5, velocity: 0, pitch: 1 },
                { id: 6, velocity: 0, pitch: 1 },
                { id: 7, velocity: 0, pitch: 1 },
                { id: 8, velocity: 0, pitch: 1 },
                { id: 9, velocity: 0, pitch: 1 },
                { id: 10, velocity: 0, pitch: 1 },
                { id: 11, velocity: 0, pitch: 1 },
                { id: 12, velocity: 0, pitch: 1 },
                { id: 13, velocity: 0, pitch: 1 },
                { id: 14, velocity: 0, pitch: 1 },
                { id: 15, velocity: 0, pitch: 1 }
            ]
        },
        {
            id: 4,
            name: "CRASH",
            sampleFilePath: "/DefaultSamples/Crash.wav",
            volume: 80,
            pan: 0,
            isMute: false,
            isSolo: false,
            rhythm: [
                { id: 0, velocity: 0, pitch: 1 },
                { id: 1, velocity: 0, pitch: 1 },
                { id: 2, velocity: 0, pitch: 1 },
                { id: 3, velocity: 0, pitch: 1 },
                { id: 4, velocity: 0, pitch: 1 },
                { id: 5, velocity: 0, pitch: 1 },
                { id: 6, velocity: 0, pitch: 1 },
                { id: 7, velocity: 0, pitch: 1 },
                { id: 8, velocity: 0, pitch: 1 },
                { id: 9, velocity: 0, pitch: 1 },
                { id: 10, velocity: 0, pitch: 1 },
                { id: 11, velocity: 0, pitch: 1 },
                { id: 12, velocity: 0, pitch: 1 },
                { id: 13, velocity: 0, pitch: 1 },
                { id: 14, velocity: 0, pitch: 1 },
                { id: 15, velocity: 0, pitch: 1 }
            ]
        },
        {
            id: 5,
            name: "VOC",
            sampleFilePath: "/DefaultSamples/Ayy.wav",
            volume: 80,
            pan: 0,
            isMute: false,
            isSolo: false,
            rhythm: [
                { id: 0, velocity: 0, pitch: 1 },
                { id: 1, velocity: 0, pitch: 1 },
                { id: 2, velocity: 0, pitch: 1 },
                { id: 3, velocity: 0, pitch: 1 },
                { id: 4, velocity: 0, pitch: 1 },
                { id: 5, velocity: 0, pitch: 1 },
                { id: 6, velocity: 0, pitch: 1 },
                { id: 7, velocity: 0, pitch: 1 },
                { id: 8, velocity: 0, pitch: 1 },
                { id: 9, velocity: 0, pitch: 1 },
                { id: 10, velocity: 0, pitch: 1 },
                { id: 11, velocity: 0, pitch: 1 },
                { id: 12, velocity: 0, pitch: 1 },
                { id: 13, velocity: 0, pitch: 1 },
                { id: 14, velocity: 0, pitch: 1 },
                { id: 15, velocity: 0, pitch: 1 }
            ]
        }
    ]
}

// type Action = { type: string, payload: number | Settings | { layerId: number, value: number } | AudioBuffer | { layerId: number, triggerId: number } }
type Action = { type: string, payload: any }

const reducer = (state: Settings = initialState, action: Action) => {
    switch (action.type) {
        case SET_SETTINGS:
            return action.payload
        case SET_BPM:
            return {
                ...state,
                bpm: action.payload
            }
        case SET_VOLUME:
            return {
                ...state,
                volume: action.payload
            }
        case SET_TRIGGER:
            return setTrigger(state, action.payload)
        case SET_LAYER_VOLUME:
            return setLayerVolume(state, action.payload)
        case SET_LAYER_PAN:
            return setLayerPan(state, action.payload)
        case SET_MUTE:
            return setMute(state, action.payload)
        case SET_SOLO:
            return setSolo(state, action.payload)
        default: return state
    }
}


//functions

type SetTrigger = (state: Settings, id: { layerId: number, triggerId: number }) => Settings

const setTrigger: SetTrigger = (state, id) => ({
    ...state,
    layers: state.layers.map(layer => {
        if (layer.id === id.layerId) {
            layer.rhythm.forEach(trigger => {
                if (trigger.id === id.triggerId) {
                    if (trigger.velocity !== 0) {
                        trigger.velocity = 0
                    } else {
                        trigger.velocity = 100
                    }
                }
                return trigger
            })
        }
        return layer
    })
})

type SetLayerValue = (state: Settings, payload: { layerId: number, value: number }) => Settings

const setLayerVolume: SetLayerValue = (state, payload) => ({
    ...state,
    layers: state.layers.map(layer => {
        if (layer.id === payload.layerId) {
            layer.volume = payload.value
        }
        return layer
    })
})

const setLayerPan: SetLayerValue = (state, payload) => ({
    ...state,
    layers: state.layers.map(layer => {
        if (layer.id === payload.layerId)
            layer.pan = payload.value
        return layer
    })
})

type setLayerSwitch = (state: Settings, layerId: number) => Settings

const setMute: setLayerSwitch = (state, layerId) => {
    let containsSolo: boolean = false
    state = {
        ...state,
        layers: state.layers.map(layer => {
            if (layer.id === layerId)
                layer.isMute = !layer.isMute
            if (layer.isSolo)
                containsSolo = true
            return layer
        })
    }
    return {
        ...state,
        layers: state.layers.map(layer => {
            if ((containsSolo) && (!layer.isSolo))
                layer.isMute = true
            return layer
        })
    }
}

const setSolo: setLayerSwitch = (state, layerId) => {
    let containsSolo: boolean = false
    state = {
        ...state,
        layers: state.layers.map(layer => {
            if (layer.id === layerId) {
                if (layer.isSolo) {
                    layer.isSolo = false
                } else {
                    layer.isSolo = true
                    layer.isMute = false
                }
            }
            if (layer.isSolo)
                containsSolo = true
            return layer
        })
    }
    return {
        ...state,
        layers: state.layers.map(layer => {
            if ((!containsSolo) && (layer.id !== layerId)) {
                layer.isMute = false
            } else {
                if ((containsSolo) && (!layer.isSolo))
                    layer.isMute = true
            }
            return layer
        })
    }
}

export default reducer