import {current} from "@reduxjs/toolkit";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../redux/rootReducer";
import "./ProjectsDiskette.scss";

const ProjectsDiskette = () => {
  return (
    <div className="Projects disk-page">
      <aside>
        <nav>
          <ul>
            <span>web-apps</span>
            <li>Match-match game</li>
            <li>English for kids</li>
            <li>Virtual piano</li>
            <li>Photo Filter</li>
          </ul>
          <ul>
            <span>page-proofs</span>
            <li>Online Zoo</li>
            <li>Wildlife</li>
          </ul>
        </nav>
      </aside>
      <main>
        <div className="preview-img">
          <img src="./img/preview/match-match.png" alt="preview" />
        </div>
        <div className="description">
          <span className="tittle">match-match game</span>
          <div className="text">
            Lorem earum tenetur quas perspiciatis culpa tempore consectetur ipsum voluptates, dolor
            delectus, dolores cumque est aliquid id nemo hic?ipsum dolor sit, amet consectetur
            adipisicing elit. Beatae voluptatem sunt aliquam, Lorem earum tenetur quas perspiciatis
            culpa tempore consectetur ipsum voluptates, dolor delectus, dolores cumque est aliquid
            id nemo hic?ipsum dolor sit, amet consectetur adipisicing elit. Beatae voluptatem sunt
            aliquam, Lorem earum tenetur quas perspiciatis culpa tempore consectetur ipsum
            voluptates, dolor delectus, dolores cumque est aliquid id nemo hic?ipsum dolor sit, amet
            consectetur adipisicing elit. Beatae voluptatem sunt aliquam, Lorem earum tenetur quas
            perspiciatis culpa tempore consectetur ipsum voluptates, dolor delectus, dolores cumque
            est aliquid id nemo hic?ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            voluptatem sunt aliquam,
          </div>
        </div>
        <div className="footer-main">
          <hr />
          <button>WATCH</button>
        </div>
      </main>
    </div>
  );
};

export default ProjectsDiskette;
