import { useInView } from "react-intersection-observer";
export default function Footer() {
  const { ref, inView } = useInView();
  const date = new Date();

  return (
    <footer ref={ref} className="footer">
      <h1 className={inView ? "animate delayLong " : ""}>
        Let's have a coffee @{date.getFullYear()}
      </h1>
    </footer>
  );
}
