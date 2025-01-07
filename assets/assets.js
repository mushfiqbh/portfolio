import headshot from "./headshot.jpg";
import head_shot from "./headshot.png";
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
    bio: "Food Delivery App",
    title: "Order and Sell Foods",
    info: "See how our design improvements on an e-learning platform led to higher engagement, better retention rates, and improved learning outcomes.",
    image: foodApp,
    source: "https://github.com/mushfiqbh/food-app",
    live: "https://food-app.vercel.app",
  },
  {
    bio: "Life Insights Bangla",
    title: "Learning Health, Emotional, Life Lessons",
    info: "See how our design improvements on an e-learning platform led to higher engagement, better retention rates, and improved learning outcomes.",
    image: landingPage,
    source: "https://github.com/mushfiqbh/lifeinsight",
    live: "https://life-insight.vercel.app",
  },
  {
    bio: "Auto Front Page Generator",
    title: "Generate Custom PDF Automatic",
    info: "See how our design improvements on an e-learning platform led to higher engagement, better retention rates, and improved learning outcomes.",
    image: workout,
    source: "https://github.com/mushfiqbh/autocover",
    live: "https://autocover-sandy.vercel.app",
  },
];

const pricings = [
  {
    title: "Frontend",
    framework: "HTML/ Wordpress",
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
    framework: "ReactJs/ NextJs, NodeJs",
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
    framework: "NodeJs, Django/ Flask",
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

export { reviews, projects, pricings, headshot, head_shot };
