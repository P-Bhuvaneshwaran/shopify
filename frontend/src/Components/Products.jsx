import React, { useEffect, useRef, useState } from "react";
// import './'
import '../Styles/product.css'
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
const Products = () =>{
    const catListIcon = [
        { name: 'accessories', icon: 'fa-solid fa-headphones' },
        { name: 'bags', icon: 'fa-solid fa-bag-shopping' },
        { name: 'beauty care', icon: 'fa-solid fa-soap' },
        { name: 'books', icon: 'fa-solid fa-book' },
        { name: 'camera', icon: 'fa-solid fa-camera' },
        { name: 'fashion', icon: 'fa-solid fa-child-dress' },
        { name: 'home appliances', icon: 'fa-solid fa-store' },
        { name: 'laptop', icon: 'fa-solid fa-laptop' },
        { name: 'mobile', icon: 'fa-solid fa-mobile-screen-button' },
        { name: 'shoe', icon: 'fa-solid fa-shoe-prints' },
        { name: 'sports', icon: 'fa-solid fa-volleyball' },
        { name: 'sunglass', icon: 'fa-solid fa-glasses' },
        { name: 'toys', icon: 'fa-solid fa-gamepad' },
        { name: 'watches', icon: 'fa-solid fa-clock' },
    ]
    
    const [loading, setLoading] = useState(false);   
    // const [catProdLoading, setCatProdLoading] = useState(false);   
    const [catLoading, setCatLoading] = useState(false);   
    
    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [typeList, setTypeList] = useState([]);
    
    
    const [searchQuery, setSearchQuery] = useState('');
    const[selectedCategory, setSelectedCategory]=useState(null);

    const [searchError, setSearchError] = useState('');
    // CRUD

    // get all product list when render

    const getProducts = async () => {
        setLoading(true);
        const response = await fetch(' http://localhost:5001/products-list');
        const data = await response.json();
        setProductList(data);
        console.log(data)
        setLoading(false);
    };

    // get product categories
    const getProdCategories = async () => {
        setCatLoading(true);
        console.log("getProdCategories")
        const response = await fetch(' http://localhost:5001/products/all-category');
        const data = await response.json();
        setCategoryList(data);
        console.log(data)
        setCatLoading(false);
    };
    
    const getSearchedProd= async()=>{
        try{
            console.log("query", searchQuery)
        // setLoading(true);
        // setCatProdLoading(true);
        const response = await fetch(`http://localhost:5001/products-search-list/${searchQuery}`);

        if(!response.ok){
            const data = await response.json();
            setSearchError(data.message)
            console.log("search error",data);
            
        }

        const data = await response.json();
        // setProductList(data.categoryProds)
        // setTypeList(data.categorytypes)
        console.log("getSearchedProd")
        console.log(data)
        setProductList(data);
        // setLoading(false);
        setSearchQuery('')
        }
        catch(e){
            console.log("search error")
        }

    }
    const getCategorizedProd= async(category)=>{
        console.log("x", category)
        setLoading(true);
        setTypeList([])
        // setCatProdLoading(true);
        const response = await fetch(`http://localhost:5001/products-category-list/${category}`);
        const data = await response.json();
        setProductList(data.categoryProds)
        setTypeList(data.categorytypes)
        // console.log("getCategoriedProd")
        console.log(data)
        setLoading(false);

    }
    const getCategorizedProdType= async(selectedType)=>{
        console.log("xxxxxxxxxx", selectedCategory)
        console.log("xxxxxxxxxx2", selectedType)
        // setLoading(true);
        // setCatProdLoading(true);
        const response = await fetch(`http://localhost:5001/products-category-type-list/${selectedCategory}?typename=${selectedType}`)
        const data = await response.json();
        // setProductList(data.categoryProds)
        // setTypeList(data.categorytypes)
        // console.log("getCategoriedProd")
        setProductList(data);
        console.log(data)
        // setLoading(false);

    }


    // functions
    const handleCategoryClick = (x) => {
        getCategorizedProd(x);
        setSelectedCategory(x); // Update the state
        console.log(`You clicked on: ${x}`); // Log the category directly
    };

    const handleSearchQuery = (e)=>{
        setSearchQuery(e.target.value)
        
    }
    
    const handleClearFilter = () =>{
        setTypeList([]);
        getProducts();
    }
   
    
    
    useEffect(()=>{
        getProducts();
        getProdCategories();
        setTypeList([])
        // console.log(`You clicked on: ${selectedCategory}`); // Log the category directly
    },[])
    
    
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
                    <input type="text" placeholder="Search products here..." value={searchQuery} onChange={(e) => handleSearchQuery(e)} />
                    <span id="prod-body-searchIcon" onClick={getSearchedProd}><i class="fa-solid fa-magnifying-glass"></i></span>
                </div>
                <div id="prod-body-offers">
                    
                </div>
            </div>

            <div id="product-details" >
                <div id="prod-list">
                    <ul>
                        {
                        catLoading ? <div>Loading</div> : 
                        
                            categoryList.map((item, index) => (
                                <>
                                
                                <li onClick={() =>{ handleCategoryClick(item);}}> <i class={catListIcon[index].icon}></i> <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span></li>
                                </>
                                ))
                        }
                        {/* {
                            category.map((item, index) => (
                                <li onClick={() => handleCategoryClick("Home Appliances")}><i class="fa-solid fa-store"></i> <span>{item}</span></li>
                                ))
                        }   */}
                   
                    </ul>
                </div>
                <div id="prod-list-details">
                    <div id="prod-list-details-top">
                        <div id="prod-category-variant">
                            <ul>
                                {typeList.length!==0 ? 
                                
                                 <i className="fa-solid fa-filter"></i>
                                 : ""}

                                {typeList ?    
                                
                                typeList.map((item, index) => (
                                    <li key={index} onClick={() => getCategorizedProdType(item)}>{item}</li>
                                )): ""}    
                                {typeList.length!==0 ? 
                                    <i class="fa-regular fa-circle-xmark" onClick={handleClearFilter}></i>
                                 : ""}
                               
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