import "./Computer.scss";
import "../../";
import Browser from "../browser/Browser";

import AboutDiskette from "../diskette-menu/aboutDiskette/AboutDiskette";
const Computer = () => {
  return (
    <div className="computer">
      <div className="monitor">
        <div className="m-main">
          <div className="m-glass">
            <AboutDiskette />
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
        <span className="btn-onOff"></span>
      </div>
      {/* <img className="comp_foot" src="./img/monitor_foot.svg" alt="" /> */}
    </div>
  );
};
export default Computer;
