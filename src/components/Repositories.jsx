import { useEffect, useState } from "react";
import { useFetch } from "../context/ProfileContext";
import { useTheme } from "../context/ThemeContext";
import "./ProfileStyles.css";
const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const { loading, setLoading, user } = useFetch();
  const { theme } = useTheme();
  const perRepo = 8;

  const fetchRepositories = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();
    setRepositories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  console.log(repositories);

  const handleRedirectToRepo = (repositoryName) => {
    window.open(`https://github.com/${user}/${repositoryName}`, "_blank");
  };

  const displayFewRepositories =
    repositories !== null && repositories.slice(0, perRepo);

  return (
    <>
      <h1
        className={`lg:p-4 mt-4 p-2 ${
          theme === "dark" ? "text-white" : ""
        } text-3xl font-bold lg:text-left text-center lg:ml-28`}>
        Top Repositories
      </h1>
      <hr className="border-4 w-52 lg:ml-32 border-[#EAD8B1] mx-auto" />
      <div className=" grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto mt-8 lg:w-11/12">
        {loading && <p>Loading....</p>}
        {displayFewRepositories !== null &&
          displayFewRepositories.map((repository) => (
            <div
              key={repository.id}
              className="p-4 h-82 bg-[#fff] text-black repository rounded w-82 flex flex-col justify-between">
              <h1
                className=" text-2xl font-bold p-2 cursor-pointer"
                onClick={() => handleRedirectToRepo(repository.name)}>
                {repository.name}
              </h1>
              <p className="p-2 text-[#000]">{repository.description}</p>
              <div className="flex items-center gap-2 mt-auto p-2">
                <p className="">{repository.language}</p>
                <h4 className="flex items-center">
                  <i className="bx bx-git-repo-forked"></i>
                  {repository.forks_count}
                </h4>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Repositories;
