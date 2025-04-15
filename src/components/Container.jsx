export default function Container({ children, className }) {
  return <div className={`grid ${className}`}>{children}</div>;
}
