import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Cards from './locations.js';

const app = express();
const port = process.env.PORT || 8001
const connection_url = "mongodb+srv://blazicator:wadzee@cluster0.vdye0.mongodb.net/explotise?retryWrites=true&w=majority"

app.use(express.json());    
app.use(Cors());


mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
})

app.get("/" ,(req,res) => res.status(200).send("Explotise"))

app.post("/locations/cards", (req,res) =>{
    const locations = req.body

    Cards.create(locations, (err,data) =>{
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.get("/locations/cards", (req,res) =>{
    Cards.find((err,data) =>{
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})