import styled, { css } from "styled-components";
import { lighten } from "polished";

import Theme from "../../../themes";

import { scale } from "./TheAudioMachine";
import { alignGrid } from "./SidenavButton";

interface Props {
  theme: Theme;
  layerId: number;
  active: boolean;
  selected: boolean;
}

export const MUTE_SOLO = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-around;
  margin: 0 ${1 * scale}vw 0 ${2 * scale}vw;
`;

const muteSolo = css`
  ${alignGrid}
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${1.8 * scale}vw;
  height: ${1.8 * scale}vw;

  border: ${0.15 * scale}vw solid
    ${(p: Props) => {
      if (p.selected) {
        return p.theme.layerColorsActive[p.layerId];
      } else {
        return p.active
          ? lighten(0.1, p.theme.beatColors[p.layerId])
          : p.theme.beatColors[p.layerId];
      }
    }};
  background-color: ${(p: Props) => {
    if (p.selected) {
      return p.active ? p.theme.layerColorsActive[p.layerId] : p.theme.primary;
    } else {
      return p.active
        ? lighten(0.1, p.theme.beatColors[p.layerId])
        : p.theme.primary;
    }
  }};
  color: ${(p: Props) => {
    if (p.selected) {
      return p.active ? p.theme.primary : p.theme.layerColorsActive[p.layerId];
    } else {
      return p.active ? p.theme.primary : p.theme.beatColors[p.layerId];
    }
  }};
  border-radius: 100vw;
  font-size: ${1 * scale}vw;
  text-align: center;
  cursor: pointer;

  &:hover {
    ${(p: Props) =>
      p.selected
        ? p.active
          ? css`
              border-color: ${lighten(
                0.05,
                p.theme.layerColorsActive[p.layerId]
              )};
              background-color: ${lighten(
                0.05,
                p.theme.layerColorsActive[p.layerId]
              )};
              box-shadow: 0 0 ${0.6 * scale}vw ${0.18 * scale}vw
                ${lighten(0.1, p.theme.layerColorsActive[p.layerId])};
            `
          : css`
              border-color: ${lighten(
                0.05,
                p.theme.layerColorsActive[p.layerId]
              )};
              box-shadow: 0 0 ${0.6 * scale}vw ${0.18 * scale}vw
                ${lighten(0.1, p.theme.layerColorsActive[p.layerId])};
            `
        : p.active
        ? css`
            border-color: ${lighten(0.05, p.theme.beatColors[p.layerId])};
            background-color: ${lighten(0.05, p.theme.beatColors[p.layerId])};
            box-shadow: 0 0 ${0.6 * scale}vw ${0.18 * scale}vw
              ${lighten(0.1, p.theme.beatColors[p.layerId])};
          `
        : css`
            border-color: ${lighten(0.05, p.theme.beatColors[p.layerId])};
            box-shadow: 0 0 ${0.6 * scale}vw ${0.18 * scale}vw
              ${lighten(0.1, p.theme.beatColors[p.layerId])};
          `}
      color: ${(p: Props) =>
      p.active ? p.theme.primary : lighten(0.3, p.theme.beatColors[p.layerId])};
    box-shadow: 0 0 ${0.6 * scale}vw ${0.18 * scale}vw
      ${(p: Props) => p.theme.beatColors[p.layerId]};
  }
`;

export const MUTE = styled.div`
  ${muteSolo}
  &::after {
    content: "M";
  }
`;

export const SOLO = styled.div`
  ${muteSolo}
  &::after {
    content: "S";
  }
`;
