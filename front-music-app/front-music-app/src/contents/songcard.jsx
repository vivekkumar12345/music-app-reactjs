import "./css/songcard.css";
import vivek from "../assets/vivek.jpg";
import { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { play } from "../store/musicplay";

const SongCard = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="songcard-container"
        onClick={() =>
          dispatch(
            play({
              link: `http://localhost:8081/uploads/${props.data.music_link}`,
            })
          )
        }
      >
        <div
          className="songcard-inner-container"
          style={{
            backgroundImage: `url(http://localhost:8081/uploads/${props.data.music_photo_link})`,
          }}
        >
          <div className="songcard-playscreen"></div>
        </div>
        <a style={{ fontSize: "1.8vh", color: "black" }}>
          {props.data.music_name}
        </a>
        <br />
        <a style={{ fontSize: "1.5vh" }}>
          {props.data.music_type} {props.data.music_type_name}{" "}
        </a>
      </div>
    </>
  );
};

export default SongCard;
