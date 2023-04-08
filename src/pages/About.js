import NavBar from "../components/NavBar";

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
        <div className="technologies text-center mt-20"></div>
      </div>
    </>
  );
};

export default About;
