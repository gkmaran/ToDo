import ToDoList from "./ToDoList"
function TaskItem({todos,deleteTask,toggleItem,editTask}){
    return (
        <ul>
        {todos.map(item=>(
           <ToDoList key={item.id} todos={item} deleteTask={deleteTask} toggleItem={toggleItem} editTask={editTask}></ToDoList>
            ))}    
        </ul>
    )
}
export default TaskItem