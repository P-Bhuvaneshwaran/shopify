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
        // const result = await prodCollection.updateOne({productName: "Fastrack Vyb Successor Quartz"},{$set:{category:"watch", type: "analog",description: "more comfortable, more suitable " , specification: "Brand: Fastrack,occasion: casual, watch movement: Quartz"}})
        // const result = await prodCollection.updateOne({productName: "The Psychology of Money (Tamil)"},{$set:{category: "books", type: "psychology"}})
        // const book = ["I Have The Streets"]
        // const results = await prodCollection.updateOne({category: "beauty"},{$set:{category:"beauty care"}})
        // const result = await prodCollection.deleteOne({_id: new ObjectId('671754b0d1db4c971d293328')})
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
        console.log(cat);
        
        
    })
    
    app.get("/products-category-list/:category", async (req, res) => {
        // const prod = await prodCollection.find('').toArray()
        const category = req.params.category;
        console.log(category);
        try{
            const productsByCategorey = await prodCollection.find({category}).toArray();
            console.log(productsByCategorey)
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

