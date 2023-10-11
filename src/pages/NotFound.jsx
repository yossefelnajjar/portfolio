import { Link } from "react-router-dom";
import astronaut from "../assets/images/astronaut/astronaut-dap.svg";

export default function NotFound() {
  return (
    <div className="notFound">
      <img src={astronaut} alt="astronaut-logo" />
      <p>404 Page Not Found</p>
      <Link to="/">Go back to Earth</Link>
    </div>
  );
}
