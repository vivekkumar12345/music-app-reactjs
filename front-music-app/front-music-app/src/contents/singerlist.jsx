import "./css/addmusic.css";

const SingerList = ({ singer }) => {
  return (
    <>
      <div className="singerlist-container">
        {singer.map((singers, index) => (
          <div key={index} className="singerlist-array">
            {singers}
          </div>
        ))}
      </div>
    </>
  );
};

export default SingerList;
