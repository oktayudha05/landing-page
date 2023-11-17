import express from 'express'
import { getUsers, postUsers, deleteUser } from '../controllUsers/userController.js'
const router = express.Router()

router.get('/', getUsers)
router.post('/login', postUsers)
router.delete('/delete/:name', deleteUser)

export default router
