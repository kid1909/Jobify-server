import { Router } from "express";
import { register, login , logout } from '../controllers/authController.js'
import {
  validateAuthInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js'

const router = Router()

router.route('/register').post(validateAuthInput, register)
router.route('/login').post(validateLoginInput, login)
router.route('/logout').get( logout)
// router.route('/getAllUser').get(getAllUser)


export default router