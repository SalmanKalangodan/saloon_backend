import express from 'express'

import tryCatchMidileware from '../middleware/trycatch.js'
import { login, register } from '../controller/user/register.js'


const router = express.Router()


router.post('/register',tryCatchMidileware(register))
router.post('/login',tryCatchMidileware(login))

export default router