import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>Home</p>
      <button
        onClick={() => {
          navigate("/tasks");
        }}
      >
        Go to tasks
      </button>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to about
      </button>
    </>
  );
};

export default Home;
