import { useEffect, useState } from "react";

const DirFavContent = (props) => {
  const id = props.id;
  const host = props.host;

  const [content, setContent] = useState();

  useEffect(() => {
    const fetchContent = () => {
      fetch(host + "/content/task/" + id, {
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
    <ul>
      {content &&
        content.map((e) => (
          <>
            <li key={e.id}>
              <button>{e.tache}</button>
            </li>
          </>
        ))}
    </ul>
  );
};

export default DirFavContent;
