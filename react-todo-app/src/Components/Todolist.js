import React from "react";

export default function Todolist(props){
    return(
        <ul style={{padding: "30px 0", width: "100vw", maxWidth: "380px", backgroundColor: "rgb(255,255,255,0.95)"}}>
              
              {props.filter === "none" && props.todos.map((todo, index) => {
                  
                  return(
                    <li key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={todo.status} style={{minWidth: "270px", borderStyle: "none", padding: "10px", color: "white"}} id={todo.id} onClick={props.lineText}>{todo.text}</button>
                      <button  style={{position: "absolute", borderStyle: "none", background: "none", height: "36px"}} id={todo.id} onClick={props.removeTodo}>🗑️</button>
                    </li>
                  )}  
                  )}

              {props.filter === "open" && props.todos.filter(todo => todo.status === "open").map((openTodo, index) => {
                  
                  return(
                    <li key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={openTodo.status} style={{minWidth: "270px", borderStyle: "none", padding: "10px", color: "white"}} id={openTodo.id} onClick={props.lineText}>{openTodo.text}</button>
                      <button  style={{position: "absolute", borderStyle: "none", background: "none", height: "36px"}} id={openTodo.id} onClick={props.removeTodo}>🗑️</button>
                    </li>
                  )}  
                  )}

              {props.filter === "done" && props.todos.filter(todo => todo.status === "done").map((filteredTodo, index) => {
                  
                  return(
                    <li key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={filteredTodo.status} style={{minWidth: "270px", borderStyle: "none", padding: "10px", color: "white"}} id={filteredTodo.id} onClick={props.lineText}>{filteredTodo.text}</button>
                      <button  style={{position: "absolute", borderStyle: "none", background: "none", height: "36px", float:"right", marginRight:"8px"}} id={filteredTodo.id} onClick={props.removeTodo}>🗑️</button>
                    </li>
                  )}  
                  )}

                    
                <br></br>
                <br></br> 


            <div style={{backgroundColor: "limegreen", width: "270px", padding: "10px 0"}}>
            <label>Filter by status</label>
      
            <select id="filter" onChange={props.updateFilter}>
                <option value="none">all</option>
                <option value="open">open</option>
                <option value="done">done</option>
            </select>
            </div>
            
         
              
        </ul>

    )
}


