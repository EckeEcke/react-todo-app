import React, {useState} from "react";
import './App.css';


export default function App() {



  const [menuShown, toggleShowMenu] = useState("no-show");

  function showMenu(){
    if (menuShown == "no-show") {
      toggleShowMenu("show-menu");
    }
    
    if(menuShown == "show-menu"){
      toggleShowMenu("no-show");
 
    }
}


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

      <nav>
 
        <button id="hamburger" onClick={showMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </button>
        <div id="burger-menu" show={menuShown} className={menuShown}>
          <ul>
            <li>
              <a href="https://eckeecke.github.io/index.html">Home</a>
            </li>

            <li>
              <a href="https://nifty-hopper-c1da01.netlify.app/" target="_blank">React Travel Blog</a>
            </li>

            <li>
              <a href="https://eckeecke.github.io/shooter.html">JS Space Shooter</a>
            </li>
 
            <li>
              <a href="https://eckeecke.github.io/pong.html">JS Pong</a>
            </li>

            <li>
              <a href="https://eckeecke.github.io/jsdemos.html">Demos</a>
            </li>
          </ul>
        </div>

      </nav>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    
      <center>

        <h1 style={{fontSize:"24pt"}}>Todo List</h1>

        <br></br>
        
        <form>
              <input type="text" className="todoInput" value={text} onChange={updateInput} placeholder="Enter todo" maxlength="22"></input>
              <button className="App-button" onClick={getInput}><b>+</b> Add todo</button>
              <br></br>
              
              <br></br>
              <label style={{display:"inline-block", width:"244px", textAlign: "left", backgroundColor:"white", color:"black", padding:"8px 0", paddingLeft:"4px"}}>Filter by status</label>
              <select style={{display:"inline-block", width: "100px", padding:"7px 8px 8px", backgroundColor:"limegreen", color:"white", border:"none"}} id="filter" onChange={updateFilter}>
                <option value="none">all</option>
                <option value="open">open</option>
                <option value="done">done</option>
              </select>
                
        </form>

        <br></br>

        
        {todos.length>0 &&
      

            <ul style={{padding: "30px 0", maxWidth: "360px", backgroundColor: "rgb(255,255,255,0.95)"}}>
              
              {filter === "none" && todos.map((todo, index) => {
                  
                  return(
                    <li count={count} key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={todo.status} style={{marginLeft:"30px", minWidth: "280px", borderStyle: "none", padding: "10px", color: "white", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}} id={todo.id} onClick={lineText}>{todo.text}</button>
                      <button  style={{borderStyle: "none", background: "none", height: "36px"}} id={todo.id} onClick={removeTodo}>🗑️</button>
                    </li>
                  )}  
                  )}

              {filter === "open" && todos.filter(todo => todo.status === "open").map((openTodo, index) => {
                  
                  return(
                    <li count={count} key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={openTodo.status} style={{marginLeft:"30px", minWidth: "280px", borderStyle: "none", padding: "10px", color: "white", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}} id={openTodo.id} onClick={lineText}>{openTodo.text}</button>
                      <button  style={{borderStyle: "none", background: "none", height: "36px"}} id={openTodo.id} onClick={removeTodo}>🗑️</button>
                    </li>
                  )}  
                  )}

              {filter === "done" && todos.filter(todo => todo.status === "done").map((filteredTodo, index) => {
                  
                  return(
                    <li count={count} key={index} style={{listStyle: "none", marginBottom: "2px"}}>
                      <button  className={filteredTodo.status} style={{marginLeft:"30px", minWidth: "280px", borderStyle: "none", padding: "10px", color: "white", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}} id={filteredTodo.id} onClick={lineText}>{filteredTodo.text}</button>
                      <button  style={{borderStyle: "none", background: "none", height: "36px"}} id={filteredTodo.id} onClick={removeTodo}>🗑️</button>
                    </li>
                  )}  
                  )}

        </ul>
          }
        
        </center>
      </div>
      
     
    
        


    </div>
  )
}
