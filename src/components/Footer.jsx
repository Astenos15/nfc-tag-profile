export default function Footer({ ref, inView }) {
  const date = new Date();
  console.log(inView);

  return (
    <footer ref={ref} className="footer">
      <h1 className={inView ? "animate delayLong " : ""}>
        Let's have a coffee @{date.getFullYear()}
      </h1>
    </footer>
  );
}
