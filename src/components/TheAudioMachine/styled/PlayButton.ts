import styled, {css} from 'styled-components'

import store from '../../../redux'

import {scale} from './TheAudioMachine'

export const PLAY_BUTTON = styled.div`
    position: absolute;
  background: ${p => p.theme.primary};
  border-radius: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${8 * scale}vw;
  width: ${8 * scale}vw;
  cursor: pointer;
  color: ${p => p.theme.nav};
  pointer-events: all;
  text-align: center;
  display: flex;
justify-content: center;
align-items: center;
font-size: ${4 * scale}vw;


  &::before {
    ${() => store.getState().tam.graphics.isPlaying ? css`content: '\f04c'` : css`content: '\f04b'`};
    font-family: "Font Awesome 5 Free";
  font-weight: 900;
  ${() => {
    if (!store.getState().tam.graphics.isPlaying)
        return css`padding-left: ${0.5 * scale}vw`
}
}
  }
  &:hover {
     box-shadow: 0 0 .9vh .5vh #998f84;
  }
`
