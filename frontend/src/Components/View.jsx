import React, { useEffect, useState } from "react";
import '../Styles/view.css'
import { NavLink } from "react-router-dom";
const View = ({id})=>{

    
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        const response = await fetch(`http://localhost:5001/products-list/${id}`);
        const data = await response.json();
        setProductList(data);
        console.log(data)

  };
    
  useEffect(()=>{
    getProducts();
  },[])

    return(
        <div className="viewPage">
            <div id="prod-view-pag">
                <div className="prod-details-box boxx--1">
                    <div id="prod-img-box">
                        <div className="img-boxx box-1">
                            <img src={productList.image} alt={productList.productName} />
                        </div>
                        {/* <div className="img-boxx box-2 ">
                            <img src="/src/images/ktm.jpg" alt="" />
                        </div>
                        <div className="img-boxx box-3">
                            <img src="/src/Images/hd.jpeg" alt="" />
                        </div> */}
                    </div>
                </div>
                <div className="prod-details-box boxx--2">
                    <div className="product-name">
                        <p>{productList.productName}</p>
                        <p>by <span>KTM</span></p>
                    </div>
                    <div className="prod-price">
                        <span>Price</span>
                        <span>
                            <p id="off-priz" style={{color:"grey"}}>--</p>
                            <p id="act-priz">{productList.price}</p>
                            <p id="off-per">{productList.offer}</p>
                        </span>
                    </div>
                    <div id="prod-quality">
                        <span>Quality</span>
                        <span>
                            <button>-</button>
                            <input type="text" />
                            <button>+</button>
                        </span>
                    </div>
                    <div className="product-variant">
                        {
                            productList.color? <div id="prod-col">
                            <span>Color</span>
                            <div id="col-grp-btns">
                                <button>h
                                </button>
                                <button>i
                                </button>
                                <button>j
                                </button>
                            </div>
                        </div> :''
                        }
                        {productList.size ?                         <div id="prod-size">
                            <span>Size</span>
                            <div id="col-grp-sz">
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                                <button>XXL</button>
                            </div>
                        </div>
                        : ''}
                    </div>
                    <div className="prod-description">
                        <p>Description</p>
                        <p>{productList.description}</p>
                    </div>
                    <div className="prod-details prod-spec">
                        <span>Product Details</span>
                        <ul>
                            <li>{productList.specification}</li>
                            {/* <li>Brand: <span className="li-span">Yamaha</span></li> */}
                            {/* <li>model: <span className="li-span">Duke 200</span></li> */}
                            {/* <li>Year: <span className="li-span">1990</span></li> */}
                        </ul>
                    </div>


                    <div id="prod-btns">
                        <div>
                            <button><NavLink to={'/cart-items'}>Add to Cart</NavLink></button>
                            <button><NavLink to={'/buy-now'} >Buy now</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View;