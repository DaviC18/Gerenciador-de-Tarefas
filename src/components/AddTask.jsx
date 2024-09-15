import { useState } from "react";
import Input from "./input";

const AddTask = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="mt-5">
        <form
          action=""
          className="p-6 border-2 border-slate-400 rounded-md flex flex-col justify-center items-center gap-4"
        >
          <Input
            type="text"
            placeholder="Digite o título da tarefa"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Digite a descrição da tarefa"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button
            onClick={() => {
              // verficar de o titulo e descrisção estão preenchidos
              if (!title.trim() && !description.trim()) {
                return alert("preencha o titulo e descrição da tarefa");
              }

              onAddTaskSubmit(title, description);
              setTitle("");
              setDescription("");
            }}
            type="button"
            className="w-full py-1 bg-transparent border-2 border-slate-400 text-shadow-submit font-bold rounded mx-3 cursor-pointer transition-all hover:bg-white hover:text-black hover:border-white"
          >
            Adicionar
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
