import { Fragment, useState } from "react";
import astronautThumbsup from "../assets/images/astronaut/astronaut-thumbsup.svg";
import experienceBg      from "../assets/images/experienceBg.svg";
import github            from "../assets/images/github.svg";
import twitterCloneImg   from "../assets/images/experience/twitterClone.png";
import coffeeWebsiteImg  from "../assets/images/experience/coffeeWebsite.png";
import Background  from "../components/Background";
import SocialMedia from "../components/SocialMedia";

export default function Experience() {
  const [toShow, setToShow] = useState(0);
  
  const projectsData = [
    {
      id: 0,
      header: "Twitter Clone",
      imgSrc: twitterCloneImg,
      gihubLink: "https://github.com/yossefelnajjar/twitter-clone",
      live: "https://twitter-clone-yossef.vercel.app/",
    },
    {
      id: 1,
      header: "Coffee Website",
      imgSrc: coffeeWebsiteImg,
      gihubLink: "https://github.com/yossefelnajjar/coffee-website",
      live: "https://coffee-yossef.vercel.app/",
    },
  ];

  // custom slideshow
  function handleRight() {
    if (toShow < 1) {
      setToShow(toShow + 1);
    }
  }

  function handleLeft() {
    if (toShow < 2 && toShow > 0) {
      setToShow(toShow - 1);
    }
  }

  const projects = projectsData.map((project) => (
    <Fragment key={project.id}>
      <div className="sliderHeader">
        <p>{ project.header }</p>

        <div className="sliderLinks">
          <a href={project.gihubLink} target="_blank">
            <img src={github} alt="github-logo" />
            <p>Source Code</p>
          </a>

          <a href={project.live} target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            <p>Live demo</p>
          </a>
        </div>
      </div>

      <div className="sliderImage">
        <img src={project.imgSrc} alt="project-screenshot" />
      </div>
    </Fragment>
  ));

  const targetProject = [projects[toShow]];

  return (
    <>
      <div className="blinkMain"></div>

      <div className="slider">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={handleLeft}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>

        <div className="projects">{targetProject}</div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={handleRight}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>

      <SocialMedia />

      <Background showEarth={true} spaceBg={experienceBg} astronaut={astronautThumbsup} />
    </>
  );
}
