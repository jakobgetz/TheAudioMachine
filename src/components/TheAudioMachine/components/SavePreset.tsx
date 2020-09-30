import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
    togglePreset
} from '../../../redux'

import {
    savePreset
} from '../logic'

import {
    SAVE_PRESET,
    PRESET_NAME,
    OK,
    CANCEL
} from '../styled'

export const SavePreset = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch()

    return (
        <SAVE_PRESET>
            <PRESET_NAME>
                <input type='text' value={name} onChange={e => setName(e.target.value)} />
            </PRESET_NAME>
            <div>
                <OK onClick={() => {
                    if (name) {
                        savePreset(name)
                        dispatch(togglePreset())
                    }
                }} />
            </div>
            <div>
                <CANCEL onClick={() => dispatch(togglePreset())} />
            </div>
        </SAVE_PRESET>
    )
}
