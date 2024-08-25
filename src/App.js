import "./App.css";
import Navbar from "./components/NavBar";
import MainHome from "./components/MainHome";
import OverviewSection from "./components/Overview";
import BenefitsSection from "./components/BenefitsSection";
import ParentBenefit from "./components/ParentBenefit";
import SliderSection from "./components/SliderSection";
import GetApp from "./components/GetApp";
import ContactSection from "./components/ContactSection";

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
    </div>
  );
}

export default App;
