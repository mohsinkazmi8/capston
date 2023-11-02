import React from "react";
import { FormInput, FormInputLabel, Group } from "./form-input.styles";


const InputForm = ({label,inputOptions}) =>{
    return(
       <> 
            <Group className="group">
                {label && (
                    <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>
                )}
                 
                <FormInput  className="form-input" {...inputOptions}/>
            </Group>
        </>
    )
}
export default InputForm;