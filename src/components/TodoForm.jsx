import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };


  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Criar
      </button>
    </form>
  );
};

export default TodoForm;