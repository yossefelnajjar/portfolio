import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="bg-black w-screen h-screen flex flex-col px-3 py-2">
      <div className="banner flex-1 flex justify-center items-center text-7xl cursor-default">
        Y<span className="ct-animate-blink">_</span>OSSEF
      </div>
      <div className="content flex-1 flex justify-center items-center gap-1 sm:flex-col md:flex-col">
        <div className="about flex-1 cursor-pointer bg-blue-400 h-full rad flex flex-col items-start justify-around text-7xl overflow-hidden transition-all py-5 hover:scale-95 sm:text-3xl sm:py-7 md:text-5xl md:py-20 lg:text-5xl lg:py-20 xl:text-5xl xl:py-20">
          <div className="text-inherit text-slate-950 pl-7 sm:px-3 md:px-2 lg:px-2 xl:px-2">
            I'm specialised in turning design into a stunning website.
          </div>
          <div className="text-slate-950 translate-y-80 pl-4 sm:pl-3 md:pl-2 lg:pl-2 xl:pl-2 ">
            About
            <span className="ct-animate-blink text-inherit">_</span>
          </div>
        </div>
        <div className="right flex-1 flex flex-col gap-1 h-full w-full">
          <div className="rad bg-red-500 flex-1 h-full flex cursor-pointer items-center justify-evenly text-5xl overflow-hidden hover:scale-95 transition-all hover:pr-96 sm:text-2xl sm:hover:text-2xl sm:hover:pr-52 sm:hover:pl-4 md:text-3xl md:hover:text-3xl md:hover:pr-40 md:hover:pl-4 md:py-7 lg:text-4xl lg:hover:text-4xl lg:hover:pr-40 xl:text-4xl xl:hover:text-4xl xl:hover:pr-40">
            My Projects
            <div className="translate-x-80 sm:translate-x-40  md:translate-x-36 lg:translate-x-32 xl:translate-x-40">
              <FontAwesomeIcon icon={faArrowRightLong} />
            </div>
          </div>
          <div className="contact rad bg-slate-700 w-full flex items-end justify-between text-4xl overflow-hidden p-16 cursor-pointer transition-all hover:scale-95 sm:py-2 sm:px-14 md:py-6 md:px-24 lg:py-6 lg:px-24 xl:px-24">
            <div>Get in touch!</div>
            <div className="paper-plane translate-y-32 -translate-x-32 md:ml-4">
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
