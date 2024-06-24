import express from 'express'

import tryCatchMidileware from '../middleware/trycatch.js'
import { register } from '../controller/user/register.js'
import { login } from '../controller/user/login/login.js'


const router = express.Router()


router.post('/register',tryCatchMidileware(register))
router.post('/login',tryCatchMidileware(login))

export default router