import { FaRegTrashCan } from "react-icons/fa6";
// import tasks from "../tasks";

const CompletedToDos = ({tasks,setAllTasks}) => {
    // console.log(tasks)

    function handleDeleteTask(id) {
        const newTasks = tasks.filter(todo => todo.id!==id)
        setAllTasks(newTasks)
    }

    function handleDeleteAll() {
        const newTasks = tasks.filter(todo => todo.active!==false)
        setAllTasks(newTasks)
    }

    const handleToggle = (taskId) => {
        setAllTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
    };

    const completedTasksEl = tasks.filter(task => task.active===false).map(task => {
        return (
            <div key={task.id} className="completed-div">
                <div className="task-div">
                    <input type="checkbox" onChange={() => handleToggle(task.id)}/>
                    <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</p>
                </div>
                <button 
                    onClick={()=> handleDeleteTask(task.id)}
                    className="delete-btn"
                    ><FaRegTrashCan /></button>
            </div>
        )
    })
    return ( 
        <div className="all-tasks">
            {completedTasksEl}
            <div className="delete-all-btn">
            <button 
                onClick={()=>handleDeleteAll()}
                className="delete-all">
                <FaRegTrashCan /> Delete All
            </button>
            </div>
            
        </div>
    );
}
 
export default CompletedToDos;