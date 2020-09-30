import styled, { css } from 'styled-components'
import { lighten } from 'polished'


import Theme from '../../../themes'

import { scale, borderSize } from './TheAudioMachine'

export const SAMPLE_MENU = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`

interface Props {
    theme: Theme
    layerId: number
    instrument: string
    selected: boolean
}

export const alignGrid = css`
position: relative;
    right: ${borderSize * scale}vw;
    bottom: ${borderSize * scale}vw;
`

export const SIDENAV_BUTTON = styled.div`
${({ theme, layerId, instrument, selected }: Props) => css`
display: grid;
grid-template-columns: ${8 * scale}vw ${5 * scale}vw;
grid-template-rows: ${2.4 * scale}vw ${2.6 * scale}vw;
width: ${13 * scale}vw;
height: ${5 * scale}vw;
border-radius: 100vw;
border: ${borderSize * scale}vw solid ${theme.nav};
background-color: ${layerId};
background-color: ${theme.primary};
box-shadow: 0 0 ${1 * scale}vw 0.6vh ${selected ? theme.layerColorsActive[layerId] : 'none'};
color: ${theme.nav};
pointer-events: all;

&::before {
    content: '${instrument}';
    ${alignGrid}
    font-size: ${1.4 * scale}vw;
    text-align: left;
    padding: ${0.4 * scale}vw 0 0 ${2 * scale}vW;
}

&::after {
    ${() => {
            switch (layerId) {
                case 0: return css`content: '\f54b'`
                case 1: return css`content: '\f569'`
                case 2: return css`content: '\f256'`
                case 3: return css`content: '\f8c0'`
                case 4: return css`content: '\f807'`
                case 5: return css`content: '\f001'`
            }
        }};
        font-family: "Font Awesome 5 Free";
  font-weight: 900;
grid-column-start: 2;
grid-row-start: 1;
grid-row-end: 3;
display: flex;
justify-content: center;
align-items: center;
font-size: ${2.3 * scale}vw;
${alignGrid}
border: ${borderSize * scale}vw solid ${theme.nav};
border-radius: 100%;
background: ${selected ? theme.layerColorsActive[layerId] : theme.beatColors[layerId]};
}

&:hover {
    border-color: ${theme.accent};
    color: ${theme.accent};
    box-shadow: 0 0 ${0.6 * scale}vw ${0.3 * scale}vw ${selected ? 'none' : lighten(0.3, theme.beatColors[layerId])};
};

    &:hover::before {
    color: ${theme.accent}
}

&:hover::after {
        border-color: ${theme.accent};
        background-color: ${selected ? 'none' : lighten(0.3, theme.beatColors[layerId])}
    };
`}
`