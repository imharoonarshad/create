import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import route from "./backend/controller/routers/route.js";
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/route', route);


app.get('/', (req, res) => {
    res.send('Hello from server')
    res.end()
})
const URL = "mongodb://127.0.0.1/DBdatabase";

const PORT = process.env.PORT || "9090"


mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})




    .then(() => {
        console.log('DB is connected')
        app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });










