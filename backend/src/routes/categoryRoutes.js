import { Router } from 'express'
import { listar, criar, atualizar, deletar } from '../controllers/categoryController.js'
import { auth } from '../middlewares/auth.js'

const router = Router()
router.use(auth)

router.get("/",listar)
router.post('/',criar)
router.put('/:id',atualizar)
router.delete('/:id',deletar)

export default router