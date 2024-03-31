import "./css/menuleft.css";
import { MdNewReleases, MdFeaturedPlayList } from "react-icons/md";
import { IoIosMicrophone } from "react-icons/io";
import { FaChartLine, FaHistory, FaLink } from "react-icons/fa";
import { BiSolidPhotoAlbum, BiSolidPlaylist } from "react-icons/bi";
import { Link } from "react-router-dom";

const MenuLeft = () => {
  return (
    <>
      <div className="menuleft-container">
        <div className="menuleft-item-container-head">
          <a>BROWSE</a>
        </div>
        <div className="menuleft-item-container">
          <Link className="anchor" to="/newrelease">
            <span>
              <MdNewReleases />
            </span>{" "}
            New Release
          </Link>
        </div>
        <div className="menuleft-item-container">
          <a>
            <span>
              <FaChartLine />
            </span>{" "}
            Top charts
          </a>
        </div>
        <div className="menuleft-item-container">
          <a>
            <span>
              <MdFeaturedPlayList />
            </span>{" "}
            Top Playlists
          </a>
        </div>
        <div className="menuleft-item-container">
          <a>
            <span>
              <IoIosMicrophone />
            </span>{" "}
            Top Artists
          </a>
        </div>

        <div className="menuleft-item-container-head">
          <a>LIBRARY</a>
        </div>
        <div className="menuleft-item-container">
          <a>
            <span>
              <FaHistory />
            </span>{" "}
            History
          </a>
        </div>
        <div className="menuleft-item-container">
          <a>
            <span>
              <FaLink />
            </span>{" "}
            Linked Songs
          </a>
        </div>
        <div className="menuleft-item-container">
          <a>
            <span>
              <BiSolidPhotoAlbum />
            </span>{" "}
            Albums
          </a>
        </div>
        <div className="menuleft-item-container">
          <a>
            <span>
              <BiSolidPlaylist />
            </span>{" "}
            Custom Playlists
          </a>
        </div>
      </div>
    </>
  );
};
export default MenuLeft;
