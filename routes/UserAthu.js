import express from 'express'

import tryCatchMidileware from '../middleware/trycatch.js'
import { register } from '../controller/user/register.js'


const router = express.Router()


router.post('/register',tryCatchMidileware(register))

export default router