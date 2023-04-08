const NavBar = ({ textColor }) => {
  return (
    <a
      href="#home"
      className={
        "bg-black w-screen h-fit px-3 py-2 fixed underline cursor-pointer z-50 " +
        textColor
      }>
      &lt; Home
    </a>
  );
};

export default NavBar;
