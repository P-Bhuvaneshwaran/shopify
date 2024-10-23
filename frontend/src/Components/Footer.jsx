import React from "react";
import '../Styles/footer.css'
const Footer = () =>{
    return(
        <div className="footerPage">
            <div className="footer-box1">
                <div className="inner-box">
                <div className="top-box">
                    <p>Shopify</p>
                    <p>Our mission is to make online shopping easy, enjoyable,
                         andaccessible for everyone. We strive to provide a seamless 
                        experience with a carefully curated selection of products,
                        fast shipping, and exceptional customer support.
                    </p>
                </div>
                <div className="top-box">
                    <ul>
                        <li>Get to know us</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="top-box">
                    <ul>
                        <li>Make money with us</li>
                        <li>Sell on Shopify</li>
                        <li>Advertise Your Products</li>
                        <li>Supply to Shopify</li>
                    </ul>
                </div>
                <div className="top-box tb-4">
                    <ul>
                        <li>Contact | Enquiry</li>
                        <li><i class="fa-solid fa-phone"></i> <span>+002 234 456</span></li>
                        <li>Conatct us</li>
                     </ul>
                </div>

                </div>
            </div>
            <div className="footer-box2">
                <div className="outer-box">
                {/* <div id="hr"></div> */}
                <hr />
                <div className="box-1">
                    <div className="boxx-1">
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>
                    <div className="boxx-2">
                        <ul>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-brands fa-threads"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-solid fa-envelope"></i>
                            
                        </ul>
                        <button>Follow Us</button>
                    </div>
                </div>
                <div className="box-2">
                    <p>At shopify, we are committed to protecting your privacy. this Privacy Policy explains how we collect, use and safeguard your info. when you visit our website.</p>
                </div>
                <div className="box-3">
                    <p><i class="fa-solid fa-copyright"></i> 2024-2025 All Rights are Reserved.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer