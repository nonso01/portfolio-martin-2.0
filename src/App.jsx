import { useState, useEffect } from "react";

import Text from "./components/Text";
import Icon, { iconUrl } from "./components/Icon";
import Link from "./components/Link";
import Button, { w, log, d } from "./components/Button";
import Header from "./components/Header";
import Music from "./components/Music";
import Panel from "./components/Panel";
import About from "./components/About";

export const scrolledElement = {};
export const html = d.documentElement;
export const _htmlStyles = getComputed(html);

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
      <About />
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

export function getComputed(el) {
  let elt, computed;
  if (typeof el === "string") {
    elt = d.querySelector(el);
    computed = w.getComputedStyle(elt, "");
  } else {
    computed = w.getComputedStyle(el, "");
  }
  return computed;
}

export function getPercent(numerator, denominator, max = 100) {
  let compute = Math.floor((numerator / denominator) * 100);
  compute > 100 ? (compute = max) : compute;

  return compute;
}

export function dq(el = "html") {
  let elt = d.querySelector(el);
  return elt;
}

w.onscroll = (e) => {
  const adjusted_css_var = (() => {
    const variableList = {
      "--adjusted-top-pos-misc": `${
        getPercent(w.scrollY, parseInt(_htmlStyles.height)) * 4.2
      }%`,
      "--adjusted-top-pos-nav": `${w.scrollY - 19.5}px`,
    };

    if (w.scrollY > 150) {
      for (let _var in variableList)
        html.style.setProperty(_var, variableList[_var]);
    } else {
      for (let _var in variableList) html.style.removeProperty(_var);
    }
    log((e.timeStamp / 1e3))
  })();

  watchForScroll(scrolledElement);
};