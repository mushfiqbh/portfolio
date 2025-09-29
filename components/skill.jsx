import Range from "./ui/range";
import Headline from "./sub/headline";
import Card from "./ui/card";
import { icons } from "@/assets/assets";

export default function Skill() {
  return (
    <div id="skill">
      <Headline title="My Skills" subtitle="I eager to show you" />
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card title="Languages" Icon={icons.coding}>
          <Range name="PHP" percent={90} Icon={icons.php} />
          <Range name="Javascript" percent={97} Icon={icons.js} />
          <Range name="Typescript" percent={85} Icon={icons.ts} />
          <Range name="C++" percent={65} Icon={icons.cpp} />
        </Card>
        <Card title="Framework" Icon={icons.framework}>
          <Range name="Laravel" percent={85} Icon={icons.laravel} />
          <Range name="React Js" percent={80} Icon={icons.reactjs} />
          <Range name="Next Js" percent={95} Icon={icons.nextjs} />
          <Range name="Node Js" percent={90} Icon={icons.node} />
        </Card>
        <Card title="Expertise" Icon={icons.skill}>
          <Range name="MySQL" percent={80} Icon={icons.mysql} />
          <Range name="GraphQL" percent={80} Icon={icons.graphql} />
          <Range name="Redux" percent={50} Icon={icons.redux} />
          <Range name="Zustand" percent={80} Icon={icons.zustand} />
        </Card>
        <Card title="Tools" Icon={icons.tools}>
          <Range name="C-Panel" percent={50} Icon={icons.cpanel} />
          <Range name="Firebase" percent={60} Icon={icons.firebase} />
          <Range name="GitFlow" percent={90} Icon={icons.git} />
          <Range name="Docker" percent={70} Icon={icons.docker} />
        </Card>
        <Card title="Soft Skill" Icon={icons.mindmap}>
          <Range name="Teamwork" percent={90} Icon={icons.teamwork} />
          <Range name="Time Management" percent={80} Icon={icons.time} />
          <Range name="CP" percent={80} Icon={icons.cp} />
        </Card>
      </div>
    </div>
  );
}
