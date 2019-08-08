import React from "react";
import './Validation.css';

const validation = (props) =>{
    return(
        <div className="Validation grid-column-12">
            Is valid: {props.isValid ? 
            <span className="text-green">Text long enough</span> :
            <span className="text-red">Text too short</span>}
        </div>
    )
}

export default validation;