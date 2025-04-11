import DigitalClock from "./components/DigitalClock";
import "./styles/main.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="text-container">
        <h1>Digital Clock</h1>
        <DigitalClock />
      </div>
    </div>
  );
}

export default App;
