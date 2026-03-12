import Logo from "./logo.jsx";
import Clock from "./Clock.jsx";
import { useNavigate } from "react-router-dom";

const CustomHeader = (props) => {
  const navigate = useNavigate();

  const host = props.host;
  const user = localStorage.getItem("username");

  const handleLogout = async () => {
    localStorage.clear();
    await fetch(host + "/users/logout", {
      method: "POST",
      credentials: "include",
    });
    navigate("/");
  };

  return (
    <>
      <div></div>
      <div>
        <Logo />
        {/* <Clock /> */}
      </div>
      <div id="userDisplay">
        <p>{user}</p>
        <button onClick={() => handleLogout()}>[X]</button>
      </div>
    </>
  );
};

export default CustomHeader;
