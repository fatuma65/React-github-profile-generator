import image from "../assets/roman-synkevych-wX2L8L-fGeA-unsplash.jpg";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="md:flex justify-center items-center mt-28 md:px-24 px-0 max-w-full">
        <div className=" md:w-1/2 w-full md:px-0 px-4">
          <h1 className="text-4xl font-bold py-2">
            Github Profile Data Finder
          </h1>
          <h3 className="py-2 md:max-w-[550px] w-full">
            The application allows you to quickly retrieve basic GitHub profile
            information by simply entering a GitHub username. Instantly access
            details such as the user&#39;s repositories, bio, followers, and
            more. Whether you&#39;re curious about other developers&#39;
            profiles or exploring your own, this tool provides a fast and
            convenient way to view essential GitHub data. <br />
            Enter a username and discover GitHub profiles with ease.
          </h3>
          <button
            type="button"
            className="bg-[#38BDF8] text-white focus:ring-2  focus:ring-[#24A0B5] focus:ring-offset-2 focus:ring-offset-[#052228] hover:bg-[#041E23] transition-colors p-3 px-6 mt-2 font-semibold rounded-md">
            <Link to={"/search"}>Get started</Link>
          </button>
        </div>
        <img
          src={image}
          alt="photo from roman-synkevych-wX2L8L-fGeA from unsplash"
          className="md:w-1/2 w-full md:px-0 px-4 md:py-0 py-2 rounded-md"
        />
      </div>
    </>
  );
};

export default HomePage;
