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
    charArr:[]
  })

  const inputTextChangeHandler = (event) =>{
      let formattedText = event.target.value.replace(/[^A-Za-z]/g, "").substring(0,100);
      setInputTextState({
        textValue: formattedText
      })

      const charArr = [...formattedText.split("")].filter(el=> el.match(/^[0-9a-zA-Z]+$/));
      setCharArrState({
        charArr: charArr
      })
  }

  const charClickHandler = (index) => {
    shot();
    const charArr = [...charArrState.charArr];
    charArr.splice(index, 1);
    setCharArrState({ charArr: charArr });
    setInputTextState({
      textValue: charArr.join('')
    })
  }

  const shot = () =>{
    var sound = new Audio();
    sound.src = "http://localhost:3000/shot.mp3";
    sound.play()
  }

  const generateRandomString = () =>{
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  let chars = null;

  chars = (
      charArrState.charArr.map((charEl, index) => {
        return <Char key={generateRandomString()} char={charEl} click={ ()=> charClickHandler(index)}  className="grid-column-1"/>
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
