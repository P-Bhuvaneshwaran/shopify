import React from "react";
import '../Styles/navbar.css'
import { NavLink } from "react-router-dom";
const Navbar = () =>{

//  under working

    const isBadge = 1;

    const slideuser =document.querySelector("#sliding-div");
    const slidebarUser = ()=>{
        console.log("slidebar activated");
        slideuser.classList.toggle("hidden-slideBar")
        // alert("hai");
    }
    return(
        <div className="navbarPage">    
            <div id="nav-container">
                <nav>
                    <h1><i class="fa-brands fa-shopify"></i>Shopify</h1>
                    <ul>
                        <li><NavLink className="nav-link" to={'/home'} end>Home</NavLink></li>
                        <li><NavLink className="nav-link" to={'/about-us'}>About</NavLink></li>
                        <li><NavLink className="nav-link" to={'/products'}>Products</NavLink></li>
                        <li><NavLink className="nav-link" to={'/new-items'}>New</NavLink></li>
                        <li><NavLink className="nav-link" to={'/contact-us'}>Contact</NavLink></li>
                    </ul>
                    <div id="nav-icons">

                        <ul>
                            <li>
                                <NavLink to={'/products'} className="home-nav1-link"><i className="fa-solid fa-search"></i></NavLink>
                            </li>
                            <li>
                            <i className="fa-solid fa-user" onClick={slidebarUser}></i>
                            </li>
                            <li>
                                <NavLink to={"cart-items"}><i className="fa-solid fa-cart-shopping home-nav1-link" ></i></NavLink>
                                <span>1</span>
                            </li>
                        </ul>
                    </div>
                            <li><NavLink to={'/admin/dashboard'}>Dashboard</NavLink></li>
                    <div id="sliding-div">
                        <ul className="slide-ul">
                            <li><button><NavLink to={"/auth-login"}>Login</NavLink></button></li>
                            <li><NavLink to={'/admin/dashboard'}>Dashboard</NavLink></li>
                            <li>My Favorites</li>
                            <li>My Profile</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
    {/* {isBadge ? <div className="cart-badge">1</div> : ''} */}
}

export default Navbar;