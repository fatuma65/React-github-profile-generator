import image from "../assets/roman-synkevych-wX2L8L-fGeA-unsplash.jpg";
const HomePage = () => {
  return (
    <>
      <div className="lg:flex justify-center items-center mt-28">
        <div className="text-white lg:w-1/2 lg:p-24">
          <h1 className="text-4xl font-bold p-2">Github Profile Data Finder</h1>
          <h3 className="p-2">
            The application allows you to quickly retrieve basic GitHub profile
            information by simply entering a GitHub username. Instantly access
            details such as the user&#39;s repositories, bio, followers, and
            more. Whether you&#39;re curious about other developers&#39;
            profiles or exploring your own, this tool provides a fast and
            convenient way to view essential GitHub data.
          </h3>
          <p className="p-2">
            Enter a username and discover GitHub profiles with ease.
          </p>
        </div>
        <img
          src={image}
          alt="photo from roman-synkevych-wX2L8L-fGeA from unsplash"
          className="lg:w-1/2 rounded mr-8"
        />
      </div>
    </>
  );
};

export default HomePage;
