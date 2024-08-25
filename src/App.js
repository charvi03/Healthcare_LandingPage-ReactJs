import "./App.css";
import Navbar from "./components/NavBar";
import MainHome from "./components/MainHome";
import OverviewSection from "./components/Overview";
import BenefitsSection from "./components/BenefitsSection";
import ParentBenefit from "./components/ParentBenefit";
import SliderSection from "./components/SliderSection";
import GetApp from "./components/GetApp";
import ContactSection from "./components/ContactSection";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainHome />
      <OverviewSection />
      <BenefitsSection />
      <ParentBenefit />
      <SliderSection />
      <GetApp />
      <ContactSection />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
