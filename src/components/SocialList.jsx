import Social from "./Social";
import { socials } from "../data";

export default function SocialList({ ref, inView }) {
  return (
    <div className="grey">
      <ul className="grid grid-3-cols social-list">
        {socials.map((link, i) => (
          <Social
            link={link}
            index={i + 1}
            key={link.id}
            ref={ref}
            inView={inView}
          />
        ))}
      </ul>
    </div>
  );
}
