import User from '../models/UserModel.js'
import Job from '../models/JobModel.js'
import { StatusCodes } from 'http-status-codes'

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'get current user' })
}

export const getApplicationStatus = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'get app status' })
}

export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'update user' })
}
