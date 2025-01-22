import { Circle, CheckCircle, Trash } from "phosphor-react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo">
      <div className="todo-content">
        {/* Botão "Concluir" */}
        <button
          className="complete"
          onClick={() => completeTodo(todo.id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {todo.isCompleted ? (
            <CheckCircle size={20} weight="fill" color="#5E60CE" />
          ) : (
            <Circle size={20} weight="bold" color="#4EA8DE" />
          )}
        </button>
        <p
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "none",
          }}
        >
          {todo.text}
        </p>

        <button className="remove" onClick={() => removeTodo(todo.id)}>
          <Trash size={20}/>
        </button>
      </div>
    </div>
  );
};

export default Todo;
