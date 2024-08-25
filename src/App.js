import "./App.css";
import Navbar from "./components/NavBar";
import MainHome from "./components/MainHome";
import OverviewSection from "./components/Overview";
import BenefitsSection from "./components/BenefitsSection";
import ParentBenefit from "./components/ParentBenefit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainHome />
      <OverviewSection />
      <BenefitsSection />
      <ParentBenefit />
    </div>
  );
}

export default App;
