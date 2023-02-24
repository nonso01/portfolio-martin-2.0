import { log } from "./Button";

export default function Text({
  text = "Mom thanks for everything",
  css = "text",
  type,
  key,
  id,
  name,
  placeholder,
}) {
  const textType = {
    p: (
      <p className={css} key={key}>
        {text}
      </p>
    ),
    span: (
      <span className={css} key={key}>
        {text}
      </span>
    ),
    h1: (
      <h1 className={css} key={key}>
        {text}
      </h1>
    ),
    h2: (
      <h2 className={css} key={key}>
        {text}
      </h2>
    ),
    h3: (
      <h3 className={css} key={key}>
        {text}
      </h3>
    ),
    h4: (
      <h4 className={css} key={key}>
        {text}
      </h4>
    ),
    h5: (
      <h5 className={css} key={key}>
        {text}
      </h5>
    ),
    mark: (
      <mark className="mark text" key={key}>
        {text}
      </mark>
    ),
    input: (
      <input
        type="text"
        className={"input " + css}
        name={name}
        key={key}
        id={id}
        placeholder={placeholder}
      />
    ),
    textarea: (
      <textarea
        className={"textarea " + css}
        key={key}
        id={id}
        name={name}
      ></textarea>
    ),
    code: (
      <code className="code" key={key}>
        {text}
      </code>
    ),
  };

  if (type) {
    for (let t in textType) {
      if (t === type) {
        return textType[t];
      }
    }
  }

  return null;
}
