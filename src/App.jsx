import { socials } from "./data";
import profilePic from "./assets/img/profile.png";

function App() {
  return (
    <div className="app">
      <Nav />
      <About />
      <Footer />
    </div>
  );
}

export default App;

function Nav() {
  return <nav className="nav">&nbsp;</nav>;
}

function About() {
  return (
    <main>
      <Container className="custom-grid">
        <ProfilePicture />
        <ProfileInformation />
      </Container>
      <SocialList />
    </main>
  );
}

function Container({ children, className }) {
  return <div className={`grid ${className}`}>{children}</div>;
}

function ProfilePicture() {
  return (
    <div className="grid-item center pl-sm">
      <img className="profile-pic" src={profilePic} alt="profile photo" />
    </div>
  );
}

function ProfileInformation() {
  const date = new Date().getFullYear();
  const age = date - 1990;
  return (
    <div className="grid-item center pr-sm">
      <h3 className="mb-xs">
        Raffy, <span className="age">{age}</span>
      </h3>
      <p>
        Hello I'm Raffy Front-end developer,copywriter, and entrepreneur.Let's
        build something amazing together!
      </p>
    </div>
  );
}

function SocialList() {
  return (
    <div className="grey">
      <ul className="grid grid-3-cols social-list">
        {socials.map((link) => (
          <Social link={link} key={link.id} />
        ))}
      </ul>
    </div>
  );
}
function Social({ link }) {
  return (
    <li className="social-item">
      <a
        href={
          link.socialName === "email"
            ? `mailto:${link.href}`
            : link.href
        }
        target="__blank"
        className="social-icon"
        style={{ color: link.color }}
      >
        {link.icon}
      </a>
      <span className="social-name">{link.socialName}</span>
    </li>
  );
}

function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <h1>Let's have a coffee @{date.getFullYear()}</h1>
    </footer>
  );
}
