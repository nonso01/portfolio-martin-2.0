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

    this.state = {
      expandText: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  componentDidMount() {
    // gsap.to(".desc", {
    //   x: 250,
    //   repeat: 10,
    //   yoyo: true,
    //   delay: 3,
    // });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="about" data-martin-app="about" onClick={this.handleClick}>
        <div className="nonso-image">
          <img src={nonso01Image} alt="nonso01" loading="lazy" />
        </div>
        <Text type={"h2"} css="title big txt cn" text="~$ whoami" />

        <div className="desc rad-10">
          <div className="words rad-10"></div>
          <div className="tech-stack rad-5"></div>
        </div>
      </div>
    );
  }
}
