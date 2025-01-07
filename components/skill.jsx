import Range from "@/UI/range";
import Headline from "./sub/headline";

export default function Skill() {
  return (
    <div id="skill">
      <Headline title="My Skills" subtitle="I eager to show you" />
      <div className="w-full md:w-3/4 mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-[30%] p-5 bg-gradient-box shadow-shadow1">
          <h1 className="text-2xl font-bold">Frontend</h1>
          <Range name="Elementor" percent={50} />
          <Range name="Typescript" percent={70} />
          <Range name="React Js" percent={99} />
          <Range name="Next Js" percent={80} />
          <Range name="Figma" percent={80} />
          <Range name="Tailwindcss" percent={95} />
        </div>
        <div className="w-full md:w-[30%] p-5 bg-gradient-box shadow-shadow1">
          <h1 className="text-2xl font-bold">Backend</h1>
          <Range name="Node Js" percent={90} />
          <Range name="Django" percent={30} />
          <Range name="C++" percent={70} />
          <Range name="Express Js" percent={90} />
        </div>
        <div className="w-full md:w-[30%] p-5 bg-gradient-box shadow-shadow1">
          <h1 className="text-2xl font-bold">Database</h1>
          <Range name="MongoDB" percent={99} />
          <Range name="Firebase" percent={80} />
          <Range name="PostgreSQL" percent={90} />
          <Range name="MySQL" percent={85} />
        </div>
      </div>
    </div>
  );
}
