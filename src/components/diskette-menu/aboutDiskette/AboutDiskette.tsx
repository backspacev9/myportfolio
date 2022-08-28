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
const defaultStateOffSets = {
  about: 0,
  skills: 0,
  projects: 0,
  contacts: 0,
};

const AboutDiskette = () => {
  const {about, skills, projects, contacts} = nameMenus;
  const canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();
  const headerRef: React.RefObject<HTMLDivElement> = React.createRef();
  const tab1MenuRef: React.RefObject<HTMLLIElement> = React.createRef();
  const tab2MenuRef: React.RefObject<HTMLLIElement> = React.createRef();
  const tab3MenuRef: React.RefObject<HTMLLIElement> = React.createRef();
  const tab4MenuRef: React.RefObject<HTMLLIElement> = React.createRef();

  const tab1Y = tab1MenuRef.current?.offsetTop;
  const tab2Y = tab2MenuRef.current?.offsetTop;
  const tab3Y = tab3MenuRef.current?.offsetTop;
  const tab4Y = tab4MenuRef.current?.offsetTop;
  const [activeTC, setActiveTC] = useState(defaultState);
  const [activeTab, setActiveTab] = useState(defaultState);
  const [offSets, setOffSets] = useState(defaultStateOffSets);
  const [activeTabConvas, setActiveTabConvas] = useState(0);
  const [header, setHeader] = useState("");

  useEffect(() => {
    const tab1Y = tab1MenuRef.current?.offsetTop;
    const tab2Y = tab2MenuRef.current?.offsetTop;
    const tab3Y = tab3MenuRef.current?.offsetTop;
    const tab4Y = tab4MenuRef.current?.offsetTop;
    setOffSets({...offSets, about: tab1Y!, skills: tab2Y!, projects: tab3Y!, contacts: tab4Y!});
    setActiveTabConvas(tab1Y!);
    setActiveTC({...defaultState, about: "activeTC"});
    setActiveTab({...defaultState, about: "activeTab"});

    setHeader(about);
  }, []);

  useEffect(() => {
    drowMenuLine();
  }, [activeTabConvas]);

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

      ctx.lineTo(canvasWidth! / 2, activeTabConvas);
      ctx.lineTo(0, activeTabConvas);

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
        setActiveTabConvas(offSets.about);
        setHeader(about);
        break;
      case skills:
        setActiveTC({...defaultState, skills: "activeTC"});
        setActiveTab({...defaultState, skills: "activeTab"});
        setActiveTabConvas(offSets.skills);
        setHeader(skills);
        break;
      case projects:
        setActiveTC({...defaultState, projects: "activeTC"});
        setActiveTab({...defaultState, projects: "activeTab"});
        setActiveTabConvas(offSets.projects);
        setHeader(projects);

        break;
      case contacts:
        setActiveTC({...defaultState, contacts: "activeTC"});
        setActiveTab({...defaultState, contacts: "activeTab"});
        setActiveTabConvas(offSets.contacts);
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
          <div className={`tabContent tc-about ${activeTC.about}`}>&#62;1111111111111</div>
          <div className={`tabContent tc-skills ${activeTC.skills}`}>&#62;2222222222222</div>
          <div className={`tabContent tc-projects ${activeTC.projects}`}>&#62;333333333333</div>
          <div className={`tabContent tc-contacts ${activeTC.contacts}`}>&#62;44444444444</div>
        </section>
      </main>
    </div>
  );
};

export default AboutDiskette;
