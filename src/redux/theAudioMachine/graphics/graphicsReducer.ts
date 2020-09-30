import { Graphics } from './graphicInterfaces'

import {
    INCREMENT_PLAYHEAD_POSITION,
    SELECT,
    TOGGLE_ABOUT,
    TOGGLE_PRESET,
    TOGGLE_PLAY,
    TOGGLE_THEME
} from './graphicsTypes'

import Theme, { initialTheme, brightTheme } from '../../../themes'

const initialState: Graphics = {
    selected: [false, false, false, false, false, false],
    isPlaying: false,
    playHeadPosition: 0,
    about: false,
    preset: false,
    theme: initialTheme
}

type Action = { type: string, payload?: any }

export default (state: Graphics = initialState, action: Action) => {
    switch (action.type) {
        case SELECT:
            return select(state, action.payload)
        case TOGGLE_PLAY:
            return {
                ...state,
                isPlaying: !state.isPlaying,
                playHeadPosition: 0
            }
        case INCREMENT_PLAYHEAD_POSITION:
            return {
                ...state,
                playHeadPosition: (state.playHeadPosition + 1) % 16
            }
        case TOGGLE_THEME:
            return {
                ...state,
                theme: toggleTheme(state.theme)
            }
        case TOGGLE_ABOUT:
            return {
                ...state,
                about: !state.about
            }
        case TOGGLE_PRESET:
            return {
                ...state,
                preset: !state.preset
            }
        default: return state
    }
}

type Select = (state: Graphics, layerId: number) => Graphics

const select: Select = (state, layerId) => ({
    ...state,
    selected: state.selected.map((s, i) => {
        if (layerId === i)
            return s ? false : true
        return false
    })
})

type ToggleTheme = (theme: Theme) => Theme

const toggleTheme: ToggleTheme = theme => {
    switch (theme) {
        case initialTheme:
            return brightTheme
        default: return initialTheme
    }
}


