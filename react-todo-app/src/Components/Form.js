import React from "react";        
        
export default function Form(props){
    return(
        <form>
              <input type="text" className="todoInput" value={props.text} onChange={props.updateInput} placeholder="Enter todo" maxlength="22"></input>
              <button className="App-button" onClick={props.getInput}><b>+</b> Add todo</button>
              <br></br>
              
              <br></br>
              <label style={{display:"inline-block", width:"244px", textAlign: "left", backgroundColor:"white", color:"black", padding:"8px 0", paddingLeft:"4px"}}>Filter by status</label>
              <select style={{display:"inline-block", width: "100px", padding:"7px 8px 8px", backgroundColor:"limegreen", color:"white", border:"none"}} id="filter" onChange={props.updateFilter}>
                <option value="none">all</option>
                <option value="open">open</option>
                <option value="done">done</option>
              </select>
                
        </form>
    )
} 