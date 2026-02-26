
# Whiz_product_page (backend) (Node + Express + Prisma + PostgreSQL)

A simple backend API built using **Node.js**, **Express**, **Prisma ORM**, and **PostgreSQL**.
This project provides basic course management APIs and a health check endpoint.

---

## Tech Stack

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL (Supabase or Local)

---

## Project Structure

```
src/
├── app.js
├── index.js
├── prisma.js
└── routes/
    ├── course.js
    └── health.js
```

---

## HOW TO RUN THE PROJECT

### 1️⃣ Clone the repository

```bash
git clone <repo-url>
cd backend
```

---

### 2️⃣ Create `.env` file

Copy `.env.example` to `.env` and update values:

---

### 3️⃣ Install dependencies

```bash
npm install
```

---

### 4️⃣ Generate Prisma client

```bash
npm run prisma:generate
```

---

### 5️⃣ Run database migrations

```bash
npm run prisma:migrate
```

This will create the required tables in the database.

---

### 6️⃣ Start the development server

```bash
npm run dev
```

Server will start on:

```
http://localhost:3000
```

---

## API Endpoints

### Health Check

Checks whether the server and database are running.

```
GET /health
```

Example:

```
http://localhost:3000/health
```

---

### Create Course

Creates a new course.

```
POST /courses
```

Sample request body:

```json
{
  "title": "AWS Certified Cloud Practitioner",
  "description": "Learn AWS Certified Cloud Practitioner scratch",
  "rating": 4.7,
  "learners": 1250
}
```


Example:

```
http://localhost:3000/courses
```

---

### Get All Courses

Fetches a list of all courses.

```
GET /courses
```

---

### Get Course by ID

Fetches a single course along with related data.

```
GET /courses/:id
```

Example:

```
http://localhost:3000/courses/1
```

---

### Status

🚧 **Work in progress**

---
npm i
npx prisma migrate dev
npx prisma generate
npm run prisma:seed


redis-server

brew services start redis
brew services stop redis

npm run start:dev
