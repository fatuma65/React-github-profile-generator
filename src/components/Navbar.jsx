import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { useEffect, useState } from "react";
import { useFetch, useTheme } from "../context/index";
const Navbar = () => {
  const [menuItems, setMenuItems] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user } = useFetch();

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

  const toogleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {}, [theme]);

  return (
    <>
      <div
        className={`w-full flex justify-between lg:justify-around items-center h-[80px] border-b header ${
          scrolling ? "scroll" : ""
        }`}>
        <h1 className="text-4xl font-bold">
          Git<span className="text-[#38BDF8]">Hub</span>
        </h1>
        <nav>
          <ul
            className={`flex gap-4 lg:flex cursor-pointer text-xl  ${
              menuItems ? "block" : "hidden"
            } `}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/search"}>Search</Link>
            </li>
            {user !== null && (
              <li>
                <Link to={`/profile/${user}`}>Profile</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="flex gap-4 items-center lg:hidden icons ">
          <i
            className="bx bx-menu cursor-pointer text-4xl lg:hidden"
            onClick={handleClick}></i>
          {theme === "light" ? (
            <i
              className="bx bxs-moon text-3xl lg:hidden"
              onClick={toogleTheme}></i>
          ) : (
            <i
              className="bx bxs-sun text-3xl lg:hidden"
              onClick={toogleTheme}></i>
          )}
        </div>

        <div className=" flex dark-buttons">
          {theme === "light" ? (
            <button
              className="flex items-center bg-[#38BDF8] w-36 justify-center "
              onClick={toogleTheme}>
              <i className="bx bxs-sun text-3xl"></i>Light
            </button>
          ) : (
            <button
              className="flex items-center bg-[#38BDF8] text-white w-36 text-center justify-center"
              onClick={toogleTheme}>
              <i className="bx bxs-moon text-3xl"></i>Dark
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
