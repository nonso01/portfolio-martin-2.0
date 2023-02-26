import { Component } from "react";
import Button, { log } from "./Button";
import Text from "./Text";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact" data-martin-app="contact">
        <form action="" method="POST"></form>
      </div>
    );
  }
}
