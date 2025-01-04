import Header from "@/components/header";
import Hero from "@/components/hero";
import Project from "@/components/project";
import Presenter from "@/components/sub/presenter";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonial />
      <Presenter />
      <Project />
      <footer className="">footer</footer>
    </div>
  );
}
