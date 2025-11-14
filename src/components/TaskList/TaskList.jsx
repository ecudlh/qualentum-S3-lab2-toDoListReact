import './taskList.css'
import Task from '../Task/Task';
import { useTasks } from '../../context/taskContext';

function TaskList() { 
    const { filteredTasks } = useTasks();

    return(
        <>
            {filteredTasks.length === 0 ? (
                <p className="no-results-container">No hay tareas</p>
            ) : (
                <ul className="task-list">
                    {filteredTasks.map(item => (
                        <Task key={item.id} task={item} />
                    ))}
                </ul>
            )}
        </>
    );
};

export default TaskList;