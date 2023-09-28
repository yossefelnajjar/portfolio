import linkedinLogo from "../images/linkedin.svg";
import githubLogo from "../images/github.svg";
export default function SocialMedia() {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="https://github.com/yossefelnajjar" target="_blank">
            <img src={githubLogo} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yossef-elnajjar/"
            target="_blank">
            <img src={linkedinLogo} />
          </a>
        </li>
      </ul>
    </div>
  );
}
