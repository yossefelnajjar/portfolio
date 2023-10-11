import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";

export default function BurgerMenu() {
  function handleLink() {
    document.querySelector(".burgerMenu").style.transform =
      "translateY(-5000px)";
  }

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="burgerBars" onClick={() => { document.querySelector(".burgerMenu").style.transform = "translateY(0)";}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>

      <div className="burgerMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => { document.querySelector(".burgerMenu").style.transform = "translateY(-5000px)";}}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

        <div className="menu">
          <ul>
            <li>
              <Link to="/" onClick={handleLink}> home </Link>
            </li>

            <li>
              <Link to="/skills" onClick={handleLink}> my skills </Link>
            </li>

            <li>
              <Link to="/experience" onClick={handleLink}> my work experience </Link>
            </li>

            <li>
              <a href={resume} download> Resume </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
