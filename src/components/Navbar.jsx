import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [menuItems, setMenuItems] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleClick = () => {
    setMenuItems(!menuItems);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full text-white flex justify-between lg:justify-around items-center h-[80px] border-b header ${
          scrolling ? "scroll" : ""
        }`}>
        <h1 className="text-4xl font-bold">
          Git<span className="text-[#38BDF8]">Hub</span>
        </h1>
        <nav>
          <ul
            className={`flex gap-4 lg:flex cursor-pointer text-xl ${
              menuItems ? "block" : "hidden"
            }`}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/search"}>Search</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
          </ul>
        </nav>
        <i
          className="bx bx-menu cursor-pointer text-4xl lg:hidden"
          onClick={handleClick}></i>
      </div>
    </>
  );
};

export default Navbar;
