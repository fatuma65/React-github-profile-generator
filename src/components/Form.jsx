import { useCallback } from "react";
import { useFetch, useTheme } from "../context/index";
const Form = () => {
  const { errors, setErrors, loading, fetchUserData, username, setUsername } =
    useFetch();
  const { theme } = useTheme();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!username.trim()) {
        setErrors("Please enter your github username");
      } else {
        setErrors("");
        fetchUserData();
        localStorage.setItem("user", username);
      }
    },
    [username]
  );

  return (
    <>
      <div className="mt-48 home flex flex-col justify-center items-center ">
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
        <form action="" className="flex flex-col w-96 md:px-0 px-4 ">
          <input
            type="text"
            placeholder=" Enter your username"
            id="user"
            value={username}
            onChange={handleChange}
            required
            aria-required={true}
            className={`p-6 m-2 rounded text-black ${
              theme === "dark"
                ? "border-none outline-none"
                : "border border-black"
            }  `}
          />

          {errors && <p className="text-red-500 ml-2">{errors}</p>}

          <button
            onClick={handleSubmit}
            className={` text-xl flex justify-center px-2 items-center bg-[#041E23] p-3 m-2 text-white rounded focus:ring-2  focus:ring-[#24A0B5] focus:ring-offset-2 focus:ring-offset-[#052228] hover:bg-slate-800  transition-colors`}>
            {loading
              ? ((
                  <svg
                    className="mr-3 size-5 animate-spin ..."
                    viewBox="0 0 24 24"></svg>
                ),
                "Processing")
              : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
