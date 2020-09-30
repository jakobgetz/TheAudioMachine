import styled from 'styled-components'

import { scale } from './TheAudioMachine'

export const SAVE_PRESET = styled.div`
position: absolute;
display: grid;
grid-template-rows: 1.5fr 1fr;
grid-template-columns: 1fr 1fr;
width: 30%;
height: 30%;
top: 35%;
left: 35%;
background-color: ${p => p.theme.primaryLight};
border: ${0.5 * scale}vw solid ${p => p.theme.primary};
border-radius: ${1 * scale}vw;
color: ${p => p.theme.nav};
padding-top: ${1 * scale}vw;
`

export const PRESET_NAME = styled.div`
grid-column: 1 / -1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&::before {
        content: 'NAME YOUR PRESET:';
        margin-bottom: ${1 * scale}vw;
    }

    input {
        background-color: ${p => p.theme.primary};
        width: 80%;
        height: 50%;
        color: ${p => p.theme.nav};
        padding-left: ${1 * scale}vw;
        border: none;
        outline: none;
        border-radius: ${0.5 * scale}vw;
    }
`