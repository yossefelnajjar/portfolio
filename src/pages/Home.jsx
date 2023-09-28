import astronautLaptop from "../images/astronaut/astronaut-laptop.svg";
import space from "../images/bg.svg";
import Background from "../components/Background";
import MsgPopup from "../components/MsgPopup";
import { useSelector } from "react-redux";
import SocialMedia from "../components/SocialMedia";
import ScreenMsg from "../components/ScreenMsg";

export default function Home() {
  let visibility = useSelector((state) => state.lowerMsg);

  return (
    <>
      <div className="blinkMain"></div>
      <SocialMedia />
      <ScreenMsg
        upperMsg="HELLO FELLOW EARTH MEMBER"
        middleMsg="👾 I AM YOSSEF 👾"
      />
      {visibility && (
        <MsgPopup
          message={
            <>
              Greetings, Earthlings!🌍
              <br />
              I'm Yossef, and I come in peace to share my love for creating
              extraordinary web experiences from beyond the stars. 👾 As an
              extraterrestrial frontend developer with over 2 years of
              experience in your Earth's web development realm, I've had the
              cosmic pleasure of crafting web applications that are, dare I say,
              out of this world! 🚀 My mission is to meld human creativity with
              cutting-edge technology and create web wonders that transcend
              planetary boundaries.
            </>
          }
        />
      )}
      <Background
        showEarth={true}
        spaceBg={space}
        astronaut={astronautLaptop}
      />
    </>
  );
}
