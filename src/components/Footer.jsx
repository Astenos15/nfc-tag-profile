import { useInView } from "react-intersection-observer";
import { footerText } from "../data";
export default function Footer() {
  const { ref, inView } = useInView();
  const date = new Date();

  return (
    <footer ref={ref} className="footer">
      <h1 className={inView ? "animate delayShort " : ""}>
        {footerText} @{date.getFullYear()}
      </h1>
    </footer>
  );
}
