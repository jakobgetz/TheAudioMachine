import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import Theme from '../../../themes'

import { scale } from './TheAudioMachine'

interface Props {
    theme: Theme
    layerId: number
    triggerId: number
    velocity: number
}

const trigger = 16
const deg = 360
const distance = [7, 10.3, 13.6, 16.9, 20.2, 23.5].map(d => d * scale + 'vw')


export const TRIGGER = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(${(p: Props) => (p.triggerId + 12) / trigger * deg + deg + 'deg'});     
    pointer-events: all;

    div {
    width: ${2.7 * scale}vw;
    height: ${2.7 * scale}vw;
    border-radius: 50%;
    background-color: ${(p: Props) => (p.velocity !== 0) ? p.theme.layerColorsActive[p.layerId] : p.theme.layerColorsInactive[p.layerId]};
    ${p => (p.velocity !== 0) && css`
    box-shadow: 0 0 ${0.8 * scale}vw ${0.4 * scale}vw ${p.theme.layerColorsActive[p.layerId]};
    `} 
    top: 50%;
    left: ${(p: Props) => distance[p.layerId]};
    transform: translate(-50%, -50%);
    position: absolute;
    cursor: pointer;
    transition-duration: 0.25s;

    &:hover {
    width: ${3 * scale}vw;
    height: ${3 * scale}vw;
    /* background-color: ${p => lighten(0.2, p.velocity ? p.theme.layerColorsActive[p.layerId] : p.theme.layerColorsInactive[p.layerId])}; */
    box-shadow: 0 0 ${0.6 * scale}vw ${0.3 * scale}vw ${p => p.velocity ? p.theme.layerColorsActive : p.theme.layerColorsInactive[p.layerId]};
    }
    }
`
