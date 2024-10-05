import { useState } from "react";
import { useFetch } from "../context/ProfileContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const [inputText, setInputText] = useState("");
  const { user } = useFetch();

  const handleClick = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    alert(
      `Welcome ${user}, You have successfully subscribed to our newsletter`
    );
    setInputText('')
  };

  const redirectSocial = () => {
    window.open('https://www.linkedin.com/in/namale-fatuma-5b56452a7', '_black')
  }
  return (
    <>
      <div className="bg-[#000] mt-16">
        <div className="text-white lg:flex justify-around gap-2 p-6 ">
          <div className="lg:w-72">
            <h1 className="text-4xl font-bold">
              Git<span className="text-[#38BDF8]">Hub</span>
            </h1>
            <p className="mt-4">
              This application has been built with React and Boxicons
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Company</h1>
            <ul className="cursor-pointer">
              <li>
                <Link to={"/search"}>Search User</Link>
              </li>
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li>Terms & Conditions</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="p-2">Subscribe to our newsletter</h3>
            <input
              type="text"
              value={inputText}
              placeholder="Enter your email"
              className="p-2 m-2 w-72 rounded text-[#000] outline-0"
              onChange={handleClick}
            />
            <button
              className="border-2 p-2 rounded hover:bg-[#222] w-32"
              onClick={handleSubmitEmail}>
              Submit
            </button>
            <div className="text-4xl p-2 cursor-pointer">
              <i className="bx bxl-linkedin-square" onClick={redirectSocial}></i>
              <i className="bx bxl-facebook-circle"></i>
              <i className="bx bxl-medium"></i>
            </div>
          </div>
        </div>
        <hr className="w-4/5 mx-auto" />
        <div className="text-white flex flex-col justify-center items-center p-6">
          <h3>Made with love by Namale Fatuma</h3>
          <p>&#169; Github Profile Generator All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
