import "./ProfileCard.css";
import ProfileHeader from "./profileheader.jsx";
import ProfileStats from "./profilestats.jsx";
import ProfileActions from "./profileactions.jsx";  

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <ProfileHeader />
      <p className="profile-bio">
        Hello, my name is John! Bacon ipsum dolor amet short ribs prosciutto
        strip steak, pig ham tongue buffalo beef ribs hamburger pork venison.
      </p>
      <ProfileStats />
      <ProfileActions />
    </div>
  );
}
