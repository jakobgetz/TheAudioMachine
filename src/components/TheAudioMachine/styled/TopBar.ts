import styled, { css } from 'styled-components'

import { scale, borderSize } from './TheAudioMachine'

export const TOP_BAR = styled.div`
grid-column: 1 / -1;
/* direction: rtl; */
text-align: right;
`

const topButton = css`
display: inline-block;
    width: ${3 * scale}vw;
  height: ${3 * scale}vw;
  background-color: ${p => p.theme.primary};
  border: ${borderSize * scale}vw solid ${p => p.theme.nav};
  border-radius: 100vw;
  margin-right: ${1.2 * scale}vw;
  cursor: pointer;
  color: ${p => p.theme.nav};
  pointer-events: all;
  transition-duration: 0.25s;
  overflow: hidden;
  padding-top: ${0.7 * scale}vw;

  &::before {
    display: flex;
    justify-content: center;
    font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: ${1.3 * scale}vw;
  }

  &:hover {
background-color: ${p => p.theme.nav};
color: ${p => p.theme.primary};
  }
`

export const DOWNLOAD = styled.div`
${topButton}
float: left;

&::before {
  content: "\f019";
}
`

export const RECORD = styled.div`
${topButton}
float: left;

&::before {
  content: "\f111";
}
`

export const TOGGLE_THEME = styled.div`
${topButton}
float: left;

&::before {
  content: "\f186";
}
`

export const ABOUT = styled.div`
${topButton}
float: left;

&::before {
  content: "\f0c0";
}
`

export const DELETE = styled.div`
${topButton}

&::before {
  content: "\f2ed";
}
`

export const SAVE = styled.div`
${topButton}

&::before {
  content: "\f0c7";
}
`

export const LEFT = styled.div`
${topButton}

&::before {
  content: "\f053";
}
`

export const RIGHT = styled.div`
${topButton}

&::before {
  content: "\f054";
}
`

export const PRESET = styled.div`
${topButton}
width: ${13 * scale}vw;
text-align: left;
padding-left: ${1 * scale}vw;
font-size: ${1.5 * scale}vw;
`