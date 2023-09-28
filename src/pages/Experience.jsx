import astronautThumbsup from "../images/astronaut/astronaut-thumbsup.svg";
import experienceBg from "../images/experienceBg.svg";
import Background from "../components/Background";
import SocialMedia from "../components/SocialMedia";
import github from "../images/github.svg";
import realEstate from "../images/project.png";
import { Fragment, useState } from "react";

export default function Experience() {
  const [toShow, setToShow] = useState(0);
  const images = [
    {
      id: 0,
      header: "Realy",
      imgSrc: realEstate,
      gihubLink: "asljfdals;",
      live: "dslafnhklasgj",
    },
    {
      id: 1,
      header: "Real State 1",
      imgSrc: realEstate,
      gihubLink: "asljfdals;",
      live: "dslafnhklasgj",
    },
    {
      id: 2,
      header: "Real State 2",
      imgSrc: realEstate,
      gihubLink: "asljfdals;",
      live: "dslafnhklasgj",
    },
    {
      id: 3,
      header: "Real State 3",
      imgSrc: realEstate,
      gihubLink: "asljfdals;",
      live: "dslafnhklasgj",
    },
  ];

  // custom slideshow
  function handleRight() {
    if (toShow < 3) {
      setToShow(toShow + 1);
    }
  }

  function handleLeft() {
    if (toShow < 4 && toShow > 0) {
      setToShow(toShow - 1);
    }
  }

  const projects = images.map((project) => (
    <Fragment key={project.id}>
      <div className="sliderHeader">
        <p>{project.header}</p>
        <div className="sliderLinks">
          <a href={project.gihubLink}>
            <img src={github} alt="" />
            <p>source code</p>
          </a>
          <a href={project.live}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            <p>Live demo</p>
          </a>
        </div>
      </div>

      <div className="sliderImage">
        <img src={project.imgSrc} alt="project screenshot" />
      </div>
    </Fragment>
  ));

  const targetProject = [projects[toShow]];

  return (
    <>
      <div className="blinkMain"></div>

      <div className="slider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={handleLeft}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>

        <div className="projects">{targetProject}</div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={handleRight}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
      <SocialMedia />

      <Background
        showEarth={true}
        spaceBg={experienceBg}
        astronaut={astronautThumbsup}
      />
    </>
  );
}
