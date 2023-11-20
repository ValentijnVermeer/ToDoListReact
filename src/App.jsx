import { useState } from 'react'
import './App.css'
import ToDoForm from './components/ToDoForm'
import ToDo from './components/ToDo'
import NavBar from './components/NavBar'
import Header from './components/Header'

function App() {
  const [toDos, setToDos] = useState([])

  return (
    <>
      <NavBar />
      <Header />
      <ToDoForm toDos={toDos} setToDos={setToDos} />
      <ToDo toDos={toDos} setToDos={setToDos} />
    </>
  )
}

export default App
