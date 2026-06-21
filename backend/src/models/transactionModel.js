import pool from "../config/db.js";

export async function getAll(userId) {
    const [result] = await pool.query(
        "SELECT * FROM trasaction WHERE user_id = ?",[userId]
    )
    return result    
}

export async function getById(id,userId) {
    const [result] = await pool.query(
        "SELECT * FROM trasaction WHERE user_id = ? AND id = ?",[userId, id]
    )
    return result
}

export async function create(id,userId,categoryId,description,amount,type,date) {
    const [result] = await pool.query(
        "INSERT INTO transaction (id,user_id,category_id,description,amount,type,date) VALUES (?,?,?,?,?,?,?)", [id,userId,categoryId,description,amount,type,date])
        return result.insertId
    
}

export async function update(id,userId,categoryId,description,amount,type,date) {
    const [result] = await pool.query(
        "UPDATE transaction SET description = ?,amount = ?, type = ?, date = ? WHERE id = ? AND userId = ? AND categoryId = ?",
        [description, amount, type, date, id, userId, categoryId]
    )
    return result.affectedRows
    
}



