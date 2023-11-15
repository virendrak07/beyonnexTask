import "./App.css";
import TargetTemperatureComponent from "./components/TargetTemperatureComponent";
function App() {
  return (
    <div className="App">
      <TargetTemperatureComponent minTemp={20} maxTemp={26} targetTemp={22} />
    </div>
  );
}

export default App;



