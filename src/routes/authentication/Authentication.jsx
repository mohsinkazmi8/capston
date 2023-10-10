import React from "react";
import SignUp from "../../component/sign-up/SignUp";
import SignIn from "../../component/sign-in/SignIn";
import './authentication.scss'

const Authentication = () =>{
    
    return(
        <>
            <div className="authentication-contaier">
                <SignIn/>
                <SignUp/>
            </div>
        </>
    )
}
export default Authentication;