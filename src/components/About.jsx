import { useState, useEffect, Component } from "react";
import Text from "./Text";
import Button, { log, d } from "./Button";
import Icon, { iconUrl } from "./Icon";
import Link from "./Link";

// import { gsap } from "gsap";
import nonso01Image from "../../src/assets/images/nonso01-image.png";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandText: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleResumeClick = this.handleResumeClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleClick() {}

  handleResumeClick() {
    log("resume");
  }
  handleMouseMove() {}
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
          <div className="whoami rad-10">
            <Text
              type={"p"}
              css="text txt cn"
              text={`Alright, my name is Chukwunonso Martin and i'm frontend dev just like the majority of you, with dreams of becoming a Medical Doctor, while working in an IT related field. Currently i have been working with a handfull of technologies , and as well learning each of them carefully , till am able to create satisfying softwares from it, Just like #EVAN YU. But before then let me focus on what's in front,  by building things out of the box and  doing things i luv. I have  #3 years of experience in frontend development working extensively With any thing related to  #JAVASCRIPT, when i say  (anything)  i mean the onens on that image. Along side Shell scripting , yeah am into linux stuff too, not only that i have been interested in C,  nothing more pleasant than understanding the components of a machine, hope i won't be savaged by pointers and uncountable data types.`}
            />

            <div className="desc-info">
              <ul>
                <li>Age: {20}</li>
                <li>
                  Nationality:
                  <Link url={"https://wikipedia..."} data="Nigerian" />
                </li>
                <li>
                  Hobby: <Link url={"https://"} data="Watching Animes" />
                </li>
              </ul>
            </div>

            <div className="fx-cn-row" style={{ width: "100%" }}>
              <Text type={"span"} css={null} text="Download my resume" />
              <Button text={<Icon url={iconUrl.downloadIcon}/>} clickEvent={this.handleResumeClick} />
            </div>
          </div>

          <div className="techs"></div>
        </div>
      </div>
    );
  }
}
