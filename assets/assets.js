import headshot from "./headshot.jpg";
import client0 from "./client0.png";
import client1 from "./client1.jpg";
import client2 from "./client2.jpg";
import foodApp from "./food-app.png";
import landingPage from "./landing.png";
import workout from "./workout.jpg";

const reviews = [
  {
    id: 0,
    pic: client0,
    name: "Nevine Acotanza 1",
    rule: "Cheif Operating Office",
    project: "Android App Development",
    info: "via Upwork - March 4, 2024",
    review:
      "Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University.",
  },
  {
    id: 1,
    pic: client1,
    name: "Nevine Acotanza 2",
    rule: "Cheif Operating Office",
    project: "Full Stack E-Commerce Site",
    info: "via Upwork - March 4, 2023",
    review:
      "Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University.",
  },
  {
    id: 2,
    pic: client2,
    name: "Nevine Acotanza 3",
    rule: "Cheif Operating Office",
    project: "Bank Management System",
    info: "via Upwork - March 4, 2022",
    review:
      "Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University. Currently Studying in Computer Science and Engineering at Leading University.",
  },
];

const projects = [
  {
    bio: "Auto Front Page Generator",
    title: "Enhancing Student Success",
    info: "See how our design improvements on an e-learning platform led to higher engagement, better retention rates, and improved learning outcomes.",
    image: foodApp,
    source: "https://github.com/mushfiqbh/autocover",
    live: "https://autocover-sandy.vercel.app",
  },
  {
    bio: "Auto Front Page Generator 2",
    title: "Enhancing Student Success",
    info: "See how our design improvements on an e-learning platform led to higher engagement, better retention rates, and improved learning outcomes.",
    image: landingPage,
    source: "https://github.com/mushfiqbh/autocover",
    live: "https://autocover-sandy.vercel.app",
  },
  {
    bio: "Auto Front Page Generator 3",
    title: "Enhancing Student Success",
    info: "See how our design improvements on an e-learning platform led to higher engagement, better retention rates, and improved learning outcomes.",
    image: workout,
    source: "https://github.com/mushfiqbh/autocover",
    live: "https://autocover-sandy.vercel.app",
  },
];

export { reviews, projects, headshot };
