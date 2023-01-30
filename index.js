//import React from "react";
//import ReactDOM from "react-dom/client";
//import abc from "./abc.css";
/*import demo from "./demo";
//import { render } from "@testing-library/react"
import React from "react";
import  ReactDOM  from "react-dom/client";
import Demo from "./demo.js";
const Hello= ()=>{
    return(<>
    <div><h1>Hi</h1>
    <Demo usha={usha} neeha={neeha} koti={koti}/></div>
    </>
    );
    var name="neeha"
       <h2 style={{color: "blue"}}><App hh={name} /></h2>
       const[count,setCount]=useState(0);
    const handleClick =()=>{
        console.log("print"+{count});
    setCount(count+1);
    <div style={{backgroundColor: "lightblue"}}>
        <p>You clicked{count}</p>
        <button onClick={handleClick }>clicked me {count} times</button> <br/>
        <button>clicked{count}me</button> 
        function Usha(){   
        return(
            <div style={{backgroundColor: "lightblue"}}>
                <h1>hiiii</h1>
                <h1>hello<br/>
                namaste<br/>
                vanakkam
                </h1>
            </div>
        )
    }
}
}


// let a ={}
// b =a
import React ,{useState}from "react";
import ReactDOM  from "react-dom/client";
import Student from "./Student.js"; 
import './App.css';
const Hello= ()=>{
    
    const stus=[1,"neeha",10];
    const stus1=[1,"neeha",10];
    const stus2=[1,"neeha",10];
    const stus3=[1,"neeha",10];
    const stus4=[1,"neeha",10];
    const stus7=[1,"neeha",10];
    const stus8=[1,"neeha",10];
    
    return(<>
      <div>
    <h3><Student s1={stus}/></h3>
    <h3><Student s1={stus1}/></h3>
    <h3><Student s1={stus2}/></h3>
    <h3><Student s1={stus3}/></h3>
    <h3><Student s1={stus4}/></h3>
    <h3><Student s1={stus7}/></h3>
    <h3><Student s1={stus8}/></h3>
    </div>
    </>)}
    
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Hello />);
    export default Hello;*/
    import React,{useState} from 'react'
    import ReactDOM  from "react-dom/client";
    import TodoList from './TodoList';
    
    const App = () => {
      const [task,setTask] = useState("");
      const [todos,setTodos] = useState([]);
    
      const changeHandler = e =>{
        setTask(e.target.value)
      }
      const submitHandler = e =>{
        e.preventDefault();
        const newTodos = [...todos,task];
        setTodos(newTodos);
        setTask("");
      }
      const deleteHandler = (indexValue) =>{
        const newTodos = todos.filter((todo,index) => index !== indexValue);
        setTodos(newTodos);
      }
      return (
        <div>
          <center>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Todo Management Application</h5>
                <form onSubmit={submitHandler}>
                  <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
                  <input type="submit" value="Add" name="Add"/>
                </form>
                <TodoList todolist={todos} deleteHandler={deleteHandler}/>
              </div>
            </div>
          </center>
        </div>
      )
    }
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />)
    export default App;
   /* import React ,{useState}from "react";
import ReactDOM  from "react-dom/client";



export default Index*/
