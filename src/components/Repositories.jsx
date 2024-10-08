import { useTheme } from "../context/index";
import "./ProfileStyles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRepository } from "../context/index";
const Repositories = () => {
  const {
    displayFewRepositories,
    setSelectedPage,
    searchText,
    setSearchText,
    loading,
    handleRedirectToRepo,
  } = useRepository();
  const { theme } = useTheme();

  return (
    <>
      <Navbar />
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
      {loading && <h1 className="text-3xl text-center font-bold">Loading....</h1>}
      <div className=" grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto mt-8 lg:w-11/12">
        {displayFewRepositories !== null &&
          displayFewRepositories.map((repository) => (
            <div
              key={repository.id}
              className="p-4 bg-[#fff] text-black repository rounded w-82 flex flex-col justify-between">
              <h1
                className=" text-2xl font-bold p-2 cursor-pointer"
                onClick={() => handleRedirectToRepo(repository.name)}>
                {repository.name}
              </h1>
              <p className="p-2 text-[#000]">{repository.description}</p>
              <div className="flex items-center gap-2 mt-auto p-2 justify-between">
                <div className="flex">
                  <p className="m-2">{repository.language}</p>
                  <h4 className="flex items-center">
                    <i className="bx bx-git-repo-forked"></i>
                    {repository.forks_count}
                  </h4>
                </div>
                <p>{repository.size} KB</p>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Repositories;
