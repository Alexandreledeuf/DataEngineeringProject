import './App.css';
import React, {useState} from "react";
const axios = require('axios')

function App() {

  const [text, setText] = useState("");
  const [result,setResult] = useState("nothing");
  const [Array, setArray] = useState("");
  const [lenText, setlen] = useState(0);
  const [image, setImage] = useState("");

  function getQuote() {
    axios.post("http://localhost:8083/getText", {text : text}).then(function(response)
    {
      const Array2 = (response.data.split(" "));
      const len = ((response.data.split(' ').length) - 11);
      setArray(response.data.split(" "))
      setlen((response.data.split(' ').length) - 11)
      setResult(response.data);
      if( Number((Array2[len]).replace(/[,]/g, '')) > 0.75){
        setImage("https://c.tenor.com/BPWI7wcDST8AAAAC/salt-salt-intensifies.gif");
      }
      else if(Number((Array2[len]).replace(/[,]/g, '')) < 0.25){
        setImage("https://i.giphy.com/media/tJg7obDjt7aOOaPp3h/giphy.webp")
      }
      else if(Number((Array2[len]).replace(/[,]/g, '')) > 0.25 && Number((Array2[len]).replace(/[,]/g, '')) < 0.50)  
      {
        setImage("https://i.giphy.com/media/3o7P4F86TAI9Kz7XYk/giphy.webp");
      }
      else{
        setImage("https://media1.tenor.com/images/05c70637dbeb5f40336c0ea2bf5ab086/tenor.gif?itemid=13944997");
      }
    })
  }

  return (
    <body>
    <div>
        <h1><img class="imgheader" src="https://www.streamscheme.com/wp-content/uploads/2020/04/pjsalt.png" width="2%"/>Welcome to Toxicity Analyzer page !<img class="imgheader" src="https://www.streamscheme.com/wp-content/uploads/2020/04/pjsalt.png" width="2%"/></h1>
    </div>
    <div className="App" class="form-style-3">
      <form action="http://localhost:8083/getText" method="POST">
          <fieldset><legend>Toxicity Analyzer</legend>
          <label for="feelings">Write your sentence:</label>
          <input class="inputText" autocomplete="off" type="text" name="text" required onChange={(e)=>{setText(e.target.value)}}></input>
          <span> </span><button type="button" onClick={()=>{getQuote()}}>Send Text</button>
          </fieldset>
      </form>
      </div>
      <div class="result">
        <a>Your sentence "{text}" is made of : </a>
        <br></br>
        <a>-Toxicity: {Array[lenText]}</a>
        <br></br>
        <a>-Severe Toxicity: {Array[lenText +2]}</a>
        <br></br>
        <a>-Obscene: {Array[lenText +4]}</a>
        <br></br>
        <a>-Threat: {Array[lenText +6]}</a>
        <br></br>
        <a>-Insult: {Array[lenText +8]}</a>
        <br></br>
        <a>-Identity attack: {Array[lenText +10]}</a>
      </div>
      <div class="img">
        <img alt="" src={image}/>
      </div>
    </body>
    
    
  );
}
export default App;