import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

export const TaskForm = () => {
  const { addTask } = useTasks();
  const [task, setTask] = useState({ name: "", isCompleted: false });

  const handleChange = (e) => {
    const inputName = e.target.value;
    setTask({ ...task, name: inputName });
  };

  const handleSave = () => {
    addTask({
      id: Math.floor(Math.random() * 1000),
      name: task.name,
      isCompleted: false,
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </form>
  );
};
