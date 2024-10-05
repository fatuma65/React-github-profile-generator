import { useFetch } from "../context/ProfileContext";
import "./ProfileStyles.css";
import Repositories from "./Repositories";
const UserProfile = () => {
  const { profile, loading, user } = useFetch();

  const redirectUser = () => {
    window.open(`https://github.com/${user}`, "_blank");
  };

  const changeDateFormat = (createdDate) => {
    return new Date(createdDate).toLocaleDateString();
  };
  return (
    <>
      <div className="flex flex-col items-center profile justify-center mt-24 ">
        {loading && (
          <h1 className="text-white text-2xl text-center">Loading....</h1>
        )}
        <img
          src={profile?.avatar_url}
          alt=""
          className="w-64 rounded-2xl p-4"
        />
        <h1 className="p-4 text-white text-center text-nowrap lg:text-wrap text-5xl font-bold">
          {profile?.name}
        </h1>
        <h3
          className="text-[#6A9AB0] text-3xl cursor-pointer"
          onClick={redirectUser}>
          @{profile?.login}
        </h3>
        <div className="lg:flex m-2 gap-4">
          <div className="flex items-center text-white p-2">
            <i className="bx bxs-location-plus m-2 text-2xl"></i>
            <h4 className="text-xl">{profile?.location}</h4>
          </div>
          <div className="flex p-2 items-center text-white ">
            <i className="bx bxs-calendar m-2 text-2xl"></i>
            <h4 className="text-xl">{changeDateFormat(profile?.created_at)}</h4>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-white bg-[#3A6D8C] p-2 rounded">
            <h2 className="text-center text-2xl">{profile?.public_repos}</h2>
            <h3 className="text-base">REPOSITORIES</h3>
          </div>
          <div className="text-white bg-[#3A6D8C] rounded p-2">
            <h2 className="text-center text-2xl">{profile?.followers}</h2>
            <h3 className="text-base">FOLLOWERS</h3>
          </div>
          <div className="text-white bg-[#3A6D8C] rounded p-2">
            <h2 className="text-center text-2xl">{profile?.following}</h2>
            <h3 className="text-base">FOLLOWING</h3>
          </div>
        </div>
      </div>
      <Repositories />
    </>
  );
};

export default UserProfile;
