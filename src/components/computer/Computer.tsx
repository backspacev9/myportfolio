import "./Computer.scss";
import "../../";
import {iconPath} from "../../constants";
import Browser from "../browser/Browser";

import AboutDiskette from "../diskette-menu/aboutDiskette/AboutDiskette";
import {useEffect, useState} from "react";

interface ComputerProps {
  isFullScreen: (isfull: boolean) => void;
}

const Computer = (props: ComputerProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const fullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  useEffect(() => {
    props.isFullScreen(isFullScreen);
  }, [isFullScreen]);

  return (
    <div className={`computer`}>
      <div className="monitor">
        <div className="m-main">
          <div className="m-glass">
            <header className="control-header">
              <span className="btn-minimize" onClick={() => fullScreen()}>
                <img src={isFullScreen ? iconPath.fullscreenExit : iconPath.fullscreen} alt="" />
              </span>
            </header>
            <AboutDiskette isFullScreen={isFullScreen} />
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
        <span className="btn-onOff"></span>
      </div>
      {/* <img className="comp_foot" src="./img/monitor_foot.svg" alt="" /> */}
    </div>
  );
};
export default Computer;
