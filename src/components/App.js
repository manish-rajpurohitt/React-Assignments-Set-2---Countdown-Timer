import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [input,setInput] = React.useState(0);
  const [time,setTime] = React.useState(0);
  const handleUserKeyPress = (e)=>{
    console.log("inhandlePress",Number(time));
    if(e.key !== "Enter" || isNaN(Number(input))) return;
    console.log("if passed")
    setTime(parseInt(input));
  }
  useEffect(() => {
    const timer=setTimeout(() => {
      if(time > 0 )
      setTime(time-1);
    }, 1000);
    return () => clearTimeout(timer);
  },[time]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" value={input} onChange={()=>{setInput(event.target.value)}} onKeyDown={()=>handleUserKeyPress(event)} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  )
}


export default App;
