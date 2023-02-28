/*
 your going to work with a music API
 you will be required to learn and know how
 to use an API! good luck and give good Vibes.

 audio graph concept  test for browser compatibility
 web Audio API
 - useEffect is the way to go for fetching data
 - now takle the issues on audioContext.createMediaElementSource
 */

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Icon, { iconUrl, HeartIcon } from "./Icon";
import Button, { d, log, w } from "./Button";
import Text from "./Text";

import illustrationMusicBar from "../../src/assets/images/illustration-music-bar.png";
import theMusic from "../../jim_yosef_eclipse_ncs_release_mp3_58337.mp3";

const audioEl = d.createElement("audio"),
  audioContext = new AudioContext(),
  gainNode = audioContext.createGain(),
  track = audioContext.createMediaElementSource(audioEl);

export default function Music({ hide }) {
  const [musicTrack, setMusicTrack] = useState(() => theMusic);
  /**
   experimental fetching
   
 let [data, setData] = useState(null),
   [loading, setLoading] = useState(true),
   [error, setError] = useState(null);

  /**
     * the actual fetch
     * 
     * const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e74a31b576mshde4a9f9d59f11f2p1f887fjsnaba3fef7c71b',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
     */

  const musicLayoutEffect = useLayoutEffect(() => {
    audioEl.src = musicTrack;
    track.connect(gainNode).connect(audioContext.destination);
  }, []);

  let [shuffle, setShuffle] = useState(false),
    [play, setPlay] = useState(false),
    [showMenu, setShowMenu] = useState(false),
    [prevNext, setPrevNext] = useState(0);

  function handleClick(e) {
    e.stopPropagation();

    if (e.target.dataset.x) {
      switch (e.target?.alt) {
        case "start":
          setPlay(!play);
          audioContext.state === "suspended" ? audioContext.resume() : void 0;
          play ? audioEl.pause() : audioEl.play();
          break;
        case "shuffling":
          setShuffle(!shuffle);
          break;
        case "previous":
          setPrevNext(prevNext <= 0 ? (prevNext = 0) : --prevNext);
          log(prevNext);
          break;
        case "next":
          setPrevNext(++prevNext);
          log(prevNext);
          break;
        case "menu":
          setShowMenu(!showMenu);
          break;
        default:
          void 0;
          break;
      }
    }
  }

  function handleInput(e) {
    e.stopPropagation();
    const _t = e.target,
      val = _t.value,
      type = _t.type;

    if (type) {
      switch (type) {
        case "range":
          gainNode.gain.value = val;
          break;
        default:
          log(val);
          break;
      }
    }
  }

  audioEl.onended = function (e) {
    setPlay(!play);
  };

  return (
    <div
      className={hide ? hide + " music-app rad-25" : "music-app rad-25"}
      onClick={handleClick}
      data-martin-app="music"
    >
      <div className="like fx-cn-row">
        <Icon url={iconUrl.smallArrowIcon} data_x={"minimize"} />
        <Text type={"span"} text={play ? "now playing :)" : "silence :("} />
        <HeartIcon />
      </div>

      <div className="info">
        <div className="avatar rad-25">
          <img src={iconUrl.avatarIcon} alt={"artist img"} />
        </div>

        <div className="albulm txt-cn">
          <Text type={"h3"} css="title mid dark" text={"Music App"} />
          <Text type={"p"} text={"loading..."} />
          {/* {load && <Text type={"p"} text={"loading..."} />}
          {!load && <Text type={"p"} text={data[prevNext]?.name} />} */}
        </div>
      </div>

      <div className="play">
        <div className="audio-bar">
          <img src={illustrationMusicBar} />
        </div>
        <div className="controls fx-cn-row">
          <Icon
            url={
              shuffle ? iconUrl.musicShuffleIcon : iconUrl.musicNoShuffleIcon
            }
            data_x={shuffle ? "shuffle" : "no shuffle"}
            alt="shuffling"
          />
          <Icon
            url={iconUrl.musicNextIcon}
            data_x={"previous"}
            alt="previous"
          />
          <Icon
            url={play ? iconUrl.musicStartIcon : iconUrl.musicStopIcon}
            data_x={play ? "start" : "stop"}
            alt="start"
          />
          <Icon url={iconUrl.musicNextIcon} data_x={"next"} alt="next" />
          <Icon url={iconUrl.listIcon} data_x={"menu"} alt="menu" />
        </div>

        {showMenu ? (
          <Aside onInput={handleInput} />
        ) : (
          <Aside hideAside={"hide important"} onInput={handleInput} />
        )}
      </div>
    </div>
  );
}

function Aside({ hideAside, onInput }) {
  return (
    <div
      className={
        hideAside
          ? hideAside + " aside rad-10 fx-cn-col"
          : "aside rad-10 fx-cn-col"
      }
      onInput={onInput}
    >
      <div className="fx-cn-row">
        <input type="search" results={"5"} placeholder="search Artist" />
        <Icon url={iconUrl.searchSendIcon}  />
      </div>

      <div className="child fx-cn-row">
        <Icon url={iconUrl.volumeIcon} />
        <input
          type="range"
          max={"5"}
          min={"0"}
          step={"0.25"}
          defaultValue={"1"}
        />
      </div>

      <Text type={"span"} text="Audio API" />
    </div>
  );
}

// {
//   /**
//    * to change track using the web audio api  , you create an AudioBufferSourceNode and load
//    * a new audio buffer in to it.
//    *
//    */

//   const ctx = new AudioContext(),
//     audioSource = ctx.createBufferSource();

//   function loadNewTrack(url) {
//     fetch(url)
//       .then((res) => res.arrayBuffer())
//       .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
//       .then((audioBuffer) => {
//         audioSource.buffer = audioBuffer;
//         audioSource.start();
//         log(audioBuffer);
//       });
//   }

//   loadNewTrack(theMusic);
//   setTimeout(() => {
//     loadNewTrack(/**new track */);
//   }, 3000);
// }
