import { useInView } from "react-intersection-observer";
import { userName, birthYear, aboutMe } from "../data";
export default function ProfileInformation() {
  const date = new Date().getFullYear();
  const age = date - birthYear;
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="grid-item center pr-sm">
      <h3
        className={
          inView
            ? "mb-xs capitalize animate delayShortest"
            : "mb-xs capitalize hidden"
        }
      >
        {userName},
        <span className={inView ? "age animate delayShort" : "age hidden"}>
          {age}
        </span>
      </h3>
      <p className={inView ? "animate delayLong" : "hidden"}>{aboutMe}</p>
    </div>
  );
}
