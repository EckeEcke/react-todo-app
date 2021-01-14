import React from "react";        
        
export default function Form(props){
    return(
        <form>
        
              <input className="todo-input" type="text" value={props.text} onChange={props.updateInput} placeholder="Enter todo" maxlength="22"></input>
              <button class="App-button" onClick={props.getInput}><b>+</b> Add</button>
        
              <br></br>
              
              
                
        </form>
    )
} 