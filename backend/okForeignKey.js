import { authenticateClient, checkEmailExists, getAllCarData, getCar, getCars, getCategorieData, getCategories, getClient, getClients, getclientCar, registerClient, updateLikes } from './databaseForeignKey.js';
import cors from 'cors';
import express from "express";
import multer from "multer"
import fs from 'fs'

///////// put the port and the app in a canstants ///////////
const port = 7000;
const app = express();
/////////////////////////////////////////////

//////// enable the JSON Data //////////////////////

app.use(express.json());

////////// core to connect to the sql database ///////////////
app.use(cors());
//////////////////////////////

// Define storage for uploaded images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Upload directory
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg'); // Unique filename
    }
});

// Create upload instance
const upload = multer({ storage: storage });

////////////////////////////////

app.get('/Supercars', async (req, res) => {
    const cars = await getCars()
    res.send(cars)
});


//////////
app.get('/Supercars/:id', async (req, res) => {
    const Car_ID = req.params.id
    const car = await getCar(Car_ID)
    res.send(car)

});

/////////
app.get('/Clients', async (req, res) => {
    const clients = await getClients()
    res.send(clients)
});

///////

app.get('/Categories', async (req, res) => {
    const categories = await getCategories()
    res.send(categories)
});
////////



app.get('/Client/:id', async (req, res) => {
    const Client_ID = req.params.id
    const client = await getClient(Client_ID)
    res.send(client)
});

/////

app.get('/Search/:id', async (req, res) => {
    const Client_IDInfo = req.params.id
    const ClientallInfo = await getclientCar(Client_IDInfo)
    res.send(ClientallInfo)
});

app.get('/userCarCollection/:id', async (req, res) => {
    const Client_IDInfo = req.params.id
    let ClientallInfo = await getclientCar(Client_IDInfo)
    console.log(ClientallInfo)
    ClientallInfo= ClientallInfo==='undefined'? ["error"] :ClientallInfo
    //console.log(ClientallInfo)
    res.send(ClientallInfo)
})



//////
app.get('/Detail_Car/:id', async (req, res) => {
    const Car_Data = req.params.id
    const Car_All_Info = await getAllCarData(Car_Data)
    res.send(Car_All_Info)
});
///////

app.get('/bycategories/:id', async (req, res) => {
    const byCatego = req.params.id
    const catego_filter = await getCategorieData(byCatego)
    res.send(catego_filter)
})

//////////////////////////////
app.post('/authenticate', async (req, res) => {
    const { emailAuth, passwordAuth } = req.body;
    try {
        const client = await authenticateClient(emailAuth, passwordAuth);
        if (client) {
            res.status(200).send(client);
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error authenticating client');
    }
});

/////////////////////////////
app.post('/register', async (req, res) => {
    const { name, surname, email, phone, password } = req.body;
    try {
        const emailExists = await checkEmailExists(email)

        if (emailExists) {
            return res.status(400).send('Email already exists')
        }
        const clientId = await registerClient(name, surname, email, phone, password);
        res.status(201).send({ id: clientId, message: 'Client registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering client');
    }
});

////////////////
app.put('/updateLikes/:id', async (req, res) => {
    const carId = req.params.id;
    const { newLikes } = req.body;
    try {
        const success = await updateLikes(carId, newLikes);
        if (success) {
            res.status(200).send({ message: 'Likes updated successfully' });
        } else {
            res.status(500).send('Failed to update likes');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating likes');
    }
});



////////////// port ///////////////////

app.listen(port, () => {
    console.log('listening on port 7000')
});

//////////////////////////////////////

