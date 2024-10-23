import React, { useState } from 'react';
import '../../Styles/auth.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);
    const [errorMsg, setErrorMsg] = useState({
        uname: '',
        email: '',
        pass:'',

    });
        
    const validateEmail=(email)=>{
        const regEx =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regEx.test(email)
    }

    const validatePassword=(pass)=>{
        const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regEx.test(pass)
    }


    async function connectFirebase(newErrors) {
        signInWithEmailAndPassword(auth,email,pass)
        .then(()=>{
            console.log("logined successfully")
            navigate('/home');   
        })
        .catch((error)=>{
            console.log(error.code)
        // });
            console.log(newErrors);
            
            switch(error.code){
                case 'auth/email-already-in-use':
                    newErrors.email = "Email already exists";
                    break;
                case 'auth/invalid-email':
                     newErrors.email = "Please enter a valid email address";
                     break;
                case 'auth/weak-password':
                     newErrors.email = "Strong password required";
                     break;
                case 'auth/wrong-password':
                     newErrors.pass = "Please enter a valid password";
                     break;
                case 'auth/invalid-credential':
                     newErrors.pass = "Please enter a valid password";
                     newErrors.email = "Please enter a valid email";
                     break;
                default:
                    alert(error.message);
            }
            setErrorMsg(newErrors)
        }); 
      
    }
    // Admin@fshop1fy

    const validateLoginForm = (e) =>{
        e.preventDefault();
        let isValid = true;
        const newErrors ={email:'', pass: ''};
        
        console.log(email,pass);

        if(email.length==0){
            isValid = false;
            newErrors.email = 'Email is required.';
        }
        else if(!validateEmail(email)){
            isValid = false;
            newErrors.email = 'Email is not Valid.';
        }
        if(pass.length==0){
            isValid = false;
            newErrors.pass = 'Password is required.';
        }
        else if(pass.length<8){
            isValid = false;
            newErrors.pass = 'Password length must be 8 or more.';    
        }
        else if(!validatePassword(pass)){
            isValid = false;
            newErrors.pass = 'Strong password required.';        
        }

        setErrorMsg(newErrors)
        console.log(errorMsg);
        if(isValid!=false){
            console.log("Validation successfull")
            connectFirebase(newErrors);

        }
        
        return isValid;


    }

    return(
        <div id='authDiv'>   
        <div id="auth-container">
            <h2>Continue</h2>
            
            <form action="/home" onSubmit={validateLoginForm}>
                <div id="auth-fields">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="" placeholder="Enter Your Email Address" onChange={(e)=>setEmail(e.target.value)} />
                    {errorMsg.email &&  <p className="errMsg">{errorMsg.email}</p>}
                </div>
                <div id="auth-fields">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Your Password" name="password" onChange={(e)=>setPass(e.target.value)} />
                    {errorMsg.pass &&  <p className="errMsg">{errorMsg.pass}</p>}
                </div>
                <div id="auth-fields">
                    <input type="submit" value="Login" />
                    <p>If you don't have an account?  <NavLink to={'/auth-signup'}>Signup</NavLink></p>
                </div>
                </form>
            </div>
    </div>
    )
}

export default Login;