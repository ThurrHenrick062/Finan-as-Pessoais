import pool from "../config/db.js"

export async function create(name, email, passowrdHash){
    const [result] = await pool.query(
        'INSERT INTO user (name,email,passwordHash) VALUES (?,?,?)',[name,email,passowrdHash] 
    )
    return result.insertId
}

export async function findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM user WHERE email = ?',[email])
    return rows[0]
    
}