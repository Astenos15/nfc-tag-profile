import { useInView } from "react-intersection-observer";
import { userName, birthYear, aboutMe } from "../data";
export default function ProfileInformation() {
  const date = new Date().getFullYear();
  const age = date - birthYear;
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="grid-item center pr-sm">
      <h3 className={`mb-xs capitalize ${inView ? "animate delayShort" : ""}`}>
        {userName},
        <span className={`age ${inView ? "animate delayShort" : ""}`}>
          {age}
        </span>
      </h3>
      <p className={inView ? "animate delayShort" : ""}>{aboutMe}</p>
    </div>
  );
}
