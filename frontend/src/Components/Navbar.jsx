import React, { useEffect, useState } from "react";
import '../Styles/navbar.css'
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Config";
const Navbar = () =>{

    const [isactive, setIsActive] = useState(false);
    const [isUserLogged, setUserLoggined] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate();
//  under working
const isBadge = 1;
useEffect(()=>{

    onAuthStateChanged(auth,(user)=>{
        if(user){
            setUserLoggined(user);
            if(user.email === 'admin@gmail.com'){
             console.log("admin here");
                setIsAdmin(true)
                navigate("/admin/dashboard")
            }
            else{
                console.log("customer")
                console.log(user.email);
                setIsAdmin(false)
                navigate("/home")
            }
        }
        else{
            setUserLoggined(null);
            console.log("no one")
            navigate("/auth-login")
        }
    })
    },[])

    const slideUserDiv = () =>{
     if(isactive){

         setIsActive(false);

        }
        else{
         setIsActive(true);

     }
    //  alert(isactive)
    }

    const handleSignedOut=()=>{
        signOut(auth).then(()=>{
            console.log("loggedout successfully")
        }).catch(()=>{
            console.log("error while logged out")
        })
    }
   
    return(
        <div className="navbarPage">    
            <div id="nav-container">
                <nav>
                    <h1><i class="fa-brands fa-shopify"></i>Shopify</h1>
                    {!isAdmin ? 
                    <ul>
                        <li><NavLink className="nav-link" to={'/'} end>Home</NavLink></li>
                        <li><NavLink className="nav-link" to={'/about-us'}>About</NavLink></li>
                        <li><NavLink className="nav-link" to={'/products'}>Products</NavLink></li>
                        <li><NavLink className="nav-link" to={'/new-items'}>New</NavLink></li>
                        <li><NavLink className="nav-link" to={'/contact-us'}>Contact</NavLink></li>
                    </ul>
                    :
                    <ul>
                        <li><NavLink className="nav-link" to={'/admin/dashboard'}>Dashboard</NavLink></li>
                    </ul>}
                    <div id="nav-icons" style={{display: isAdmin ? "none" : "block"}}>

                        <ul >
                            <li >
                                <NavLink to={'/products'} className="home-nav1-link"><i className="fa-solid fa-search"></i></NavLink>
                            </li>
                            <li>
                                <NavLink to={"cart-items"}><i className="fa-solid fa-cart-shopping home-nav1-link" ></i></NavLink>
                                <span style={{display:"none"}}>1</span>
                            </li>
                            <li>
                                {/*  */}
                                {/* <NavLink to={"cart-items"}><i className="fa-solid fa-cart-shopping home-nav1-link" ></i></NavLink> */}
                            <i class="fa-solid fa-bars" onClick={slideUserDiv}></i>
                             </li>
                        </ul>
                    </div>
                            {/* <li><NavLink to={'/admin/dashboard'}>Dashboard</NavLink></li> */}
                            <div className="slide-user-div" style={{display: isactive ? "block" : "none"}}>
                            {isUserLogged ? <button className="auth-btn home-nav2-link"> <NavLink className="login-btn" onClick={handleSignedOut}>Logout</NavLink></button> : <button className="auth-btn home-nav2-link"> <NavLink to={"/auth-login"} className="login-btn">Login</NavLink></button>}
                                
                            </div>
                    
                </nav>
            </div>
        </div>
    )
    {/* {isBadge ? <div className="cart-badge">1</div> : ''} */}
}

export default Navbar;