import Navbar from "./components/Navbar";
import About from "./components/About";
import Container from "./components/Container";
import ProfilePicture from "./components/ProfilePicture";
import ProfileInformation from "./components/ProfileInformation";
import SocialList from "./components/SocialList";
import Footer from "./components/Footer";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref, inView } = useInView();
  return (
    <div className="app">
      <Navbar />
      <About>
        <Container className="custom-grid">
          <ProfilePicture ref={ref} inView={inView} />
          <ProfileInformation ref={ref} inView={inView} />
        </Container>
        <SocialList ref={ref} inView={inView} />
      </About>
      <Footer ref={ref} inView={inView} />
    </div>
  );
}

export default App;
