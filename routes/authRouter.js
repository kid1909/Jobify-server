import { Router } from "express";
import { register,login } from "../controllers/authController.js";
import { validateAuthInput ,validateLoginInput} from '../middleware/validationMiddleware.js'



const router = Router()

router.route('/register').post(validateAuthInput,register)
router.route('/login').post(validateLoginInput,login)

export default router