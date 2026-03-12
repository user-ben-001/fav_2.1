import { useState } from "react";

const NewFavInput = (props) => {
  const dossier_id = props.dossier_id;
  const host = props.host;

  const [visible, setVisible] = useState(false);

  const [nom, setNom] = useState();
  const [url, setUrl] = useState();

  const handleAdd = async () => {
    const toAdd = {
      nom_lien: nom,
      url: url,
      dossier_id: dossier_id,
    };
    console.log(toAdd);

    // const response = await fetch(host + "/content/fav", {
    //   method: "POST",
    // credentials: ("include",
    // headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(toAdd),
    // });

    setNom("");
    setUrl("");
  };

  return (
    <>
      {visible ? (
        <div>
          <input
            type="text"
            placeholder="nom"
            onChange={(e) => setNom(e.target.value)}
            value={nom}
          />
          <input
            type="text"
            placeholder="url"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
          <button onClick={() => handleAdd()}>+</button>
        </div>
      ) : (
        <button onClick={() => setVisible(!visible)}>+</button>
      )}
    </>
  );
};

export default NewFavInput;
