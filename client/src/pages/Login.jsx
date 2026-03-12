import { useNavigate } from "react-router-dom";
import ConnectForm from "../assets/components/ConnectForm.jsx";
import Logo from "../assets/components/logo.jsx";

const Login = () => {
  // const host = "http://localhost:3000";
  const host = "https://fav-2-1-server.onrender.com";
  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    navigate("/accueil");
  }

  return (
    <>
      <header>
        <Logo />
      </header>
      <div id="loginDiv">
        <ConnectForm host={host} />
      </div>
    </>
  );
};

export default Login;
