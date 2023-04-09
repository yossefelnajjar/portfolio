import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import {
  CSS,
  Git,
  HTML,
  JS,
  React,
  Redux,
  Sass,
  Tailwind,
} from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}>
      <NavBar textColor="text-blue-400" />
      <div className="bg-black w-screen h-screen flex flex-col justify-center px-5 py-2 sm:pt-36 sm:h-fit md:pt-36 md:h-fit lg:pt-36 lg:h-fit xl:pt-36 xl:h-fit overflow-hidden">
        <div className="text-white text-9xl sm:text-8xl">
          About
          <span className="ct-animate-blink text-inherit">_</span>
        </div>
        <div className="text-4xl mt-8">
          Hi there👋, i'm Yousef
          <br />
          i'm specialized in turning any design into a special, interactive
          website
          <br />
          using some of the newest and most relied upon technologies in our
          Frontend development industry
        </div>
        <div className="technologies flex justify-between items-center mt-20 px-14 sm:flex-col md:flex-col lg:flex-col xl:flex-col w-screen">
          <img src={HTML} alt="HTML" className="w-36 hover:scale-105" />
          <img
            src={CSS}
            alt="HTML"
            className="w-36 hover:scale-105 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8"
          />
          <img
            src={JS}
            alt="HTML"
            className="w-36 hover:scale-105 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8"
          />
          <img
            src={React}
            alt="HTML"
            className="w-36 hover:scale-105 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8"
          />
          <img
            src={Redux}
            alt="HTML"
            className="w-36 hover:scale-105 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8"
          />
          <img
            src={Sass}
            alt="HTML"
            className="w-48 hover:scale-105 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8"
          />
          <img
            src={Tailwind}
            alt="HTML"
            className="w-36 hover:scale-105 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8"
          />
          <img
            src={Git}
            alt="HTML"
            className="w-36 hover:scale-105 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
