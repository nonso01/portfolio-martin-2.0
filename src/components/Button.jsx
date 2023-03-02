export const [w, d, log] = [globalThis ?? window, document, console.log];
export const screenSizes = {
  Xlarge: 1400,
  large: 1200,
  medium: 992,
  small: 768,
};

export default function Button({ text = "button", css, clickEvent }) {
  return (
    <button className={css ? css : "btn"} onClick={clickEvent}>
      {text}
    </button>
  );
}


