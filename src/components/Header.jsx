import { useState, useEffect } from "react";

import Text from "./Text";
import Link from "./Link";
import Icon, { iconUrl } from "./Icon";
import Button, { w, log, d, screenSizes } from "./Button";
import Panel from "./Panel";
import Music from "./Music";

export default function Header({ getWidth }) {
  let [showMusicApp, setShowMusicApp] = useState(false),
    [showTime, setShowTime] = useState(false),
    [showPanel, setShowPanel] = useState(false),
    [showNav, setShowNav] = useState(false);

  const _s = d.createElement("span");
  _s.className = "text fixed";

  function handleMouseMove(e) {
    e.stopPropagation();

    let x = e.clientX,
      y = e.clientY,
      datasetX = e.target?.dataset.x;

    if (datasetX) {
      _s.style.setProperty("--x", `${x + 20}px`);
      _s.style.setProperty("--y", `${y / 1.1}px`);
      _s.textContent = datasetX;
      d.documentElement.append(_s);
    } else {
      try {
        d.documentElement.removeChild(_s);
      } catch (error) {}
    }
  }

  function handleMouseOut(e) {
    e.stopPropagation();
  }

  function handleClick(e) {
    e.stopPropagation();
    let datasetX = e.target?.dataset?.x;
    // dataMartin = e.target?.dataset.martinApp;

    if (datasetX) {
      switch (datasetX) {
        case "music":
          setShowMusicApp(!showMusicApp);
          break;
        case "settings":
          setShowPanel(!showPanel);
          break;
        case "menu":
          setShowNav(!showNav);
          break;
      }
    } else if (!datasetX) {
      showNav ? setShowNav(!showNav) : void 0;
    }

    if (true) {
      try {
        d.querySelectorAll(".text.fixed").forEach((s) =>
          d.documentElement.removeChild(s)
        );
      } catch (err) {
        log(err.toString());
      }
    }
  }

  if (getWidth >= screenSizes.medium && showNav === true) setShowNav(!showNav);
  /**
   * testing this logic to avoid unwanted behavior
   */

  return (
    <div
      className="hd rad-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
      onClick={handleClick}
      data-martin-app="header"
    >
      <div className="navigator rad-5">
        <div className="logo">
          <Icon url={iconUrl.myIcon} data_x={"martin"} />
        </div>

        {getWidth <= screenSizes.medium ? (
          <NavIcon showNav={showNav} />
        ) : showNav ? (
          <NavIcon />
        ) : getWidth > screenSizes.medium ? (
          <NavIcon showNav={true} />
        ) : null}

        {getWidth <= screenSizes.medium ? (
          <div>
            <Icon
              url={showNav ? iconUrl.crossIcon : iconUrl.menuIcon}
              data_x={"menu"}
            />
          </div>
        ) : null}
      </div>

      <div className="introduction rad-5">
        <Text
          type={"h1"}
          text="Hello guys, Am MARTIN."
          css="title bigest txt-cn"
        />
        <Text
          type={"p"}
          css="text txt-cn"
          text="Hey, thanks for clicking the link that redirected you to my site, Well am another Web addict, am talking of Web 4.0 xD, if you want to know who i am, what i do, why i still use facebook and  why i should be your team mate, or that missing dev you've been looking for! dude just browse my site :) ."
        />
      </div>

      {showMusicApp ? <Music /> : <Music hide={"hide important"} />}
      {showPanel ? <Panel /> : <Panel hide={"hide important"} />}
    </div>
  );
}

function NavIcon({ showNav }) {
  return (
    <div className={showNav ? "nav" : "hide important"}>
      <div className="link-icons">
        <Icon url={iconUrl.homeIcon} data_x={"home"} />
        <Icon url={iconUrl.avatarIcon} data_x={"meee!"} />
        <Icon url={iconUrl.callIcon} data_x={"say hi!"} />
        <Icon url={iconUrl.timeIcon} data_x={"time"} />
        <Icon url={iconUrl.musicIcon} data_x={"music"} />
      </div>

      <div className="setting-icons">
        <Icon url={iconUrl.settingIcon} data_x={"settings"} />
        <Icon url={iconUrl.sunIcon} data_x={"light theme"} />
        <Icon url={iconUrl.moonIcon} data_x={"dark theme"} />
      </div>
    </div>
  );
}
