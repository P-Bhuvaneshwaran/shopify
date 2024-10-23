import React, { useEffect, useState } from "react";
import '../../Styles/editproduct.css'

const EditProduct = () =>{

    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5001/')
        .then((res)=>res.json())
        .then((data)=>setProductList(data))
        .catch((e)=>console.log(e)
        )
    },[productList])
    const num =1;
    function checkFunc(){
        console.log(productList);
        console.log(productList[0].productName);
    }
    return(
        <div className="editproductPage">
            <div className="editproductPageCont">

            {productList.map((item, index) => (
                // <li key={index}>
            <div className="eprod-showcase">
                <div className="eprod-showcase-top">
                    <i className="fa-solid fa-user">E</i>
                    <i className="fa-solid fa-user">+</i>
                    <i className="fa-solid fa-user">-</i>
                </div>
                <div className="eprod-showcase-middle">
                    <img src={item.image} alt="" />
                </div>
                <div className="eprod-showcase-bottom">
                    <p>{item.productName}</p>
                    <p>{item.price} <span>{item.offer}</span></p>
                    <div id="rating">
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                    </div>
                    <button>Update</button>
                </div>
            </div>
                // </li>
            ))}
            {/* <h3>{item.productName}</h3>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <img src={item.image} alt={item.productName} style={{ width: '100px' }} /> */}
                    {/* <li>{num}</li> */}
            {/* <div className="eprod-showcase">
                <div className="eprod-showcase-top">
                    <i className="fa-solid fa-user">E</i>
                    <i className="fa-solid fa-user">+</i>
                    <i className="fa-solid fa-user">-</i>
                </div>
                <div className="eprod-showcase-middle">
                    <img src="/src/Images/duke.jpeg" alt="" />
                </div>
                <div className="eprod-showcase-bottom">
                    <p>Duke 250</p>
                    <p>2,80,200 <span>32%</span></p>
                    <div id="rating">
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                    </div>
                    <button>Update</button>
                </div>
            </div>
            <div className="eprod-showcase">
                <div className="eprod-showcase-top">
                    <i className="fa-solid fa-user">E</i>
                    <i className="fa-solid fa-user">+</i>
                    <i className="fa-solid fa-user">-</i>
                </div>
                <div className="eprod-showcase-middle">
                    <img src="/src/Images/duke.jpeg" alt="" />
                </div>
                <div className="eprod-showcase-bottom">
                    <p>Duke 250</p>
                    <p>2,80,200 <span>32%</span></p>
                    <div id="rating">
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                        <i class="fa-solid fa-cart-shopping">*</i>
                    </div>
                    <button>Update</button>
                </div>
            </div> */}

                    {/* <ul>
                        {productList.map((item, index) => (
                            <li key={index}>
                                <h3>{item.productName}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Category: {item.category}</p>
                                <img src={item.image} alt={item.productName} style={{ width: '100px' }} />
                            </li>
                        ))}
                </ul> */}
                
                

                <button onClick={checkFunc} style={{backgroundColor:'red', width:'100px', height:'30px'}}>Click</button>
            
            </div>
        </div>
    )
}

export default EditProduct;