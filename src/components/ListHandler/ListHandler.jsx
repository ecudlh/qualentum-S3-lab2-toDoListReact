import './ListHandler.css';
import { useState } from 'react';
import Task from '../Task/Task';
import TaskList from '../TaskList/TaskList';
import FilterBtn from '../FilterBtn/FilterBtn';

function ListHandler() {
    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState('');
    const [filter, setFilter] = useState('all');

    const addTask = () => {
        const text = taskName.trim();
        if (text === '') return

        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };

        setTasks(prev => [...prev, newTask]);
        setTaskName('');
    };

    const deleteTask = (id) => {
        const updateTasks = tasks.filter((task) => task.id !== id)
        setTasks(updateTasks)
    };

    const markTaskAsCompleted = (id) => {
        const updateStateTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task
            }
        })
        setTasks(updateStateTasks);
    };

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
                    onChange={(e) => setTaskName(e.target.value)}/>
                <button className="btn-list" onClick={addTask}>Añadir</button>
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