import styled from 'styled-components'

import Theme from '../../../themes'

import {scale} from './TheAudioMachine'

interface Props {
  theme: Theme
  bpm: number
  isPlaying: boolean
}

export const PLAY_HEAD = styled.div`
position: absolute;
  height: ${26 * scale}vw;
  width: ${2.7 * scale}vw;
  left: 50%;
  margin-left: ${-1.35 * scale}vw;
  background-color: ${(p: Props) => p.theme.playHead};
  pointer-events: none;
  transform-origin: 50% 100% 0;
  opacity: 0.55;

  &::before {
  content: '';
  width: ${2.75 * scale}vw;
  height: ${0.75 * scale}vw;
  border-radius: 10px;
  background-color: red;
  position: absolute;
  top: ${-0.7 * scale}vw;
  opacity: 1;
}
`
