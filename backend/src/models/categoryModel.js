import pool from "../config/db.js";

export async function getAll(userId){
    const [result] = await pool.query(
        "SELECT * FROM categories WHERE user_id = ?",[userId]
    )
    return result
}

export async function create(userId, name, type) {
    const [result] = await pool.query(
        "INSERT INTO categories (user_id, name, type) VALUES (?,?,?)",[userId,name,type]
    )
    return result.insertId
}

export async function update(id, user_id, name, type) {
    const [result] = await pool.query(
        "UPDATE categories SET name = ?, type = ? WHERE id = ? AND user_id = ?",[name,type,id,user_id]
    );
    return result.affectedRows
}

export async function del(id,user_id) {
    const [result] = await pool.query(
        "DELETE FROM categories WHERE id = ? AND user_id = ?",[id, user_id]
    )
    return result.affectedRows
    
}