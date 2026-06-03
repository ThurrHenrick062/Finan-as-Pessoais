import mysql from 'mysql2/promise'
import 'dontenv/config'
import { Connection } from 'mysql2'

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.NAME,
    waitForConnections: true,
    ConnectionLimit: 10,
})

export default pool;