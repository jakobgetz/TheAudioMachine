import styled, {css} from "styled-components";

import Theme from "../../../themes";

import {borderSize, scale} from "./TheAudioMachine";

export const SETTINGS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  float: right;
  padding: ${3 * scale}vw 0 0 0;
`;

export const GLOBAL_SETTINGS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${10 * scale}vw;
`;

export const LAYER_SETTINGS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${18 * scale}vw;
`;

interface Props {
    theme: Theme;
    layerId: number;
    slider: number;
}

export const SLIDER = styled.div`
  pointer-events: all;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  input {
    float: right;
    -webkit-appearance: none;
    width: ${18 * scale}vw;
    height: ${3.5 * scale}vw;
    background: ${(p: Props) => p.theme.primary};
    outline: none;
    border-radius: 100vw;
    border: ${borderSize * scale}vw solid
      ${(p: Props) =>
    p.layerId === -1 ? p.theme.nav : p.theme.layerColorsActive[p.layerId]};
    pointer-events: all;
    transition-duration: 0.25s;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: ${2 * scale}vw;
      height: ${2 * scale}vw;
      background-color: ${(p: Props) =>
    p.layerId === -1 ? p.theme.nav : p.theme.layerColorsActive[p.layerId]};
      border-radius: 100vh;
      cursor: pointer;
      pointer-events: all;
    }
    &::-moz-range-thumb {
       appearance: none;
      width: ${2 * scale}vw;
      height: ${2 * scale}vw;
      background-color: ${(p: Props) =>
    p.layerId === -1 ? p.theme.nav : p.theme.layerColorsActive[p.layerId]};
      border-radius: 100vh;
      cursor: pointer;
      pointer-events: all;
    }
    
    &:hover {
    box-shadow: 0 0 .9vh .5vh #998f84;
    }
  }
  color: ${(p: Props) =>
    p.layerId === -1 ? p.theme.nav : p.theme.layerColorsActive[p.layerId]};
  font-size: ${1.5 * scale}vw;

  &::before {
    ${(p: Props) => {
    switch (p.slider) {
        case 0:
            return css`
            content: "\f026";
          `;
        case 1:
            return css`
            content: "\f004";
          `;
        case 2:
            return css`
            content: "\f026";
          `;
        case 3:
            return css`
            content: "\f359";
          `;
    }
}};
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: relative;
    left: ${2.4 * scale}vw;
    pointer-events: none;
  }
  
  &::after {
    ${(p: Props) => {
    switch (p.slider) {
        case 0:
            return css`
            content: "\f028";
          `;
        case 1:
            return css`
            content: "\f21e";
          `;
        case 2:
            return css`
            content: "\f028";
          `;
        case 3:
            return css`
            content: "\f35a";
          `;
    }

}};
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    right: ${3.8 * scale}vw;
    pointer-events: none;
  }
`;

interface UploadProps {
    layerId: number;
    theme: Theme;
}

export const UPLOAD_SAMPLE = styled.div`
  pointer-events: all;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  label {
    -webkit-appearance: none;
    width: ${18 * scale}vw;
    height: ${3.5 * scale}vw;
    background: ${(p: UploadProps) => p.theme.primary};
    color: ${(p: UploadProps) => p.theme.layerColorsActive[p.layerId]};
    border-radius: 100vw;
    border: ${borderSize * scale}vw solid
      ${(p: UploadProps) =>
    p.layerId === -1 ? p.theme.nav : p.theme.layerColorsActive[p.layerId]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    &::before {
      content: "\f093";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: ${2 * scale}vw;
    }
  }
`;
