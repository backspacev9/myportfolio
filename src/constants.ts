import {Disk, ProjectsItem} from "./interfaces";

export const disks: Array<Disk> = [
  {
    id: 1,
    label: "about",
    image: "./img/diskette1.png",
    rout: "/about",
  },
  {
    id: 2,
    label: "projects",
    image: "./img/diskette2.png",
    rout: "/projects",
  },
];

export const projectsApps: Array<ProjectsItem> = [
  {
    tittle: "Match-match game",
    text: "11",
    imgUrl: "./img/preview/match-match.png",
    sourceUrl: "",
  },
  {
    tittle: "English for kid",
    text: "22",
    imgUrl: "./img/preview/match-match.png",
    sourceUrl: "#",
  },
  {
    tittle: "Virtual piano",
    text: "33",
    imgUrl: "./img/preview/match-match.png",
    sourceUrl: "#",
  },
  {
    tittle: "Photo Filter",
    text: "444",
    imgUrl: "./img/preview/match-match.png",
    sourceUrl: "#",
  },
];
export const projectsLanding: Array<ProjectsItem> = [
  {
    tittle: "Online Zoo",
    text: "5",
    imgUrl: "./img/preview/match-match.png",
    sourceUrl: "#",
  },
  {
    tittle: "Wildlife",
    text: "6666",
    imgUrl: "./img/preview/match-match.png",
    sourceUrl: "#",
  },
  {
    tittle: "Bank Card",
    text: "6666",
    imgUrl: "./img/preview/match-match.png",
    sourceUrl: "https://backspacev9.github.io/BankCard/",
  },
];

export const iconPath = {
  fullscreen: "./icons/fullscreen.png",
  fullscreenExit: "./icons/fullscreen_exit.png",
};
export const Contacts = {
  country: "Belarus",
  city: "Vitebsk",
  phone: "+375 (29) 248-44-94",
  email: "backspacev9@gmail.com",
};
