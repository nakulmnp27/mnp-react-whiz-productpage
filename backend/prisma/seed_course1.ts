import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined')
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString })
} as any)

async function main() {
console.log("seeding start")

  const course = await prisma.course.upsert({
    where: {
      id: 1,
    },
    update: {
      description:
        "This AWS Certified Cloud Practitioner course is developed for candidates who have basic knowledge of AWS Cloud concepts and are planning to appear in the beginner-level AWS Certified Cloud Practitioner Exam.",
      benefitsMessage:
        "This AWS Cloud Practitioner Certification is an opportunity to get recognized for your hard-earned AWS skills.",
      rating: 4.5,
      learners: 1200,
    },
    create: {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      description:
        "This AWS Certified Cloud Practitioner course is developed for candidates who have basic knowledge of AWS Cloud concepts and are planning to appear in the beginner-level AWS Certified Cloud Practitioner Exam.",
      benefitsMessage:
        "This AWS Cloud Practitioner Certification is an opportunity to get recognized for your hard-earned AWS skills.",
      rating: 4.5,
      learners: 1200,
    },
  })

  await prisma.pricing.createMany({
    skipDuplicates: true,
    data: [
      {
        id:1,
        title: "Video Courses",
        sellingPrice: 99.99,
        offerPrice: 49.99,
        isticked: false,
        courseId: course.id,
      },
      {
        id: 2,
        title: "Hands on labs",
        sellingPrice: 99.99,
        offerPrice: 49.99,
        isticked: true,
        courseId: course.id,
      },
      {
        id: 3,
        title: "Practise Tests",
        sellingPrice: 99.99,
        offerPrice: 49.99,
        isticked: false,
        courseId: course.id,
      },
      {
        id: 4,
        title: "Cloud Sandboxes",
        sellingPrice: 99.99,
        offerPrice: 49.99,
        isticked: true,
        courseId: course.id,
      },
    ],
  })

  await prisma.courseFeature.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 2,
        icon: "experts.png",
        title: "Experts Support",
        description: "Our team Experts is here to help with your queries",
        courseId: course.id,
      },
      {
        id: 3,
        icon: "handson.png",
        title: "Hands-on Labs",
        description:
          "15+ hands-on Labs offer you an immersive practical experience.",
        courseId: course.id,
      },
      {
        id: 6,
        icon: "practisequestions.png",
        title: "Practise Questions",
        description:
          "Full-length mock exams (250+ Unique AWS Certified Cloud Practitioner certification exam questions).",
        courseId: course.id,
      },
      {
        id: 4,
        icon: "pt.png",
        title: "Practise Tests",
        description:
          "2 Practise test with 130+ unique questions with definite explanations framed by our industry experts",
        courseId: course.id,
      },
      {
        id: 5,
        icon: "quality.png",
        title: "Quality",
        description:
          "We provide all of the most up to date training materials possible, verified by the industry experts.",
        courseId: course.id,
      },
      {
        id: 1,
        icon: "unlimitedaccess.png",
        title: "Unlimited Access",
        description: "You purchase once and can access the course for two years.",
        courseId: course.id,
      },
    ],
  })

  await prisma.courseStat.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 1,
        icon: "quiz.png",
        label: "Practise test",
        value: "10 Quizzes",
        courseId: course.id,
      },
      {
        id: 2,
        icon: "cloud.png",
        label: "Cloud Sandbox",
        value: "Available",
        courseId: course.id,
      },
      {
        id: 3,
        icon: "handsonlabs.png",
        label: "Hands-on Labs",
        value: "53 Labs",
        courseId: course.id,
      },
      {
        id: 4,
        icon: "videocourses.png",
        label: "Video Courses",
        value: "123 Videos",
        courseId: course.id,
      },
    ],
  })

  await prisma.faq.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 1,
        question:
          "What is the significance of Amazon Elastic Compute Cloud EC2 in AWS foundational Cloud Practitioner certification?",
        answer:
          "Amazon Elastic Compute Cloud is a web service that gives secure and resizable compute capacity in the cloud.",
        courseId: course.id,
      },
      {
        id: 3,
        question: "What are the roles & responsibilities of an AWS Cloud Practitioner?",
        answer:
          "Developing, operating and implementing scalable solutions on the AWS Cloud platform.",
        courseId: course.id,
      },
    ],
  })

  await prisma.testimonial.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 1,
        name: "its_mnp",
        role: "Senior Software Architect",
        message: "This course helped me a lot.",
        rating: 5,
        profile: "testi-profile.png",
        courseId: course.id,
      },
      {
        id: 2,
        name: "its_mnp",
        role: "Senior Software Architect",
        message: "Practise Question helped me a lot",
        rating: 4.5,
        profile: "testi-profile.png",
        courseId: course.id,
      },
      {
        id: 3,
        name: "its_mnp",
        role: "Senior Software Architect",
        message:
          "Hands on Labs and Sand boxes helped me to gain the practical knowledge",
        rating: 4.9,
        profile: "testi-profile.png",
        courseId: course.id,
      },
    ],
  })

  await prisma.examInfo.createMany({
  skipDuplicates: true,
  data: [
    {
      id: 1,
      icon: "certificate.png",
      heading: "Prior Certification",
      text: "Not Required",
      courseId: course.id
    },
    {
      id: 2,
      icon: "calender-exam.png",
      heading: "Exam Validity",
      text: "36 Months",
      courseId: course.id
    },
    {
      id: 3,
      icon: "exam-fee.png",
      heading: "Exam Fee",
      text: "100 USD",
      courseId: course.id
    },
    {
      id: 4,
      icon: "exam-duration.png",
      heading: "Exam Duration",
      text: "90 Minutes",
      courseId: course.id
    },
    {
      id: 5,
      icon: "numberofquestions.png",
      heading: "No. of Questions",
      text: "65",
      courseId: course.id
    },
    {
      id: 6,
      icon: "passing-marks.png",
      heading: "Passing Marks",
      text: "720",
      courseId: course.id
    }
  ]
})

await prisma.courseOverview.createMany({
  skipDuplicates: true,
  data: [
    { id: 1, text: "300+ AWS Cloud Practitioner practice exam Questions with Exhaustive Explanations", column: 1, courseId: course.id },
    { id: 2, text: "9+ hours of Training Videos (112 Lectures) for all Exam Objectives (100% Syllabus Covered)", column: 1, courseId: course.id },
    { id: 3, text: "Unlimited access for 2 years", column: 1, courseId: course.id },
    { id: 4, text: "AWS Cloud Practitioner Free Test and Final Test questions are a subset of Practice Tests and Section Tests questions.", column: 1, courseId: course.id },
    { id: 5, text: "50+ labs for the AWS Certified Cloud Practitioner Exam", column: 1, courseId: course.id },
    { id: 6, text: "Detailed videos on all the topics and subtopics", column: 1, courseId: course.id },
    { id: 7, text: "24/7 Subject Matter Expert support", column: 1, courseId: course.id },
    { id: 8, text: "Managing the infrastructure of AWS cloud and values of AWS Cloud services", column: 2, courseId: course.id },
    { id: 9, text: "Cloud Architecture principles of AWS Cloud", column: 2, courseId: course.id },
    { id: 10, text: "The shared security model and compliance concepts in AWS", column: 2, courseId: course.id },
    { id: 11, text: "Technical assistance/documentation", column: 2, courseId: course.id },
    { id: 12, text: "Account management, billing, pricing, and support in AWS", column: 2, courseId: course.id },
    { id: 13, text: "Use cases and AWS services", column: 2, courseId: course.id },
    { id: 14, text: "AWS Cloud Deployment & Operation", column: 2, courseId: course.id }
  ]
})

await prisma.courseBenefit.createMany({
  skipDuplicates: true,
  data: [
    {
      id: 1,
      title: "AWS Career for freshers",
      description: "The Amazon Web Services entry-level certification helps you secure job placements in the fast-growing AWS cloud computing industry.",
      courseId: course.id
    },
    {
      id: 2,
      title: "Validating your AWS Skills",
      description: "If you are already aware of AWS technologies and learned AWS by yourself, attend the official exam to validate your skills.",
      courseId: course.id
    },
    {
      id: 3,
      title: "Career Upgradation",
      description: "Certification in AWS cloud practitioner can promote you to the next level and stabilize your career growth.",
      courseId: course.id
    },
    {
      id: 4,
      title: "Managing Skill Gaps",
      description: "This exam helps serious learners test their knowledge and bridge skill gaps in cloud platforms.",
      courseId: course.id
    }
  ]
})

await prisma.courseExamDetail.createMany({
  skipDuplicates: true,
  data: [
    {
      id: 1,
      heading: "Recomended Experience",
      description: "This exam is designed for candidates new to Cloud who may not have an IT background.",
      courseId: course.id
    },
    {
      id: 2,
      heading: "Exam Format",
      description: "Multiple choice and Multiple select questions",
      courseId: course.id
    },
    {
      id: 3,
      heading: "Languages",
      description: "English, Japanese, Korean, Simplified Chinese, Traditional Chinese, Bahasa, Spanish, French, German, Italian, Portuguese",
      courseId: course.id
    }
  ]
})

await prisma.examFeatureCard.createMany({
  skipDuplicates: true,
  data: [
    { id: 1, icon: "robot.png", text: "Make use of AWS Cloud technologies", courseId: course.id },
    { id: 2, icon: "solutions.png", text: "You need to know how to develop Cloud solutions", courseId: course.id },
    { id: 3, icon: "newbie.png", text: "If you are new to the cloud concepts", courseId: course.id },
    { id: 4, icon: "data-scientist.png", text: "Data Scientist and engineers", courseId: course.id },
    { id: 5, icon: "responsible.png", text: "Who wants to understand the Cloud concepts and responsible practitioner", courseId: course.id },
    { id: 6, icon: "expertise.png", text: "Professionals who work with cloud and want to gain expertise", courseId: course.id }
  ]
})




  console.log("seeding finish")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })