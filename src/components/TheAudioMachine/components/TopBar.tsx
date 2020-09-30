import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    RootState,
    toggleTheme,
    toggleAbout,
    togglePreset
} from '../../../redux'

import {
    resetTriggers,
    loadPrevPreset,
    loadNextPreset,
} from '../logic'

import {
    TOP_BAR,
    DOWNLOAD,
    RECORD,
    TOGGLE_THEME,
    ABOUT,
    DELETE,
    SAVE,
    LEFT,
    RIGHT,
    PRESET,
} from '../styled'

export const TopBar = () => {

    const { selectedPresetName } = useSelector((state: RootState) => state.tam.presets)
    const dispatch = useDispatch()

    return (
        <TOP_BAR>
            <DOWNLOAD />
            <RECORD />
            <TOGGLE_THEME onClick={() => dispatch(toggleTheme())} />
            <ABOUT onClick={() => dispatch(toggleAbout())} />
            <DELETE onClick={resetTriggers} />
            <SAVE onClick={() => dispatch(togglePreset())} />
            <LEFT onClick={loadPrevPreset} />
            <RIGHT onClick={loadNextPreset} />
            <PRESET >{selectedPresetName.substring(0, 16)}</PRESET>
        </TOP_BAR>
    )
}
