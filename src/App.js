import './App.css';
import React, { useState , useEffect } from "react";

function App() {

  const [todo,settodo] = useState([])
  const [todoInput,settodoInput] = useState('')

  function handleInputChange(e){
    settodoInput(e.target.value);
  }
  function handleClick(e){
    e.preventDefault();
    settodo([...todo,todoInput]);
    settodoInput('');
  };
  useEffect(() => {
    let initialtodo = JSON.parse(localStorage.getItem('todos'));
    if(initialtodo!==null){
      settodo(initialtodo)
    }
  },[]);
  
useEffect(() => {
  let initialtodo = localStorage.getItem('todos');
  if(initialtodo===null){
    localStorage.setItem('todos',JSON.stringify([])) 
  }
  else{
    if(todo.length!==0){
    localStorage.setItem('todos',JSON.stringify(todo))    
  } 
  }
},[todo]);


  return (
    <div className="App">
     <h3>ToDo - APP</h3>
        <input type="textarea" value={todoInput} onChange={handleInputChange}></input>
        <button type="button" onClick={handleClick}>Add</button>
        <ul>{todo.map( to => <li key={to}>{to}</li>)}</ul>
    </div>
  );
}

export default App;
