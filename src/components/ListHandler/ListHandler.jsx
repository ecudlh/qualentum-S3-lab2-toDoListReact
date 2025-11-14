import './ListHandler.css';
import Task from '../Task/Task';
import TaskList from '../TaskList/TaskList';
import FilterBtn from '../FilterBtn/FilterBtn';

import { useState } from 'react';
import { useReducer } from 'react';

function tasksReducer(tasks, action) {
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

function ListHandler() {
    // const [tasks, setTasks] = useState([])
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    const [taskName, setTaskName] = useState('');
    const [filter, setFilter] = useState('all');

    // const addTask = () => {
    //     const text = taskName.trim();
    //     if (text === '') return

    //     const newTask = {
    //         id: Date.now(),
    //         text,
    //         completed: false,
    //     };

    //     setTasks(prev => [...prev, newTask]);
    //     setTaskName('');
    // };

    // const deleteTask = (id) => {
    //     const updateTasks = tasks.filter((task) => task.id !== id)
    //     setTasks(updateTasks)
    // };

    // const markTaskAsCompleted = (id) => {
    //     const updateStateTasks = tasks.map(task => {
    //         if (task.id === id) {
    //             return { ...task, completed: !task.completed };
    //         } else {
    //             return task
    //         }
    //     })
    //     setTasks(updateStateTasks);
    // };

    function addTask(text) {
        const clean = text.trim();
        if (clean === '') return;

        dispatch({
            type: 'added',
            task: {
                id: Date.now(),
                text: clean,
                completed: false
            }
        });

        setTaskName('');
    }

    function deleteTask(id) {
        dispatch({
            type: 'deleted',
            id
        });
    }

    function markTaskAsCompleted(id) {
        dispatch({
            type: 'completed',
            id
        });
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    return(
        <>
            <div className="list-handler">
                <input 
                    type="text" 
                    className="input-list" 
                    placeholder="Añade una tarea" 
                    id="search-input"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)} />
                <button className="btn-list" onClick={() => addTask(taskName)}>Añadir</button>
            </div>

            <TaskList 
                tasks={filteredTasks}
                markTaskAsCompleted={markTaskAsCompleted}
                deleteTask={deleteTask}
            />

            <FilterBtn 
                currentFilter={filter}
                setFilter={setFilter} 
            />
        </>
    );
};

export default ListHandler;