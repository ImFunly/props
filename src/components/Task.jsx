import React from 'react';

function Task({ task, deleteTask, toggleTaskCompletion }) {
  return (
    <li>
      <div
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </div>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      <button onClick={() => toggleTaskCompletion(task.id)}>Completada</button>
    </li>
  );
}

export default Task;