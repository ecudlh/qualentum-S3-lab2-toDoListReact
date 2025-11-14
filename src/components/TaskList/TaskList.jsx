import './taskList.css'
import Task from '../Task/Task';

function TaskList({tasks, markTaskAsCompleted, deleteTask}) { 
    
    return(
        <>
            {tasks.length === 0 ? (
                <p className="no-results-container">No hay tareas</p>
            ) : (
                <ul className="task-list">
                    {tasks.map(item => (
                        <Task
                            key={item.id}
                            item={item}
                            markTaskAsCompleted={markTaskAsCompleted}
                            deleteTask={deleteTask}
                        />
                    ))}
                </ul>
            )}
        </>
    );
};

export default TaskList;