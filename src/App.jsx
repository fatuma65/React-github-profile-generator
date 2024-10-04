import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
