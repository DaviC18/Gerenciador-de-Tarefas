import { CaretLeft } from "@phosphor-icons/react";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../components/Title";

const TaskPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const title = decodeURIComponent(query.get("title"));
  const description = decodeURIComponent(query.get("description"));
  return (
    <div className="body w-screen h-screen flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center items-center relative">
          <button
            onClick={() => navigate(-1)}
            className="p-1 border-2 border-slate-400 rounded absolute left-0 top-0 mt-[5px]"
          >
            <CaretLeft size={24} />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="border-2 border-slate-400 rounded p-4">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
