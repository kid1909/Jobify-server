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
} from '../controllers/jobControllers.js'

//router.get('/',getAllJobs)
//router.get('/',createJob)


router.route('/').get(getAllJobs).post(validateJobInput, createAJob)
router
  .route('/:id')
  .get(validateIdParam, getJob)
  .patch(validateJobInput, updateJob)
  .delete(validateIdParam, deleteJob)

export default router;