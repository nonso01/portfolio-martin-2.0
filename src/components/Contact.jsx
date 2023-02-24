import Button, { log } from "./Button";
import Text from "./Text";

export default function Contact({ action }) {
  return (
    <div className="contact">
      <form
        action={action}
        method="POST"
        data-martin-app="contact"
        onSubmit={userIsSubmiting}
      ></form>
    </div>
  );
}

function userIsSubmiting() {}
