import React, {useState} from "react";
import './App.css';
import Navigation from "./Components/Navigation.js";
import Form from "./Components/Form.js";
import Todolist from "./Components/Todolist.js";


export default function App() {



  


  const [todos, setAllTodos] = useState([]);
  const [filter, setFilter] = useState("none");
  const [text, setInput] = useState("");
  const [count, setCounter] = useState(0);
  const [todoID, setID] = useState(0);


  function updateInput(event){
         setInput(event.target.value);
    }

  const getInput = event => {
        event.preventDefault();
        if (text.length>0){
          addTodo({text: text, status: "open", id: todoID});
          setInput("");
          setID(todoID+1);
        }
    }
 
  const updateFilter = event => {
        setFilter(event.target.value);
  }



  const addTodo = newTodo => {
    setAllTodos(todos => [...todos, newTodo]);
  }



 function removeTodo(event) {
      const foundIndex = todos.findIndex(todo => todo.id == event.target.id);
      let listToSplice = [...todos];
      listToSplice.splice(foundIndex, 1);
      setAllTodos(listToSplice);
  }

  function lineText(event){
    const foundIndex = todos.findIndex(todo => todo.id == event.target.id);

    if(todos[foundIndex].status == "done"){
      todos[foundIndex].status = "open";
      setAllTodos(todos);
      setCounter(count+1);
      if(filter=="none"){
        event.target.className = "open";
      }

    } else if(todos[foundIndex].status == "open"){
      todos[foundIndex].status = "done";
      setAllTodos(todos);
      setCounter(count+1);
      if(filter=="none"){
        event.target.className = "done";
      }     
    }
}




  return (
    <div className="App">
      <div className="App-header">

        <Navigation />


        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      
          <center>

          <h1 style={{fontSize:"24pt"}}>Todo List</h1>

          <br></br>
          
          <Form text = {text} getInput = {getInput} updateInput = {updateInput} updateFilter = {updateFilter} />

          <br></br>

          
          {todos.length>0 &&
              <Todolist todos = {todos} filter = {filter} lineText = {lineText} removeTodo = {removeTodo} />
            }
          
          </center>

      </div>
      
     
    
        


    </div>
  )
}
