import { useState } from "react";
import { ClipboardText } from "phosphor-react"; 
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { Header } from "./components/Header";
import "./global.css";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar o projeto todolist",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Dormir",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };


  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };


  const totalTodos = todos.length; 
  const completedTodos = todos.filter((todo) => todo.isCompleted).length; 

  return (
    <div className="app">
      <Header />
      <TodoForm addTodo={addTodo} />

      <div className="todo-counter">
        <h3>
          Tarefas Criadas: <span className="counter-created">{totalTodos}</span>
        </h3>
        <h2>
          Concluídas:{" "}
          <span className="counter-completed">
            {completedTodos} de {totalTodos}
          </span>
        </h2>
      </div>

      {todos.length === 0 ? (
        <div className="empty-state">
          <ClipboardText size={64} weight="light" className="empty-icon" /> 
          <p className="empty-message">Você ainda não tem tarefas cadastradas</p>
          <p className="empty-instruction">
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
