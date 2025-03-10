// import tasks from "../tasks";
import { useState } from "react";

const ActiveToDos = ({tasks,setAllTasks}) => {
    const [newTask, setNewTask] = useState(null)

    const activeTasksEl = tasks.filter(task => task.active===true).map(task => {
        return (
            <div key={task.id} className="task-div">
                <input type="checkbox" onChange={() => handleToggle(task.id)}/>
                <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</p>
            </div>
        )
    })

    function handleAddTask() {
        if (newTask && newTask!=="") {
            setAllTasks(prev => [...prev,{
                id: tasks.length+1,
                title: newTask,
                active: true
            }])
            setNewTask("")
        } else {
            alert('You must include title')
        }
    }

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    const handleToggle = (taskId) => {
        setAllTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
    };

    return ( 
        <div className="all-tasks">
            <form action={handleAddTask} className="add-task">
                <input onChange={handleInputChange} type="text" placeholder="Add Task"/>
                <button className="add-task-btn">Add</button>
            </form>
            {activeTasksEl}
        </div>
    );
}
 
export default ActiveToDos;