import ProfileHeader from "./profileheader.jsx";
import ProfileStats from "./profilestats.jsx";
import ProfileActions from "./profileactions.jsx";
import "./UserProfile.css";

export default function UserProfile() {
  return (
    <div className="profile-card">
      <ProfileHeader />

      <p className="profile-bio">
        Hello, my name is John! Bacon ipsum dolor amet short ribs prosciutto.
      </p>

      <ProfileStats />
      <ProfileActions />
    </div>
  );
}
