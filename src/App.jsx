import { useState, useEffect } from 'react'

import './App.css'
import { Divider } from 'antd'
import tasks from './tasks'
import AllToDos from './components/AllTodos'
import ActiveToDos from './components/ActiveToDos'
import CompletedToDos from './components/CompletedToDos'

function App() {
  const [displayAll, setDisplayAll] = useState(true)
  const [displayActive, setDisplayActive] = useState(false)
  const [displayCompleted, setDisplayCompleted] = useState(false)

  const [allTasks, setAllTasks] = useState([])

  useEffect(() => {
    setAllTasks(tasks)
  },[tasks])

  return (
    <div className="app-view">
      <header>#Phuong'sToDo</header>
      <main>
        <div className="nav">
          <button 
            onClick={()=> {
              setDisplayAll(true)
              setDisplayActive(false)
              setDisplayCompleted(false)
            }} 
            id="all-todos"
          >All</button>
          <button
            onClick={()=> {
              setDisplayAll(false)
              setDisplayActive(true)
              setDisplayCompleted(false)
            }}  
            id="active-todos">Active</button>
          <button
            onClick={()=> {
              setDisplayAll(false)
              setDisplayActive(false)
              setDisplayCompleted(true)
            }}  
            id="completed-todos">Completed</button>
        </div>
        <Divider />
        {displayAll && <AllToDos tasks={allTasks} setAllTasks={setAllTasks}/>}
        {displayActive && <ActiveToDos tasks={allTasks} setAllTasks={setAllTasks}/>}
        {displayCompleted && <CompletedToDos tasks={allTasks} setAllTasks={setAllTasks}/>}
      </main>
    </div>
  )
}

export default App
