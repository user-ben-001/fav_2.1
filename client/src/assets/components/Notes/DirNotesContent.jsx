import { useEffect } from "react";
import { useState } from "react";

const DirNotesContent = (props) => {
  const id = props.id;
  const host = props.host;

  const [content, setContent] = useState();

  useEffect(() => {
    const fetchContent = () => {
      fetch(host + "/content/note/" + id, {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setContent(data.directories);
        });
    };
    fetchContent();
  }, [host, id]);

  const displayNoteContent = (content) => {
    const display = document.getElementById("noteContent");
    display.textContent = content;
  };

  return (
    <ul>
      {content &&
        content.map((e) => (
          <>
            <li key={e.id}>
              <button
                onClick={() => {
                  displayNoteContent(e.contenu);
                }}
              >
                {e.titre}
              </button>
            </li>
          </>
        ))}
    </ul>
  );
};

export default DirNotesContent;
