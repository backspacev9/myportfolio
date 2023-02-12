import {useEffect, useState} from "react";
import {ProjectsItem} from "../../../interfaces";
import {setProject} from "../../../redux/reducers/projectsSlice";
import {useAppDispatch, useAppSelector} from "../../../redux/rootReducer";

const MenuItem = (props: ProjectsItem) => {
  const dispatch = useAppDispatch();
  const [isActive, setActive] = useState(false);
  const {currentProject} = useAppSelector((state) => state.projectsSlice);
  const ActiveStyle = {
    backgroundColor: "White",
    color: "#051706",
  };
  useEffect(() => {
    setActive(props.tittle === currentProject?.tittle ? true : false);
  }, [currentProject]);
  const handleOnclick = () => {
    dispatch(setProject(props));
  };
  return (
    <li style={isActive ? ActiveStyle : {}} onClick={handleOnclick}>
      {props.tittle}
    </li>
  );
};

export default MenuItem;
