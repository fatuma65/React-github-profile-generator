import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Repositories from "./components/Repositories";
import { useFetch } from "./context";
function App() {
  const { user } = useFetch();

  return (
    <>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/user-repositories" element={<Repositories />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </>
        )}

      </Routes>
    </>
  );
}

export default App;
