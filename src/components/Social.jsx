import { useInView } from "react-intersection-observer";
import Highlight from "./Highlight";

export default function Social({ link, index }) {
  const { ref, inView } = useInView();
  return (
    <li ref={ref} className="social-item">
      <a
        href={link.socialName === "email" ? `mailto:${link.href}` : link.href}
        target="__blank"
        style={{ color: link.color }}
      >
        <span className=" social-icon animate slowSpin delayLong">
          {link.icon}
        </span>
      </a>
      <p>
        <span
          className={
            index % 2 === 0 && inView
              ? "social-name animate delayLong"
              : "social-name animate delayShort"
          }
        >
          {link.socialName}
          <Highlight color={link.color} />
        </span>
      </p>
    </li>
  );
}
// social-icon animate slowSpin delayLong
