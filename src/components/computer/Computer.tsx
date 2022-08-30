import "./Computer.scss";
import "../../";
import Browser from "../browser/Browser";

import AboutDiskette from "../diskette-menu/aboutDiskette/AboutDiskette";
import {useState} from "react";
const Computer = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const fullScreen = () => {
    setIsFullScreen(!isFullScreen);
    console.log("click");
  };

  return (
    <div className={`computer ${isFullScreen ? "fullScreen" : ""}`}>
      <div className="monitor">
        <div className="m-main">
          <div className="m-glass">
            <AboutDiskette isFullScreen={isFullScreen} />
            {/* Wake up neo
            <br />
            The matrix has you
            <br />
            Follow the white rabbit */}
          </div>
          {/* <Browser /> */}
        </div>
      </div>
      <div className="comp-controls">
        <div className="diskette-drive">
          <span className="disk-input"></span>
          <div className="disk-controls">
            <span className="disk-status"></span>
            <span className="btn-pickoff"></span>
          </div>
        </div>
        <span className="btn-onOff" onClick={() => fullScreen()}></span>
      </div>
      {/* <img className="comp_foot" src="./img/monitor_foot.svg" alt="" /> */}
    </div>
  );
};
export default Computer;
