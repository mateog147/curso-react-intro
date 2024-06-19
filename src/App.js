import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";
const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Cortar Tomate", completed: false },
  { text: "Empezar el curso de react", completed: true },
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter total={3} completed={3} />
      <TodoFilter />

      <TodoList>
        {defaultTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          );
        })}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
