import express from 'express'
import { getUsers, loginUser, deleteUser, updateUser } from '../controllUsers/userController.js'
const router = express.Router()

router.get('/lihat-user', getUsers)
router.post('/login', loginUser)
router.delete('/delete/:name', deleteUser)
router.put('/update/:name', updateUser)

export default router
