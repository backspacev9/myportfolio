import React, {useEffect, useRef, useState} from "react";
import ProgressBar from "../../progressBar";
import {Contacts} from "../../../constants";
import "./AboutDiskette.scss";
const nameMenus = {
  about: "about me",
  skills: "key skills",
  contacts: "contacts",
};
const defaultState = {
  about: "",
  skills: "",
  contacts: "",
};

interface aboutDisketteProps {
  isFullScreen: boolean;
}

const AboutDiskette = (props: aboutDisketteProps) => {
  const {about, skills, contacts} = nameMenus;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tab1MenuRef = useRef<HTMLLIElement>(null);
  const tab2MenuRef = useRef<HTMLLIElement>(null);
  const tab4MenuRef = useRef<HTMLLIElement>(null);

  const [activeTC, setActiveTC] = useState(defaultState);
  const [activeTab, setActiveTab] = useState(defaultState);
  const [activeTabConvas, setActiveTabConvas] = useState<HTMLLIElement>();
  const [header, setHeader] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    setActiveTabConvas(tab1MenuRef.current!);
    setActiveTC({...defaultState, about: "activeTC"});
    setActiveTab({...defaultState, about: "activeTab"});
    setHeader(about);
  }, []);

  useEffect(() => {
    setIsFullScreen(props.isFullScreen);
  }, [props.isFullScreen]);
  useEffect(() => {
    drowMenuLine();
  }, [activeTabConvas, isFullScreen]);

  const drowMenuLine = () => {
    const convEl = canvasRef.current;
    const ctx = convEl?.getContext("2d");
    if (convEl) {
      convEl.width = 30;
      convEl.height = convEl.clientHeight;
    }
    const canvasWidth = canvasRef.current?.width;
    const headerY = headerRef.current?.offsetTop;

    if (ctx) {
      ctx.beginPath();

      ctx.moveTo(canvasWidth!, headerY!);
      ctx.lineTo(canvasWidth! / 2, headerY!);

      ctx.lineTo(canvasWidth! / 2, activeTabConvas?.offsetTop!);
      ctx.lineTo(0, activeTabConvas?.offsetTop!);

      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;

      ctx.stroke();
    }
  };
  const handleSelectMenu = (menu: string) => {
    switch (menu) {
      case about:
        setActiveTC({...defaultState, about: "activeTC"});
        setActiveTab({...defaultState, about: "activeTab"});
        setActiveTabConvas(tab1MenuRef.current!);
        setHeader(about);
        break;
      case skills:
        setActiveTC({...defaultState, skills: "activeTC"});
        setActiveTab({...defaultState, skills: "activeTab"});
        setActiveTabConvas(tab2MenuRef.current!);
        setHeader(skills);
        break;
      case contacts:
        setActiveTC({...defaultState, contacts: "activeTC"});
        setActiveTab({...defaultState, contacts: "activeTab"});
        setActiveTabConvas(tab4MenuRef.current!);
        setHeader(contacts);
        break;
    }
  };

  return (
    <div className="About disk-page">
      <aside>
        <nav>
          <li
            tabIndex={1}
            ref={tab1MenuRef}
            className={activeTab.about}
            onClick={() => handleSelectMenu(about)}
          >
            {about}
          </li>
          <li
            tabIndex={2}
            ref={tab2MenuRef}
            className={activeTab.skills}
            onClick={() => handleSelectMenu(skills)}
          >
            {skills}
          </li>

          <li
            tabIndex={4}
            ref={tab4MenuRef}
            className={activeTab.contacts}
            onClick={() => handleSelectMenu(contacts)}
          >
            {contacts}
          </li>
        </nav>
      </aside>
      <canvas ref={canvasRef}></canvas>
      <main>
        <div className="header" ref={headerRef}>
          {header}
        </div>
        <div className="mainContainer">
          <div className={`tabContent tc-about ${activeTC.about}`}>
            <span> Hello, I'm Alexander Kalendo</span>
            <section>
              <span className="sectionName"> &#62;Profile</span>
              <p>
                I'm Front-End Developer with entry-level experience specializing in web development,
                user interface design, HTML, and RactJS. Adept at identifying opportunities to
                enhance front-end design and improve the user experience.
              </p>
            </section>
            <section>
              <span className="sectionName"> &#62;Work Experience</span>
              <div className="experience">
                <div className="exp-header">
                  <div className="dateAndPosition">
                    <div className="exp-date">09/2015 - 01/2018</div>
                    <span>Styding</span>
                  </div>
                  <span className="place">Vitebsk College of Technology</span>
                </div>
                <p>
                  I graduated from college with a degree in programming, where I got some skills in
                  c# .net, sql, js and java. For my graduation project I wrote a small application
                  for android that allows you to listen and share music between devices via
                  wifi-direct technology.
                </p>
              </div>
              <div className="experience">
                <div className="exp-header">
                  <div className="dateAndPosition">
                    <div className="exp-date">02/2020 - Now</div>
                    <span>System Administrator</span>
                  </div>
                  <span className="place">Vitebsk College of Technology</span>
                </div>
                <p>
                  <li># Work in an educational institution.</li>
                  <li># Managed network connectivity and network security.</li>
                  <li>
                    # Responsible for the support of the internal network and the work of all
                    computers (~250).
                  </li>
                  <li># Wrote several internal software on c# .net.</li>
                </p>
              </div>
              <div className="experience">
                <div className="exp-header">
                  <div className="dateAndPosition">
                    <div className="exp-date">03/2021 - 08/2021</div>
                    <span>Front-End Courses / React</span>
                  </div>
                  <span className="place">Rolling Scopes School</span>
                </div>
                <p>Completed Front-End and React course</p>
                <p className="certificates">
                  Certificates: <br />
                  &#62;&nbsp;
                  <a href="https://app.rs.school/certificate/3cyh2imb">
                    JAVASCRIPT/FRONT-END 2021Q1 (JAVASCRIPT)
                  </a>
                  <br />
                  &#62;&nbsp;
                  <a href="https://app.rs.school/certificate/241kga4n">
                    REACT 2022 Q1 (JAVASCRIPT)
                  </a>
                </p>
              </div>
            </section>
          </div>
          <div className={`tabContent tc-skills ${activeTC.skills}`}>
            <li>{<ProgressBar name="User Interface Design" percent={60} />}</li>
            <li>{<ProgressBar name="Html" percent={90} />}</li>
            <li>{<ProgressBar name="CSS/SASS" percent={90} />}</li>
            <li>{<ProgressBar name="JavaScript" percent={70} />}</li>
            <li>{<ProgressBar name="JavaScript" percent={70} />}</li>
            <li>{<ProgressBar name="TypeScript" percent={70} />}</li>
            <li>{<ProgressBar name="React" percent={70} />}</li>
            <li>{<ProgressBar name="NodeJS" percent={20} />}</li>
          </div>

          <div className={`tabContent tc-contacts ${activeTC.contacts}`}>
            <li>
              &#62;&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://maps.google.com/maps?q=${Contacts.country}+${Contacts.city}`}
              >
                {Contacts.country}, {Contacts.city}
              </a>
            </li>
            <li>
              &#62;&nbsp;<a href={`tel:${Contacts.phone}`}>{Contacts.phone}</a>
            </li>
            <li>
              &#62;&nbsp;<a href={`mailto:${Contacts.email}`}>{Contacts.email}</a>
            </li>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutDiskette;
