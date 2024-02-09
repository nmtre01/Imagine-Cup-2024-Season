import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

   // new line start
  const [inputData, setInputData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/translation",
    })
    .then((response) => {
      const res =response.data
      setInputData(({
        input_text: res.input,
        output_text: res.output}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* new line start*/}
        <p>To get your translation details: </p><button onClick={getData}>Click me</button>
        {inputData && <div>
              <p>Translation input: {inputData.input_text}</p>
              <p>Translation output: {inputData.output_text}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
  );
}

export default App;
