import React from "react";
import './Validation.css';

const validation = (props) =>{
    return(
        <div className="Validation grid-column-12">
            Is valid: {props.isValid ? 
            <span className="text-green">true</span> :
            <span className="text-red">false</span>}
        </div>
    )
}

export default validation;