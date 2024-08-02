import {getCar,getCars} from './database.js';
import cors from 'cors';

import express from "express";
///////// put the port and the app in a canstants ///////////
const port=7000;
const app = express();
/////////////////////////////////////////////

//////// enable the JSON Data //////////////////////
app.use(express.json());
////////////////////////////////

////////// core ///////////////
app.use(cors());
//////////////////////////////


app.get('/Supercars', async (req, res) => {
   const cars = await getCars()
   res.send(cars)
});


////////// get car by id //////////////////
app.get('/Supercars/:id', async (req, res) => {
    const cars = await getCar(id)
    res.send(cars)
    
    })

////////////// port ///////////////////

app.listen(port,()=>{
    console.log('listening on port 7000')
});

//////////////////////////////////////