import Header from "../assets/components/Header.jsx";
import Favoris from "../assets/components/Favoris/Favoris.jsx";
import Calendrier from "../assets/components/Calendrier/Calendrier.jsx";
import Notes from "../assets/components/Notes/Notes.jsx";
import Todo from "../assets/components/Todo/Todo.jsx";
// import { useState } from "react";
// import { useEffect } from "react";

const Accueil = () => {
  const id = localStorage.getItem("user_id");
  const host = "http://localhost:3000";

  return (
    <>
      <header>
        <Header host={host} />
      </header>
      <main>
        <Favoris id={id} host={host} />
        <Calendrier id={id} host={host} />
        <Notes id={id} host={host} />
        <Todo id={id} host={host} />
      </main>
    </>
  );
};

export default Accueil;
