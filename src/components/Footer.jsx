import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../context";

const Footer = () => {
  const [inputText, setInputText] = useState("");
  const { errors, setErrors } = useFetch();
  const handleClick = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(inputText) || inputText === "") {
      setErrors("Please enter a valid email address");
    } else {
      setErrors("");
      alert(
        `Welcome ${inputText}, You have successfully subscribed to our newsletter`
      );
      setInputText("");
    }
  };

  const redirectSocial = () => {
    window.open(
      "https://www.linkedin.com/in/namale-fatuma-5b56452a7",
      "_black"
    );
  };
  return (
    <>
      <div className="bg-[#000] mt-16 w-full ">
        <div className="text-white lg:flex justify-around gap-4 p-6 ">
          <div className="lg:w-72 ">
            <h1 className="text-4xl font-bold">
              Git<span className="text-[#38BDF8]">Hub</span>
            </h1>
            <p className="mt-4 ">
              This application has been built with React and Boxicons
            </p>
          </div>
          <div className="">
            <h1 className="text-base font-semibold lg:py-0 py-3">Company</h1>
            <ul className="cursor-pointer py-2">
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
          <div className="py-4 ">
            <h3 className="">Subscribe to our newsletter</h3>
            <input
              type="email"
              aria-required={true}
              aria-label="Email"
              value={inputText}
              placeholder="Enter your email"
              className="p-2  w-72 rounded text-[#000] outline-0"
              onChange={handleClick}
            />

            <button
              role="button"
              className="border-2 p-2 mt-2 md:ml-2 rounded hover:bg-[#222] w-32 focus:ring-2"
              onClick={handleSubmitEmail}>
              Submit
            </button>
            {errors && <p className="text-red-600">{errors}</p>}
            <div className="text-4xl p-2 cursor-pointer">
              <i
                className="bx bxl-linkedin-square mt-4"
                onClick={redirectSocial}></i>
              <i className="bx bxl-facebook-circle"></i>
              <i className="bx bxl-medium"></i>
            </div>
          </div>
        </div>
        <hr className="w-4/5 mx-auto" />
        <div className="text-white flex flex-col justify-center items-center p-4">
          <h3>Made with love by Namale Fatuma</h3>
          <p className="text-center">
            &#169; Github Profile Generator. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
