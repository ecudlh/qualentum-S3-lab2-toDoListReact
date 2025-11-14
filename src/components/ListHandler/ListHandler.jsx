import './ListHandler.css';
import Task from '../Task/Task';
import TaskList from '../TaskList/TaskList';
import FilterBtn from '../FilterBtn/FilterBtn';

import { useState, useRef } from 'react';
import { useTasks } from '../../context/taskContext';

function ListHandler() {
    const [taskName, setTaskName] = useState('');
    const inputRef = useRef(null);
    const { dispatch, filter, setFilter } = useTasks();

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
        inputRef.current.focus();
    }

    // function deleteTask(id) {
    //     dispatch({
    //         type: 'deleted',
    //         id
    //     });
    // }

    // function markTaskAsCompleted(id) {
    //     dispatch({
    //         type: 'completed',
    //         id
    //     });
    // }

    // const filteredTasks = tasks.filter(task => {
    //     if (filter === 'all') return true;
    //     if (filter === 'completed') return task.completed;
    //     if (filter === 'pending') return !task.completed;
    //     return true;
    // });

    return(
        <>
            <div className="list-handler">
                <input 
                    type="text" 
                    className="input-list" 
                    placeholder="Añade una tarea" 
                    id="search-input"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)} 
                    ref={inputRef}/>
                <button className="btn-list" onClick={() => addTask(taskName)}>Añadir</button>
            </div>

            <TaskList />

            <FilterBtn 
                currentFilter={filter}
                setFilter={setFilter} 
            />
        </>
    );
};

export default ListHandler;