import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Todolist(props){

    const openTodos = props.todos.filter(todo => todo.status === "open");


    return(
        <div style={{backgroundColor: "white", width: "96vw", maxWidth: "380px"}}>
        
        <ul style={{padding: "10px 0", width: "96vw", maxWidth: "380px", backgroundColor: "rgb(255,255,255,0.95)"}}>
        <h3>Open Todos: {openTodos.length}/{props.todos.length}</h3>
        <br></br>

              {openTodos.map((openTodo, index) => {
                  
                  return(
                    <li key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={openTodo.status} style={{minWidth: "270px", borderStyle: "none", padding: "10px", color: "white"}} id={openTodo.id} onClick={props.lineText}>{openTodo.text}</button>
                      <button  style={{position: "absolute", borderStyle: "none", background: "none", height:"36px", fontSize:"1.4em"}} id={openTodo.id} onClick={props.removeTodo}><FontAwesomeIcon icon={faTrash} color="grey" /></button>
                    </li>
                  )}  
                  )}

              <br></br>
              <br></br>
              <hr></hr>
              <h3>Done</h3>
              <br></br>

      
              {props.todos.filter(todo => todo.status === "done").map((filteredTodo, index) => {
                  
                  return(
                    <li key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={filteredTodo.status} style={{minWidth: "270px", borderStyle: "none", padding: "10px", color: "white"}} id={filteredTodo.id} onClick={props.lineText}>{filteredTodo.text}</button>
                      <button  style={{position: "absolute", borderStyle: "none", background: "none", paddingLeft:"6px", height:"36px", fontSize:"1.4em"}} id={filteredTodo.id} onClick={props.removeTodo}><FontAwesomeIcon icon={faTrash} color="grey" /></button>
                    </li>
                  )}  
                  )}
            
         
              
        </ul>

        </div>
    )
}


