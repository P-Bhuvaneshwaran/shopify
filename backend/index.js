import express, { query } from 'express';
import cors from 'cors';

import {MongoClient, ObjectId} from 'mongodb';
const mgurl = "mongodb+srv://bhuvaneshwaran:bhuvanesh@bhuvi09.zewrq.mongodb.net/";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
    const products = await prodCollection.find().toArray()
    res.status(200).json(products)
})


let prodCollection;
let cartCollection;
async function connect(){
    const client  = new MongoClient(mgurl);
    try{
        await client.connect();
        console.log("connected");

        const database = client.db("shopify");
        prodCollection = database.collection("prodCollection");
        cartCollection = database.collection("cartCollection");
       
        //    TESTING PART

        // const res = await prodCollection.find().toArray();
        // console.log(res);

        // const results = await prodCollection.updateOne({productName: "Back Case for iPhone 13"},{$set:{category:"accessories"}})
        // const result = await prodCollection.deleteOne({_id: new ObjectId("671738a605059752a04ed8d4")})
        // const result = await prodCollection.deleteOne({price: "1,22,990"})
        // const result = await cartCollection.deleteOne({_id: new ObjectId('67169bce03cdaf3ba9576cba')})
        // const result = await cartCollection.find({category: "Bag"})
        // const result = await prodCollection.deleteMany({category:"Laptop"})
        // const result = await prodCollection.insertOne({name:"oppo"})
        // console.log(`deleted successfully`)
        // console.log(result);
        
        // const products = await prodCollection.find({}).toArray();
        // console.log(products);
    }
    catch(e){
        console.log("error-", e)
    }


    // get all product details

    app.get("/products-list", async (req, res) => {
        const products = await prodCollection.find().toArray()
        // const pros = await prodCollection.find({productName,_id,category}).toArray()
        const cat = products.map(allprod =>allprod.category);
        res.status(200).json(products)
        // console.log(cat);
        
        
    })

    // get all category list details
    app.get("/products/all-category", async (req, res) => {
        const category = await prodCollection.distinct("category")
        res.status(200).json(category)
        // console.log(category);
        
    })


    // category based product details
    app.get("/products-category-list/:category", async (req, res) => {
        const category = req.params.category;

        console.log(category);
        try{
            const productsByCategorey = await prodCollection.find({category}).toArray();
            const typeByCategorey = await prodCollection.distinct("type", {category: category});
            // console.log(typeByCategorey)
            // console.log(productsByCategorey)
            res.status(200).json({categoryProds: productsByCategorey, categorytypes:typeByCategorey})
          }catch(e){
            console.log("error while fetching category based products", e);
          }
          
        })
    app.get("/products-search-list/:searchQuery", async (req, res) => {
        // const category = req.params.categ;
        console.log("99999999999999999999999999999999999999999999999999")
        const query = req.params.searchQuery;
        console.log(query);
        try{
            const searchItem = await prodCollection.find({
              $or: [
                { category: { $regex: query, $options: 'i' } },
                { name: { $regex: query, $options: 'i' } },
                { type: { $regex: query, $options: 'i' } }
              ]
            }).toArray()
            // const typeByCategorey = await prodCollection.distinct("type", {category: category});
            res.status(200).json(searchItem);
            
            if (searchItem.length === 0) {
              // No matching products
              return res.status(404).json({ message: `No products found for "${query}"` });
            }
            // console.log(searchItem);
          }catch(e){
            res.status(500).json({ message: 'Error fetching products, No products matched', error: e.message });
  
            console.log("error while fetching category based products", e);
          }
          
        })


        app.get("/products-category-type-list/:category", async (req, res) => {
              
              const category = req.params.category;
              const type = req.query.typename;
            console.log(category)
            console.log(type)
              const types = await prodCollection.find({category,type}).toArray();
            
            res.status(200).json(types)
          })
  // category based type list
  app.get("/products-category-types-list/:category", async (req, res) => {
        
        const category = req.params.category;
      const types = await prodCollection.aggregate([
        { $match: { category: category } }, 
        { $group: { _id: "$type" } },
        { $project: {  type: "$_id", _id: 0 } } 
      ]).toArray();
      
      res.status(200).json(types)
    })

    app.post("/products-list", async (req, res) => {
        const newproduct = req.body;
        const result = await prodCollection.insertOne(newproduct);
        res.status(200).json(result);
    });

    app.get("/cart-list", async (req, res) => {
        const cartItems = await cartCollection.find({}).toArray();
        res.status(200).json(cartItems);
    });
    
    app.get("/top-category-name", async (req, res) => {
        console.log("hai");
        
      const result = await prodCollection.aggregate([
        {
          $match:{
            $expr: {$gte: [{ $toInt: "$offer"},60]}
          }
        },
        {
          $group:{
            _id:"$category",
            productDetails:{$first: "$$ROOT"}
          }
        },{
          $sort:{
            "productDetails.offer" :-1
          }
        },{
          $limit:7
        },
        {
          $project:{
            category: "$_id",
            productDetails:1,
            _id:0
          }

        }
      ]).toArray();
      
      res.status(200).json(result);
        
      });
    
    app.get("/top-sell-revamp", async (req, res) => {
        console.log("hai2");
        
      const result = await prodCollection.aggregate([
        {
          $match:{
            $expr: {$gte: [{ $toInt: "$offer"},60]}
          }
        },
        {
          $group:{
            _id:"$category",
            productDetails:{$first: "$$ROOT"}
          }
        },{
          $sort:{
            "productDetails.offer" :-1
          }
        },{
          $limit:4
        },
        {
          $project:{
            category: "$_id",
            productDetails:1,
            _id:0
          }

        }
      ]).toArray();
      
      res.status(200).json(result);
        
      });
    
    app.post("/cart-list", async (req, res) => {
        const cartItem = req.body;
        const result = await cartCollection.insertOne(cartItem);
        res.status(201).json(result);
    });
    
    app.put("/cart-list/:id", async (req, res) => {
        const { id } = req.params;
        const updatedCartItem = req.body;
        const result = await cartCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedCartItem }
        );
        res.status(200).json(result);
    });
    
    app.delete("/cart-list/:id", async (req, res) => {
        const { id } = req.params;
        const result = await cartCollection.deleteOne({ _id: new ObjectId(id) });
        res.status(200).json(result);
    });
    
    app.delete("/cart-list", async (req, res) => {
        const result = await cartCollection.deleteMany({});
        res.status(200).json(result);
    });
    

}
connect()

app.listen(5001,()=>{
    console.log("server started on 5001")
})

