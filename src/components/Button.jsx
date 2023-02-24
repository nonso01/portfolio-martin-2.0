export const [w, d, log] = [globalThis ?? window, document, console.log];
export const screenSizes = {
  Xlarge: 1400,
  large: 1200,
  medium: 992,
  small: 768,
};

function Button({ text = "button", css = "btn", clickEvent }) {
  return (
    <button className={css} onClick={clickEvent}>
      {text}
    </button>
  );
}

export default Button;
