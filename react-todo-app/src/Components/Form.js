import React from "react";        
        
export default function Form(props){
    return(
        <form>
        
              <input style={{height: "40px", width: "200px", maxWidth: "60%"}} type="text" value={props.text} onChange={props.updateInput} placeholder="Enter todo" maxlength="22"></input>
              <button class="App-button" onClick={props.getInput}><b>+</b> Add</button>
        
              
              
              <br></br>
              <br></br>

              
                
        </form>
    )
} 