import Hero from "@/components/hero";
import Project from "@/components/project";
import Resume from "@/components/resume";
import Skill from "@/components/skill";
import Presenter from "@/components/sub/presenter";
import Achievement from "@/components/achievement";
import Contribution from "@/components/contribution";
import Services from "@/components/services";
import CaseStudy from "@/components/case-study";

export default function Home() {
  return (
    <main id="home">
      <Presenter />
      <Hero />
      <Resume />
      <Project />
      <Skill />
      <Contribution />
      <Achievement />
      <CaseStudy />
      <Services />
    </main>
  );
}
