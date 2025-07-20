import headshot from "./headshot.jpg";
import client0 from "./client0.png";
import client1 from "./client1.jpg";
import client2 from "./client2.jpg";
import handshake from "./handshake.jpg";
import leadingai from "./leading-ai.png";
import leadingaiMobile from "./leadingai-mobile.jpg";
import leadingAiFigjam from "./LeadingAIFigJam.webp";
import wordle from "./wordle.png";
import ArkLab1 from "./arklab1.png";
import ArkLab2 from "./arklab2.png";
import ArkLab3 from "./arklab3.png";
import cherrypick from "./cherrypick.png";
import lifeInsight from "./life-insight.png";
import cert_reactjs from "./react_frontend.png";
import cert_js from "./js_intermidiate.png";
import cert_prob from "./problem_solving_basic.png";
import cert_sql from "./cert_sql.png";
import { IoServer, IoTime } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { HiServer } from "react-icons/hi";
import { DiJsBadge, DiScrum } from "react-icons/di";
import { MdWeb, MdOutlineCloudSync } from "react-icons/md";
import { TbCodeAsterisk, TbBrandKotlin, TbBrandDjango } from "react-icons/tb";
import { FaDocker, FaGitAlt, FaInfinity, FaAws, FaTools } from "react-icons/fa";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { FcMindMap } from "react-icons/fc";
import {
  SiHtml5,
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
  SiFramework7,
} from "react-icons/si";

export { headshot, handshake };

export const icons = {
  html: SiHtml5,
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
  tools: FaTools,
  skill: GiSkills,
  mindmap: FcMindMap,
  framework: SiFramework7,
  zustand: MdOutlineCloudSync,
  scrum: DiScrum,
};

export const contributions = [
  {
    repo: "mui/material-ui",
    description: "Fix a bug and write unit testing documentation",
    link: "https://github.com/mui/material-ui/pull/45345",
  },
  {
    repo: "ReactChat",
    description:
      "Contributed bug fixes and improved Responsiveness for mobile and tablet",
    link: "https://github.com/urstrulynishkarsh/ReactChat/pull/223",
  },
];

export const certificates = [
  {
    title: "Frontend Developer (React)",
    url: "https://www.hackerrank.com/certificates/1e260e7d33ff",
    image: cert_reactjs,
  },
  {
    title: "JavaScript (Intermediate)",
    url: "https://www.hackerrank.com/certificates/ba6a1c07663f",
    image: cert_js,
  },
  {
    title: "SQL (Advanced)",
    url: "https://www.hackerrank.com/certificates/d0890475619e",
    image: cert_sql,
  },
  {
    title: "Problem Solving (Basic)",
    url: "https://www.hackerrank.com/certificates/bcc6e07a913c",
    image: cert_prob,
  },
];

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
    tech: "OpenAI + MCP Server + NextJs + NodeJs + Firebase + Zustand + Cloudinary + Tailwind",
    title: "LeadingAI: AI-Powered Agentic Chatbot",
    info: "Integrates OpenRouter's AI capabilities to provide a responsive and intelligent chatbot experience. It features a sleek UI with real-time chat functionality.",
    images: [leadingAiFigjam, leadingai, leadingaiMobile],
    source: "https://github.com/mushfiqbh/LeadingAI",
    live: "https://leadingai.vercel.app/",
  },
  {
    tech: "NextJs + NodeJs + Mongodb + Redux + Cloudinary + Multilingustic",
    title: "CMS Project: Learning Health, Emotional, Life Lessons",
    info: "See how our design improvements on an e-learning platform led to higher engagement, better retention rates, and improved learning outcomes.",
    images: [lifeInsight],
    source: "https://github.com/mushfiqbh/life-insight",
    live: "https://life-insight-swart.vercel.app/",
  },
  {
    tech: "NextJs + Tailwind + NextAuth + SSR",
    title: "ArkLab AI Agents Catalog",
    info: "A comprehensive catalog of AI agents, showcasing their capabilities and features. It includes a user-friendly interface for browsing and interacting with various AI agents.",
    images: [ArkLab1, ArkLab2, ArkLab3],
    source: "https://github.com/mushfiqbh/ArkLab-AI-Agents",
    live: "https://ark-lab-ai-agents-mushfiq.vercel.app/",
  },
  {
    tech: "NextJs + Typescript + Firebase",
    title: "Reseller E-Commerce Platform",
    info: "A modern and responsive Multi-vendor online shop with NextJs. It features a sleek UI with role-based user authentication and maintaining order, delivery, payment flawlessly.",
    images: [cherrypick],
    source: "https://github.com/mushfiqbh/cherrypick",
    live: "https://cherrypickshop.vercel.app",
  },
  {
    tech: "ReactJs + SASS",
    title: "Wordle Game, Guess Word",
    info: "A fun and interactive Wordle game built with React. Players have limited attempts to guess a hidden word using feedback on letter accuracy.",
    images: [wordle],
    source: "https://github.com/mushfiqbh/wordle-react",
    live: "https://wordle25.netlify.app/",
  },
];

export const projectTypes = [
  "custom",
  "ecommerce",
  "portfolio",
  "socialMedia",
  "gaming",
  "dataAnalytics",
  "foodDelivery",
  "projectManager",
  "groceryDelivery",
  "workoutTracker",
  "cms",
];
