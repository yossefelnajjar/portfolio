import astronautLaptopStand from "../images/astronaut/astronaut-laptop-stand.svg";
import skillsBg from "../images/skillsBg.svg";
import Background from "../components/Background";
import MsgPopup from "../components/MsgPopup";
import { useSelector } from "react-redux";
import SocialMedia from "../components/SocialMedia";
import ScreenMsg from "../components/ScreenMsg";

export default function Skills() {
  let visibility = useSelector((state) => state.lowerMsg);

  return (
    <>
      <div className="blinkMain"></div>
      <SocialMedia />
      <ScreenMsg upperMsg="SKILLS" />
      {visibility && (
        <MsgPopup
          message={
            <>
              Skills i gained from earthlings
              <div className="skillsGrid">
                <div className="skillCard">
                  HTML
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/html-5.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  css
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/css-3.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  javascript
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/javascript.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  react.js
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/react.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  react router
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/react-router.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  Redux
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/redux.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  git & github
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/git.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  Sass
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/sass.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  Bootstrap
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/bootstrap.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  tailwindcss
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/tailwindcss-icon.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  matrial ui
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/material-ui.svg"
                    alt=" logo"
                  />
                </div>
                <div className="skillCard">
                  npm
                  <img
                    src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/npm.svg"
                    alt=" logo"
                  />
                </div>
              </div>
            </>
          }
        />
      )}
      <Background
        showEarth={true}
        spaceBg={skillsBg}
        astronaut={astronautLaptopStand}
      />
    </>
  );
}
