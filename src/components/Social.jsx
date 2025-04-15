import { useInView } from "react-intersection-observer";

export default function Social({ link, index }) {
  const { ref, inView } = useInView();
  return (
    <li className="social-item">
      <a
        ref={ref}
        href={link.socialName === "email" ? `mailto:${link.href}` : link.href}
        target="__blank"
        style={{ color: link.color }}
      >
        <span
          className={
            index % 2 === 0 && inView
              ? "social-icon animate delayLong"
              : "social-icon animate delayShort"
          }
        >
          {link.icon}
        </span>
      </a>
      <p ref={ref}>
        <span
          className={
            index % 2 === 0 && inView
              ? "social-name animate delayLong"
              : "social-name animate delayShort"
          }
        >
          {link.socialName}
        </span>
      </p>
    </li>
  );
}
