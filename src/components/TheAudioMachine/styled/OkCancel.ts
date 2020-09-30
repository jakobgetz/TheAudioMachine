import styled, { css } from "styled-components";
import { lighten } from "polished";

import { scale } from "./TheAudioMachine";

const button = css`
  position: relative;
  border-radius: ${0.5 * scale}vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  background: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.nav};
  font-size: ${1.5 * scale}vw;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(p) => lighten(0.03, p.theme.primary)};
  }
`;

export const OK = styled.div`
  ${button}
  &::before {
    content: "OK";
  }
`;

export const CANCEL = styled.div`
  ${button}
  &::before {
    content: "Cancel";
  }
`;
