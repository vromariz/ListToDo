import { useState } from "react";
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

  // Adicionar nova tarefa
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

  // Remover tarefa
  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // Completar ou desfazer tarefa
  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  // Contadores
  const totalTodos = todos.length; // Total de tarefas criadas
  const completedTodos = todos.filter((todo) => todo.isCompleted).length; // Total de tarefas concluídas

  return (
    <div className="app">
      <Header />
      <TodoForm addTodo={addTodo} />

      {/* Exibição dos contadores */}
      <div className="todo-counter">
        <h3>
          Tarefas Criadas: {totalTodos}
        </h3>
        <h3>
          Concluídas: {completedTodos} de {totalTodos}
        </h3>
      </div>

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
