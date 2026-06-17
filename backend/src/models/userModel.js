import pool from "../config/db.js"

export async function create(name, email, passwordHash) {
  const [result] = await pool.query(
    "INSERT INTO users (name, email, password_hash) VALUES (?,?,?)",
    [name, email, passwordHash],
  );
  return result.insertId;
}

export async function findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?',[email])
    return rows[0]
    
}