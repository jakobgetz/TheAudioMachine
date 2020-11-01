import React from "react";
import {useDispatch} from "react-redux";

import {toggleAbout} from "../../../redux";

import {
    CLOSE_TEAM,
    TEAM,
    TEAM_CONTENT,
    TEAM_DEPARTMENT,
    TEAM_HEADING,
    TEAM_IMAGE,
    TEAM_IMAGE_CROPPER,
    TEAM_LINK,
    TEAM_NAME,
    TEAM_TEXT,
} from "../styled";

export const Team = () => {
    const dispatch = useDispatch();

    return (
        <TEAM>
            <CLOSE_TEAM onClick={() => dispatch(toggleAbout())}/>
            <TEAM_CONTENT>
                <TEAM_HEADING>TEAM</TEAM_HEADING>
                <TEAM_IMAGE_CROPPER>
                    <TEAM_IMAGE
                        src="/assets/images/team/pascal_escher_portrait.jpg"
                        alt="Pascal Escher"
                        push={0}
                    />
                </TEAM_IMAGE_CROPPER>
                <TEAM_TEXT>
                    <TEAM_NAME>Pascal Escher</TEAM_NAME>
                    <TEAM_DEPARTMENT>Coding</TEAM_DEPARTMENT>
                    <TEAM_LINK>
                        <a href={"https://www.xing.com/profile/Pascal_Escher"} title="Xing-Profil">
                            <i className="fab fa-xing"/></a>
                        <a href={"https://handicraft-band.de/"} title="Handicraft-Band">
                            <i className="fas fa-music"/></a>
                    </TEAM_LINK>
                </TEAM_TEXT>
                <TEAM_IMAGE_CROPPER>
                    <TEAM_IMAGE
                        src="/assets/images/team/unbekannt_portrait.jpg"
                        alt="Joris Kaufmann"
                        push={0}
                    />
                </TEAM_IMAGE_CROPPER>
                <TEAM_TEXT>
                    <TEAM_NAME>Joris Kaufmann</TEAM_NAME>
                    <TEAM_DEPARTMENT>Coding</TEAM_DEPARTMENT>
                </TEAM_TEXT>
                <TEAM_IMAGE_CROPPER>
                    <TEAM_IMAGE
                        src="/assets/images/team/steffen_marquardt_portrait.jpg"
                        alt="Steffen Marquardt"
                        push={4}
                    />
                </TEAM_IMAGE_CROPPER>
                <TEAM_TEXT>
                    <TEAM_NAME>Steffen Marquardt</TEAM_NAME>
                    <TEAM_DEPARTMENT>Coding</TEAM_DEPARTMENT>
                    <TEAM_LINK>
                        <a href={"http://thesample.life/"}>
                            <i className="fas fa-headphones"/></a>
                        <a href={"https://www.instagram.com/thesamplelifeofficial/"}>
                            <i className="fab fa-instagram"/></a>
                    </TEAM_LINK>
                </TEAM_TEXT>
                <TEAM_IMAGE_CROPPER>
                    <TEAM_IMAGE
                        src="/assets/images/team/jakob_getz_portrait.jpg"
                        alt="Jakob Getz"
                        push={0}
                    />
                </TEAM_IMAGE_CROPPER>
                <TEAM_TEXT>
                    <TEAM_NAME>Jakob Getz</TEAM_NAME>
                    <TEAM_DEPARTMENT>Coding</TEAM_DEPARTMENT>
                </TEAM_TEXT>
                <TEAM_IMAGE_CROPPER>
                    <TEAM_IMAGE
                        src="/assets/images/team/unbekannt_portrait.jpg"
                        alt="Umut Cocak"
                        push={0}
                    />
                </TEAM_IMAGE_CROPPER>
                <TEAM_TEXT>
                    <TEAM_NAME>Umut Cocak</TEAM_NAME>
                    <TEAM_DEPARTMENT>UI</TEAM_DEPARTMENT>
                    <TEAM_LINK>
                        <a href={"http://thesample.life/"}>
                            <i className="fas fa-headphones"/></a>
                        <a href={"https://www.instagram.com/thesamplelifeofficial/"}>
                            <i className="fab fa-instagram"/></a>
                    </TEAM_LINK>
                </TEAM_TEXT>
                <TEAM_IMAGE_CROPPER>
                    <TEAM_IMAGE
                        src="/assets/images/team/unbekannt_portrait.jpg"
                        alt="Benedikt Ludwig"
                        push={0}
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
