import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
