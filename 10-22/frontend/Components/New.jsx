import React from "react";
import '../Styles/new.css';

const New = () =>{
    return(
        <div className="newPage">
            <div className="newPageDivs">
                <div className="newPagItem">
                    <div className="newPagItem-row">
                        <div className="np-row-item">
                            <p>New Collection</p>
                            <p>NEW ARRIVALS</p>
                            <button>click</button>
                        </div>
                        <div className="np-row-item">
                            <img src="/src/Images/duke.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="newPagItem-row row2">
                        <div className="np-row2-item">
                            <div className="arr-text">
                                <p>Men</p>
                                <p>Hoodie</p>
                            </div>
                            <div className="arr-img">

                                <img src="/src/Images/sub.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="np-row2-item">
                            <div className="arr-text">
                                <p>Men</p>
                                <p>Hoodie</p>
                            </div>
                            <div className="arr-img">

                                <img src="/src/Images/ktm.jpg" alt="" />
                            </div>
                        </div>
                        <div className="np-row2-item">
                            <div className="arr-text">
                                <p>Men</p>
                                <p>Hoodie</p>
                            </div>
                            <div className="arr-img">
                                <img src="/src/Images/sub.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="newPageFestival">
                    
                    <div className="newFestParent">
                        <div className="newFestChild nfest-child1">
                            <div className="nf-child1-row">
                                <div className="child1-row-split">
                                    <p>Festival Collections</p>
                                    <p>Men's Fashion</p>
                                    <a href="">view more</a>
                                </div>
                                <div className="child1-row-split">
                                    <img src="/src/Images/porsche.jpeg" alt="" />
                                </div>
                            </div>
                            <div className="nf-child1-row">
                                <div className="row-split">
                                    <div className="row-split-1">
                                        <p>Women's Fashions</p>
                                        <p>Hoodie</p>
                                    </div>
                                    <div className="row-split-2">
                                        <img src="/src/Images/hd.jpeg" alt="" />
                                    </div>
                                </div>

                                <div className="row-split">
                                    <div className="row-split-1">
                                        <p>Men</p>
                                        <p>Hoodie</p>
                                    </div>
                                    <div className="row-split-2">
                                        <img src="/src/Images/hd.jpeg" alt="" />
                                    </div>
                                </div>

                                <div className="row-split">
                                    <div className="row-split-1">
                                        <p>Accessories</p>
                                        <p>Hoodie</p>
                                    </div>
                                    <div className="row-split-2">
                                        <img src="/src/Images/hd.jpeg" alt="" />
                                    </div>
                                </div>

                                <div className="row-split">
                                    <div className="row-split-1">
                                        <p>Men</p>
                                        <p>Hoodie</p>
                                    </div>
                                    <div className="row-split-2">
                                        <img src="/src/Images/hd.jpeg" alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;