import { Circle, Trash } from "phosphor-react";
import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo">
      <div className="todo-content">
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          <Circle size={20}/>
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
