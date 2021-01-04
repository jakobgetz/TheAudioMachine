import styled from "styled-components";

export const scale = 1;
export const borderSize = 0.2;

export const THE_AUDIO_MACHINE = styled.div`
  position: relative;
  display: grid;
  block-size: border-box;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 5fr 1fr;
  height: ${((100 * 9) / 16) * scale}vw;
  width: ${100 * scale}vw;
  background-color: ${(p) => p.theme.primary};
  border: ${0.3 * scale}vw solid ${(p) => p.theme.accent};
  border-radius: ${2 * scale}vw;
  padding: ${2.5 * scale}vw ${3 * scale}vw ${2.5 * scale}vw ${3 * scale}vw;
`;
