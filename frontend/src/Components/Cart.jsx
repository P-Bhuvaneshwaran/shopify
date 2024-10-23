import React, { useEffect, useState } from "react";
import '../Styles/cart.css'
import { NavLink } from "react-router-dom";
const Cart = () =>{
   
    let value=0;
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);    
    const [couponCode, setCouponCode] = useState(null);
    const [cartList, setCartList] = useState([]);
    const getCartProducts = async () => {
        const response = await fetch('http://localhost:5001/cart-list');
        const data = await response.json();
        setCartList(data);
        console.log(data)
        setLoading(false);

    };

    const handleDeleteItem = async (id) => {
        const response = await fetch(`http://localhost:5001/cart-list/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
            setCartList(cartList.filter(item => item._id !== id));
            alert("delete successfully")
        }
        console.log(id);
      };
    
     const subTotalFunc = (x) =>{
        x = parseInt(x,10) 
        value = value+x
     }

      useEffect(()=>{
        getCartProducts();
      },[])
    const OrderPlacedFunc=()=>{
        alert("order placed successfully !");
    }

    
      const incQuantity=()=>{
        setQuantity(quantity=>quantity+1)
       
      }

      const redQuantity=()=>{
        if(quantity>1){
            setQuantity(quantity=>quantity-1);
        }
      }
      
  
      if (loading) {
        console.log(loading)
        return <div style={{color:"red", textAlign:"center",height:"100vh",display:"flex", alignItems:"center",justifyContent:"center"}}>Loading...</div>;
      }
  
    return(
        <div className="cartPage">
            
            <div className="cartPageItems">
                <div className="cartTable">
                    


                    {cartList.map((product, index) => (   
                        <div className="cart-prod-details" key={product._id}>
                        {subTotalFunc(product.price)}                 
                        {/* {console.log(product.price)}                  */}
                        <div className="prod-row">
                            <div className="prod-img">
                                <img src={product.image} alt={product.productName} />
                            </div>
                            <div className="prod-name">
                                <p>{product.productName}</p>
                                <p>{product.category}</p>
                            </div>
                        </div>
                        <div className="prod-row">
                            <p><i className="fa-solid fa-indian-rupee-sign"></i>{product.price}</p>
                        </div>
                        <div className="prod-row">
                            <button onClick={redQuantity}>-</button><input value={quantity} ></input><button onClick={incQuantity}>+</button>
                        </div>
                        <div className="prod-row">
                            <p><i className="fa-solid fa-indian-rupee-sign"></i>{quantity*(product.price)}</p>
                        </div>
                        <div className="prod-row">
                        <i className="fa-solid fa-trash-can" onClick={() => handleDeleteItem(product._id)}></i>
                        </div>
                    </div>
                    ))}

                    {cartList.length!==0 ?                     <div className="cart-prod-summary">
                        <div className="cart-checkout">
                            <p><span>Subtotal :</span><span><i className="fa-solid fa-indian-rupee-sign"></i> {value}</span></p>
                            <p><span>Sales Tax :</span><span><i className="fa-solid fa-indian-rupee-sign"></i> 0.19</span></p>
                            <p><span>Coupon code :</span><input type="text" placeholder="Coupon code" onChange={(e)=>setCouponCode(e.target.value)} /></p>

                            <div className="checkout-div">
                                {couponCode ? <p>Congrats You're eligible for Free Shipping  <i className="fa-solid fa-truck"></i></p>: ''}
                                <button onClick={OrderPlacedFunc}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div> :
                     <div style={{textAlign:"center"}}>
                        <p style={{padding:"25px"}}>Your Cart is empty</p>
                        <button style={{padding:"10px 20px", borderRadius:"5px",border:"none"}}><NavLink to={"/products"}>ADD</NavLink></button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Cart;