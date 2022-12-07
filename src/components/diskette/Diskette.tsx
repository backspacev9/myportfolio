import {Navigate, useNavigate} from "react-router-dom";
import {Disk} from "../../interfaces";
import {setDisk} from "../../redux/reducers/computerSlice";
import {useAppDispatch} from "../../redux/rootReducer";
import "./Diskette.scss";

const Diskette = (props: Disk) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const clickHandle = () => {
    navigate(props.rout);
    dispatch(setDisk(props));
  };
  return (
    <div className="Diskette" onClick={clickHandle}>
      <span className="label">{props.label}</span>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Diskette;
