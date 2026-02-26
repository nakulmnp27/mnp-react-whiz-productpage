const express = require('express')
const prisma = require('../prisma')

const router = express.Router()

// POST /courses → Create a new course
router.post('/', async (req, res) => {
  try {
    const { title, description, rating, learners } = req.body

    const course = await prisma.course.create({
      data: {
        title,
        description,
        rating,
        learners
      }
    })

    res.status(201).json(course)
  } catch (error) {
    res.status(500).json({ message: 'Failed to create course' })
  }
})

// GET /courses → Get all courses (basic list)
router.get('/', async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      select: {
        id: true,
        title: true,
        rating: true,
        learners: true,
        createdAt: true
      }
    })

    res.json(courses)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch courses' })
  }
})

// GET /courses/:id → Get single course with relations
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)

    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        pricing: true,
        features: true,
        stats: true,
        faqs: true,
        testimonials: true,
        examInfo: true,
        eligibility: true
      }
    })

    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }

    res.json(course)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch course' })
  }
})

module.exports = router
