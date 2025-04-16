import { useInView } from "react-intersection-observer";
import { photo } from "../data";
import Spinner from "./Spinner";

export default function ProfilePicture() {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="grid-item center pl-sm">
      {inView && <Spinner />}

      <img
        className={inView ? "profile-pic photoAnimate" : "profile-pic"}
        src={photo}
        alt="profile photo"
      />
    </div>
  );
}
