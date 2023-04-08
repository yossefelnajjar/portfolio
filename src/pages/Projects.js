import { Admin, Bank } from "../assets/assets";
import NavBar from "../components/NavBar";

const Projects = () => {
  return (
    <>
      <NavBar textColor="text-red-500" />
      <div className="bg-black w-screen h-screen flex flex-col justify-center px-5 py-2 sm:pt-36 sm:h-fit md:h-fit md:pt-36 xl:pt-36 overflow-hidden">
        <div className="text-white text-9xl sm:text-7xl md:text-7xl">
          Projects
          <span className="ct-animate-blink text-inherit">_</span>
        </div>
        <div className="text-4xl mt-8">
          These Projects have been made with the Latest Technologies on the
          Market.
        </div>
        <div className="technologies flex justify-evenly items-center mt-20 px-14 sm:pl-5 sm:flex-col md:flex-col md:pl-5  w-screen">
          <div className="w-1/3 sm:w-full sm:mb-5 md:w-1/2 md:mb-3">
            <img
              src={Admin}
              alt="Project screenshot"
              className=" rounded-t-lg"
            />
            <div className="bg-slate-900 w-full rounded-b-lg p-4">
              <h2 className="text-xl">Admin Dasboard</h2>
              <a
                href="https://yossefdashboard.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-blue-500 underline">
                [Demo]
              </a>
              <a
                href="https://github.com/yossefelnajjar/admin-dashboard"
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-blue-500 underline">
                [Source Code]
              </a>
            </div>
          </div>
          <div className="w-1/3 sm:w-full sm:mb-5 md:w-1/2 ">
            <img
              src={Bank}
              alt="Project screenshot"
              className=" rounded-t-lg"
            />
            <div className="bg-slate-900 w-full rounded-b-lg p-4">
              <h2 className="text-xl">Bank Website</h2>
              <a
                href="https://yossef-hoobank.netlify.app/"
                className="mr-4 text-blue-500 underline"
                target="_blank"
                rel="noreferrer">
                [Demo]
              </a>
              <a
                href="https://github.com/yossefelnajjar/bank-website"
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-blue-500 underline">
                [Source Code]
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
