export default function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, action.task];
        }

        case 'deleted': {
            return tasks.filter((task) => task.id !== action.id)  
        }

        case 'completed': {
            return tasks.map(task =>
                task.id === action.id
                    ? { ...task, completed: !task.completed }
                    : task
            );
        }

        default: {
            throw Error('Unknown action: ' + action.type);
        }
    } 
}