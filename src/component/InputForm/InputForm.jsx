import React from "react";
import "./form-input.styles.scss";


const InputForm = ({label,inputOptions}) =>{
    return(
       <> 
            <div className="group">
                {label && (
                    <label className={`${inputOptions.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                )}
                
                <input className="form-input" {...inputOptions}/>
            </div>
        </>
    )
}
export default InputForm;