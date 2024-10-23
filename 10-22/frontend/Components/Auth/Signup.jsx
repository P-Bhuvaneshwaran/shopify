import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../Config";
// import '../../Styles/auth.css'
const Signup = () =>{

    const navigate = useNavigate();

    const [uname, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);
    const [errorMsg, setErrorMsg] = useState({
        uname: '',
        email: '',
        pass:'',

    });
    
    const validateUsername=(uname)=>{
        const regEx = /^[A-Za-z\s'-]+$/;
        return regEx.test(uname)
    }
    
    const validateEmail=(email)=>{
        const regEx =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regEx.test(email)
    }

    const validatePassword=(pass)=>{
        const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regEx.test(pass)
    }


    async function connectFirebase(newErrors) {
        await createUserWithEmailAndPassword(auth, email,pass)
        .then(()=>{
            console.log("created successfully")
            navigate('/auth-login');   
        })
        .catch((error)=>{
            console.log(error.code)
            // console.log(newErrors);
            
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
                default:
                    alert(error.message);
            }
            setErrorMsg(newErrors)
        }); 
      
    }
    // Admin@fshop1fy

    const validateSignupForm = (e) =>{
        e.preventDefault();
        let isValid = true;
        const newErrors ={uname: '', email:'', pass: ''};
        
        console.log(uname,email,pass);

        if(uname.length==0){
            isValid = false;
            newErrors.uname = 'Name is required.';
        }
        else if(!validateUsername(uname)){
            isValid = false;
            newErrors.uname = 'Name is not valid';

        }
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
            console.log("validation successfull")
            connectFirebase(newErrors);

        }
        
        return isValid;



    }

    return(
        <div className="signupPage" id="authDiv">
            <div id="auth-container">
                <h2>Continue</h2>
                <form action="/auth-login" onSubmit={validateSignupForm}>
                    <div id="auth-fields">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)} />
                       {errorMsg.uname &&  <p className="errMsg">{errorMsg.uname}</p>}
                    </div>
                    <div id="auth-fields">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="" placeholder="Enter Your Email Address" onChange={(e)=>setEmail(e.target.value)} />
                       {errorMsg.email &&  <p className="errMsg">{errorMsg.email}</p>}
                        {/* <p className="errMsg">Error</p> */}
                    </div>
                    <div id="auth-fields">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Your Password" name="password" onChange={(e)=>setPass(e.target.value)} />
                        {/* <p className="errMsg">Error</p> */}
                       {errorMsg.pass &&  <p className="errMsg">{errorMsg.pass}</p>}
                    </div>
                    <div id="auth-fields">
                        <input type="submit" value="Signup" />
                        <p>Already have an account?  <NavLink to={'/auth-login'}>Login</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;