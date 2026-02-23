// import express from 'express'
// const app = express()
// app.listen(8080,()=>console.log("Server Started"))
// app.get("/",(req,res)=>{
//     res.json({message: "Hello World"});
// });

import express from 'express'
const app = express()
app.listen(8080,()=>console.log("Server Started"))
app.get("/",(req,res)=>{
    res.status(201).json({message: "Hello World"});
});
