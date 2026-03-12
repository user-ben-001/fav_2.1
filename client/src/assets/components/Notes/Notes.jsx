import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DirNotes from "./DirNotes.jsx";
import NewDirInput from "../NewDirInput.jsx";

const Notes = (props) => {
  const [dirNotes, setDirNotes] = useState();

  const id = props.id;
  const host = props.host;
  let start = 0;

  useEffect(() => {
    const fetchNotes = () => {
      fetch(host + "/dir/notes/" + id, {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setDirNotes(data.directories);
        });
    };
    fetchNotes();
  }, [host, id]);

  return (
    <section id="notes">
      <div className="bandeau">
        <h2>Notes</h2>
        <Link to={`/notes/${id}`}>
          <button>[]</button>
        </Link>
      </div>
      <div className="content">
        <ul>
          <NewDirInput id={id} host={host} code_dossier={2} />
          {dirNotes &&
            dirNotes.map((dir) => {
              return <DirNotes dir={dir} host={host} start={start} />;
            })}
        </ul>
        <textarea
          name="noteContent"
          id="noteContent"
          autoCorrect="on"
        ></textarea>
      </div>
    </section>
  );
};

export default Notes;
