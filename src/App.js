import React, { useState } from 'react';
import './App.css';

import InputText from './InputText/InputText' 
import Validation from './Validation/Validation' 
import Char from './Char/Char' 


function App() {
  const [inputTextState, setInputTextState] = useState({
    textValue:""
  })

  const [charArrState, setCharArrState] = useState({
    charArr:['b','c','d']
  })

  const inputTextChangeHandler = (event) =>{
      setInputTextState({
        textValue: event.target.value
      })

      const charArr = [...event.target.value.split("")].filter(el=> el.match(/^[0-9a-zA-Z]+$/));
      setCharArrState({
        charArr: charArr
      })
  }

  let chars = null;

  chars = (
      charArrState.charArr.map((charEl, index) => {
        return <Char char={charEl} className="grid-column-1"/>
      }
    ));

  return (
    <div className="App grid-container">
      <div className="grid-column-12">
        <h1>Conditions and Lists</h1>
      </div>
      <InputText changed={inputTextChangeHandler} textValue={inputTextState.textValue}/>
      <Validation isValid={inputTextState.textValue.length > 5}/>
      {chars}

      <div className="grid-column-12">
        <h5>Created by Florian</h5>
      </div>
      
    </div>
  );
}

export default App;
