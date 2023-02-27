import { useState, useEffect, Component } from "react";
import Text from "./Text";
import Button, { log, d } from "./Button";
import Icon, { iconUrl } from "./Icon";
import Link from "./Link";


export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: "hello world",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ a: "hello react" });
  }

  componentDidMount() {
    // log(gsap)
  }
  render() {
    return (
      <div
        className="about"
        data-martin-app="about"
        onClick={this.handleClick}
      >
        <Text type={'h2'} css="title big" text="What about me ?"/>
      </div>
    );
  }
}
