import Preloader from "../../common/preloader/Preloader";
import classes from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <img
          src="https://clockwise.software/img/blog/how-to-build-a-social-network-website/header-background.png"
          alt="top-img"
          className={classes.main__topImg}
        />
        <div className={classes.post}>
          <h3>{props.profile.aboutMe}</h3>
          <img src={props.profile.photos.large} />
          Ava + descriptions
          <h3>My contacts</h3>
          <ul>
            <li>{props.profile.contacts.facebook}</li>
            <li>{props.profile.contacts.instagram}</li>
            <li>{props.profile.contacts.github}</li>
          </ul>
        </div>
      </div>
    );
  }
};
export default ProfileInfo;
