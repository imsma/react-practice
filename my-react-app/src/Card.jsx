import smaProfilePic from "./assets/sma-profile-pic-2.png";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        alt="profile picture"
        src={smaProfilePic}
      ></img>
      <h2 className="card-title">Im SMA</h2>
      <p className="card-text">I love to create things, I am a maker</p>
    </div>
  );
}

export default Card;
