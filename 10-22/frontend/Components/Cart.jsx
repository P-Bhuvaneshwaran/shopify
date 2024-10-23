import React, { useEffect, useState } from "react";
import '../Styles/cart.css'
import { NavLink } from "react-router-dom";
const Cart = () =>{
   
    const [cartItems, setCartItems] = useState([]);
    // const [loading, setLoading] = useState(true);
  
    const fetchCartItems = async () => {
      const response = await fetch('http://localhost:5001/cart');
      const data = await response.json();
      setCartItems(data);
      console.log(cartItems);
      
    //   setLoading(false);
    };
  
    useEffect(() => {
      fetchCartItems();
    }, []);
  
    const value = 1;
  
    return(
        <div className="cartPage">
            
            <div className="cartPageItems">
                {cartItems.map((item,index)=>{
                    <p>{index}</p>
                })}
                
            </div>
        </div>
    )
}

export default Cart;