import Header from "@/components/header";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Project from "@/components/project";
import Presenter from "@/components/sub/presenter";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <div id="home">
      <Header />
      <Hero />
      <Testimonial />
      <Presenter />
      <Project />
      <Pricing />
      <footer className="">footer</footer>
    </div>
  );
}
