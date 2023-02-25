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
          log(_t.dataset.fontFamily);
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
    { key: 0, font: "Kanit - RubikD", checked: true },
    { key: 1, font: "one - two", checked: false },
    { key: 2, font: "tree - four", checked: false },
  ].map((data, i) => (
    <label key={data.key} className="fx-btn-row">
      <input
        type="radio"
        name="fonts"
        data-font-family={data.font}
        defaultChecked={data.checked}
      />

      <Text type={"span"} text={data.font} />
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
          <Text type={"h4"} text="Font" />
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
              css="text sm"
            />
          </div>
        </div>

        <div className="child two">
          <Text type={"h4"} text="Re Build" />
          <Text
            type={"code"}
            text={
              "UnexpectedError:" +
              "\n" +
              "{ the dev is unable" +
              "\n" +
              "to implement this" +
              "\n" +
              "feature for the" +
              "\n" +
              "mean time :( }"
            }
          />
        </div>

        <div className="child tree">
          <Text type={"h4"} text="Themes" />

          <div className="themes">{themePreference}</div>
        </div>
      </div>
    </div>
  );
}
