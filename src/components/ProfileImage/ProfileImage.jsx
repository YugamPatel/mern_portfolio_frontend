import "./ProfileImage.css";

const ProfileImage = ({ src, styleOverrides = {}, className }) => {
  return (
    <div>
      <div className={`profile-layer ${className}`}>
        <div className="profile-circle-container">
          <img
            className="profile-circle"
            src={src}
            style={styleOverrides}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
