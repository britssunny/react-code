import React from 'react';
import PropTypes from 'prop-types';

function Task({ task, onToggleComplete, onDelete }) {
  return (
    <li className="task-item">
      <span
        className={task.completed ? 'completed' : ''}
        onClick={() => onToggleComplete(task.id)}
        aria-label="Toggle task completion"
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} aria-label="Delete task">Delete</button>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
