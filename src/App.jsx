import { useContext, useState } from "react";
import TodoItem from "./components/TodoItem";
import { TodoContext } from "./context/TodoContext"
import "./App.css";

function App() {
  const { todos, setTodos, filteredTodos, setFilter } = useContext(TodoContext);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>
      <div className="input-wrapper">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="filter-wrapper">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul>
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            onToggle={() => toggleComplete(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
