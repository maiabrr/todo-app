import { useState } from 'react';
import { useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import FilterButtons from './components/FilterButtons';
//definimos la función
  const getInitialTodos = () => {
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : [];
};
function App() {
  const [todos, setTodos] = useState(getInitialTodos);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

  const toggleTodo = (id) => {
  const updated = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setTodos(updated);
};

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

const filteredTodos = todos.filter((todo) => {
  if (filter === 'Active') return !todo.completed;
  if (filter === 'Completed') return todo.completed;
  return true; // All
});
const toggleDarkMode = () => {
  const html = document.documentElement;
  html.classList.toggle('dark');
};
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div className="flex justify-end mb-2">
            <button
              onClick={toggleDarkMode}
              className="text-sm text-gray-600 dark:text-gray-300 border px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              Dark Mode
            </button>
          </div>
        <h1 className="text-2xl font-bold mb-4 text-center">To-do App</h1>
        <TodoForm onAdd={addTodo} />
          <FilterButtons filter={filter} setFilter={setFilter} />
        <ul>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
