import Image from "next/image";
import HLine from "../ui/separator";
import Button from "@/components/ui/Button";
import { FaCode } from "react-icons/fa";
import { IoMdBrowsers, IoMdClose } from "react-icons/io";

export default function ProjectModal({ ref, project, onClose }) {
  const colors = [
    "bg-teal-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-rose-100",
  ];

  return (
    <div
      ref={ref}
      className="w-full max-w-3xl mx-auto max-h-[90vh] inset-0 z-10 mt-20 p-3 overflow-y-auto scrollbar-hidden fixed rounded-b-2xl bg-transparent backdrop-blur-xl"
    >
      <div className="w-full sticky z-50 top-0 mt-3 py-1 flex items-center justify-between bg-transparent">
        <div className="flex gap-3 items-center">
          <Button
            type="link"
            href={project.source}
            target="_blank"
            variant="rect"
            text="small"
            className="font-normal p-2"
          >
            <FaCode />
            Github
          </Button>
          <Button
            type="link"
            href={project.live}
            target="_blank"
            variant="rect"
            text="small"
            className="font-normal p-2"
          >
            <IoMdBrowsers />
            Live
          </Button>
        </div>

        <Button variant="round" onClick={onClose} className="p-4">
          <IoMdClose />
        </Button>
      </div>
      <div className="overflow-y-auto scrollbar-hidden max-h-[calc(100vh-80px)]">
        <div className="h-[300px] mt-3 relative overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover"
            fill
          />
        </div>

        <div className="w-fit flex items-center gap-3 flex-wrap mt-3 p-5 rounded-lg bg-gradient-box">
          {project.bio.split(" + ").map((item, index) => (
            <p
              key={index}
              className={`text-sm text-slate-500 rounded-2xl p-1 ${
                colors[index % colors.length]
              }`}
            >
              {item}
            </p>
          ))}
          <HLine className="my-5 w-full" />
          <h2 className="text-3xl font-bold mb-4 text-heading">
            {project.title}
          </h2>
          <p className="text-body mb-6">{project.info}</p>
        </div>

        <div className="w-fit mt-3 p-5 rounded-lg bg-gradient-box">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          debitis nulla numquam saepe voluptates porro reprehenderit quibusdam
          deserunt dolorum dolor voluptatibus error, blanditiis ex beatae
          possimus praesentium? Voluptas quo nisi deleniti optio placeat sit ab,
          culpa atque eveniet sunt explicabo repudiandae doloremque libero
          eligendi dolore alias id aliquid. Fugit, eveniet? Soluta praesentium a
          debitis exercitationem voluptatum deleniti animi rem natus consectetur
          corrupti maiores voluptas alias neque sint fugit, quos repudiandae
          quam nobis non quibusdam vitae quo? Dignissimos excepturi
          reprehenderit aut doloremque voluptas, sit iure vitae dolorum nobis.
          Corrupti dignissimos qui quisquam! Nobis sint ipsam corrupti enim unde
          iusto modi provident ullam omnis! Molestias, quidem. Nam cum, rerum
          delectus quo eveniet assumenda blanditiis ullam. Molestias, ratione
          incidunt recusandae nostrum adipisci perferendis, illum porro
          inventore suscipit fugit ad iusto. Necessitatibus in officiis quas
          cupiditate commodi. Consequatur aspernatur velit eum nisi optio quo,
          placeat esse, maiores ullam quod eveniet cumque deleniti soluta natus.
          Corrupti alias aliquam consequatur, quae doloribus accusamus.
        </div>
      </div>
    </div>
  );
}
