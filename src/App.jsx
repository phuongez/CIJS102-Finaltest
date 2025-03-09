import { useState } from 'react'

import './App.css'
import { Divider } from 'antd'
import tasks from './tasks'
import AllToDos from './components/AllTodos'

function App() {
  const [displayAll, setDisplayAll] = useState(true)

  return (
    <div className="app-view">
      <header>#Phuong'sToDo</header>
      <main>
        <div className="nav">
          <button onClick={()=>setDisplayAll(true)} id="all-todos">All</button>
          <button id="active-todos">Active</button>
          <button id="completed-todos">Completed</button>
        </div>
        <Divider />
        {displayAll && <AllToDos />}
      </main>
    </div>
  )
}

export default App
