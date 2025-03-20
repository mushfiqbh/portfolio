import Button from "@/UI/Button";
import Headline from "./sub/headline";
import Link from "next/link";

export default function Blog() {
  return (
    <div id="blog">
      <Headline title="My Blogs" subtitle="Recent Content Writting" />
      <div className="w-full md:w-3/4 mx-auto flex flex-wrap md:flex-nowrap md:gap-5">
        <div className="w-full md:w-1/3 p-10 bg-gradient-box shadow-shadow1">
          <h1 className="text-3xl text-primary">
            0/1 Knapsack Problem Solution
          </h1>
          <h2 className="text-lg">Jan 7, 2025</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            illum, ducimus quisquam delectus quas unde reiciendis dicta. Ad est
            dolorum sapiente quo deleniti, ipsum nesciunt error dicta saepe
            officia, a ab
          </p>
          <br />
          <Link href="/">
            <Button type="button" text="small">
              Read More..
            </Button>
          </Link>
        </div>
        <div className="w-full md:w-1/3 p-10 bg-gradient-box shadow-shadow1">
          <h1 className="text-3xl text-primary">Roadmap To Be A Developer</h1>
          <h2 className="text-lg">Nov 1, 2024</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            illum, ducimus quisquam delectus quas unde reiciendis dicta. Ad est
            dolorum sapiente quo deleniti, ipsum nesciunt error dicta saepe
            officia, a ab
          </p>
          <br />
          <Button type="button" text="small" className="">
            Read More..
          </Button>
        </div>
        <div className="w-full md:w-1/3 p-10 bg-gradient-box shadow-shadow1">
          <h1 className="text-3xl text-primary">Everything About Next Js</h1>
          <h2 className="text-lg">Jan 12, 2025</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            illum, ducimus quisquam delectus quas unde reiciendis dicta. Ad est
            dolorum sapiente quo deleniti, ipsum nesciunt error dicta saepe
            officia, a ab
          </p>
          <br />
          <Button type="button" text="small" className="">
            Read More..
          </Button>
        </div>
      </div>
    </div>
  );
}
