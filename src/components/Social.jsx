export default function Social({ link, index, ref, inView }) {
  return (
    <li ref={ref} className="social-item">
      <a
        href={link.socialName === "email" ? `mailto:${link.href}` : link.href}
        target="__blank"
        className={
          index % 2 === 0 && inView
            ? "social-icon animate delayShortest"
            : "social-icon animate delayShort"
        }
        style={{ color: link.color }}
      >
        {link.icon}
      </a>
      <span
        className={
          index % 2 === 0 && inView
            ? "social-name animate delayShortest"
            : "social-name animate delayShort"
        }
      >
        {link.socialName}
      </span>
    </li>
  );
}
