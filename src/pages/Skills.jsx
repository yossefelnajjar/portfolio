import { useSelector } from "react-redux";
import astronautLaptopStand from "../assets/images/astronaut/astronaut-laptop-stand.svg";
import skillsBg             from "../assets/images/skillsBg.svg";
import Background  from "../components/Background";
import MsgPopup    from "../components/MsgPopup";
import SocialMedia from "../components/SocialMedia";
import ScreenMsg   from "../components/ScreenMsg";

export default function Skills() {
  const visibility = useSelector((state) => state.lowerMsg);

  const skillsData = [
    {
      name: "HTML",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/html-5.svg",
    },
    {
      name: "css",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/css-3.svg",
    },
    {
      name: "javascript",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/javascript.svg",
    },
    {
      name: "react.js",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/react.svg",
    },
    {
      name: "react router",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/react-router.svg",
    },
    {
      name: "Redux",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/redux.svg",
    },
    {
      name: "git & github",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/git.svg",
    },
    {
      name: "Sass",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/sass.svg",
    },
    {
      name: "Bootstrap",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/bootstrap.svg",
    },
    {
      name: "tailwindcss",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/tailwindcss-icon.svg",
    },
    {
      name: "matrial ui",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/material-ui.svg",
    },
    {
      name: "npm",
      image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/npm.svg",
    }
  ];

  const skills = skillsData.map((skill) => (
    <div className="skillCard">
        <p>{skill.name}</p>
        <img src={skill.image} alt="skill-icon" />
    </div>
  ))

  return (
    <>
      <div className="blinkMain"></div>
      <SocialMedia />
      <ScreenMsg upperMsg="SKILLS" />
      
      { visibility && (
        <MsgPopup
          message={
            <>
              <p> Skills i gained from earthlings </p>
              <div className="skillsGrid">
                { skills }
              </div>
            </>
          }
        />
      ) }
      
      <Background showEarth={true} spaceBg={skillsBg} astronaut={astronautLaptopStand} />
    </>
  );
}
