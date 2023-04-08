import NavBar from "../components/NavBar";
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
    <>
      <NavBar textColor="text-blue-400" />
      <div className="bg-black w-screen h-screen flex flex-col justify-center px-3 py-2">
        <div className="text-white text-9xl">
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
        <div className="technologies flex justify-between items-center mt-20 px-14">
          <img src={HTML} alt="HTML" className="w-48 hover:scale-105" />
          <img src={CSS} alt="HTML" className="w-48 hover:scale-105" />
          <img src={JS} alt="HTML" className="w-48 hover:scale-105" />
          <img src={React} alt="HTML" className="w-48 hover:scale-105" />
          <img src={Redux} alt="HTML" className="w-48 hover:scale-105" />
          <img src={Sass} alt="HTML" className="w-48 hover:scale-105" />
          <img src={Tailwind} alt="HTML" className="w-48 hover:scale-105" />
          <img src={Git} alt="HTML" className="w-48 hover:scale-105" />
        </div>
      </div>
    </>
  );
};

export default About;
