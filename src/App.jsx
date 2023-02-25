import { useState, useEffect } from "react";

import Text from "./components/Text";
import Icon, { iconUrl } from "./components/Icon";
import Link from "./components/Link";
import Button, { w, log, d } from "./components/Button";
import Header from "./components/Header";
import Music from "./components/Music";
import Panel from "./components/Panel";
// import About from "./components/About";

export const scrolledElement = {};

export default function App() {
  const [_width, _setWidth] = useState(() => w.innerWidth);

  function getWidth() {
    useEffect(() => {
      const i = setInterval(() => _setWidth(() => w.innerWidth), 0);
      return () => clearInterval(i);
    }, []);
    return _width;
  }

  return (
    <>
      <Header getWidth={getWidth()} />
    </>
  );
}

function watchForScroll(param) {
  for (let key in param) {
    const value = param[key],
      target = d.querySelector(key);

    if (isVisible(key)) target.classList.add(value);
    else target.classList?.remove(value);
  }
}

function isVisible(input = "") {
  const box = getRect(input);
  return box.t + box.h < 0;
}

function getRect(input = "") {
  const r = d.querySelector(input).getBoundingClientRect(),
    t = r.top,
    b = r.bottom,
    h = r.height;
  return { t, b, h };
}

w.onscroll = function (e) {
  watchForScroll(scrolledElement);
};

