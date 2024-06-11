function ProfilePicture() {
  const imageUrl = "./src/assets/sma-profile-pic-1.jpg";

  const handleClick = (e) => {
    console.log("Button clicked");
    e.target.style.display = "none";
  };

  return (
    <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" height="150" />
  );
}

export default ProfilePicture;
