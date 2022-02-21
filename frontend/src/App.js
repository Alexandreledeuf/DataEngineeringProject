import './App.css';
import React, {useState} from "react";
const axios = require('axios')

function App() {

  const [text, setText] = useState("");
  const [result,setResult] = useState("nothing");

  function getQuote() {
    axios.post("http://localhost:8083/getText", {text : text}).then(function(response)
    {
      console.log(text)
      setResult(response.data)
    })
  }

  return (
    <div className="App">
      <form action="http://localhost:8083/getText" method="POST">
          <input type="text" name="text" required onChange={(e)=>{setText(e.target.value)}}></input>
          <button type="button" onClick={()=>{getQuote()}}>Send Text</button>
      </form>
      <div>
        {result}
      </div>
    </div>
  );
}
export default App;