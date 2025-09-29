import headshot from "./headshot.png";
import client0 from "./client0.png";
import client1 from "./client1.jpg";
import client2 from "./client2.jpg";
import handshake from "./handshake.jpg";
import leadingai from "./leading-ai.png";
import leadingaiMobile from "./leadingai-mobile.jpg";
import leadingAiFigjam from "./LeadingAIFigJam.webp";
import BarnomalaSnap from "./barnomala-snap.png";
import cherrypick from "./cherrypick.png";
import lifeInsight from "./life-insight.png";
import cert_reactjs from "./react_frontend.png";
import cert_prob from "./problem_solving_basic.png";
import cert_sql from "./cert_sql.png";
import { IoServer, IoTime } from "react-icons/io5";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { HiServer } from "react-icons/hi";
import { DiJsBadge, DiScrum } from "react-icons/di";
import { MdWeb, MdOutlineCloudSync } from "react-icons/md";
import { TbCodeAsterisk, TbBrandKotlin, TbBrandDjango } from "react-icons/tb";
import { FaDocker, FaGitAlt, FaInfinity, FaAws, FaTools, FaDeploydog } from "react-icons/fa";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { FcDeployment, FcMindMap } from "react-icons/fc";
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
  SiPhp,
  SiLaravel,
} from "react-icons/si";
import { Database, MessageCircle, GitBranch } from "lucide-react";
import { GrDeploy } from "react-icons/gr";

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
  php: SiPhp,
  laravel: SiLaravel,
  cpanel: GrDeploy,
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
    tech: "Laravel + PHP + MySQL + Alpine JS + CPanel",
    title: "Barnomala - Education Management System",
    info: "A comprehensive web-based education management system designed to streamline administrative tasks, enhance communication, and improve overall efficiency for educational institutions.",
    images: [BarnomalaSnap],
    source: "https://github.com/mushfiqbh/barnomala",
    live: "https://barnomala.com",
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
    tech: "NextJs + Typescript + Firebase",
    title: "Reseller E-Commerce Platform",
    info: "A modern and responsive Multi-vendor online shop with NextJs. It features a sleek UI with role-based user authentication and maintaining order, delivery, payment flawlessly.",
    images: [cherrypick],
    source: "https://github.com/mushfiqbh/cherrypick",
    live: "https://cherrypickshop.vercel.app",
  },
  {
    tech: "OpenAI + MCP Server + NextJs + NodeJs + Firebase + Zustand + Cloudinary + Tailwind",
    title: "LeadingAI: AI-Powered Agentic Chatbot",
    info: "Integrates OpenRouter's AI capabilities to provide a responsive and intelligent chatbot experience. It features a sleek UI with real-time chat functionality.",
    images: [leadingAiFigjam, leadingai, leadingaiMobile],
    source: "https://github.com/mushfiqbh/LeadingAI",
    live: "https://leadingai.vercel.app/",
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

export const caseStudies = [
  {
    id: 1,
    category: "Problem Solving",
    title: "Speeding Up Patient Search in a Hospital Management System",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    background:
      "Patient search feature was frustrating doctors and staff with 4-second load times, slowing down critical workflows.",
    challenge:
      "The system was performing full table scans on three large tables (~50K+ records each) during searches, making it inefficient and resource-heavy.",
    actions: [
      "Analyzed the SQL query execution plan to find the performance bottlenecks",
      "Added indexes to patient_id and doctor_id columns",
      "Refactored queries using subselects and LIMIT clauses to avoid unnecessary data retrieval",
      "Introduced server-side caching for frequent search terms",
    ],
    results: [
      "Reduced search time from 4 seconds to under 0.5 seconds",
      "Server CPU usage during peak hours dropped by ~30%",
      "Improved user satisfaction, as confirmed by feedback from hospital staff",
    ],
    techStack: [
      "SQL",
      "Database Optimization",
      "Query Profiling",
      "Indexing",
      "Server-Side Caching",
    ],
    metrics: {
      timeImprovement: "87.5%",
      cpuReduction: "30%",
      userSatisfaction: "High",
    },
  },
  {
    id: 2,
    category: "Learning Journey",
    title: "Building a Real-Time Chat Feature for a P2P Escrow Platform",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-500",
    background:
      "For a P2P escrow platform I was building, real-time communication between buyers and sellers was essential. I had no prior experience with WebSockets or Socket.io.",
    challenge:
      "Implementing a secure, scalable chat system that supports concurrent users and persists messages.",
    actions: [
      "Learned the fundamentals of WebSockets and Socket.io through official docs and small side projects",
      "Created a proof-of-concept Node.js chat app to master event handling, namespaces, and rooms",
      "Integrated the chat into the main platform, ensuring data persistence via Firebase Firestore",
      "Implemented message encryption and authentication middleware for security",
    ],
    results: [
      "Delivered a real-time chat that supports 100+ concurrent users with no downtime",
      "Enabled instant buyer-seller communication, reducing deal negotiation time by 40%",
      "Increased platform trust and engagement, as shown by higher repeat usage rates",
    ],
    techStack: [
      "Socket.io",
      "Node.js",
      "Firebase",
      "WebSocket Protocol",
      "Security Best Practices",
    ],
    metrics: {
      concurrentUsers: "100+",
      negotiationTime: "40% faster",
      uptime: "100%",
    },
  },
  {
    id: 3,
    category: "Collaboration Style",
    title:
      "Seamless Frontend-Backend Integration for a Research Collaboration Platform",
    icon: GitBranch,
    color: "from-purple-500 to-pink-500",
    background:
      "As part of a 4-member development team, I was tasked with coordinating the integration between a Laravel backend and React.js frontend.",
    challenge:
      "Team members were working on different stacks, and there was a risk of misalignment on API design and data formats, which could delay delivery.",
    actions: [
      "Scheduled daily stand-ups to align progress and address blockers early",
      "Created detailed API documentation via Postman Collections to ensure consistent data exchange",
      "Organized code walkthroughs for onboarding and knowledge sharing",
      "Used GitHub Issues and Milestones to keep the project organized and transparent",
    ],
    results: [
      "Delivered the integrated platform two weeks ahead of schedule",
      "Zero major integration bugs were reported after launch",
      "Enhanced team synergy and knowledge sharing for future collaborations",
    ],
    techStack: [
      "Agile Workflow",
      "API Documentation",
      "GitHub Project Management",
      "Cross-Team Communication",
    ],
    metrics: {
      delivery: "2 weeks early",
      bugs: "0 major",
      teamEfficiency: "Enhanced",
    },
  },
];
