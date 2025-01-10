import Range from "@/UI/range";
import Headline from "./sub/headline";
import Card from "@/UI/card";
import { icons } from "@/assets/assets";

export default function Skill() {
  return (
    <div id="skill">
      <Headline title="My Skills" subtitle="I eager to show you" />
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card title="Programming" Icon={icons.coding}>
          <Range name="C++" percent={80} Icon={icons.cpp} />
          <Range name="Python" percent={65} Icon={icons.python} />
          <Range name="Javascript" percent={97} Icon={icons.js} />
          <Range name="Typescript" percent={85} Icon={icons.ts} />
        </Card>
        <Card title="Frontend" Icon={icons.frontend}>
          <Range name="Next Js" percent={80} Icon={icons.nextjs} />
          <Range name="React Js" percent={99} Icon={icons.reactjs} />
          <Range name="Tailwindcss" percent={95} Icon={icons.tailwind} />
        </Card>
        <Card title="Backend" Icon={icons.backend}>
          <Range name="Node Js" percent={80} Icon={icons.node} />
          <Range name="Django" percent={50} Icon={icons.django} />
        </Card>
        <Card title="Database" Icon={icons.database}>
          <Range name="MySQL" percent={90} Icon={icons.mysql} />
          <Range name="PostgreSQL" percent={80} Icon={icons.postgresql} />
          <Range name="MongoDB" percent={80} Icon={icons.mongodb} />
          <Range name="Firebase" percent={80} Icon={icons.firebase} />
        </Card>
        <Card title="DevOps" Icon={icons.devops}>
          <Range name="Git/Github" percent={90} Icon={icons.git} />
          <Range name="Docker" percent={40} Icon={icons.docker} />
          <Range name="AWS" percent={40} Icon={icons.aws} />
        </Card>
      </div>
    </div>
  );
}
