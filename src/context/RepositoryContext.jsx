/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useFetch } from ".";
export const RepositoryContext = createContext();

export const RepositoryProvider = ({ children }) => {
  const [repositories, setRepositories] = useState([]);
  const { loading, setLoading, user } = useFetch();
  const [selectedPage, setSelectedPage] = useState("size");
  const [searchText, setSearchText] = useState("");

  const perRepo = 8;

  const fetchRepositories = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    console.log(response)
    const data = await response.json();
    console.log(data)
    setRepositories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const sortedRepositories = [...repositories];
  let n = sortedRepositories.length;
  for (let i = 0; i < n - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (
        selectedPage === "stars" &&
        sortedRepositories[j].stargazers_count >
          sortedRepositories[maxIndex].stargazers_count
      ) {
        maxIndex = j;
      } else if (
        selectedPage === "forks" &&
        sortedRepositories[j].forks_count >
          sortedRepositories[maxIndex].forks_count
      ) {
        maxIndex = j;
      } else if (
        selectedPage === "size" &&
        sortedRepositories[j].size > sortedRepositories[maxIndex].size
      ) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      const temp = sortedRepositories[i];
      sortedRepositories[i] = sortedRepositories[maxIndex];
      sortedRepositories[maxIndex] = temp;
    }
  }

  const handleRedirectToRepo = (repositoryName) => {
    window.open(`https://github.com/${user}/${repositoryName}`, "_blank");
  };

  const filteredRepositories = sortedRepositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const displayFewRepositories =
    filteredRepositories !== null && filteredRepositories.slice(0, perRepo);

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        loading,
        displayFewRepositories,
        handleRedirectToRepo,
        searchText,
        setSearchText,
        setSelectedPage,
      }}>
      {children}
    </RepositoryContext.Provider>
  );
};

