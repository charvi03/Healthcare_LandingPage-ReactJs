import "./App.css";
import Navbar from "./components/NavBar";
import MainHome from "./components/MainHome";
import OverviewSection from "./components/Overview";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainHome />
      <OverviewSection />
    </div>
  );
}

export default App;
