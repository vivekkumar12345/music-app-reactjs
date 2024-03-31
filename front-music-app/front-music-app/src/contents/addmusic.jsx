import { useState, useRef } from "react";
import "./css/addmusic.css";
import SingerList from "./singerlist";
import GenreList from "./genrelist";
import axios from "axios";

const AddMusic = () => {
  const [singer, setSinger] = useState([]);
  const [genre, setGenre] = useState([]);

  const musicName = useRef();
  const musicSource = useRef();
  const launchDate = useRef();
  const musicType = useRef();
  const fileUpload = useRef(null);
  const posterUpload = useRef(null);

  const addSinger = (event) => {
    if (singer.indexOf(event.target.value) > -1) {
      alert(`${event.target.value} Already Added`);
    } else {
      setSinger([...singer, event.target.value]);
    }
  };
  const addGenre = (event) => {
    if (genre.indexOf(event.target.value) > -1) {
      alert(`${event.target.value} Already Added`);
    } else {
      setGenre([...genre, event.target.value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("musicname", musicName.current.value);
    formdata.append("musicsource", musicSource.current.value);
    formdata.append("launchdate", launchDate.current.value);
    formdata.append("singers", singer);
    formdata.append("genres", genre);
    formdata.append("musictype", musicType.current.value);
    formdata.append("fileupload", fileUpload.current.files[0]);
    formdata.append("fileupload", posterUpload.current.files[0]);

    axios
      .post("http://localhost:8081/addmusic", formdata)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <div className="addmusic-container">
        <form onSubmit={handleSubmit}>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  Music Name :
                  <input
                    type="text"
                    name="musicname"
                    ref={musicName}
                    className="form-control"
                  />
                </td>
                <td>
                  Music Source :
                  <select
                    name="musicsource"
                    className="form-control"
                    ref={musicSource}
                  >
                    <option>Movie</option>
                    <option>Album</option>
                    <option>Random</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  Launch Date :
                  <input
                    type="date"
                    name="launchdate"
                    className="form-control"
                    ref={launchDate}
                  />
                </td>
                <td>
                  Singer and Composer :
                  <select
                    name="singer"
                    className="form-control"
                    onChange={(event) => addSinger(event)}
                  >
                    <option value="1">Movie</option>
                    <option value="2">Movie3</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  Movie/ Album Name :
                  <input
                    type="text"
                    name="type"
                    className="form-control"
                    ref={musicType}
                  />
                </td>
                <td>
                  Genres :
                  <select
                    name="genre"
                    className="form-control"
                    onChange={(event) => addGenre(event)}
                  >
                    <option value="1">Genre 1</option>
                    <option value="2">Genre 2</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  Upload Music File :
                  <input
                    type="file"
                    name="fileupload"
                    className="form-control"
                    ref={fileUpload}
                  />
                </td>
                <td>
                  Upload Poster :
                  <input
                    type="file"
                    name="posterupload"
                    ref={posterUpload}
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ textAlign: "center" }}>
                  <button onClick={handleSubmit} className="btn btn-info">
                    Submit to Add Music
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <SingerList singer={singer} />
          <GenreList genre={genre} />
        </form>
      </div>
    </>
  );
};

export default AddMusic;
