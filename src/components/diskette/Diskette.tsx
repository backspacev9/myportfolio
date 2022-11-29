import {Navigate, useNavigate} from "react-router-dom";
import "./Diskette.scss";

interface DisketteProps {
  label: string;
  image: string;
  rout: string;
}
const Diskette = (props: DisketteProps) => {
  const navigate = useNavigate();
  const clickHandle = () => {
    navigate(props.rout);
  };
  return (
    <div className="Diskette" onClick={clickHandle}>
      <span className="label">{props.label}</span>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Diskette;
