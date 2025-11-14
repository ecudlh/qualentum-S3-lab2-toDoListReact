// import { useState } from 'react'

import './App.css';
import Header from './components/header/Header';
import ListHandler from './components/ListHandler/ListHandler';
import TaskList from './components/TaskList/TaskList';
import PointerEffect from './components/PointerEffect/PointerEffect';

function App() {
  return (
    <>
      <Header />
      <ListHandler />
      <PointerEffect />
    </>
  )
}

export default App
