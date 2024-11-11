import express from 'express';
import cors from 'cors';

import {MongoClient, ObjectId} from 'mongodb';
const mgurl = "mongodb+srv://bhuvaneshwaran:bhuvanesh@bhuvi09.zewrq.mongodb.net/";
const app = express();

app.use(cors());
app.use(express.json());
// const app = express()
// app.use(cors())
// app.use(express.json())

// dotenv.config()

// const client = new MongoClient(process.env.MONGO_URI)

// let ProductCollection;
// let CartCollection;

// const main = async () => {
//     await client.connect().then(console.log("connected with MongoDB")).catch(err => console.log(err))
//     ProductCollection = client.db("projectdatabase").collection("products")
//     CartCollection = client.db("projectdatabase").collection("carts")
// }

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


    app.get("/products-list", async (req, res) => {
        const products = await prodCollection.find().toArray()
        // const pros = await prodCollection.find({productName,_id,category}).toArray()
        const cat = products.map(allprod =>allprod.category);
        res.status(200).json(products)
        // console.log(cat);
        
        
    })
    
    app.get("/products-category-list/:category", async (req, res) => {
        
        const category = req.params.category;

        // console.log(category);
        try{
            const productsByCategorey = await prodCollection.find({category}).toArray();
            const typeByCategorey = await prodCollection.distinct("type", {category: category});
            // console.log(typeByCategorey); 
            res.status(200).json(productsByCategorey)
        }catch(e){
            console.log("error while fetching category based products", e);
        }
        
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
        // const topCatNames = await prodCollection.find({},{projection:{category:1, _id:0}}).toArray();
       
        
        const limitedTopCatNames = await prodCollection.find({},{projection:{offer:1,category:1, _id:0}}).toArray();
       
        // const topCatNames = await prodCollection.find(
        //     { offer: { $gte: 20 } },
        //     { projection: { category: 1, _id: 0 } } // Project only the category field
        //   ).toArray();  // Convert the cursor to an array
          
          console.log(limitedTopCatNames);
        //   console.log(topCatNames);
        const pipeline = [
            {
              $addFields: {
                offer: { $toDouble: "$offer" }  // Convert offer to number if it's a string
              }
            },
            {
              $match: {
                offer: { $gte: 50 }  // Match documents where offer >= 50
              }
            },
            {
              $group: {
                _id: "$category"  // Group by category
              }
            },
            {
              $project: {
                category: "$_id",  // Rename _id to category
                _id: 0  // Remove _id from the output
              }
            },{
    $limit: 7  // Limit the result to 7 categories
  }
          ];
          
          const result = await prodCollection.aggregate(pipeline).toArray();
          console.log(result);
          res.status(200).json(result);
                   


        // console.log(topCatNames);
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

