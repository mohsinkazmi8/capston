import React , {useState , useContext} from "react";
import {createUserWithEmailAndPassword , createUserDocumentFromAuth} from '../../utils/firebase/firebase';
import { UserContext } from "../../contexts/UserContext";
import InputForm from '../InputForm/InputForm'
import './signup.scss'
import Button from "../button/Button";

const DefaultFormFields = {
    displayname: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUp = () =>{

    const [formfield , setformfield] = useState(DefaultFormFields)

    const {displayname,email,password,confirmPassword} = formfield;

    const {setCurrentUser} = useContext(UserContext);

    const resetFormField = () =>{
        setformfield(DefaultFormFields)
    }

    const val = useContext(UserContext)
    console.log('hit');

    console.log(formfield);

    const handelSubmit =async (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert('Passwords dose not match');
             return;
        }

        try{
            const {user} = await createUserWithEmailAndPassword(
                email,
                password
            );
            setCurrentUser(user);
            resetFormField();
            await createUserDocumentFromAuth(user, {displayname}); 
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('This Email already exist')
            }
            else{
            console.log('user creation encounterd an error', error);
            }
        }
    }

    const handelchange = (event) =>{
        const {name,value} = event.target;
        setformfield ({...formfield, [name]:value})
    }; 

    return(
        <>
            <div className="sign-up-container">

                <h2> Don't Have an Account</h2>
                <form onSubmit={handelSubmit}>
                    
                    <InputForm 
                        label='Displayname' 
                        inputOptions = {{
                            onChange: handelchange ,
                            type:"text" ,
                            value:displayname ,
                            name:"displayname",
                            required: true,
                        }}
                    />

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

                    <InputForm 
                        label='Confirm Password' 
                        inputOptions = {{
                            onChange: handelchange ,
                            type:"text" ,
                            value:confirmPassword ,
                            name:"confirmPassword",
                            required: true,
                        }}
                    />
                    <Button type='submit'>Sign Up</Button>
                    
                </form>
            </div>
        </>
    )
}
export default SignUp;