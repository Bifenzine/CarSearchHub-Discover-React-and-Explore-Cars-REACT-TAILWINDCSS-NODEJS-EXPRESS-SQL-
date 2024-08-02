import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

// pool or pdo ///

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_DATABASE_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getCars() {
    const [rows] = await pool.query("SELECT * FROM cars")
    return rows
}

export async function getCar(id) {
    const [rows] = await pool.query(`SELECT * FROM cars WHERE Car_ID = ?`, [id])
    return rows[0]
}

// export async function addCar{Name_Car,Marque_Car,Color_Car}
// const [result] = await pool.query(`INSERT INTO cars (idCar,Name_Car,Marque_Car,Color_Car) VALUES)`,[Name_Car,Marque_Car,]

export async function getClients() {
    const [rows] = await pool.query("SELECT * From client")
    return rows
}

export async function getCategories() {
    const [rows] = await pool.query("SELECT * FROM categories")
    return rows
}


export async function getClient(id) {
    const [rows] = await pool.query(`SELECT * FROM client where Client_ID = ? `, [id])
    return rows[0]
}

export async function getclientCar(id) {
    const [rows] = await pool.query(`SELECT cars.Car_ID,cars.Car_Name,cars.Car_Marque,cars.Car_Matricule,cars.Car_Color,cars.Car_img, cars.img1, cars.img2, cars.img3 , cars.Car_likes, client.Client_ID,client.Client_Name,client.Client_Email,client.Client_Phone ,client.Client_Pic FROM cars INNER JOIN client on cars.Client_ID = client.Client_ID WHERE client.Client_ID = ?`, [id])
    if(rows.length > 0)
    {
        return rows[0]
    }
    else
    {
        return []
    }
  
}

export async function getAllCarData(id) {
    const [rows] = await pool.query(`SELECT cars.Car_ID, cars.Car_Name, cars.Car_Marque, cars.Car_Matricule, cars.Car_Color, cars.Car_img, cars.img1, cars.img2, cars.img3 , cars.Car_likes, client.Client_ID, client.Client_Name, client.Client_Email, client.Client_Phone, client.Client_Pic ,categories.Categorie_ID , categories.Categorie_Name  from cars JOIN client ON cars.Client_ID = client.Client_ID JOIN categories ON cars.Categorie_ID = categories.Categorie_ID WHERE cars.Car_ID = ?`, [id])
    return rows[0]

}

export async function getCategorieData(id) {
    const [rows] = await pool.query(`SELECT cars.Car_ID ,cars.Car_Name, cars.Car_Marque,cars.Car_Matricule,cars.Car_img, cars.img1, cars.img2, cars.img3, cars.Car_likes ,categories.Categorie_Name from cars JOIN categories on cars.Categorie_ID = categories.Categorie_ID WHERE categories.Categorie_ID = ?`, [id])
    return rows[0]

}

export async function registerClient(name, surname, email, phone, password) {
    const [result] = await pool.query('INSERT INTO client (Client_Name, Client_Surname, Client_Email, Client_Phone, Client_Password) VALUES ( ?, ?, ?, ?, ?)', [name, surname, email, phone, password]);
    return result[0]; // Return the ID of the newly inserted client
}

export async function checkEmailExists(email) {
    const [rows] = await pool.query('SELECT count (*) as count from client where Client_Email= ?', [email])
    return rows[0].count > 0
}

export async function authenticateClient(emailAuth, passwordAuth) {
    const [rows] = await pool.query('SELECT * FROM client WHERE Client_Email = ? AND Client_Password = ?', [emailAuth, passwordAuth]);
    return rows[0]; // Return the client if found, otherwise null
}

export async function updateLikes(carId, newLikes) {
    try {
        await pool.query('UPDATE cars SET Car_likes = ? WHERE Car_ID = ?', [newLikes, carId]);
        return true; // Return true if the update was successful
    } catch (error) {
        console.error(error);
        return false; // Return false if there was an error
    }
}


