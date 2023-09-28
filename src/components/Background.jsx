import earth from "../images/earth.svg";

export default function Background({ showEarth, spaceBg, astronaut }) {
  return (
    <div className="page" style={{ backgroundImage: `url(${spaceBg})` }}>
      <div className="parent">
        {showEarth && <img src={earth} className="earth" />}
        <img src={astronaut} className="astronaut" />
      </div>
    </div>
  );
}
