import React from "react";
import '../Styles/buynow.css'
const Buynow = () =>{
    return(
        <div className="buynowPage">
            <div className="buynowPageCont">
                <div className="buynowPageCont-row">
                    <p className="continueShop"><i>-</i> Continue Shopping</p>
                    <hr />
                    <p className="cartShop">Shopping cart</p>
                    <p className="cartCount"><span>You have {4} items in your cart</span></p>
{/*  */}
                    <div className="buynowPageProdDetails">
                        <div className="buynowPageProdDetails-col">
                            <div className="buynowPageProdDetails-col1-row1">
                                <img src="/src/images/duke.jpeg" alt="" />
                            </div>
                            <div className="buynowPageProdDetails-col1-row1">
                                <p className="prodName">Iphone 11 pro</p>
                                <p className="prodSpec">256GB Navy Blue</p>
                            </div>
                        </div>
                        <div className="buynowPageProdDetails-col">
                            <p>2</p>
                            <p>$900</p>
                            <p><i className="fa-solid fa-trash"></i></p>
                        </div>
                    </div>
                    <div className="buynowPageProdDetails">
                        <div className="buynowPageProdDetails-col">
                            <div className="buynowPageProdDetails-col1-row1">
                                <img src="/src/images/duke.jpeg" alt="" />
                            </div>
                            <div className="buynowPageProdDetails-col1-row1">
                                <p className="prodName">Iphone 11 pro</p>
                                <p className="prodSpec">256GB Navy Blue</p>
                            </div>
                        </div>
                        <div className="buynowPageProdDetails-col">
                            <p>2</p>
                            <p>$900</p>
                            <p><i className="fa-solid fa-trash"></i></p>
                        </div>
                    </div>
                    <div className="buynowPageProdDetails">
                        <div className="buynowPageProdDetails-col">
                            <div className="buynowPageProdDetails-col1-row1">
                                <img src="/src/images/duke.jpeg" alt="" />
                            </div>
                            <div className="buynowPageProdDetails-col1-row1">
                                <p className="prodName">Iphone 11 pro</p>
                                <p className="prodSpec">256GB Navy Blue</p>
                            </div>
                        </div>
                        <div className="buynowPageProdDetails-col">
                            <p>2</p>
                            <p>$900</p>
                            <p><i className="fa-solid fa-trash"></i></p>
                        </div>
                    </div>
                    <div className="buynowPageProdDetails">
                        <div className="buynowPageProdDetails-col">
                            <div className="buynowPageProdDetails-col1-row1">
                                <img src="/src/images/duke.jpeg" alt="" />
                            </div>
                            <div className="buynowPageProdDetails-col1-row1">
                                <p className="prodName">Iphone 11 pro</p>
                                <p className="prodSpec">256GB Navy Blue</p>
                            </div>
                        </div>
                        <div className="buynowPageProdDetails-col">
                            <p>2</p>
                            <p>$900</p>
                            <p><i className="fa-solid fa-trash"></i></p>
                        </div>
                    </div>
     
                </div>
                <div className="buynowPageCont-row">
                    <p>Card details</p>
                    <p>Card type</p>
                    <ul className="card-type">
                        <li><i class="fa-brands fa-google-pay"></i></li>
                        <li><i class="fa-brands fa-paypal"></i></li>
                        <li><i class="fa-solid fa-credit-card"></i></li>
                        <li><i class="fa-brands fa-apple-pay"></i></li>
                        <li><i class="fa-solid fa-comments-dollar"></i></li>
                    </ul>

                    <form action="">
                        <div className="buynowPage-fields">
                            <label htmlFor="card-type">Name on card</label>
                                <input type="text" name="card-type" id="" placeholder="Name " required />
                        </div>
                        <div className="buynowPage-fields">
                            <label htmlFor="card-no">Card number</label>
                                <input type="text" name="card-no" id="" placeholder="0000 0000 0000 0000" required />
                        </div>
                        <div className="buynowPage-fields">
                            <div className="buynowPage-fields-row11">
                                <label htmlFor="date">Date</label>
                                <input type="text" placeholder="mm / yy" required />
                            </div>
                            <div className="buynowPage-fields-row11">
                                <label htmlFor="cvv">Cvv</label>
                                <input type="text" placeholder="000" required />
                            </div>
                        </div>

                    </form>
                        <hr />
                    <ul className="checkout-ul">
                        <li><span>Sub total</span> <span>$3000.00</span></li>
                        <li><span>Shipping</span> <span>$20.00</span></li>
                        <li><span>Total(Incl.taxes)</span> <span>$3020.00</span></li>
                    
                        <button><span>$3020.00</span> <span>Checkout</span></button>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Buynow;