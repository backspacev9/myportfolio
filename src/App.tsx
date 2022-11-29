import {BrowserRouter, Router} from "react-router-dom";
import "./App.scss";
import Computer from "./components/computer/Computer";
import DisketteMenu from "./components/diskette-menu/DisketteMenu";
import {useAppSelector} from "./redux/rootReducer";

function App() {
  const {isFullScreen} = useAppSelector((state) => state.computerSlice);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="table">
          <section className={`table-items ${isFullScreen ? "fullScreen" : ""}`}>
            <DisketteMenu />
            <Computer />
          </section>
        </div>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
