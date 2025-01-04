import CodeforcesRating from "./sub/cf-rating";
import AboutInfo from "./sub/about";

export default function Hero() {
  return (
    <>
      <div id="hero" className="w-full block lg:flex pt-24">
        <AboutInfo />
        <div className="w-full lg:w-1/2 p-5 lg:p-20">
          <CodeforcesRating />
        </div>
      </div>
      <div className="w-[90%] border-t-2 border-slate-200 dark:border-slate-800 mx-auto"></div>
    </>
  );
}
