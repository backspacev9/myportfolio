import Diskette from "../diskette/Diskette";
import {cards} from "../../constants";
import "./DisketteMenu.scss";
const DisketteMenu = () => {
  const arrCards = Object.entries(cards);
  return (
    <div className="DisketteMenu">
      {arrCards.reverse().map((el, index) => (
        <Diskette {...el[1]} key={index} />
      ))}
    </div>
  );
};

export default DisketteMenu;
