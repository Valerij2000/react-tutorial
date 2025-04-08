import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      Swal.fire({
        target: "body",
        titleText: "You have to type something",
        text: "It looks like you hadn't typed anything",
        icon: "warning",
        confirmButtonText: "Okay!",
      });
      return;
    }

    const capitalizedText =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();

    const newTodo = {
      id: Date.now(),
      text: capitalizedText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  return (
    <>
      <div className="text-container">
        <h1>My Todo List</h1>
      </div>

      <div className="center">
        <div className="todo-input-container">
          <input
            type="text"
            name="todo"
            placeholder="Add a task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <button onClick={handleAddTodo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-circle"
              draggable="false"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </button>
        </div>

        <div className="todo-container">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`todo ${todo.completed ? "completed" : ""}`}
            >
              <li>{todo.text}</li>
              <button
                className="todo-check"
                onClick={() => toggleComplete(todo.id)}
                dangerouslySetInnerHTML={{ __html: checkIcon }}
              />
              <button
                className="todo-delete"
                onClick={() => deleteTodo(todo.id)}
                dangerouslySetInnerHTML={{ __html: deleteIcon }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const checkIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"
stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
class="feather feather-check-circle" draggable="false">
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
  <polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>`;

const deleteIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"
stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
class="feather feather-x-circle" draggable="false">
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="15" y1="9" x2="9" y2="15"></line>
  <line x1="9" y1="9" x2="15" y2="15"></line>
</svg>`;

export default TodoApp;
