import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { GlobalHotKeys } from "react-hotkeys";

import { RootState } from "../../redux";

import { keyMap, handleKeyboardInput, initPresets, loadSamples } from "./logic";

import {
  TopBar,
  SampleMenu,
  Sequence,
  Settings,
  Team,
  SavePreset,
} from "./components";

import { THE_AUDIO_MACHINE, THE_SAMPLE_LIVE } from "./styled";

const TheAudioMachine = () => {
  const { selectedPresetName } = useSelector(
    (state: RootState) => state.tam.presets
  );
  const { about, preset } = useSelector(
    (state: RootState) => state.tam.graphics
  );

  useEffect(() => {
    initPresets();
  }, []);

  useEffect(() => {
    loadSamples();
  }, [selectedPresetName]);

  return (
    <GlobalHotKeys keyMap={keyMap} handlers={handleKeyboardInput}>
      <THE_AUDIO_MACHINE>
        <TopBar />
        <SampleMenu />
        <Sequence />
        <Settings />
        <THE_SAMPLE_LIVE />
        {about && <Team />}
        {preset && <SavePreset />}
      </THE_AUDIO_MACHINE>
    </GlobalHotKeys>
  );
};

export default TheAudioMachine;
