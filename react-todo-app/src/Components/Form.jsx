import React, {useState} from "react";
        
export default function Form(props){
    const [input, setInput] = useState("")

    const onChange = event => {
        setInput(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()
        props.addTodo(input)
        setInput("")
    }

    return(
        <form onSubmit={onSubmit}>
        
              <input className="todo-input" type="text" value={input} onChange={onChange} placeholder="Enter todo" maxLength="22"/>
              <button class="App-button" onClick={onSubmit}><b>+</b> Add</button>
        
              <br></br>
              
              
                
        </form>
    )
} 