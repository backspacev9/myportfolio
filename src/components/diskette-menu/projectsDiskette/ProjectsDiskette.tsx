import {current} from "@reduxjs/toolkit";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {projectsApps, projectsLanding} from "../../../constants";
import {useAppSelector} from "../../../redux/rootReducer";
import MenuItem from "./menuItem";
import "./ProjectsDiskette.scss";

const ProjectsDiskette = () => {
  const {currentProject} = useAppSelector((state) => state.projectsSlice);
  const {tittle, text, imgUrl, sourceUrl} = currentProject!;

  return (
    <div className="Projects disk-page">
      <aside>
        <nav>
          <ul>
            <span>web-apps</span>
            {projectsApps.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
            {/* <li>Match-match game</li>
            <li>English for kids</li>
            <li>Virtual piano</li>
            <li>Photo Filter</li> */}
          </ul>
          <ul>
            <span>page-proofs</span>
            {projectsLanding.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </ul>
        </nav>
      </aside>
      <main>
        <div className="preview-img">
          <img src={imgUrl!} alt="preview" />
        </div>
        <div className="description">
          <span className="tittle">{tittle}</span>
          <div className="text">{text}</div>
        </div>
        <div className="footer-main">
          <hr />
          <a href={sourceUrl!}>
            <button>WATCH</button>
          </a>
        </div>
      </main>
    </div>
  );
};

export default ProjectsDiskette;
