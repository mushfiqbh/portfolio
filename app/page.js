import Blog from "@/components/blog";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Project from "@/components/project";
import Resume from "@/components/resume";
import Skill from "@/components/skill";
import Presenter from "@/components/sub/presenter";
import ContactMe from "@/components/sub/contact";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <Resume />
      <Skill />
      <Project />
      <Pricing />
      <Testimonial />
      <Blog />
      <ContactMe />
      <Presenter />
    </div>
  );
}
