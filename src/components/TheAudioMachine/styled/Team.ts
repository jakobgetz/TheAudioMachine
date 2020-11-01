import styled from "styled-components";

import Theme from "../../../themes";

import {scale} from "./TheAudioMachine";

export const TEAM = styled.div`
  position: absolute;
  box-sizing: border-box;
  background-color: ${(p) => p.theme.primaryLight};
  width: 80%;
  height: 90%;
  left: 10%;
  top: 5%;
  color: ${(p) => p.theme.nav};
  font-size: ${2 * scale}vw;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 0 0 0;
`;

export const CLOSE_TEAM = styled.div`
  display: block;
  text-align: right;

  &::before {
    content: "\f410";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: ${(p) => p.theme.primary};
    position: relative;
    top: ${0.5 * scale}vw;
    right: ${0.5 * scale}vw;
    font-size: ${3 * scale}vw;
  }

  &:hover::before {
    color: ${(p) => p.theme.accent};
  }
`;

export const TEAM_CONTENT = styled.div`
  margin: 0 4% 5% 4%;
  display: grid;
  grid-template-columns: ${12.5 * scale}vw 1fr ${12.5 * scale}vw 1fr;
  grid-gap: ${2 * scale}vw;
`;

export const TEAM_HEADING = styled.div`
  grid-column: 1 / -1;
  font-size: ${3 * scale}vw;
  margin: ${scale}vw ${3 * scale}vw ${scale}vw ${2 * scale}vw;
`;

export const TEAM_IMAGE_CROPPER = styled.div`
  height: ${15 * scale}vw;
  width: ${15 * scale}vw;
  overflow: hidden;
  display: inline-block;
  border-radius: 50%;
`;

interface ImageProps {
    theme: Theme;
    push: number;
}

export const TEAM_IMAGE = styled.img`
  height: ${15 * scale}vw;
  position: relative;
  right: ${(p: ImageProps) => p.push * scale}vw;
`;

export const TEAM_TEXT = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 2vw;
`;

export const TEAM_NAME = styled.div`
  margin-top: auto;
`;

export const TEAM_DEPARTMENT = styled.div`
  font-size: ${1.5 * scale}vw;
  margin: ${scale}vw 0 ${scale}vw 0;
`;

export const TEAM_LINK = styled.div`

  i {
    font-size: ${1.5 * scale}vw;
    color: ${(p) => p.theme.nav};
    margin-right: 1vw;
    font-weight: 900;
    position: relative;
    
    &:hover::before {
    color: ${(p) => p.theme.primary};
    }
  } 
`;
