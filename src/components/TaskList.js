import { useTasks } from "../hooks/useTasks";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const { tasks, toggleTask } = useTasks();

  const handleTaskChange = (taskId) => {
    toggleTask(taskId);
  };

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <TaskItem
            id={task.id}
            isChecked={task.isCompleted}
            taskName={task.name}
            onTaskChange={() => handleTaskChange(task.id)}
          />
        );
      })}
    </ul>
  );
};
