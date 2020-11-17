import "./App.css";
import Canvas from "./components/Canvas/Canvas";
import Navbar from "./components/Navigation/Navbar";
import Comp from "./components/Comp";
import DrawingToolContextProvider from "./components/context/DrawingToolContextProvider";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Canvas />
    </div>
  );
}

export default App;
