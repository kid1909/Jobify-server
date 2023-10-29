import { Router } from 'express'
import {
  getCurrentUser,
  getApplicationStatus,
  updateUser,
} from '../controllers/userController.js'

const router = Router()

router.get('/current-user', getCurrentUser)
router.get('/admin/app-stats', getApplicationStatus)
router.patch('/update-user', updateUser)

export default router
