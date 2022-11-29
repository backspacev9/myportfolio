import Diskette from "../diskette/Diskette";
import {disks} from "../../constants";
import "./DisketteMenu.scss";
const DisketteMenu = () => {
  const arrCards = Object.entries(disks);
  return (
    <div className="DisketteMenu">
      {arrCards.reverse().map((el, index) => (
        <Diskette {...el[1]} key={el[1].id} />
      ))}
    </div>
  );
};

export default DisketteMenu;
