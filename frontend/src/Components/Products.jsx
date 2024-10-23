import React, { useEffect, useRef, useState } from "react";
// import './'
import '../Styles/product.css'
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
const Products = () =>{

    const [loading, setLoading] = useState(true);    
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        const response = await fetch('http://localhost:5001/products-list');
        const data = await response.json();
        setProductList(data);
        console.log(data)
        console.log(loading)
    setLoading(false);
  };

    
  useEffect(()=>{
    getProducts();
  },[])
  
  async function AddtoCart(e){

    
  const response = await fetch('http://localhost:5001/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItem),
  });

  
  if (response.ok) {
    alert(`${productList.title} added to cart!`);
  } else {
    alert('Error adding product to cart.');
  }
  
  };


  if (loading) {
    console.log(loading)
    return <div style={{color:"red", textAlign:"center",height:"100vh",display:"flex", alignItems:"center",justifyContent:"center"}}>Loading...</div>;
  }


  return(
        <div className="productsPage">
        <div id="product-body">
{/* 2 */}
            <div className="prod-body-top" style={{display:"none"}}>
                <span id="prod-body-hamb" ><i class="fa-solid fa-bars" ></i></span>
                <div id="prod-body-searchDiv">
                    <input type="text" placeholder="Search item here..." />
                    <span id="prod-body-searchIcon"><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <div id="prod-body-offers">
                    
                </div>
            </div>

            <div id="product-details" >
                <div id="prod-list">
                    <ul style={{display:"none"}}>
                        <li><i class="fa-solid fa-headphones"></i> <span>Accessorries</span></li>
                        <li><i class="fa-solid fa-bag-shopping"></i> <span>Bags</span></li>
                        <li><i class="fa-solid fa-book"></i> <span>Books</span></li>
                        <li><i class="fa-solid fa-soap"></i> <span>Beauty Care</span></li>
                        <li><i class="fa-solid fa-camera"></i> <span>Camera</span></li>
                        <li><i class="fa-solid fa-child-dress"></i> <span>Fashion</span></li>
                        <li><i class="fa-solid fa-store"></i> <span>Home Appliances</span></li>
                        <li><i class="fa-solid fa-mobile-screen-button" ></i> <span>Mobile</span></li>
                        <li><i class="fa-solid fa-shoe-prints"></i> <span>Shoe</span></li>
                        <li><i class="fa-solid fa-glasses"></i> <span>Sunglasses</span></li>
                        <li><i class="fa-solid fa-clock"></i> <span>Watches</span></li>
                        <li><i class="fa-solid fa-laptop"></i> <span>Laptop</span></li>
                        <li><i class="fa-solid fa-gamepad"></i> <span>Toys</span></li>
                                                
                        <li><i class="fa-solid fa-volleyball"></i> <span>Sports</span></li>                        
                    </ul>
                </div>
                <div id="prod-list-details">
                    <div id="prod-list-details-top">
                        <div id="prod-category-variant">
                            {/* <ul>
                                <i className="fa-solid fa-filter"></i>
                                <li>Vivo</li>
                                <li>Oppo</li>
                                <li>Iphone</li>
                                <li>Mi</li>
                                <li>1+</li>
                                <li>Realme</li>
                            </ul> */}
                        </div>
                    </div>
                    <div id="prod-list-details-middle">
                        {

                        productList.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Products;