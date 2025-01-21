import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar uma nova tarefa"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Criar +</button>
      </form>
    </div>
  );
};

export default TodoForm;