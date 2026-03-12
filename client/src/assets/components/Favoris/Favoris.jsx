import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DirFav from "./DirFav.jsx";
import NewDirInput from "../NewDirInput.jsx";

const Favoris = (props) => {
  const [dirFav, setDirFav] = useState();

  const id = props.id;
  const host = props.host;
  let start = 0;

  useEffect(() => {
    const fetchFav = async () => {
      const response = await fetch(host + "/dir/fav/" + id, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setDirFav(data.directories);
    };
    fetchFav();
  }, [host, id]);

  return (
    <section id="favoris">
      <div className="bandeau">
        <h2>Favoris</h2>
        <Link to={`/favoris/${id}`}>
          <button>[]</button>
        </Link>
      </div>
      <div className="content">
        <ul>
          <NewDirInput id={id} host={host} code_dossier={1} />
          {dirFav &&
            dirFav.map((dir) => {
              return <DirFav dir={dir} host={host} start={start} />;
            })}
        </ul>
      </div>
    </section>
  );
};

export default Favoris;
