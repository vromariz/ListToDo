import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { Header } from "./components/Header";
import "./global.css"
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar o projeto todolist",
      isComplited: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      isComplited: false,
    },
    {
      id: 3,
      text: "Dormir",
      isComplited: false,
    },
  ]);

  const addTodo = (text) => {

    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        iscompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header/>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
