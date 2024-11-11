import React from 'react';
const ProductCard = ({ product })=>{

    const handleAddToCart = async () => {
        const cartItem = {
          productId: product._id,
          productName: product.productName,
          price: product.price,
          offer: product.offer,
          category: product.category,
          rating: product.rating,
          specification: product.specification,
          description: product.description,
          color: product.color,
          size: product.size,
          image: product.image,
          quantity: 1,
        };
    
        const response = await fetch('https://shopify-xufe.onrender.com/cart-list', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartItem),
        });
    
        console.log("clicked")
        if (response.ok) {
          alert(`${product.productName} added to cart!`);
        } else {
          alert('Error adding product to cart.');
        }
      };
    
    return(
        <div>
            <div className="prod-showcase" key={product._id}>
            <span className='heartSpan'><i className="fa-solid fa-heart"></i></span>
                <img src={product.image} alt="" />
                <div id="prod-img-details">
                    <p>{product.productName}</p>
                    <p><i className='fa-solid  fa-indian-rupee-sign'></i>  {product.price} <span>{product.offer}%</span></p>
                    <div id="ratingDiv">
                        <p>{product.rating}</p>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <button onClick={handleAddToCart} >Add to cart</button>
                </div>
              </div>
        </div>
    )
}

export default ProductCard