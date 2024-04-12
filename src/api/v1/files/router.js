import express from 'express'

const router = express.Router()

router.route('/')
  .get(async (_req, res) => {
    res.json([])
  })
  .post(async (req, res) => {
    res.json({})
  })

export default router
