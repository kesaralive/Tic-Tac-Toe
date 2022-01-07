import "./App.css";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Game />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
