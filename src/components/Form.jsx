import { useFetch } from "../context/ProfileContext";
import "./FormStyles.css";
const Form = () => {
  const { handleSubmit, user, setUser } = useFetch();
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  return (
    <>
      <div className="mt-24 home flex flex-col justify-center items-center ">
        <i className="bx bxl-github text-9xl m-2 text-[#78B7D0]"></i>
        <h1 className="text-3xl font-bold text-white p-2">
          Find Your Github Profile
        </h1>
        <form action="" className="flex flex-col w-96">
          <input
            type="text"
            placeholder="Please Enter your username"
            id="user"
            value={user}
            onChange={handleChange}
            required
            className="p-6 m-2 rounded border-none outline-none "
          />
          <button
            onClick={handleSubmit}
            className="text-xl bg-[#3A6D8C] p-3 m-2 text-white rounded">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
