import React from "react";

export default function Todolist(props){
    return(

        <ul style={{padding: "30px 0", maxWidth: "360px", backgroundColor: "rgb(255,255,255,0.95)"}}>
              
              {props.filter === "none" && props.todos.map((todo, index) => {
                  
                  return(
                    <li key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={todo.status} style={{marginLeft:"30px", minWidth: "280px", borderStyle: "none", padding: "10px", color: "white", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}} id={todo.id} onClick={props.lineText}>{todo.text}</button>
                      <button  style={{borderStyle: "none", background: "none", height: "36px"}} id={todo.id} onClick={props.removeTodo}>🗑️</button>
                    </li>
                  )}  
                  )}

              {props.filter === "open" && props.todos.filter(todo => todo.status === "open").map((openTodo, index) => {
                  
                  return(
                    <li key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={openTodo.status} style={{marginLeft:"30px", minWidth: "280px", borderStyle: "none", padding: "10px", color: "white", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}} id={openTodo.id} onClick={props.lineText}>{openTodo.text}</button>
                      <button  style={{borderStyle: "none", background: "none", height: "36px"}} id={openTodo.id} onClick={props.removeTodo}>🗑️</button>
                    </li>
                  )}  
                  )}

              {props.filter === "done" && props.todos.filter(todo => todo.status === "done").map((filteredTodo, index) => {
                  
                  return(
                    <li key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={filteredTodo.status} style={{marginLeft:"30px", minWidth: "280px", borderStyle: "none", padding: "10px", color: "white", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}} id={filteredTodo.id} onClick={props.lineText}>{filteredTodo.text}</button>
                      <button  style={{borderStyle: "none", background: "none", height: "36px"}} id={filteredTodo.id} onClick={props.removeTodo}>🗑️</button>
                    </li>
                  )}  
                  )}

        </ul>

    )
}


