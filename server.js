import 'express-async-errors'
import express from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'

//middleware
import { validateJobInput } from './middleware/validationMiddleware.js'
import { authenticateUser } from './middleware/authMiddleware.js'

//custom Router
import jobRouter from './routes/jobRouter.js'
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

dotenv.config()
const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/api/v1/test', validateJobInput, (req, res) => {
  const { name } = req.body
  res.json({ message: `hello ${name}` })
})

app.use('/api/v1/jobs', authenticateUser, jobRouter)
app.use('/api/v1/users', authenticateUser, userRouter)

app.use('/api/v1/auth',authRouter)

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not Found' })
})

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 4000

try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(5100, () => {
    console.log(`server running... on port ${port}`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
