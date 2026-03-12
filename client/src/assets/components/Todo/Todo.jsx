import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DirTask from "./DirTask.jsx";
import NewDirInput from "../NewDirInput.jsx";

const Todo = (props) => {
  const [dirTask, setDirTask] = useState();

  const id = props.id;
  const host = props.host;
  let start = 0;

  useEffect(() => {
    const fetchTask = () => {
      fetch(host + "/dir/task/" + id, {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setDirTask(data.directories);
        });
    };
    fetchTask();
  }, [host, id]);

  return (
    <section>
      <div className="bandeau">
        <h2>Todo</h2>
        <Link to={`/todo/${id}`}>
          <button>[]</button>
        </Link>
      </div>
      <div>
        <ul>
          <NewDirInput id={id} host={host} code_dossier={3} />
          {dirTask &&
            dirTask.map((dir) => {
              return <DirTask dir={dir} host={host} start={start} />;
            })}
        </ul>
      </div>
      <div>
        <canvas id="myChart"></canvas>
      </div>
    </section>
  );
};

export default Todo;
