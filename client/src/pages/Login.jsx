import { useNavigate } from "react-router-dom";
import ConnectForm from "../assets/components/ConnectForm.jsx";
import Logo from "../assets/components/logo.jsx";

const Login = () => {
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
        <ConnectForm />
      </div>
    </>
  );
};

export default Login;

