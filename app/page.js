import Blog from "@/components/blog";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Project from "@/components/project";
import Resume from "@/components/resume";
import Skill from "@/components/skill";
import Presenter from "@/components/sub/presenter";
import ContactMe from "@/components/contact";
import Testimonial from "@/components/testimonial";
import Achievement from "@/components/achievement";

export default function Home() {
  return (
    <main id="home">
      <Presenter />
      <Hero />
      <Resume />
      <Project />
      <Skill />
      {/* <Achievement /> */}
      <Pricing />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      <ContactMe />
    </main>
  );
}
