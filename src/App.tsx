import {useEffect, useState} from "react";
import "./App.scss";
import Computer from "./components/computer/Computer";
import DisketteMenu from "./components/diskette-menu/DisketteMenu";

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const fullScreenHandle = (isfull: boolean) => {
    setIsFullScreen(isfull);
  };

  return (
    <div className="App">
      <div className="table">
        <section className={`table-items ${isFullScreen ? "fullScreen" : ""}`}>
          <DisketteMenu />
          <Computer isFullScreen={fullScreenHandle} />
        </section>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
