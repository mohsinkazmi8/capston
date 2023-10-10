import React , {useState} from "react";
import {
    createUserWithEmailAndPassword ,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    } from '../../utils/firebase/firebase'
import InputForm from '../InputForm/InputForm'
import './signin.scss'
import Button from "../button/Button";

const DefaultFormFields = {
    email: '',
    password: '',
}


const SignIn = () =>{

    const [formfield , setformfield] = useState(DefaultFormFields)

    const {email,password,} = formfield

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
       await createUserDocumentFromAuth(user);
    }

    console.log(formfield);

    const handelSubmit =async (event) =>{
        event.preventDefault();

        try{
            
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(response);

        }catch(error){
            if(error.code === 'auth/invalid-login-credentials'){
                alert('Email or Password is in Correct')
            }
            console.log(error);
        }
    }

    const handelchange = (event) =>{
        const {name,value} = event.target;
        setformfield ({...formfield, [name]:value})
    }; 

    return(
        <>
            <div className="sign-up-container">

                <h2> Already Have an Account</h2>
                <form onSubmit={handelSubmit}>
                    
                    <InputForm 
                        label='Email' 
                        inputOptions = {{
                            onChange: handelchange ,
                            type:"email" ,
                            value:email ,
                            name:"email",
                            required: true,
                        }}
                    />

                    <InputForm 
                        label='Password' 
                        inputOptions = {{
                            onChange: handelchange ,
                            type:"text" ,
                            value:password ,
                            name:"password",
                            required: true,
                        }}
                    />
                    <div className="buttons-container">
                        <Button type='submit'>Sign In</Button>
                        <Button onClick={logGoogleUser} buttonType={'google'} type='button'>Sign In With Google</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default SignIn;