import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DirEvent from "./DirEvent.jsx";
import NewDirInput from "../NewDirInput.jsx";

const Calendrier = (props) => {
  const [dirEvent, setDirEvent] = useState();

  const id = props.id;
  const host = props.host;
  let start = 0;

  useEffect(() => {
    const fetchEvent = () => {
      fetch(host + "/dir/event/" + id, {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setDirEvent(data.directories);
        });
    };
    fetchEvent();
  }, [host, id]);

  return (
    <section>
      <div className="bandeau">
        <h2>Calendrier</h2>
        <Link to={`/calendrier/${id}`}>
          <button>[]</button>
        </Link>
      </div>
      <div>
        <ul>
          <NewDirInput id={id} host={host} code_dossier={4} />
          {dirEvent &&
            dirEvent.map((dir) => {
              return <DirEvent dir={dir} host={host} start={start} />;
            })}
        </ul>
      </div>
    </section>
  );
};

export default Calendrier;
