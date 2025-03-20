import headshot from "./headshot.jpg";
import client0 from "./client0.png";
import client1 from "./client1.jpg";
import client2 from "./client2.jpg";
import autocover from "./autocover.png";
import hoobank from "./hooback.png";
import lifeInsight from "./life-insight.png";
import { IoServer, IoTime } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { HiServer } from "react-icons/hi";
import { DiJsBadge } from "react-icons/di";
import { MdWeb } from "react-icons/md";
import { TbCodeAsterisk, TbBrandKotlin, TbBrandDjango } from "react-icons/tb";
import { FaDocker, FaGitAlt, FaInfinity, FaAws } from "react-icons/fa";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import {
  SiPython,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiRedux,
  SiCodeforces,
  SiCplusplus,
} from "react-icons/si";

export { headshot };

export const icons = {
  frontend: MdWeb,
  backend: HiServer,
  database: IoServer,
  devops: FaInfinity,
  reactjs: FaReact,
  nextjs: RiNextjsLine,
  coding: TbCodeAsterisk,
  cpp: SiCplusplus,
  python: SiPython,
  js: DiJsBadge,
  ts: SiTypescript,
  kotlin: TbBrandKotlin,
  node: FaNodeJs,
  tailwind: RiTailwindCssFill,
  django: TbBrandDjango,
  git: FaGitAlt,
  firebase: SiFirebase,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  docker: FaDocker,
  aws: FaAws,
  graphql: SiGraphql,
  redux: SiRedux,
  teamwork: BiLogoMicrosoftTeams,
  time: IoTime,
  cp: SiCodeforces,
};

export const reviews = [
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

export const projects = [
  {
    bio: "NextJs + NodeJs + Mongodb + Redux + MultiLanguage",
    title: "Learning Health, Emotional, Life Lessons",
    info: "See how our design improvements on an e-learning platform led to higher engagement, better retention rates, and improved learning outcomes.",
    image: lifeInsight,
    source: "https://github.com/mushfiqbh/life-insight",
    live: "https://life-insight-swart.vercel.app/",
  },
  {
    bio: "Vite + PDFjs",
    title: "Auto Front Page Generator",
    info: "Generate front page for assignment and lab report for leading university students",
    image: autocover,
    source: "https://github.com/mushfiqbh/autocover",
    live: "https://autocover-eight.vercel.app/",
  },
  {
    bio: "React Js",
    title: "Banking System Landing Page",
    info: "A modern and responsive banking system landing page built with React. It features a sleek UI with financial service highlights and engaging design elements.",
    image: hoobank,
    source: "https://github.com/mushfiqbh/hoobank",
    live: "https://hoobank25.netlify.app",
  },
];

export const pricings = [
  {
    title: "Frontend",
    framework: "HTML/CSS/ReactJs/Firebase",
    price: 50,
    info: "Basic website with essential features with potentially a lightweight CMS.",
    features: [
      "Simple Portfolio",
      "About Us Page",
      "Contact Form",
      "HTML/ CSS/ JS",
      "ReactJs Single Page Application",
      "Responsive Design",
      "Wordpress",
    ],
  },

  {
    title: "Full Stack",
    framework: "ReactJs/NextJs/NodeJs",
    price: 100,
    info: "Functional website with key functionalities (contact forms, e-commerce, blog) includes a server-side language and a database and a framework",
    features: [
      "Custom Design",
      "Customizable Layouts",
      "SEO Optimized Integration",
      "NextJs/ ReactJs",
      "NodeJs",
      "MySQL/ Mongodb/ PostgreSQL",
      "Email Subscription",
    ],
  },
  {
    title: "Enterprise Level",
    framework: "NextJs/NodeJs/Django",
    price: 150,
    info: "Complex, customized website with advanced features (e-commerce, integrations, custom designs) and also may involve more specialized technologies, dedicated project manager",
    features: [
      "Custom Product Pages",
      "Shopping Cart & Checkout",
      "Cloud hosting",
      "AI/ML integrations",
      "Payment Gateways Integration",
      "SEO Optimization",
      "Responsive Design",
    ],
  },
];
