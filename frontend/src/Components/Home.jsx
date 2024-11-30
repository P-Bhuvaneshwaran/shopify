import React, { useEffect, useState } from "react";
import '../Styles/home.css'
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Home = () =>{
    const [loading, setLoading] =useState(false);
    const [loading2, setLoading2] =useState(false);
    const [loading23, setLoading3] =useState(false);
    const [tCategoryName, setTCategoryName] = useState([]);
    const [tSellProd, setTSellProd] = useState([]);
    const [isRevamp, setIsRevamp] = useState([]);

    const getTopCategoryName = async() =>{
        const response = await fetch('http://localhost:5001/top-category-name');
        try{
            setLoading(true);
            // console.log("loading2", loading)
            const data = await response.json();
            // console.log("top-categories")
            setTCategoryName(data);
            // setLoading(false);
            // console.log("top-cat2", loading)
            // console.log(data)
        }catch(e){
            console.log(e)
        }
        // console.log("loading",loading)
    }
    // const getRevamp = async() =>{
    //     const response = await fetch('http://localhost:5001/top-sell-revamp');
    //     try{
    //         setLoading2(true);
    //         console.log("loadingr2", loading)
    //         const data = await response.json();
    //         console.log("top-sell-re")
    //         setTCategoryName(data);
    //         console.log(data)
    //     }catch(e){
    //         console.log(e)
    //     }
    //     console.log("loading2r",loading)
    // }

    
  useEffect(()=>{
    getTopCategoryName();
    // getTopSellingProductName();
    // getRevamp();
  },[])

    return(
        <div className="homePage">
            <div id="homeContainer">
                <div className="H-boxx H-Con1">
                    <p>Welcome to <br /> <span>Shopify</span></p>
                    <p>"Discover Products Designed to Elevate Your Lifestyle"</p>
                    <div id="btns-home">
                        <button className="home-btn1"><NavLink to={'/about-us'} className="home-nav1-link">About</NavLink></button>
                        <button className="home-btn2"><NavLink to={"/products"} className="home-nav2-link">Shop Now</NavLink></button>
                    </div>
                </div>
                <div className="H-boxx H-Con2">
                    <p id="hts-title">Top Selling Categories</p>
                    <div className="category-div">
                       {loading!==true ? 
                       <>
                       <div className="categories top-cat-load">
                            <div className="img-holder">
                                <span></span>
                            </div>
                            <p></p>
                        </div>
                       <div className="categories top-cat-load">
                            <div className="img-holder">
                                <span></span>
                            </div>
                            <p></p>
                        </div>
                       <div className="categories top-cat-load">
                            <div className="img-holder">
                                <span></span>
                            </div>
                            <p></p>
                        </div>
                       <div className="categories top-cat-load">
                            <div className="img-holder">
                                <span></span>
                            </div>
                            <p></p>
                        </div>
                       <div className="categories top-cat-load">
                            <div className="img-holder">
                                <span></span>
                            </div>
                            <p></p>
                        </div>
                       <div className="categories top-cat-load">
                            <div className="img-holder">
                                <span></span>
                            </div>
                            <p></p>
                        </div>
                       </>
                       
                       : tCategoryName.map((item,index)=>(
                            <div className="categories" key={item.productDetails._id}>
                                <div className="img-holder">
                                  <img src={item.productDetails.image} alt="" />
                                </div>
                                <p>{item.category}</p>
                            </div>
                        ))} 
                    </div>
                </div>
                {/* <div className="H-boxx H-Con3">
                    <p id="hts-title">Top Selling Products</p>
                    <div className="top-selling-category">

                        {isRevamp ? 
                            <div className="category-boxes">
                            <div className="row-ts1">
                                <p>Minimum 50% off | Sport & more</p>
                            </div>
                            <div className="row-ts2">
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Sports</p>
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Toys</p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Games</p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Bat</p>
                                    
                                </div>
                            </div>
                            <div className="view-btn">
                                <a href="">View more</a>
                            </div>
                        </div>
                    : <div>Loading</div>}
                        


                        {isRevamp ? 
                            <div className="category-boxes">
                            <div className="row-ts1">
                                <p>Minimum 50% off | Sport & more</p>
                            </div>
                            <div className="row-ts2">
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Sports</p>
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Toys</p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Games</p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Bat</p>
                                    
                                </div>
                            </div>
                            <div className="view-btn">
                                <a href="">View more</a>
                            </div>
                        </div>
                    : <div>Loading</div>}
                        


                        {isRevamp ? 
                            <div className="category-boxes">
                            <div className="row-ts1">
                                <p>Minimum 50% off | Sport & more</p>
                            </div>
                            <div className="row-ts2">
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Sports</p>
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Toys</p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Games</p>
                                    
                                </div>
                                <div className="row-ts-box">
                                    <img src="/src/Images/duke.jpeg" alt="" />
                                    <p>Bat</p>
                                    
                                </div>
                            </div>
                            <div className="view-btn">
                                <a href="">View more</a>
                            </div>
                        </div>
                    : <div>Loading</div>}
                        


                    </div>
                    
                </div> */}
                <div className="H-boxx H-Con4">
                    <p>Signup to purchase products at affordable prices </p>
                    <button><NavLink to={'/auth-signup'} className="home-nav2-link">Signup</NavLink></button>
                </div>
            </div>

            {/* <Footer></Footer> */}
        </div>
    )
}

export default Home;