import { useState } from "react";
import { useFetch, useTheme } from "../context/index";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [username, setUsername] = useState("");
  const { errors, setErrors, loading } = useFetch();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrors("Please enter your username");
    } else {
      setErrors("");
      localStorage.setItem("user", username);
      navigate(`/profile/${username}`);
    }
  };

  return (
    <>
      <div className="mt-24 home flex flex-col justify-center items-center ">
        <i
          className={`bx bxl-github text-9xl m-2  ${
            theme === "dark" ? "text-[#78B7D0]" : "text-[#38BDF8]"
          } `}></i>
        <h1
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-white" : ""
          }  p-2`}>
          Find Your Github Profile
        </h1>
        <form action="" className="flex flex-col w-96">
          <input
            type="text"
            placeholder="Please Enter your username"
            id="user"
            value={username}
            onChange={handleChange}
            required
            aria-required={true}
            className={`p-6 m-2 rounded text-black ${
              theme === "dark"
                ? "border-none outline-none"
                : "border-2 border-black"
            }  `}
          />

          {errors && <p className="text-red-500 ml-2">{errors}</p>}

          <button
            onClick={handleSubmit}
            className={` text-xl bg-[#3A6D8C] p-3 m-2 text-white rounded focus:ring-2  focus:ring-[#24A0B5] focus:ring-offset-2 focus:ring-offset-[#052228] hover:bg-[#041E23] transition-colors`}>
            {loading && (
              <svg
                className="mr-3 size-5 animate-spin ..."
                viewBox="0 0 24 24"></svg>
            )}
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
