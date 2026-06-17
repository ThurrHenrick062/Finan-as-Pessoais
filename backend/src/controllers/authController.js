import * as User from "../models/userModel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";


export async function register(req, res) {
    const {name, email, password} = req.body

    if (!name || !email || !password){
        return res.status(400).json({message: "Preencha todos os campos"})
    }
    const esistingUser = await User.findByEmail(email)
    if (esistingUser){
        return res.status(409).json({message: 'Email já existe'})
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const id = await User.create(name, email, passwordHash);
    res.status(201).json({message: "Usuário criado"})

}

export async function login(req,res) {
    const { email, password} = req.body
    
    const user = await User.findByEmail(email)
    if(!user){
        return res.status(401).json({message: "Credencias Invalidas"})
    }

    const match = await bcrypt.compare(password, user.password_hash)
    if(!match){
        return res.status(401).json({message: 'Credenciais invalidas'})
    }

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1d'})
        return res.json({token})

}

