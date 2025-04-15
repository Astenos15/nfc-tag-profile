import Navbar from "./components/Navbar";
import About from "./components/About";
import Container from "./components/Container";
import ProfilePicture from "./components/ProfilePicture";
import ProfileInformation from "./components/ProfileInformation";
import SocialList from "./components/SocialList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About>
        <Container className="custom-grid">
          <ProfilePicture />
          <ProfileInformation />
        </Container>
        <SocialList />
      </About>
      <Footer />
    </div>
  );
}

export default App;
