import express from 'express'

import * as db from '../db/index.json';

const router = express.Router()

router.get('/', (req, res) => {
  res.json(db.siteTitle)
});

export default router
