import {
    SET_PRESET_LIST,
    SET_SELECTED_PRESET_NAME
} from './presetsTypes'

import { PresetList } from './presetsInterfaces'

export const setPresetList = (presetList: PresetList) => ({
    type: SET_PRESET_LIST,
    payload: presetList
})

export const setSelectedPresetName = (name: string) => ({
    type: SET_SELECTED_PRESET_NAME,
    payload: name
})