import * as Categories from '../models/categoryModel.js'

export async function listar(req,res) {
    const userId = req.user.id
    const data = await Categories.getAll(userId)
    
    return res.status(200).json(data)
    
}

export async function criar(req,res) {
    const {name, type} = req.body
    const userId = req.user.id

    if(!name || !type){
        return res.status(400).json({message: "Preencha todos os campos"})
    }
    if(type !== 'income' || type !== 'expense'){
        return res.status(400).json({message: "Utilize somente income ou expense"})
    }

    const resposta = await Categories.create(userId,name,type)
    res.status(201).json({message: 'Categoria criada'})
    
}