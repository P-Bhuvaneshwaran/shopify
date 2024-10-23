import React, { useState } from 'react';
import './auth.css'
import auth from '../Config';
import { createUserWithEmailAndPassword, validatePassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import NetConn from '../Components/NetConn';

function Login(){

    const [uname, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const validateName = (uname)=>{
        const regEx = /^[A-Za-z ]{3,}$/;
        return regEx.test(uname);
    }
    const validateEmail = (email)=>{
        const regEx = /^[^\s@]+@[^\@]+\.[^\s@]+$/;
        return regEx.test(email);
    }

    const validatePassword=(pass)=>{
        const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return regEx.test(pass)
    }

    const validateSignup=(e)=>{
        e.preventDefault();
        if(email.length!=0 && pass.length !=0 && uname.length!=0){

            if(!validateName(uname)){
                setErrorMsg("Please enter valid username");
                return;
            }

            if(!validateEmail(email)){
                setErrorMsg("Please enter a valid email address")
                return;
            }
            if(pass.length<8){
                setErrorMsg("Password length must be 8 or more")
                return
            }
            if(!validatePassword(pass)){
                setErrorMsg("Please enter a Strong password.");
                return;
            }
            setName(uname)
            setEmail(email)
            setEmail(pass)
            setErrorMsg('');     
            createUserWithEmailAndPassword(auth,email,pass)
            .then(()=>{
                console.log("registerd")
                // navigate('/auth-login');   
            })
            .catch((error)=>{
                console.log(error.code)
                switch(error.code){
                    case 'auth/email-already-in-use':
                        setErrorMsg("Email already exists");
                        break;
                    case 'auth/invalid-email':
                        setErrorMsg("Please enter a valid email address")
                        break;
                    case 'auth/weak-password':
                        setErrorMsg("Strong password required");
                        break;
                    case 'auth/wrong-password':
                        setErrorMsg("Please enter a valid password");
                        break;
                    default:
                        alert(error.message);
                }
                
            }); 
            
        }
        else{
            setErrorMsg("All fields are required.");
        }

    }
    return(
        <div>
            <div class="login-box">
                <form action="/auth-login"  name="myForm" id="myForm" onSubmit={validateSignup}>
                    <h2>Create new account</h2>
                    {errorMsg && <p className='errorMsg' style={{padding:'3px 5px',backgroundColor: 'rgb(243, 147, 147)',color: 'rgb(255, 1, 1)',marginTop: '3px'}}>{errorMsg}</p>}
                    <label for="">Name</label>
                    <input type="text" placeholder="Enter Your Name:" name="uName" onChange={(e)=>setName(e.target.value)} />
                    {/* {errorMsg.name ? <p className='errorMsg'>{errorMsg.name}</p>: ""} */}
                    <label for="">Email</label>
                    <input type="email" placeholder="Enter Your Email Address:" name="uEmail" onChange={(e)=>setEmail(e.target.value)} />
                    {/* {errorMsg.email ? <p className='errorMsg'>{errorMsg.email}</p>: ""} */}
                    <label for="">Password</label>
                    <input type="password" placeholder="Enter Your Password:" name="uPass" onChange={(e)=>setPass(e.target.value)} />
                    {/* {errorMsg.pass ? <p className='errorMsg'>{errorMsg.pass}</p>: ""} */}
                    <input type="submit" value="Submit" />
                    <p>Already have an account ? <Link to={'/auth-login'}>Login</Link></p>
                <NetConn></NetConn>
                </form>
            </div>
        </div>
    )
}

export default Login;