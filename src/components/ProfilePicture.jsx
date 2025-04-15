import profilePic from "../assets/img/profile.png";

export default function ProfilePicture({ ref, inView }) {
  return (
    <div ref={ref} className="grid-item center pl-sm">
      <img
        className={`profile-pic ${inView ? "animate delayShortest" : ""}`}
        src={profilePic}
        alt="profile photo"
      />
    </div>
  );
}
