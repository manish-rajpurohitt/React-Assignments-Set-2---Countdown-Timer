import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [input,setInput] = React.useState("");
  const [time,setTime] = React.useState(0);
  const handleUserKeyPress = (e)=>{
    
    if(e.key !== "Enter" || isNaN(Number(input)) || Number(input) < 0) return;
    
    setTime(parseInt(input));
  }
  useEffect(() => {
    const timer=setTimeout(() => {
      if(time > 0 )
      setTime(time-1);
      else setTime(0);
    }, 1000);
    
    return () =>{console.log(timer); clearTimeout(timer);}
  },[time]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
<<<<<<< HEAD
          Reverse countdown for<input id="timeCount" value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyDown={(e)=>handleUserKeyPress(e)} /> sec.
=======
          Reverse countdown for<input id="timeCount" value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyDown={()=>handleUserKeyPress(event)} /> sec.
>>>>>>> ba2192588b4e43c6552fc1987e11c3f6b7ae227e
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  )
}


export default App;
