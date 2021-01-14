import React, {useState} from "react";
import './App.css';
import Navigation from "./Components/Navigation.jsx";
import Form from "./Components/Form.jsx";
import Todolist from "./Components/Todolist.jsx";


export default function App() {
  

  const [todos, setAllTodos] = useState([]);
  const [text, setInput] = useState("");
  const [todoID, setID] = useState(0);


  function updateInput(event){
         setInput(event.target.value);
    }

  const getInput = event => {
        event.preventDefault();
        if (text.length>0){
          addTodo({text: text, isOpen: true, id: todoID});
          setInput("");
          setID(todoID+1);
        }
    }
 

  const addTodo = newTodo => {
    setAllTodos(todos => [...todos, newTodo]);
  }



 function removeTodo(event) {
      console.log(todos);
      console.log(event.currentTarget.id);
      const foundIndex = todos.findIndex(todo => todo.id == event.currentTarget.id);
      console.log(foundIndex);
      let listToSplice = [...todos];
      listToSplice.splice(foundIndex, 1);
      setAllTodos(listToSplice);
  }

  function lineText(event){
    const foundIndex = todos.findIndex(todo => todo.id == event.currentTarget.id);
    todos[foundIndex].isOpen = !todos[foundIndex].isOpen
    setAllTodos([...todos]);
}

  return (
    <div className="App">
      <div className="App-header">

        <Navigation />

          <br></br>
          <center>

          <h1 style={{fontSize:"24pt"}}>Todo List</h1>

          <br></br>
          
          <Form text = {text} getInput = {getInput} updateInput = {updateInput}  />


          
          {todos.length>0 &&
              <Todolist todos = {todos} lineText = {lineText} removeTodo = {removeTodo} />
            }
          
          </center>
          <br></br><br></br>
      </div>
      
     
    
        

    </div>
  )
}