import React from "react";
import './InputText.css';

const inputText = (props) => {
    return(
        <div className="InputText">
            <label className="grid-column-12" htmlFor="inputTextId">Input your text here:</label>
            <textarea rows="4" className="grid-column-12" id="inputTextId" onChange={props.changed} value={props.textValue}></textarea>
            <p className="grid-column-12">{props.textValue}</p>
        </div>
    )
}

export default inputText;