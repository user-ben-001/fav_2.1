import "./App.css";
import Accueil from "./pages/Accueil.jsx";
import Login from "./pages/Login.jsx";
import FavorisP from "./pages/FavorisP.jsx";
import CalendrierP from "./pages/CalendrierP.jsx";
import NotesP from "./pages/NotesP.jsx";
import TodoP from "./pages/TodoP.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/favoris" element={<FavorisP />} />
        <Route path="/notes" element={<NotesP />} />
        <Route path="/calendrier" element={<CalendrierP />} />
        <Route path="/todo" element={<TodoP />} />
      </Routes>
    </>
  );
}

export default App;
