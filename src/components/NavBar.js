import { Link } from "react-router-dom";

const NavBar = ({ textColor }) => {
  return (
    <Link
      to="/"
      className={
        "bg-black w-screen h-fit px-3 py-2 fixed underline cursor-pointer z-50 " +
        textColor
      }>
      &lt; Home
    </Link>
  );
};

export default NavBar;
