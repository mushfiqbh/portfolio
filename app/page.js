import Hero from "@/components/hero";
import Project from "@/components/project";
import Presenter from "@/components/sub/presenter";
import Achievement from "@/components/achievement";
import Services from "@/components/services";

export default function Home() {
  return (
    <main id="home">
      <Presenter />
      <Hero />
      <Project />
      <Achievement />
      <Services />
    </main>
  );
}
