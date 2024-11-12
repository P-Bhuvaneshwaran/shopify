import React, { useState } from "react";
import '../../Styles/addproduct.css'
const AddProduct = () =>{

    const [newProduct, setNewProduct] = useState({
         
        productName: '',
        price:'',
        rating:'',
        offer: '',
        category:'',
        specification:'',
        description: '',
        color: '',
        size: '',
        image:''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
      };
    
      const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setNewProduct({ ...newProduct, image: reader.result }); 
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };
    
    const addProductFunc = async(e) =>{
        e.preventDefault();

        const response = await fetch('https://shopify-1-k9nw.onrender.com/products-list', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct), 
          });
      
          if (response.ok) {
            alert('Product added successfully!');
            setNewProduct({
                productName: '',
                price:'',
                rating:'',
                offer: '',
                category:'',
                specification:'',
                description: '',
                color: '',
                size: '',
                image:'',
                type: ''
            });
          }
      
    }
    // const [newItem, setNewItem] = useState({
    //     productName: '',
    //     price:'',
    //     rating:'',
    //     offer: '',
    //     category:'',
    //     specification:'',
    //     description: '',
    //     color: '',
    //     size: '',
    //     image:''
    // })

    const addDataToDb = () =>{
        console.log(newItem);
    }
    return(
        <div className="addproductPage">
            <div className="addproductPageCont">
                <form action="" onSubmit={addProductFunc}>
                    <h2>Add Products</h2>
                    <div className="addproductPage-fields">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" name="productName" id="" onChange={handleChange}      />
                    </div>
                    <div className="form-fields-col">
                        <div className="addproductPage-fields">
                            <label htmlFor="price">Price</label>
                            <input type="text" name="price" id=""  onChange={handleChange}            />
                        </div>
                        <div className="addproductPage-fields">
                            <label htmlFor="rating">Rating</label>
                            <input type="text" name="rating" id=""                     onChange={handleChange} />
                        </div>
                        <div className="addproductPage-fields">
                            <label htmlFor="offer">Offer %</label>
                            <input type="text" name="offer" id=""                     onChange={handleChange} />
                        </div>
                        <div className="addproductPage-fields">
                            <label htmlFor="category">Category</label>
                            <input type="text" name="category" id=""                 onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-fields-col">
                        <div className="addproductPage-fields">
                            <label htmlFor="specification">Specification</label>
                            <textarea name="specification" id="" rows="8"                     onChange={handleChange}></textarea>
                        </div>
                        <div className="addproductPage-fields">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="" rows="8"                  onChange={handleChange}></textarea>
                        </div>
                    </div>
{/*  */}
                    <div className="form-fields-col">
                        <div className="addproductPage-fields">
                            <label htmlFor="color">color</label>
                            <input type="text" name="color" id=""                  onChange={handleChange} />
                        </div>
                        <div className="addproductPage-fields">
                            <label htmlFor="size">Size</label>
                            <input type="text" name="size" id=""                  onChange={handleChange} />
                         </div>
                        <div className="addproductPage-fields">
                            <label htmlFor="type">Type</label>
                            <input type="text" name="type" id=""   placeholder="Example: iPhone, Acer"               onChange={handleChange} />
                         </div>
                    </div>
                    <div className="addproductPage-fields">
                        <label htmlFor="productImage">Image</label>
                        <input type="file" name="productImage" id=""  accept="image/*"            onChange={handleImageUpload} />
                    </div>
                    <div className="addproductPage-fields">
                        <input type="submit" value="Add"  />
                    </div>

                </form>

            </div>
        </div>
    )
}

export default AddProduct;