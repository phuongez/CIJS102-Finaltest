import { useState } from 'react'

import './App.css'
import { Divider } from 'antd'
import tasks from './tasks'
import AllToDos from './components/AllTodos'

function App() {
  const [displayAll, setDisplayAll] = useState(true)
  const [displayActive, setDisplayActive] = useState(false)
  const [displayCompleted, setDisplayCompleted] = useState(false)

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
        {displayAll && <AllToDos />}
      </main>
    </div>
  )
}

export default App
