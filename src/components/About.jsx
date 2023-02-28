import { useState, useEffect, Component } from "react";
import Text from "./Text";
import Button, { log, d } from "./Button";
import Icon, { iconUrl } from "./Icon";
import Link from "./Link";

import { gsap } from "gsap";
import nonso01Image from "../../src/assets/images/nonso01-image.png";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  componentDidMount() {
    gsap.to(".desc", {
      x: 200,
      delay: 3
    });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="about" data-martin-app="about" onClick={this.handleClick}>
        <div className="nonso-image">
          <img src={nonso01Image} alt="nonso01" loading="lazy" />
        </div>
        <div className="desc">
          <Text type={"h2"} css="title big txt-cn" text="who am i ?" />
        </div>
      </div>
    );
  }
}
