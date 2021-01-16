import React, {useState} from "react";
import './App.css';
import Navigation from "./Components/Navigation.jsx";
import Form from "./Components/Form.jsx";
import Todolist from "./Components/Todolist.jsx";


export default function App() {
  
  const [todos, setAllTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [todoID, setID] = useState(localStorage.getItem("id") || 0);
 
  

  const addTodo = text => {
    if(text.length>0){

      setID(() => {
        const newID = parseInt(todoID)+1;
        localStorage.setItem("id", newID);
        return newID;
    })

      const newTodos = [...todos, {text: text, isOpen: true, id: todoID}];
      
      setAllTodos(() => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
      });
      
  }}



 function removeTodo(event) {
      const foundIndex = todos.findIndex(todo => todo.id == event.currentTarget.id);
      let listToSplice = [...todos];
      listToSplice.splice(foundIndex, 1);
      setAllTodos(() => {
        localStorage.setItem("todos", JSON.stringify(listToSplice));
        return listToSplice;
      });
  }

  function lineText(event){
    const foundIndex = todos.findIndex(todo => todo.id == event.currentTarget.id);

    todos[foundIndex].isOpen = !todos[foundIndex].isOpen
      setAllTodos(() => {
        localStorage.setItem("todos", JSON.stringify([...todos]));
        return [...todos];
    });
  }





  return(
    <div className="App">
      <div className="App-header">

        <Navigation />

          <br></br>
          <center>

          <h1 style={{fontSize:"24pt"}}>Todo List</h1>

          <br></br>
          
          <Form addTodo = {addTodo} />


          
          {todos.length>0 &&
              <Todolist todos = {todos} lineText = {lineText} removeTodo = {removeTodo} />
            }
          
          </center>
          <br></br><br></br>
      </div>
      
     
    
        

    </div>
  )
}
