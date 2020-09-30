import React from "react";
import { useDispatch } from "react-redux";

import { toggleAbout } from "../../../redux";

import {
  TEAM,
  CLOSE_TEAM,
  TEAM_CONTENT,
  TEAM_HEADING,
  TEAM_IMAGE_CROPPER,
  TEAM_TEXT,
  TEAM_NAME,
  TEAM_DEPARTMENT,
  TEAM_IMAGE,
} from "../styled";

export const Team = () => {
  const dispatch = useDispatch();

  return (
    <TEAM>
      <CLOSE_TEAM onClick={() => dispatch(toggleAbout())} />
      <TEAM_CONTENT>
        <TEAM_HEADING>TEAM</TEAM_HEADING>
        <TEAM_IMAGE_CROPPER>
          <TEAM_IMAGE
            src="/assets/images/team/pascal_escher_portrait.jpg"
            alt="Pascal Escher"
          />
        </TEAM_IMAGE_CROPPER>
        <TEAM_TEXT>
          <TEAM_NAME>Pascal Escher</TEAM_NAME>
          <TEAM_DEPARTMENT>Coding</TEAM_DEPARTMENT>
        </TEAM_TEXT>
        <TEAM_IMAGE_CROPPER>
          <TEAM_IMAGE
            src="/assets/images/team/unbekannt_portrait.jpeg"
            alt="Steffen Marquardt"
          />
        </TEAM_IMAGE_CROPPER>
        <TEAM_TEXT>
          <TEAM_NAME>Joris Kaufmann</TEAM_NAME>
          <TEAM_DEPARTMENT>Coding</TEAM_DEPARTMENT>
        </TEAM_TEXT>
        <TEAM_IMAGE_CROPPER>
          <TEAM_IMAGE
            src="/assets/images/team/unbekannt_portrait.jpeg"
            alt="Joris Kaufmann"
          />
        </TEAM_IMAGE_CROPPER>
        <TEAM_TEXT>
          <TEAM_NAME>Steffen Marquardt</TEAM_NAME>
          <TEAM_DEPARTMENT>Coding</TEAM_DEPARTMENT>
        </TEAM_TEXT>
        <TEAM_IMAGE_CROPPER>
          <TEAM_IMAGE
            src="/assets/images/team/jakob_getz_portrait.jpeg"
            alt="Jakob Getz"
          />
        </TEAM_IMAGE_CROPPER>
        <TEAM_TEXT>
          <TEAM_NAME>Jakob Getz</TEAM_NAME>
          <TEAM_DEPARTMENT>Coding</TEAM_DEPARTMENT>
        </TEAM_TEXT>
        <TEAM_IMAGE_CROPPER>
          <TEAM_IMAGE
            src="/assets/images/team/unbekannt_portrait.jpeg"
            alt="Umut Cocak"
          />
        </TEAM_IMAGE_CROPPER>
        <TEAM_TEXT>
          <TEAM_NAME>Umut Cocak</TEAM_NAME>
          <TEAM_DEPARTMENT>UI</TEAM_DEPARTMENT>
        </TEAM_TEXT>
        <TEAM_IMAGE_CROPPER>
          <TEAM_IMAGE
            src="/assets/images/team/unbekannt_portrait.jpeg"
            alt="Benedikt Ludwig"
          />
        </TEAM_IMAGE_CROPPER>
        <TEAM_TEXT>
          <TEAM_NAME>Benedikt Ludwig</TEAM_NAME>
          <TEAM_DEPARTMENT>Sounddesign</TEAM_DEPARTMENT>
        </TEAM_TEXT>
      </TEAM_CONTENT>
    </TEAM>
  );
};
