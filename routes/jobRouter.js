import {Router} from 'express'
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js'
const router = Router()

import {
  getAllJobs,
  createAJob,
  getJob,
  updateJob,
  deleteJob,
  showStats,
} from '../controllers/jobControllers.js'
import { checkForTestUser } from '../middleware/authMiddleware.js'

//router.get('/',getAllJobs)
//router.get('/',createJob)

router
  .route('/')
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createAJob)

router.route('/stats').get(showStats)

router
  .route('/:id')
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob)

export default router;