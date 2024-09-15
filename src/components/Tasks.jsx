import { CaretRight, Trash } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Tasks = ({ tasks, onTaskClick, onDeleteTaskClick }) => {
  const navigate = useNavigate();

  function onSeenDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", encodeURIComponent(task.title));
    query.set("description", encodeURIComponent(task.description));
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="flex justify-center items-center flex-col gap-3 p-5 my-3 border-2 rounded-md border-slate-400">
      {tasks.map((task) => (
        <li key={task.id} className="flex flex-row w-full gap-6">
          <a
            onClick={() => onTaskClick(task.id)}
            className={`w-full px-3 py-1 border-2 border-slate-400 rounded bg-transparent blocks cursor-pointer select-nonef ${
              task.completed && "line-through"
            }`}
          >
            {task.title}
          </a>
          <div className="flex flex-row gap-3">
            <Button onClick={() => onSeenDetailsClick(task)}>
              <CaretRight size={24} />
            </Button>
            <Button onClick={() => onDeleteTaskClick(task.id)}>
              <Trash size={24} />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
