import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, select, setMute, setSolo, Settings } from "../../../redux";

import { SAMPLE_MENU, SIDENAV_BUTTON, MUTE_SOLO, MUTE, SOLO } from "../styled";

export const SampleMenu = () => {

  const { layers } = useSelector(
    (state: RootState) => state.tam.settings as Settings
  );
  const { selected } = useSelector((state: RootState) => state.tam.graphics);
  const dispatch = useDispatch();

  return (
      <SAMPLE_MENU>
        {layers.map((layer) => (
          <SIDENAV_BUTTON
            key={layer.id}
            onClick={() => dispatch(select(layer.id))}
            layerId={layer.id}
            instrument={layer.name}
            selected={selected[layer.id]}
          >
            <MUTE_SOLO>
              <MUTE
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setMute(layer.id));
                }}
                layerId={layer.id}
                active={layer.isMute}
                selected={selected[layer.id]}
              />
              <SOLO
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(setSolo(layer.id));
                }}
                layerId={layer.id}
                active={layer.isSolo}
                selected={selected[layer.id]}
              />
            </MUTE_SOLO>
          </SIDENAV_BUTTON>
        ))}
      </SAMPLE_MENU>
    
  );
};
