import './FilterBtn.css';

function FilterBtn({currentFilter, setFilter}) {
    return(
        <div className="filter-btn-container">
            <button 
                className={`btn-all ${currentFilter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
            >
                Todas
            </button>

            <button 
                className={`btn-complete ${currentFilter === 'completed' ? 'active' : ''}`}
                onClick={() => setFilter('completed')}
            >
                Completadas
            </button>

            <button 
                className={`btn-pending ${currentFilter === 'pending' ? 'active' : ''}`}
                onClick={() => setFilter('pending')}
            >
                Pendientes
            </button>
        </div>
    );
}

export default FilterBtn;