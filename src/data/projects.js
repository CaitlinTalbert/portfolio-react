import { v4 as uuidv4 } from "uuid";
import WeatherImg from "../images/WeatherImg.png";
import portfolioImg from "../images/portfolioImg.png";
import plantImg from "../images/plantImg.png";
import coffeeImg from "../images/coffeeImg.png";
import animeImg from "../images/animeImg.png";

const projects = [
  {
    id: uuidv4(),
    name: "Caitlin's Portfolio Website",
    desc: "A website showcasing my skills as a web developer and web designer",
    img: portfolioImg,
  },
  {
    id: uuidv4(),
    name: "Weather App",
    desc: "An application to track the weather forecast",
    img: WeatherImg,
  },

  {
    id: uuidv4(),
    name: "Plant Website",
    desc: "A website where you can shop for plants, add them to your cart, and checkout!",
    img: plantImg,
  },
  {
    id: uuidv4(),
    name: "Coffee Shop Website",
    desc: "A website where you can shop for coffee!",
    img: coffeeImg,
  },
  {
    id: uuidv4(),
    name: "Anime Characters API",
    desc: "A simple webpage showing anime characters from an API",
    img: animeImg,
  },
];

export default projects;
