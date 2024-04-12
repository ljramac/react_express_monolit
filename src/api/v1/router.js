import express from 'express'
import auth from './auth/router.js'
import files from './files/router.js'

const router = express.Router()

export default [
  router.use('/auth', auth),
  router.use('/files', files)
]
