import './Task.css'

function Task({item, markTaskAsCompleted, deleteTask}) {
    return(
        <li className="task-card">
            <input type="checkbox" className="task-checkbox" checked={item.completed} onChange={() => markTaskAsCompleted(item.id)}/>
            <span className="task-text">{item.text}</span>
            <button className="task-delete-btn" onClick={() => deleteTask(item.id)}>Eliminar</button>
        </li>
    );
}

export default Task;