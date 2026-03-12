import { useEffect, useState } from "react";

const DirEventContent = (props) => {
  const id = props.id;
  const host = props.host;

  const [content, setContent] = useState();

  useEffect(() => {
    const fetchContent = () => {
      fetch(host + "/content/event/" + id, {
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
              <a>{e.evenement}</a>
            </li>
          </>
        ))}
    </ul>
  );
};

export default DirEventContent;
