import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pdo = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_DATABASE_PASSWORD, 
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getCars(){
    const[rows] = await pdo.query("SELECT * FROM cars")
    return rows
}

export async function getCar(id){
    const [rows] = await pdo.query(`SELECT * FROM cars WHERE idCar = ?`, [id])
    return rows[0]
}

