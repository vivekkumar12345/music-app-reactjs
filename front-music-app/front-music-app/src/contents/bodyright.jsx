import "./css/bodyright.css";
import SongCard from "./songcard";

import { useEffect, useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchsong } from "../store/getmusicfiles";
import Audio from "./audio";

const BodyRight = () => {
  let finalState = [];
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getmusic);
  useEffect(() => {
    dispatch(fetchsong());
  }, []);

  if (state.isLoading) {
    return <h1>Loading.....</h1>;
  } else if (state.data != null) {
    return (
      <>
        <div className="body-right-container">
          {state.data.map((states, i) => (
            <SongCard key={i} data={states} />
          ))}
        </div>
      </>
    );
  }
};
export default BodyRight;
