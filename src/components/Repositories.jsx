import { useEffect, useState } from "react";
import { useFetch } from "../context/ProfileContext";

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const { loading, setLoading, user } = useFetch();
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

  const handleRedirectToRepo = (repositoryName) => {
    window.open(`https://github.com/${user}/${repositoryName}`, "_blank");
  };

  const displayFewRepositories = repositories.slice(0, perRepo);
  return (
    <>
      <h1 className="p-4 text-white text-3xl font-bold ml-28">
        Top Repositories
      </h1>
      <hr className="border-4 w-52 ml-32 border-[#EAD8B1]" />
      <div className=" grid grid-cols-4 gap-4 mx-auto m-8 lg:w-5/6">
        {loading && <p>Loading....</p>}
        {displayFewRepositories.map((repository) => (
          <div
            key={repository.id}
            className="p-4 h-82 bg-[#fff] text-black shadow-2xl rounded w-82 flex flex-col justify-between">
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
