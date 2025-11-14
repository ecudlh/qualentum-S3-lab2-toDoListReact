import './FilterBtn.css';
import { useTasks } from '../../context/taskContext';

function FilterBtn() {
    const { filter, setFilter } = useTasks();

    return(
        <div className="filter-btn-container">
            <button 
                className={`btn-all ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
            >
                Todas
            </button>

            <button 
                className={`btn-complete ${filter  === 'completed' ? 'active' : ''}`}
                onClick={() => setFilter('completed')}
            >
                Completadas
            </button>

            <button 
                className={`btn-pending ${filter  === 'pending' ? 'active' : ''}`}
                onClick={() => setFilter('pending')}
            >
                Pendientes
            </button>
        </div>
    );
}

export default FilterBtn;