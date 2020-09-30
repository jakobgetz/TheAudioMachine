import {
    SELECT,
    TOGGLE_PLAY,
    INCREMENT_PLAYHEAD_POSITION,
    TOGGLE_THEME,
    TOGGLE_ABOUT,
    TOGGLE_PRESET
} from './graphicsTypes'

export const select = (layerId: number) => ({
    type: SELECT,
    payload: layerId
})

export const togglePlay = () => ({
    type: TOGGLE_PLAY
})

export const incrementPlayHeadPosition = () => ({
    type: INCREMENT_PLAYHEAD_POSITION
})

export const toggleTheme = () => ({
    type: TOGGLE_THEME
})

export const toggleAbout = () => ({
    type: TOGGLE_ABOUT
})

export const togglePreset = () => ({
    type: TOGGLE_PRESET
})