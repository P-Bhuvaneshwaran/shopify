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
    
        const response = await fetch('http://localhost:5001/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartItem),
        });
    
        
        if (response.ok) {
          alert(`${product.productName} added to cart!`);
        } else {
          alert('Error adding product to cart.');
        }
      };
    
    return(
        <div>
            <div className="prod-showcase" key={product._id}>
                            <img src={product.image} alt="" />
                            <div id="prod-img-details">
                                <p>{product.productName}</p>
                                <p>{product.price} <span>{product.offer}</span></p>
                                <div id="addfav">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button onClick={handleAddToCart} >Add to cart</button>
                            </div>
                        </div>
        </div>
    )
}

export default ProductCard