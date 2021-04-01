import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';


export default function Todolist(props) {

  const openTodos = props.todos.filter(todo => todo.isOpen);
  const doneTodos = props.todos.filter(todo => !todo.isOpen);


  return (
    <div className="todolist-background">

      <ul className="todo-list">
        <h3>Open Todos: {openTodos.length}/{props.todos.length}</h3>



        <div className="open-todos-div">
          {props.todos.length > 0 && openTodos.length === 0 &&
            <div className="completion-div">
              <br></br>
                  Well done!
                  <br></br>
                  All tasks completed!
                  <br></br>
              <FontAwesomeIcon icon={faCheck} color="green" />

            </div>
          }

          {openTodos.map((openTodo, index) => {

            return (
              <li key={index} id={openTodo.id} className="todo-listitem">
                <button className={openTodo.isOpen ? "open" : "done"} id={openTodo.id} onClick={props.lineText}>{openTodo.text}</button>
                <button className="delete-BTN" id={openTodo.id} onClick={props.removeTodo}><FontAwesomeIcon icon={faTrash} color="grey" /></button>
              </li>
            )
          }
          )}
        </div>

        <br></br>
        <br></br>
        <hr></hr>

        <h3>Done</h3>

        {doneTodos.map((doneTodo, index) => {

          return (

            <li key={index} id={doneTodo.id} className="todo-listitem">
              <button className={doneTodo.isOpen ? "open" : "done"} id={doneTodo.id} onClick={props.lineText}>{doneTodo.text}</button>
              <button className="delete-BTN" id={doneTodo.id} onClick={props.removeTodo}><FontAwesomeIcon icon={faTrash} color="grey" /></button>
            </li>

          )
        }
        )}

        <br></br>
        <br></br>
        <br></br>
        <button className="delete-list-BTN" onClick={props.deleteList}>Delete list</button>
        <br></br>
        <br></br>

      </ul>

    </div>
  )
}


