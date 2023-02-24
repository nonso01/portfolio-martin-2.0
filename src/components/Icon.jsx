import crossIcon from "../../src/assets/icons/cross-icon.svg";
import arrowIcon from "../../src/assets/icons/arrow-icon.svg";
import smallArrowIcon from "../../src/assets/icons/small-arrow-icon.svg";
import homeIcon from "../../src/assets/icons/home-icon.svg";
import menuIcon from "../../src/assets/icons/menu-icon.svg";
import listIcon from "../../src/assets/icons/list-icon.svg";
import avatarIcon from "../../src/assets/icons/avatar-icon.svg";
import linkIcon from "../../src/assets/icons/link-icon.svg";
import settingIcon from "../../src/assets/icons/setting-icon.svg";
import sunIcon from "../../src/assets/icons/sun-icon.svg";
import moonIcon from "../../src/assets/icons/moon-icon.svg";
import callIcon from "../../src/assets/icons/call-icon.svg";
import timeIcon from "../../src/assets/icons/time-icon.svg";
import musicIcon from "../../src/assets/icons/music-icon.svg";
import musicNextIcon from "../../src/assets/icons/music-next-icon.svg";
import musicStopIcon from "../../src/assets/icons/music-stop-icon.svg";
import musicStartIcon from "../../src/assets/icons/music-start-icon.svg";
import musicHeartIcon from "../../src/assets/icons/music-heart-icon.svg";
import musicShuffleIcon from "../../src/assets/icons/music-shuffle-icon.svg";
import musicNoShuffleIcon from "../../src/assets/icons/music-no-shuffle-icon.svg";
import fontSizeIcon from "../../src/assets/icons/font-size-icon.svg";
import volumeIcon from "../../src/assets/icons/volume-icon.svg";

import myIcon from "../../src/assets/logos/logo-martin.svg";
import { useState } from "react";

export const iconUrl = {
  crossIcon,
  arrowIcon,
  smallArrowIcon,
  homeIcon,
  menuIcon,
  listIcon,
  avatarIcon,
  linkIcon,
  settingIcon,
  sunIcon,
  moonIcon,
  callIcon,
  timeIcon,
  musicIcon,
  musicNextIcon,
  musicStartIcon,
  musicStopIcon,
  musicHeartIcon,
  musicShuffleIcon,
  musicNoShuffleIcon,
  fontSizeIcon,
  volumeIcon,
  myIcon,
};

export default function Icon({ url, key, data_x, alt = "an icon" }) {
  if (url)
    return (
      <i className="icon" key={key}>
        <img src={url} alt={alt} data-x={data_x} />
      </i>
    );
  return null;
}

export function HeartIcon() {
  const [like, setLike] = useState(false);

  function handleLikeClick() {
    setLike(!like);
  }

  return (
    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      width="40"
      height="40"
      viewBox="0 0 13.229166 13.229167"
      version="1.1"
      id="svg5724"
      inkscape:version="0.92.1 r15371"
      sodipodi:docname="music-heart-icon.svg"
      data-music-app-like={like.toString()}
      onClick={handleLikeClick}
    >
      <g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(0,-283.77081)"
      >
        <path
          style={{
            fill: like ? "#ff5a5a" : "none",
            stroke: like ? "#ff5a5a" : "#212121",
            strokeWidth: "0.72916664",
            strokeLinejoin: "round",
            strokeMiterlimit: "4",
            strokeDasharray: "none",
            strokeOpacity: "1",
            transition: "all .1s ease",
          }}
          d="m 6.1327287,295.2925 c -1.326989,-1.10527 -2.128094,-1.89141 -2.780045,-2.7281 -0.7728805,-0.99189 -1.3443364,-2.0262 -1.5888657,-2.87576 -0.3052439,-1.0605 -0.1629169,-2.12562 0.3999307,-2.99293 0.3406964,-0.52499 0.7882024,-0.84365 1.42992,-1.01822 0.222719,-0.0606 0.84516,-0.0605 1.07487,2.4e-4 0.483848,0.12783 0.930248,0.42415 1.560568,1.0359 0.289171,0.28066 0.311907,0.29765 0.348852,0.26071 0.03694,-0.0369 0.04212,-0.0369 0.07941,3.7e-4 0.03744,0.0374 0.05523,0.025 0.289388,-0.20218 0.950941,-0.92261 1.466902,-1.18186 2.2761693,-1.1437 0.619332,0.0292 1.141988,0.2631 1.555778,0.69621 0.299433,0.31341 0.515519,0.68385 0.669665,1.14802 0.405537,1.22116 0.164141,2.42278 -0.805096,4.00759 -0.6451867,1.05496 -1.501428,2.04132 -2.6679373,3.07339 -0.350436,0.31004 -1.334362,1.1316 -1.355251,1.1316 -0.0084,0 -0.227757,-0.17691 -0.487358,-0.39314 z"
          id="path6311"
          inkscape:connector-curvature="0"
        />
      </g>
    </svg>
  );
}
