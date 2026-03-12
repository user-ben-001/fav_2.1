import { useEffect, useState } from "react";
import NewFavInput from "./NewFavInput.jsx";

const DirFavContent = (props) => {
  const id = props.id;
  const host = props.host;

  const [content, setContent] = useState();

  useEffect(() => {
    const fetchContent = () => {
      fetch(host + "/content/fav/" + id, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setContent(data.directories);
        });
    };
    fetchContent();
  }, [host, id]);

  return (
    <>
      <NewFavInput dossier_id={id} host={host} />
      <ul id="favList">
        {content &&
          content.map((e) => (
            <li key={e.id}>
              <a href={e.url} target="blank">
                {e.nom_lien}
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default DirFavContent;
