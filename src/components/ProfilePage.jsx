import { useNavigate } from "react-router-dom";
import { useFetch } from "../context/index";
import "./ProfileStyles.css";
const UserProfile = () => {
  const { profile, loading, user } = useFetch();
  const navigate = useNavigate()
  const redirectUser = () => {
    window.open(`https://github.com/${user}`, "_blank");
  };

  const changeDateFormat = (createdDate) => {
    return new Date(createdDate).toLocaleDateString();
  };

  const redirectToRepositories = () => {
    navigate('/user-repositories')
  }
  
  return (
    <>
      <div className="flex flex-col items-center profile justify-center mt-24 ">
        {loading && (
          <h1 className="text-white text-2xl text-center">Loading....</h1>
        )}
        <img
          src={profile?.avatar_url}
          alt=""
          className={`w-36 rounded-2xl  
           border-8 border-[#3A6D8C]
          `}
        />
        <h1 className="p-4 text-center text-nowrap lg:text-wrap text-5xl font-bold">
          {profile?.name}
        </h1>
        <h3
          className="text-[#6A9AB0] text-3xl cursor-pointer"
          onClick={redirectUser}>
          @{profile?.login}
        </h3>
        <div className="lg:flex gap-4">
          <div className="flex items-center  p-2">
            <i className="bx bxs-location-plus m-2 text-2xl"></i>
            <h4 className="text-xl">{profile?.location}</h4>
          </div>
          <div className="flex p-2 items-center">
            <i className="bx bxs-calendar m-2 text-2xl"></i>
            <h4 className="text-xl"> Joined {changeDateFormat(profile?.created_at)}</h4>
          </div>
        </div>
        <div className="flex gap-4 " >
          <div className=" bg-[#3A6D8C] cursor-pointer hover:bg-[#222] text text-white rounded" onClick={redirectToRepositories}>
            <h2 className="text-center ">{profile?.public_repos}</h2>
            <h3 className="">REPOSITORIES</h3>
          </div>
          <div className=" bg-[#3A6D8C] cursor-pointer hover:bg-[#222] text text-white rounded">
            <h2 className="text-center">{profile?.followers}</h2>
            <h3 className="">FOLLOWERS</h3>
          </div>
          <div className=" bg-[#3A6D8C] cursor-pointer hover:bg-[#222] text text-white rounded">
            <h2 className="text-center text-xl">{profile?.following}</h2>
            <h3 className="">FOLLOWING</h3>
          </div>
        </div>
      </div>
      {/* <Repositories /> */}
    </>
  );
};

export default UserProfile;
