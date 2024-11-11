import React, { useEffect, useRef, useState } from "react";
// import './'
import '../Styles/product.css'
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
const Products = () =>{
    // const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(false);    
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        setLoading(true);
        const response = await fetch('http://localhost:5001/products-list');
        const data = await response.json();
        setProductList(data);
        console.log(data)
        // console.log("Loading status:", loading)
        setLoading(false);
    };
    
    const getCategorizedProduts = async (category) =>{
        console.log("called:- ",category)
        setLoading(true)
        const response = await fetch(`http://localhost:5001/products-category-list/${category}`);
        const data = await response.json();
        console.log("category based products",response);
        setProductList(data);
        console.log("Loading status:", loading)
    setLoading(false)
}


    
  useEffect(()=>{
      getProducts();
    },[])
    

const setCategoryFunc=(e)=>{
    const categoryType = e.target.textContent.toLowerCase();
    
    console.log("calling:", categoryType);
    
    getCategorizedProduts(categoryType);
}
const setTypeCategoryFunc=()=>{
    const categoryTypeName = e.target.textContent.toLowerCase();
   getCategorizedTypeProduts(categoryTypeName)
  }


//   if (loading) {
//     console.log(loading)
//     return <div style={{color:"red", textAlign:"center",height:"100px",display:"flex", alignItems:"center",justifyContent:"center"}}>Loading...</div>;
//   }


  return(
        <div className="productsPage">
        <div id="product-body">
{/* 2 */}
            <div className="prod-body-top">
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
                    <ul>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-headphones"></i> <span>Accessories</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-bag-shopping"></i> <span>Bags</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-book"></i> <span>Books</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-soap"></i> <span>Beauty Care</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-camera"></i> <span>Camera</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-child-dress"></i> <span>Fashion</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-store"></i> <span>Home Appliances</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-mobile-screen-button" ></i> <span>Mobile</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-shoe-prints"></i> <span>Shoe</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-glasses"></i> <span>Sunglass</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-clock"></i> <span>Watches</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-laptop"></i> <span>Laptop</span></li>
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-gamepad"></i> <span>Toys</span></li>                     
                        <li onClick={setCategoryFunc}><i class="fa-solid fa-volleyball"></i> <span>Sports</span></li>                        
                    </ul>
                </div>
                <div id="prod-list-details">
                    <div id="prod-list-details-top">
                        <div id="prod-category-variant" style={{display:"none"}}>
                            <ul>
                                <i className="fa-solid fa-filter"></i>
                                <li>Vivo</li>
                                <li>Oppo</li>
                                <li>Iphone</li>
                                <li>Mi</li>
                                <li>1+</li>
                                <li>Realme</li>
                            </ul>
                            <ul>
                                <i className="fa-solid fa-filter"></i>
                                <li>Vivo</li>
                                <li>Oppo</li>
                                <li>Iphone</li>
                                <li>Mi</li>
                                <li>1+</li>
                                <li>Realme</li>
                            </ul>
                        </div>
                    </div>
                    <div id="prod-list-details-middle">
                        {
                            loading ? <div style={{padding:"20px 100px",color:"grey",fontWeight:"bold"}}>
                                <p>Loading</p>
                            </div> : 
                            productList.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))
                        }

                    {/* <div className="prod-showcase">
                     <img src="/src/images/duke.jpeg" alt="" />
                     <span><i className="fa-solid fa-heart"></i></span>
                    <div id="prod-img-details">
                    <p>Duke 250</p>
                    <p><i className='fa-solid  fa-indian-rupee-sign'></i>  250 <span>10 %</span></p>
                    <div id="ratingDiv">
                        <p>3.4</p>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <button>Add to cart</button>
                </div>
                    </div>
                    <div className="prod-showcase">
                     <img src="/src/images/duke.jpeg" alt="" />
                    <div id="prod-img-details">
                    <p>Duke 250</p>
                    <p><i className='fa-solid  fa-indian-rupee-sign'></i>  250 <span>10 %</span></p>
                    <div id="ratingDiv">
                        <p>3.4</p>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <button>Add to cart</button>
                </div>
                    
                    
                    </div> 
                    <div className="prod-showcase">
                     <img src="/src/images/duke.jpeg" alt="" />
                    <div id="prod-img-details">
                    <p>Duke 250</p>
                    <p><i className='fa-solid  fa-indian-rupee-sign'></i>  250 <span>10 %</span></p>
                    <div id="ratingDiv">
                        <p>3.4</p>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <button>Add to cart</button>
                </div>
                    </div>
                    <div className="prod-showcase">
                     <img src="/src/images/duke.jpeg" alt="" />
                    <div id="prod-img-details">
                    <p>Duke 250</p>
                    <p><i className='fa-solid  fa-indian-rupee-sign'></i>  250 <span>10 %</span></p>
                    <div id="ratingDiv">
                        <p>3.4</p>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <button>Add to cart</button>
                </div>
                    
                    
                    </div>  */}

                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Products;