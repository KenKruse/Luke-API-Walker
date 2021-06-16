import React, {useState} from 'react';
import './App.css';
import People from './components/People';
import Planets from './components/Planets';
import {navigate, Router} from '@reach/router';

function App() {
  const [type, setType] = useState("")
  const [id, setId] = useState(1)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    navigate("/" + type + "/" + id)
  }  

  return (
    <div className="App">

      <h1>Search for Star Wars People & Planets</h1>

      <form onSubmit={onSubmitHandler}>
        <label style={{margin: "10px"}}>Search For:</label>
        <select style={{margin: "10px", background: "#999999", color: "orange"}} name="type" value={type} onChange={ (e) => setType(e.target.value)}>
          <option style={{margin: "10px", background: "#999999", color: "orange"}} value="people">People</option>
          <option style={{margin: "10px", background: "#999999", color: "orange"}} value="planets">Planet</option>
        </select>
        <label style={{margin: "10px"}}>ID:</label>
        <input style={{margin: "0px, 10px, 0px, 0px", background: "#999999", color: "#00FFFF", width: "30px"}} name="id" type="number" value={id} onChange={ (e) => setId(e.target.value)} />
        <button style={{margin: "10px", background: "#999999", color: "#FFFF00"}} type="submit">Search Star Wars</button>
      </form>
      
      <Router>
        <People path="/people/:id/" />
        <Planets path="/planets/:id/" />
        {/* <Dogs path="/dogs/:searchTerm" />   //from lecture: this line of code is a major hint for this assignment?? */}
      </Router>
    </div>
  );
}

export default App;
