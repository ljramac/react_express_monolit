import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.json({
    token: Buffer.from('foo:bar').toString('base64')
  })
})

export default router
