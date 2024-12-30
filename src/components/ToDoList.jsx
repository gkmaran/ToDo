import style from './ToDoList.module.css'
function ToDoList({todos,deleteTask,toggleItem,editTask}){
    return(
        <div className={style.taskItem}>
            <input type="checkbox" checked={todos.is_completed} onChange={()=>toggleItem(todos.id)}/>
             <h2 className={todos.is_completed ? style.taskCompleted :""}>{todos.name}</h2>
             <button className={style.delBtn} onClick={()=>deleteTask (todos.id)}>delete</button>
             <button className={style.delBtn} onClick={()=>editTask(todos.id)}>Edit</button>
        </div>
    )
}
export default ToDoList