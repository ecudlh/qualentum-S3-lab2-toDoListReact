import './Task.css';
import { useTasks } from '../../context/taskContext';

function Task({ task }) {
    const { dispatch } = useTasks();

    return(
        <li className="task-card">
            <input
                type="checkbox"
                className="task-checkbox"
                checked={task.completed}
                onChange={() => dispatch({ type: 'completed', id: task.id })}
            />
            <span className="task-text">{task.text}</span>
            <button
                className="task-delete-btn"
                onClick={() => dispatch({ type: 'deleted', id: task.id })}
            >
                Eliminar
            </button>
        </li>
    );
}

export default Task;