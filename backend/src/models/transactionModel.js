import pool from "../config/db.js";

export async function getAll(userId) {
    const [result] = await pool.query(
        "SELECT * FROM transactions WHERE user_id = ?",[userId]
    )
    return result    
}

export async function getById(id,userId) {
    const [result] = await pool.query(
        "SELECT * FROM transactions WHERE user_id = ? AND id = ?",[userId, id]
    )
    return result[0]
}

export async function create(userId,categoryId,description,amount,type,date) {
    const [result] = await pool.query(
      "INSERT INTO transactions (user_id,category_id,description,amount,type,date) VALUES (?,?,?,?,?,?)",
      [userId, categoryId, description, amount, type, date]);
        return result.insertId
    
}

export async function update(id,userId,categoryId,description,amount,type,date) {
    const [result] = await pool.query(
      "UPDATE transactions SET category_id = ?, description = ?, amount = ?, type = ?, date = ? WHERE id = ? AND user_id = ?",
      [categoryId, description, amount, type, date, id, userId]
    );
    return result.affectedRows
    
}

export async function del(id, userId) {
    const [result] = await pool.query(
        "DELETE FROM transactions WHERE id = ? AND user_id = ?",[id,userId]
    )
    return result.affectedRows
}   



