import NavBar from "../components/NavBar";

const Projects = () => {
  return (
    <>
      <NavBar textColor="text-blue-400" />
      <div className="bg-black w-screen h-screen flex flex-col justify-center px-3 py-2">
        <div className="text-white text-9xl">
          Projects
          <span className="ct-animate-blink text-inherit">_</span>
        </div>
      </div>
    </>
  );
};

export default Projects;
