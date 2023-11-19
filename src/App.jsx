import { useState } from 'react'
import './App.css'
import ToDoForm from './components/ToDoForm'
import ToDo from './components/ToDo'

function App() {
  const [toDos, setToDos] = useState([])

  return (
    <>
      <ToDoForm toDos={toDos} setToDos={setToDos} />
      <ToDo toDos={toDos} setToDos={setToDos} />
    </>
  )
}

export default App
