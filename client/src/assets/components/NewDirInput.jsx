import { useState } from "react";

const NewDirInput = (props) => {
  const id = props.id;
  const host = props.host;
  const code_dossier = props.code_dossier;

  const [visibleInput, setVisibleInput] = useState(false);
  const [newDir, setNewDir] = useState("");

  const addDirFav = async () => {
    const elem = {
      user_id: id,
      nom_dossier: newDir,
      code_dossier: code_dossier,
    };
    console.log(elem);

    const response = await fetch(host + "/dir/", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(elem),
    });
    console.log(response);
    await response.json();
    setNewDir("");
    setVisibleInput(false);
    window.location.reload();
  };
  return (
    <li>
      <button onClick={() => setVisibleInput(!visibleInput)}>[Ajouter]</button>
      {visibleInput ? (
        <div>
          <input
            autoFocus
            type="text"
            onChange={(e) => setNewDir(e.target.value)}
            value={newDir}
          />
          <button onClick={() => addDirFav()}>Ajouter</button>
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default NewDirInput;
