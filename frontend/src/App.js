// @bekbrace
// FARMSTACK Tutorial - Sunday 13.06.2021
 
import React, { useState, useEffect} from 'react';
import './App.css';
import TodoView from './components/TodoListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('') 
  const [type,settype] = useState("");
  const [mob,setmob] = useState("");
  const [latitude,setlatitude] = useState("");
  const [longitude,setlongitude] = useState("");
  
    

  // Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  // Post a todo
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', { 'title': title, "type":type, "mobile":mob, "latitude":latitude, "longitude":longitude})
      .then(res => console.log(res))
};

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 10rem;">Make Way To Ambulance</h1>
      <h6 className="card text-white bg-primary mb-3">Details Will Be Shared With Traffic Control Room</h6>
     <div className="card-body">
      <h5 className="card text-white bg-dark mb-3">Add Ambulance Details</h5>
      <span className="card-text"> 
        <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Vehicle No'/> 
        <input className="mb-2 form-control desIn" onChange={event => settype(event.target.value)}   placeholder='Type'/>
        <input className="mb-2 form-control desIn" onChange={event => setmob(event.target.value)}   placeholder='Mobile'/>
        <input className="mb-2 form-control desIn" onChange={event => setlatitude(event.target.value)}   placeholder='Latitude'/>
        <input className="mb-2 form-control desIn" onChange={event => setlongitude(event.target.value)}   placeholder='Longitude'/>
        
      <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addTodoHandler}>Add Details</button>
      </span>
      <h5 className="card text-white bg-dark mb-3">Ambulances Nearby</h5>
      <div >
      <TodoView todoList={todoList} />
      </div>
      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0" >Copyright 2021, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;