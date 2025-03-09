import tasks from "../tasks";

const AllToDos = () => {
    const allTasksEl = tasks.map(task => {
        return (
            <div className="task-div">
                <input type="checkbox" value={task.id} />
                <p>{task.title}</p>
            </div>
        )
    })
    return ( 
        <div className="all-tasks">
            <div className="add-task">
                <input type="text" placeholder="Add Task"/>
                <button className="add-task-btn">Add</button>
            </div>
            {allTasksEl}
        </div>
    );
}
 
export default AllToDos;