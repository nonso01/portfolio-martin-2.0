import { useState } from "react";
import Text from "./Text";
import Icon, { iconUrl } from "./Icon";
import link from "./Link";
import Button, { log, d, w } from "./Button";

export default function Panel({ hide }) {
  const [state, setState] = useState(0);

  function handleInput(e) {
    e.stopPropagation();
    let _t = e.target,
      type = _t.type,
      val = _t.value;

    if (type) {
      switch (type) {
        case "radio":
          // log(_t.dataset.fontFamily);
          let _a = _t.dataset.fontFamily,
            _b,
            _c;

          if (_a === "KR") {
            _b = "Kanit";
            _c = "Rubik Distressed";
          } else if (_a === "OT") {
            _b = "monospace";
            _c = "sans-serif";
          } else if (_a === "TF") {
            _b = "Geogia";
            _c = "serif";
          }
          d.documentElement.style.setProperty("--font-text", _b);
          d.documentElement.style.setProperty("--font-title", _c);
          break;
        case "range":
          d.documentElement.style.setProperty("--adjust-font-size", `${val}`);
          log(val);
          break;
        default:
          void 0;
          break;
      }
    }
  }

  function handleDoubleClick() {}

  const radioInput = [
    { key: 0, font: "KR", fonttName: "Kanit - RubikD", checked: true },
    { key: 1, font: "OT", fonttName: "one - two", checked: false },
    { key: 2, font: "TF", fonttName: "tree - four", checked: false },
  ].map((data, i) => (
    <label key={data.key} className="fx-btn-row">
      <input
        type="radio"
        name="fonts"
        data-font-family={data.font}
        defaultChecked={data.checked}
      />

      <Text type={"span"} text={data.fonttName} />
    </label>
  ));

  const themePreference = [
    {
      key: 0,
      prim: "rgb(255,135,80)",
      sec: "#ffffffb3",
      txt: "#212121",
    },
    { key: 1, prim: "rgb(255,135,80)", sec: "#212121", txt: "#fff" },
    { key: 2, prim: "violet", sec: "purple", txt: "black" },
    { key: 3, prim: "indianred", sec: "black", txt: "black" },
  ].map((data) => (
    <div
      key={data.key}
      style={{
        "--secondary": data.sec,
        "--primary": data.prim,
        "--text": data.txt,
      }}
      data-theme-key={`theme-key${data.key}`}
    ></div>
  ));

  return (
    <div
      className={
        hide ? hide + " panel rad-15 fx-cn-col" : "panel rad-15 fx-cn-col"
      }
      data-martin-app="panel"
      onInput={handleInput}
      onDoubleClick={handleDoubleClick}
    >
      <div className="bar fx-btn-row">
        <Text type={"h2"} text="Settings" css="title dark mid" />
        <Icon url={iconUrl.settingIcon} data_x={"settings"} />
      </div>

      <div className="control rad-10 txt-cn">
        <div className="child one">
          <Text type={"h4"} text="Font" css="text cn txt" />
          <div className="fx-cn-row one">
            <Icon url={iconUrl.fontSizeIcon} />
            <input
              type="range"
              name="panel-range"
              min={"0.7"}
              max={"1.3"}
              step={"0.065"}
              defaultValue={"1"}
            />
          </div>
          <div className="fx-cn-col two">{radioInput}</div>
          <div className="fx-cn-col tree">
            <Text type={"span"} css="title dark sm" text="Quote" />
            <Text
              type={"p"}
              text="I walk around like Everything is fine but deep down. inside my shoe, my sock is sliding off :) ."
              css="text sm txt cn"
            />
          </div>
        </div>

        <div className="child two">
          <Text type={"h4"} text="Re Build" css="text cn txt" />
          <Text
            type={"code"}
            text={
              "/ ** this feature is under development, and will need to be well implemented :) **/"
            }
          />
        </div>

        <div className="child tree">
          <Text type={"h4"} text="Themes" css="text cn txt" />

          <div className="themes">{themePreference}</div>
        </div>
      </div>
    </div>
  );
}
