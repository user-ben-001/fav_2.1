import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConnectForm = () => {
  const [formMode, setFormMode] = useState("login");

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const user = {
    email: email,
    password: password,
  };

  const newUser = {
    username: username,
    email: email,
    password: password,
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (email && password != "") {
        const response = await fetch("http://localhost:3000/users/login", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });

        if (!response.ok) {
          alert(response.status);
        }

        const data = await response.json();
        // console.log(data);
        

        if (data.ok) {
          localStorage.setItem("user_id", data.user_id);
          localStorage.setItem("username", data.username);
          navigate(`/accueil`);
        } else {
          alert(data.message);
        }
      }
    } catch (error) {
      alert("Erreur de connexion au serveur" + error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (username && email && password != "") {
        const response = await fetch("http://localhost:3000/users/register", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });

        if (!response.ok) {
          alert(response.status);
        }
        alert("Compte créer");
        window.location.reload();
      }
    } catch (error) {
      alert("Erreur de connexion au serveur" + error.message);
    }
  };

  const LoginForm = (
    <>
      <div className="bandeau">
        <h2 id="connect">Connexion</h2>
      </div>
      <form onSubmit={handleLogin} id="form">
        <div>
          <label htmlFor="email">Email :</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            aria-describedby="emailInfo"
            placeholder="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            aria-describedby="passInfo"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" aria-describedby="valInfo" id="submit">
          Connexion
        </button>
      </form>
    </>
  );

  const registerForm = (
    <>
      <div className="bandeau">
        <h2 id="connect">Inscription</h2>
      </div>
      <form onSubmit={handleRegister} id="form">
        <div>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input
            required
            type="text"
            name="username"
            id="username"
            aria-describedby="usernameInfo"
            placeholder="Nom d'utilisateur"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            aria-describedby="emailInfo"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            requireds
            type="password"
            name="password"
            id="password"
            aria-describedby="passInfo"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" aria-describedby="valInfo" id="submit">
          Inscription
        </button>
      </form>
    </>
  );
  return (
    <section>
      {formMode == "login" ? LoginForm : registerForm}
      <button
        onClick={() => {
          formMode == "login" ? setFormMode("register") : setFormMode("login");
        }}
      >
        {formMode == "login"
          ? "Pas encore de compte ? S'inscrire"
          : "Retour à la connexion"}
      </button>
    </section>
  );
};

export default ConnectForm;
