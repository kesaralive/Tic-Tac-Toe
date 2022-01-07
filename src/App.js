import "./App.css";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Navigation />
      <Game />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
