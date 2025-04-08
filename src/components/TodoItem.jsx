import { motion } from "framer-motion";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span>{todo.text}</span>
      <div className="buttons">
        {!todo.completed && (
          <button className="done-btn" onClick={onToggle}>
            ✅
          </button>
        )}
        <button className="delete-btn" onClick={onDelete}>
          ❌
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
