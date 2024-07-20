import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddUpdateTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editId) {
      setTodos(todos.map(todo => (todo.id === editId ? { ...todo, text: input } : todo)));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input }]);
    }

    setInput('');
  };

  const handleEditTodo = (id, text) => {
    setInput(text);
    setEditId(id);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Simple Todo App</h1>
      <form onSubmit={handleAddUpdateTodo}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">{editId ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
