import {
    SET_PRESET_LIST, SET_SELECTED_PRESET_NAME
} from './presetsTypes'

import {
    Presets
} from './presetsInterfaces'

const initialState: Presets = {
    presetList: [
        [
            "factory",
            "Init",
            "KilperKit 02",
            "KilperKit 01",
            "Drum n' Bass 02",
            "Drum n' Bass 01",
            "808 Pattern",
            "Dubstep 02",
            "Dubstep 01",
            "Trap 02",
            "Trap 01",
            "Techno 02",
            "Techno 01",
            "House 02",
            "House 01",
            "Downtempo 02",
            "Downtempo 01",
            "Urban",
        ],
        ["user"]
    ],
    selectedPresetName: 'Init'
}

type Action = { type: string, payload?: any }

export default (state: Presets = initialState, action: Action) => {
    switch (action.type) {
        case SET_PRESET_LIST:
            return {
                ...state,
                presetList: action.payload
            }
        case SET_SELECTED_PRESET_NAME:
            return {
                ...state,
                selectedPresetName: action.payload
            }
        default: return state
    }
}