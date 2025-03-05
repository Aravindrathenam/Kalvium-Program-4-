import React, { useState } from "react";

const TodoList = () => {
  // Initialize the todos state as an empty array
  const [todos, setTodos] = useState([]);

  // Initialize the newTodo state as an empty string
  const [newTodo, setNewTodo] = useState('');

  // Function to handle the input change
  const handleInputChange = (e) => {
    setNewTodo(e.target.value); // Update the newTodo state with the input value
  };

  // Function to add a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return; // Prevent adding empty todos
    setTodos([...todos, { text: newTodo, completed: false }]); // Add a new todo object
    setNewTodo(""); // Clear input field after adding the todo
  };

  // Function to toggle the completion status of a todo
  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Remove the selected todo
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo} // Ensure input field is controlled
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
              onClick={() => handleToggleComplete(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
