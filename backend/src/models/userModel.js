import pool from "../config/db.js"

export async function create(name, email, passowrdHash){
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password_hash) VALUES (?,?,?)",
      [name, email, passowrdHash],
    );
    return result.insertId
}

export async function findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?',[email])
    return rows[0]
    
}