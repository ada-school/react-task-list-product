export const TaskItem = ({
  id,
  isChecked,
  taskName,
  onTaskChange,
  onClickEdit,
}) => {
  return (
    <li className="task-item">
      <label>
        <input onChange={onTaskChange} checked={isChecked} type="checkbox" />
        <span>
          #{id}: {taskName}
        </span>
      </label>
      {/* <button onClick={onClickEdit}>Edit</button> */}
    </li>
  );
};
