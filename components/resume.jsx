import HLine from "@/UI/hline";
import Headline from "./sub/headline";
import Button from "@/UI/Button";

export default function Resume() {
  return (
    <div id="resume">
      <Headline title="My Resume" subtitle="3+ years of experiences" />
      <div className="w-full md:w-3/4 mx-auto md:flex gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="h-20 text-2xl text-primary font-bold flex items-center justify-center bg-gradient-box rounded-lg shadow-shadow1">
            Educational Quality
          </h2>

          <div className="min-h-80 md:my-10 p-10 bg-gradient-box rounded-lg shadow-shadow1">
            <div className="w-full flex justify-between">
              <div>
                <h1 className="text-2xl font-bold md:text-3xl mb-2">
                  Computer Science & Engineering
                </h1>
                <h3>Leading University (2023 - Present)</h3>
              </div>
              <div>
                <Button text="small" className="text-primary">
                  3.8
                </Button>
              </div>
            </div>
            <HLine className="w-full my-5 md:my-7" />
            <div>
              I have been learning Data Structures and Algorithm, System design,
              competitive programming etc. Also Perticipating programming
              contests including icpc.
            </div>
          </div>

          <div className="min-h-80 md:my-10 p-10 bg-gradient-box rounded-lg shadow-shadow1">
            <div className="w-full flex justify-between">
              <div>
                <h1 className="text-2xl font-bold md:text-3xl mb-2">
                  A Level HSC Certificate
                </h1>
                <h3>BAF Shaheen College, Shamshernagar (2019 - 2021)</h3>
              </div>
              <div>
                <Button text="small" className="text-primary">
                  5.0
                </Button>
              </div>
            </div>
            <HLine className="w-full my-5 md:my-7" />
            <div>
              I learned things in science background. Also worked in extra
              curricular activities.
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <h2 className="h-20 text-2xl text-primary font-bold flex items-center justify-center bg-gradient-box rounded-lg shadow-shadow1">
            Job Experiences
          </h2>

          <div className="min-h-80 md:my-10 p-10 bg-gradient-box rounded-lg shadow-shadow1">
            <div className="w-full flex justify-between">
              <div>
                <h1 className="text-2xl font-bold md:text-3xl mb-2">
                  Full Time Professional Freelancer
                </h1>
                <h3>Upwork & Fiverr (2022 - Present)</h3>
              </div>
              <div>
                <Button text="small" className="text-primary">
                  5.0*
                </Button>
              </div>
            </div>
            <HLine className="w-full my-5 md:my-7" />
            <div>
              I working on custom web design, full stack web development, figma
              to website and achiving new experiences with modern projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
