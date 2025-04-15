import { useInView } from "react-intersection-observer";
export default function ProfileInformation() {
  const date = new Date().getFullYear();
  const age = date - 1990;
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="grid-item center pr-sm">
      <h3 className={`mb-xs ${inView ? "animate delayShort" : ""}`}>
        Raffy,{" "}
        <span className={`age ${inView ? "animate delayShort" : ""}`}>
          {age}
        </span>
      </h3>
      <p className={inView ? "animate delayShort" : ""}>
        Hello I'm Raffy Front-end developer,copywriter, and entrepreneur.Let's
        build something amazing together!
      </p>
    </div>
  );
}
