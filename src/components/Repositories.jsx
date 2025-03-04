import { useTheme } from "../context/index";
import "./profile/ProfileStyles.css";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { useRepository } from "../context/index";
import DisplayRepositories from "./DisplayRepositories";
import Spinner from "./spinner/Spinner";
const Repositories = () => {
  const { setSelectedPage, searchText, setSearchText, loading } =
    useRepository();
  const { theme } = useTheme();

  return (
    <>
      <Navbar />
      {loading && <Spinner />}
      <div className=" lg:flex justify-between items-center mt-28 ">
        <div className="flex items-center lg:p-2 p-2 ">
          <h1
            className={` ${
              theme === "dark" ? "text-white" : ""
            } text-2xl font-bold lg:text-left text-center lg:ml-28`}>
            Top Repositories
          </h1>
          <p className="m-4 text-xl">by</p>
          <select
            name="pagination"
            id=""
            onChange={(e) => setSelectedPage(e.target.value)}
            className="p-2 w-28 text-[#38BDF8] hover:bg-[#B2E3FA] border-2 border-[#38BDF8] rounded outline-none ">
            <option value="size">Size</option>
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
          </select>
        </div>
        <div className="flex lg:mr-24">
          <input
            type="text"
            className="p-4 w-80 text-black border-2 outline-none"
            placeholder="Search repositories here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <i className="bx bx-right-arrow-alt border-2 text-center p-2 text-3xl hover:bg-[#ddd]"></i>
        </div>
      </div>
      <div className=" grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto mt-8 lg:w-11/12">
        <DisplayRepositories />
      </div>
      <Footer />
    </>
  );
};

export default Repositories;
