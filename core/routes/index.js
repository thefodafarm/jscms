import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({title: 'Just.IS'})
});

export default router
