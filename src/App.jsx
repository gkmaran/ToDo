import TaskItem from './components/ToDoItem.jsx';
import { useState } from 'react';
import './App.css'
import InputForm from './components/InputForm.jsx';

let initialState=JSON.parse(localStorage.getItem('todos')) || []
function App() {
  const [todos ,setTodo]=useState(initialState)
  const addTask=(taskName)=>{
      let newTask={id:Date.now(),name:taskName,is_completed:false}
      const newItem=[...todos,newTask]
      setTodo(newItem)
      localStorage.setItem('todos' ,JSON.stringify(newItem))
  }
  const deleteTask=(id)=>{
    let newTask=todos.filter(item=> item.id!==id)
    setTodo(newTask)
    localStorage.setItem('todos' ,JSON.stringify(newTask))
  }
  const toggleItem=(id)=>{
    let newlist=todos.map(item=>{
      return item.id===id ? {...item,is_completed:!item.is_completed}:item})
      setTodo(newlist)
      localStorage.setItem('todos' ,JSON.stringify(newlist))
  }
  const editTask = (id) => {
    let newTaskName = prompt("Enter the new task name:");
    if (newTaskName && newTaskName.trim() !== " ") {
      let newlist = todos.map(item => 
        item.id === id 
          ? { ...item, name: newTaskName } 
          : item
      );
      setTodo(newlist);
      localStorage.setItem('todos' ,JSON.stringify(newlist))
    }
  };
  return(
    <>
      <h2>Task</h2>
      <h1>My List</h1>
      <InputForm addTask={addTask}/>
      <TaskItem todos={todos} deleteTask={deleteTask} toggleItem={toggleItem} editTask={editTask} />
    </>
  )
}

export default App;
