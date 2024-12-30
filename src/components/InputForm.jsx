import { useState } from "react";
 function InputForm({addTask}){
    const [input ,setInput]=useState("")
    const [error ,setError]=useState()
    const createItem=()=>{

        if(input.trim()===""){
            setError(true)
            return;
        }
        addTask(input)
        setInput("")
        setError(false)
    }
    return(
        <div>
            <input value={input} type="text" placeholder={ error ? "Input Is Empty" : "Enter Your Task"} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={createItem}>AddTask</button>
        </div>
    )
}
export default InputForm;