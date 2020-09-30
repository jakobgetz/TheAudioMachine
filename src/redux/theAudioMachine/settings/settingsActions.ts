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

export type SetSettingsAction = { type: string, payload: Settings }
type SetSettings = (settings: Settings) => SetSettingsAction
export const setSettings: SetSettings = settings => ({
    type: SET_SETTINGS,
    payload: settings
})

export type SetBpmAction = { type: string, payload: number }
type SetBpm = (bpm: number) => SetBpmAction
export const setBpm: SetBpm = bpm => ({
    type: SET_BPM,
    payload: bpm
})

export type SetVolumeAction = { type: string, payload: number }
type SetVolume = (volume: number) => SetVolumeAction
export const setVolume: SetVolume = volume => ({
    type: SET_VOLUME,
    payload: volume
})

export type SetTriggerAction = { type: string, payload: { layerId: number, triggerId: number } }
type SetTrigger = (layerId: number, triggerId: number) => SetTriggerAction
export const setTrigger: SetTrigger = (layerId, triggerId) => ({
    type: SET_TRIGGER,
    payload: { layerId, triggerId }
}
)

export type SetLayerValueAction = { type: string, payload: { layerId: number, value: number } }
type SetLayerValue = (layerId: number, value: number) => SetLayerValueAction
export const setLayerVolume: SetLayerValue = (layerId, value) => ({
    type: SET_LAYER_VOLUME,
    payload: { layerId, value }
})


export const setLayerPan: SetLayerValue = (layerId, value) => ({
    type: SET_LAYER_PAN,
    payload: { layerId, value }
})

export type LayerToggleAction = { type: string, payload: number }
export const setMute = (layerId: number) => ({
    type: SET_MUTE,
    payload: layerId
})

export const setSolo = (layerId: number) => ({
    type: SET_SOLO,
    payload: layerId
})
