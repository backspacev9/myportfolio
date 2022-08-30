import React, {useEffect, useRef, useState} from "react";
import "./AboutDiskette.scss";
const nameMenus = {
  about: "about",
  skills: "skills",
  projects: "projects",
  contacts: "contacts",
};
const defaultState = {
  about: "",
  skills: "",
  projects: "",
  contacts: "",
};

interface aboutDisketteProps {
  isFullScreen: boolean;
}

const AboutDiskette = (props: aboutDisketteProps) => {
  const {about, skills, projects, contacts} = nameMenus;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tab1MenuRef = useRef<HTMLLIElement>(null);
  const tab2MenuRef = useRef<HTMLLIElement>(null);
  const tab3MenuRef = useRef<HTMLLIElement>(null);
  const tab4MenuRef = useRef<HTMLLIElement>(null);

  const [activeTC, setActiveTC] = useState(defaultState);
  const [activeTab, setActiveTab] = useState(defaultState);
  const [activeTabConvas, setActiveTabConvas] = useState<HTMLLIElement>();
  const [header, setHeader] = useState("");

  useEffect(() => {
    setActiveTabConvas(tab1MenuRef.current!);
    setActiveTC({...defaultState, about: "activeTC"});
    setActiveTab({...defaultState, about: "activeTab"});
    setHeader(about);
  }, []);

  useEffect(() => {
    drowMenuLine();
  }, [activeTabConvas, props.isFullScreen]);

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
      case projects:
        setActiveTC({...defaultState, projects: "activeTC"});
        setActiveTab({...defaultState, projects: "activeTab"});
        setActiveTabConvas(tab3MenuRef.current!);
        setHeader(projects);

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
    <div className="About">
      <aside>
        <nav>
          <li
            tabIndex={1}
            ref={tab1MenuRef}
            className={activeTab.about}
            onClick={() => handleSelectMenu(about)}
          >
            about
          </li>
          <li
            tabIndex={2}
            ref={tab2MenuRef}
            className={activeTab.skills}
            onClick={() => handleSelectMenu(skills)}
          >
            skills
          </li>
          <li
            tabIndex={3}
            ref={tab3MenuRef}
            className={activeTab.projects}
            onClick={() => handleSelectMenu(projects)}
          >
            projects
          </li>
          <li
            tabIndex={4}
            ref={tab4MenuRef}
            className={activeTab.contacts}
            onClick={() => handleSelectMenu(contacts)}
          >
            contacts
          </li>
        </nav>
      </aside>
      <canvas ref={canvasRef}></canvas>
      <main>
        <div className="header" ref={headerRef}>
          {header}
        </div>
        <section>
          <div className={`tabContent tc-about ${activeTC.about}`}>
            <span> Hello, I'm Kalendo Alexander</span>
            <span> &#62;Profile</span>
            <p>
              I'm Front-End Developer with entry-level experience specializing in web development,
              user interface design, HTML, and RactJS. Adept at identifying opportunities to enhance
              front-end design and improve the user experience.
            </p>
          </div>
          <div className={`tabContent tc-skills ${activeTC.skills}`}>
            &#62; <p></p>
          </div>
          <div className={`tabContent tc-projects ${activeTC.projects}`}>&#62;33333333333</div>
          <div className={`tabContent tc-contacts ${activeTC.contacts}`}>&#62;44444444444</div>
        </section>
      </main>
    </div>
  );
};

export default AboutDiskette;
