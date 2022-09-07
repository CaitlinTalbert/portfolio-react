import { v4 as uuidv4 } from "uuid";
import portfolioImg from "../images/portfolioImg.png";
import plantImg from "../images/plantImg.png";
import fitness from "../images/fitness.png";
import coderKid from "../images/coderKid.png";

const projects = [
  {
    id: uuidv4(),
    name: "My Personal Portfolio Website",
    desc: "Using React, JavaScript, HTML, and CSS to illustrate personal style and showcase current projects",
    img: portfolioImg,
    link: "https://relaxed-villani-874cfa.netlify.app/",
  },
  {
    id: uuidv4(),
    name: "AnywhereFit Website",
    desc: "Worked with a team to build a React app that gave fitness instructors a way to maintain schedules and records, allow clients to book class/trainers, and track sales. Enabled login/logout functionality through local token storage, removing token upon logout to prevent hacking, and including Axios and React private routes to access user-specific associated endpoints",
    img: fitness,
    link: "https://github.com/AnywhereFit/front-end",
  },

  {
    id: uuidv4(),
    name: "WaterMyPlants Project",
    desc: "Wrote Node.js backend utilizing Express and SQL to establish database structure, accessed through Express routing and API endpoints, enabling user ability to register, login, logout, list all plants, and associated CRUD functionality",
    img: plantImg,
    link: "https://github.com/CaitlinTalbert/water_my_plants_app",
  },
  {
    id: uuidv4(),
    name: "CoderHeroes Website",
    desc: "Worked with a cross-functional team to build and maintain CoderHeroes website. I helped write code to enable mobile responsiveness and worked with design team to redesign user flow",
    img: coderKid,
    link: "https://coderheroes.dev/",
  },
];

export default projects;
