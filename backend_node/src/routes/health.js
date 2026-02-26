const express = require('express')
const prisma = require('../prisma')

const router = express.Router()

// GET /health → Server & database health check
router.get('/', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`

    res.json({
      status: 'ok',
      server: 'up',
      database: 'connected',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      server: 'up',
      database: 'disconnected',
      timestamp: new Date().toISOString()
    })
  }
})

module.exports = router
