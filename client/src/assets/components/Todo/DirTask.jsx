import { useState } from "react";
import DirTaskContent from "./DirTaskContent.jsx";

const DirTask = (props) => {
  const dir = props.dir;
  const host = props.host;
  let start = props.start;

  const [visible, setVisible] = useState(false);

  const handleDelete = async () => {
    // console.log(dir.id);
    await fetch(host + "/dir/" + dir.id, {
      method: "DELETE",
      credentials: "include",
    });
    window.location.reload();
  };

  return (
    <li key={"item" + start++}>
      <button onClick={() => handleDelete()}>X</button>
      <button
        key={dir.id}
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {dir.nom_dossier}
      </button>
      {visible ? <DirTaskContent id={dir.id} host={host} /> : ""}
    </li>
  );
};

export default DirTask;
