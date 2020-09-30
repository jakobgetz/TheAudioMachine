import styled from 'styled-components'

import { scale } from './TheAudioMachine'

export const SEQUENCE = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width:${53 * scale}vw;
height: ${53 * scale}vw;
background-color: ${props => props.theme.accent};
border-radius: 100%;
border: ${0.6 * scale}vw solid ${props => props.theme.primaryLight};
`

