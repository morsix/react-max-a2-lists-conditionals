import React, { useState } from 'react';
import './App.css';

import InputText from './InputText/InputText' 


function App() {
  const [inputTextState, setInputTextState] = useState({
    textValue:"Bla"
  })

  const inputTextChangeHandler = (event) =>{
      setInputTextState({
        textValue: event.target.value
      })
  }

  return (
    <div className="App grid-container">
      <div className="grid-column-12">
        <h1>Conditions and Lists</h1>
      </div>
      <InputText changed={inputTextChangeHandler} textValue={inputTextState.textValue}/>
      <div className="grid-column-12">
        <h5>Created by Florian</h5>
      </div>
      
    </div>
  );
}

export default App;
