import Range from "@/UI/range";
import Headline from "./sub/headline";
import Card from "@/UI/card";
import { icons } from "@/assets/assets";

export default function Skill() {
  return (
    <div id="skill">
      <Headline title="My Skills" subtitle="I eager to show you" />
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card title="Languages" Icon={icons.coding}>
          <Range name="C++" percent={80} Icon={icons.cpp} />
          <Range name="Python" percent={65} Icon={icons.python} />
          <Range name="Javascript" percent={97} Icon={icons.js} />
          <Range name="Typescript" percent={85} Icon={icons.ts} />
        </Card>
        <Card title="Framework" Icon={icons.frontend}>
          <Range name="React Js" percent={80} Icon={icons.reactjs} />
          <Range name="Next Js" percent={99} Icon={icons.nextjs} />
          <Range name="Node Js" percent={95} Icon={icons.node} />
          <Range name="Django" percent={95} Icon={icons.django} />
        </Card>
        <Card title="Expertise" Icon={icons.backend}>
          <Range name="GraphQL" percent={80} Icon={icons.graphql} />
          <Range name="Redux" percent={50} Icon={icons.redux} />
          <Range name="MySQL" percent={80} Icon={icons.mysql} />
          <Range name="PostGreSQL" percent={80} Icon={icons.postgresql} />
        </Card>
        <Card title="Tools" Icon={icons.devops}>
          <Range name="Git/Github" percent={90} Icon={icons.git} />
          <Range name="Docker" percent={40} Icon={icons.docker} />
          <Range name="Firebase" percent={40} Icon={icons.firebase} />
        </Card>
        <Card title="Soft Skill" Icon={icons.database}>
          <Range name="Teamwork" percent={90} Icon={icons.teamwork} />
          <Range name="Time Management" percent={80} Icon={icons.time} />
          <Range name="CP" percent={80} Icon={icons.cp} />
        </Card>
      </div>
    </div>
  );
}
