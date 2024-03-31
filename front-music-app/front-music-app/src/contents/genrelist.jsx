import "./css/addmusic.css";

const GenreList = ({ genre }) => {
  return (
    <>
      <div className="singerlist-container">
        {genre.map((genres, index) => (
          <div key={index} className="genrelist-array">
            {genres}
          </div>
        ))}
      </div>
    </>
  );
};

export default GenreList;
