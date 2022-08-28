import "./App.scss";
import Computer from "./components/computer/Computer";
import DisketteMenu from "./components/diskette-menu/DisketteMenu";

function App() {
  return (
    <div className="App">
      <div className="table">
        <Computer />
        <DisketteMenu />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
