function TodoItem({ todo, onToggle }) {
  return (
    <li className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-md px-4 py-2 mb-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="accent-blue-500 w-5 h-5"
        />
        <span className={todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : ''}>
          {todo.text}
        </span>
      </label>
    </li>
  );
}

export default TodoItem;
