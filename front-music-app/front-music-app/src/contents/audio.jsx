import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDuration, setCurrentTime } from "../store/musicplay";

const Audio = () => {
  let playmusic = useRef();
  const music = useSelector((state) => state.playmusic);
  const dispatch = useDispatch();
  const setCurrentTimes = () => {
    dispatch(
      setCurrentTime({
        currentTime: playmusic.current.currentTime.toFixed(0),
      })
    );
  };

  const onLoadedMetadata = () => {
    dispatch(setDuration({ duration: playmusic.current.duration.toFixed(0) }));
  };

  useEffect(() => {
    if (music.play === true && music.continue === false) {
      document.getElementById("audioContainer").src = music.music;
      playmusic.current.play();
    } else if (music.play === false && music.continue === true) {
      playmusic.current.pause();
    } else if (music.play === true && music.continue === true) {
      playmusic.current.play();
    }
  }, [music.play, music.continue, music.music]);
  return (
    <audio
      id="audioContainer"
      onTimeUpdate={setCurrentTimes}
      ref={playmusic}
      onLoadedMetadata={onLoadedMetadata}
    >
      <source />
    </audio>
  );
};

export default Audio;
