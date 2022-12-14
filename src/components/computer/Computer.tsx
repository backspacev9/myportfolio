import "./Computer.scss";
import "../../";
import {iconPath} from "../../constants";
import AboutDiskette from "../diskette-menu/aboutDiskette/AboutDiskette";
import {useAppDispatch, useAppSelector} from "../../redux/rootReducer";
import {setDisk, setFullScreen, setPower} from "../../redux/reducers/computerSlice";
import ProjectsDiskette from "../diskette-menu/projectsDiskette/ProjectsDiskette";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import NotFoundDiskette from "../diskette-menu/notFoundDiskette/notFoundDiskette";
import {useEffect} from "react";

const Computer = () => {
  const {isFullScreen, isPowerOn, currentDisk} = useAppSelector((state) => state.computerSlice);
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const fullScreen = () => {
    dispatch(setFullScreen(!isFullScreen));
  };

  const onOfComputer = () => {
    dispatch(setPower(!isPowerOn));
  };
  useEffect(() => {
    if (!currentDisk) {
      navigation("/");
    }
    console.log(currentDisk);
  }, []);

  return (
    <div className={`computer ${isPowerOn ? "powerOn" : ""}`}>
      <div className="monitor">
        <div className="m-main">
          <div className="m-glass">
            <main className="m-content">
              <header className="control-header">
                {/* <span>{currentDisk?.label}</span> */}
                <span className="btn-minimize" onClick={() => fullScreen()}>
                  <img src={isFullScreen ? iconPath.fullscreenExit : iconPath.fullscreen} alt="" />
                </span>
              </header>
              {!currentDisk ? <NotFoundDiskette /> : ""}
              <Routes>
                <Route path="/" element={<></>} />
                <Route path="/about" element={<AboutDiskette isFullScreen={isFullScreen} />} />
                <Route path="/projects" element={<ProjectsDiskette />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
      <div className="comp-controls">
        <div className="diskette-drive">
          <span className="disk-input"></span>
          <div className="disk-controls">
            <span className={`disk-status ${isPowerOn && currentDisk ? "blink" : ""}`}></span>
            <Link to={"/"}>
              <span className="btn-pickoff" onClick={() => dispatch(setDisk(null))}></span>
            </Link>
          </div>
        </div>
        <span className="btn-onOff" onClick={onOfComputer}></span>
      </div>
      {/* <img className="comp_foot" src="./img/monitor_foot.svg" alt="" /> */}
    </div>
  );
};
export default Computer;
