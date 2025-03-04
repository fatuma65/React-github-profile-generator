import { useRepository } from "../context/index";
const DisplayRepositories = () => {
  const { displayFewRepositories, handleRedirectToRepo } = useRepository();
  return (
    <>
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
    </>
  );
};

export default DisplayRepositories;
