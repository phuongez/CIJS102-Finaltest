import { FaRegTrashCan } from "react-icons/fa6";
import tasks from "../tasks";

const CompletedToDos = () => {
    console.log(tasks)

    function handleDeleteTask() {

    }

    const completedTasksEl = tasks.filter(task => task.active===false).map(task => {
        return (
            <div key={task.id} className="completed-div">
                <div className="task-div">
                    <input type="checkbox" value={task.id} />
                    <p>{task.title}</p>
                </div>
                <button 
                    onClick={()=> {
                        tasks.filter(todo => todo.id!==task.id)}}
                    className="delete-btn"
                    ><FaRegTrashCan /></button>
            </div>
        )
    })
    return ( 
        <div className="all-tasks">
            {completedTasksEl}
            <div className="delete-all-btn">
            <button className="delete-all">
                <FaRegTrashCan /> Delete All
            </button>
            </div>
            
        </div>
    );
}
 
export default CompletedToDos;