import React, { useEffect, useState } from "react";
import '../Styles/home.css'
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const Home = () =>{


    
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        const response = await fetch('http://localhost:5001/products-list');
        const data = await response.json();
        setProductList(data);
  };
    
  useEffect(()=>{
    getProducts();
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
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/duke.jpeg" alt="" />
                            </div>
                            <p>Mobile</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/duke.jpeg" alt="" />
                            </div>
                            <p>Laptop</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/sub.jpeg" alt="" />
                            </div>
                            <p>Fashion</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/duke.jpeg" alt="" />
                            </div>
                            <p>Shoe</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/ktm.jpg" alt="" />
                            </div>
                            <p>Accessories</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/sub.jpeg" alt="" />
                            </div>
                            <p>Camera</p>
                        </div>
                        <div className="categories">
                            <div className="img-holder">
                                  <img src="/src/Images/ktm.jpg" alt="" />
                            </div>
                            <p>Bags</p>
                        </div>
                    </div>
                </div>
                <div className="H-boxx H-Con3">
                    <p id="hts-title">Top Selling</p>
                    <div className="top-selling-category">
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

                    </div>
                    
                </div>
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