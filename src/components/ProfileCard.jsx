import "./ProfileCard.css";
import ProfileHeader from "./ProfileHeader.jsx";
import ProfileStats from "./ProfileStats.jsx";
import ProfileActions from "./ProfileActions.jsx";

function ProfileCard() {
  return (
    <div className="profile-card">
      <ProfileHeader />
      <p className="profile-bio">
        Hello, my name is John! Bacon ipsum dolor amet strip steak, pig ham tongue buffalo beef.
      </p>
      <ProfileStats />
      <ProfileActions />
    </div>
  );
}

export default ProfileCard;
