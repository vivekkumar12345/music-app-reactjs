import "./css/header.css";
import { FaBackward, FaForward } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { playpause } from "../store/musicplay";
import { useState } from "react";
import Audio from "./audio";

const Header = () => {
  const [playp, setPlayP] = useState(true);
  const music = useSelector((state) => state.playmusic);
  const dispatch = useDispatch();
  const playPause = () => {
    dispatch(playpause());
  };
  const hello = () => {
    console.log("working fine");
  };

  return (
    <>
      <div className="header-container">
        <div className="header">
          <a>
            <FaBackward />
          </a>
          <a>
            {music.play && music.music != "" ? (
              <FaPlay onClick={playPause} style={{ fontSize: "3.5vh" }} />
            ) : (
              <FaPause onClick={playPause} style={{ fontSize: "3.5vh" }} />
            )}
          </a>
          <a>
            <FaForward />
          </a>

          <a>{music.currenttime}</a>

          <div>
            <input
              className="progress-bar"
              type="range"
              min={0}
              max={music.duration}
              value={music.currenttime}
              onChange={hello}
            />
          </div>
          <a>{music.duration}</a>
        </div>
      </div>
      <Audio />
    </>
  );
};

export default Header;
