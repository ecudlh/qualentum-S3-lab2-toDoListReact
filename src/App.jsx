import './App.css';
import Header from './components/header/Header';
import ListHandler from './components/ListHandler/ListHandler';
import TaskList from './components/TaskList/TaskList';
import PointerEffect from './components/PointerEffect/PointerEffect';
import { TasksProvider } from './context/taskContext';

function App() {
  return (
    <TasksProvider>
      <Header />
      <ListHandler />
      <PointerEffect />
    </ TasksProvider>
  )
}

export default App
