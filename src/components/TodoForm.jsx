import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    onAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="flex-1 p-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-400 transition"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
