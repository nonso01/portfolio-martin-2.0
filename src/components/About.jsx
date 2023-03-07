import { useState, useEffect, Component } from "react";
import Text from "./Text";
import Button, { log, d } from "./Button";
import Icon, { iconUrl, DownloadIcon } from "./Icon";
import Link from "./Link";

// import { gsap } from "gsap";
import nonso01Image from "../../src/assets/images/nonso01-image.png";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandText: false,
      downloading: false,
      downloaded: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleResumeClick = this.handleResumeClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleClick() {}

  handleResumeClick(e) {
    e.preventDefault();
    this.setState({ downloading: !this.state.downloading });

    const waitToCancel = setTimeout(() => {
      if (this.state.downloading) {
        this.setState({ downloading: false, downloaded: true });
      }
    }, 7500);
    log("resume!!");
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
        <Text type={"h2"} css="title big txt cn" text="~$ echo" />

        <div className="desc rad-10">
          <div className="whoami rad-10">
            <Text
              type={"p"}
              css="text txt cn"
              text={
                "Whoami .., Well am Chukwunonso Martin, a young scientist from Africa, who is obsessed with technology, and yet wants to be involved in health facilities. Yeah i just want to be helpful to my self and my env. As of this writting i have been working , with a handful of web technologies, and a great portion of it involves (JAVASCRIPT) and  it has been the case for the past 3 years, but at the end i had to be good at Solving problems, and implementing better logics. Am a physics tutor and health student by day, and a dev by night, i am into freelancing..., but it doesn't really feel like what i need. I need a team where i can grow, a team where i can collaborate with senior devs, a place where i can really put in all i have aquired. Waiting for your phone call :)"
              }
            />

            <div className="desc-info">
              <ul>
                <li>Age: {20}</li>
                <li>
                  Nationality:
                  <Link url={"https://wikipedia..."} data="Nigerian" />
                </li>
                <li>
                  Hobby: <Link url={"https://threejs.org"} data="2D and 3D graphics" />
                </li>
              </ul>
            </div>

            <div className="fx-cn-row" style={{ width: "100%" }}>
              <Text
                type={"span"}
                css={null}
                text={
                  this.state.downloading
                    ? "Downloading..."
                    : this.state.downloaded
                    ? "Downloaded"
                    : "Download my resume"
                }
              />
              {this.state.downloaded ? (
                <Icon url={iconUrl.checkIcon} />
              ) : (
                <Button
                  text={<DownloadIcon download={this.state.downloading} />}
                  clickEvent={this.handleResumeClick}
                />
              )}
            </div>
          </div>

          <div className="techs"></div>
        </div>
      </div>
    );
  }
}
