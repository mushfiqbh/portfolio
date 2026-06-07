import headshot from "./headshot.jpeg";
import client0 from "./client0.png";
import client1 from "./client1.jpg";
import client2 from "./client2.jpg";
import handshake from "./handshake.jpg";
import leadingai from "./leading-ai.png";
import leadingaiMobile from "./leadingai-mobile.jpg";
import leadingAiFigjam from "./LeadingAIFigJam.webp";
import PlatformSnap from "./platform-snap.png";
import PlatformAcademic from "./platform-academic.png";
import PlatformExam from "./platform-exam.png";
import BarnomalaSnap from "./barnomala-snap.png";
import lifeInsight from "./life-insight.png";
import cert_reactjs from "./react_frontend.png";
import cert_prob from "./problem_solving_basic.png";
import cert_sql from "./cert_sql.png";
import { IoServer, IoTime } from "react-icons/io5";
import { FaVuejs, FaNodeJs, FaPython, FaVectorSquare } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { HiServer } from "react-icons/hi";
import { DiJsBadge, DiScrum } from "react-icons/di";
import { MdWeb, MdOutlineCloudSync } from "react-icons/md";
import { TbCodeAsterisk, TbBrandKotlin, TbBrandDjango } from "react-icons/tb";
import {
  FaFingerprint,
  FaDocker,
  FaGitAlt,
  FaInfinity,
  FaTools,
  FaDeploydog,
} from "react-icons/fa";
import {
  SiPython,
  SiTypescript,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiRedux,
  SiFramework7,
  SiPhp,
  SiLaravel,
  SiOpenai,
} from "react-icons/si";
import { Database, GitBranch } from "lucide-react";
import { GrDeploy } from "react-icons/gr";
import { LuWaypoints } from "react-icons/lu";

export { headshot, handshake };

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
    title: "School Management SAAS Platform",
    images: [PlatformSnap, PlatformAcademic, PlatformExam],
    source: "private",
    live: "https://cloud.barnomala.com",
    tech: [
      { name: "Laravel", Icon: SiLaravel },
      { name: "Vue JS", Icon: FaVuejs },
      { name: "MySQL", Icon: SiMysql },
      { name: "CPanel", Icon: GrDeploy },
      { name: "Attendance SMS", Icon: FaFingerprint },
    ],
    features: [
      "Multi-Tenancy: Each school has its own isolated environment with customizable settings.",
      "Comprehensive Modules: Includes student information management, attendance tracking, grade management, and communication tools.",
      "User Roles and Permissions: Different access levels for administrators, teachers, students, and parents.",
      "Real-Time Notifications: Instant updates on attendance, grades, and announcements via SMS and email.",
      "Scalable Architecture: Built to handle multiple schools with high performance and reliability.",
    ],
  },
  {
    title: "LeadingAI: AI-Powered Agentic Chatbot",
    images: [leadingAiFigjam, leadingai, leadingaiMobile],
    source: "https://github.com/mushfiqbh/LeadingAI",
    live: "https://leadingai.vercel.app/",
    tech: [
      { name: "Next JS", Icon: RiNextjsLine },
      { name: "Node JS", Icon: FaNodeJs },
      { name: "Python", Icon: SiPython },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Open API", Icon: SiOpenai },
      { name: "RAG Pipeline", Icon: LuWaypoints },
      { name: "Supabase Vector DB", Icon: FaVectorSquare },
    ],
    features: [
      "Intelligent Agentic Behavior: Simulates human-like interactions and decision-making processes.",
      "Real-Time Chat Functionality: Provides seamless communication between users and the AI assistant.",
      "Customizable Responses: Allows for tailored interactions based on user preferences and context.",
      "Multi-Modal Support: Handles both text and voice inputs for a more natural user experience.",
      "Continuous Learning: Improves over time by learning from user interactions and feedback.",
    ],
  },
  {
    title: "Barnomala - Education Management System",
    images: [BarnomalaSnap],
    source: "private",
    live: "https://barnomala.com",
    tech: [
      { name: "Laravel", Icon: SiLaravel },
      { name: "PHP Blade", Icon: SiPhp },
      { name: "MySQL", Icon: SiMysql },
      { name: "Alpine JS", Icon: RiNextjsLine },
      { name: "CPanel", Icon: GrDeploy },
      { name: "Tailwind CSS", Icon: RiTailwindCssFill },
    ],
    features: [
      "Student Information Management: Centralized database for student records, including personal details, academic history, and attendance.",
      "Attendance Tracking: Real-time monitoring of student attendance with automated notifications for absences.",
    ],
  },
  {
    title: "CMS Project: Learning Health, Emotional, Life Lessons",
    images: [lifeInsight],
    source: "https://github.com/mushfiqbh/life-insight",
    live: "https://life-insight-swart.vercel.app/",
    tech: [
      { name: "NextJs", Icon: RiNextjsLine },
      { name: "NodeJs", Icon: FaNodeJs },
      { name: "Mongodb", Icon: SiMongodb },
      { name: "Typescript", Icon: SiTypescript },
      { name: "GraphQL", Icon: SiGraphql },
    ],
    features: [
      "User-Friendly Interface: Intuitive design that enhances user experience and promotes engagement.",
      "Personalized Learning Paths: Tailored content recommendations based on user preferences and learning history.",
      "Interactive Content: Incorporation of multimedia elements such as videos, quizzes, and discussion forums to enhance learning.",
    ],
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
