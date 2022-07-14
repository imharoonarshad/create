import express from "express";
import watts from "../../model/schema.js";

// const Router = express.Router()

// // // Router.get('/', async (req, res) => {

// // //     // res.json({ message: "Db exist" });
// // //     res.send('Get Request')


// // })

// Router.post('/', async()=>{
//     const watt
// })
// export default Router;


const route = express.Router();

route.post("/", async (req,res) => {
    const {logsArray} = req.body
    const watt = new watts({
        watts: logsArray
    })
     const data = await watt.save()
    console.log(data)
    res.end()
})

route.get("/", async (req,res)=>{
   const data = await watts.find({})
   res.send(data)
   res.end()
})



export default route;
