import React from 'react'
import { useSelector } from 'react-redux'

import {
    Trigger,
    PlayHead
} from './index'

import {
    RootState,
    Settings
} from '../../../redux'

import {
    play
} from '../logic'

import {
    SEQUENCE,
    PLAY_BUTTON,
} from '../styled'

export const Sequence = () => {

    const { layers } = useSelector((state: RootState) => state.tam.settings as Settings)

    return (
        <SEQUENCE>
            {layers.map(layer => layer.rhythm.map(trigger =>
                <Trigger key={trigger.id} layerId={layer.id} triggerId={trigger.id} velocity={trigger.velocity} />
            ))}
            <PlayHead />
            <PLAY_BUTTON onClick={play} />
        </SEQUENCE>
    )
}
