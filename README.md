# mnp-react-whiz-productpage

## Whizlabs Product Page – React Version

## Overview

The **React Whiz Product Page** is a full-stack web application designed to display detailed course information of AWS Certified Cloud Practitioner (CLF-C02) course . The application provides a structured product page that presents course content, pricing plans, exam details, and learning resources in an organized and responsive interface.

The platform retrieves course information dynamically from a backend API and displays it through modular frontend components.

---

# Tech Stack

### Frontend

* React
* TypeScript
* HTML5
* CSS3 and  Bootstrap

### Backend

* NestJS
* Prisma ORM

### Database

* PostgreSQL

---

### Features

Component-based UI

Dynamic data from API

Responsive layout

## Steps to run the project

## Backend Setup and Running Instructions

Follow the steps below to set up and run the backend server locally.

### 1. Navigate to the Backend Folder

Move to the backend directory of the project.

```bash
cd backend
```

---

### 2. Install Dependencies

Install all required packages.

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file as per the .env.expample file

---

### 4. Run Prisma Migration

Apply the database schema to the PostgreSQL database.

```bash
npx prisma migrate dev
```

---

### 5. Generate Prisma Client

Generate the Prisma client used by the backend to interact with the database.

```bash
npx prisma generate
```

---

### 6. Seed the Database

Insert initial user data into the database.

```bash
npm run prisma:seed
```

---

### 7. Seed the Database

Insert initial course details of the AWS Certified Cloud Practitioner (CLF-C02) in the id : 1.

```bash
npm run prisma:seed
```

---

### 8. Start the Backend Server

Run the NestJS backend server in development mode.

```bash
npm run start:dev
```

---

## Frontend Setup and Running Instructions

Follow the steps below to set up and run the frontend application locally.

### 1. Navigate to the Frontend Folder

Move to the frontend directory of the project.

```bash
cd frontend
```

---

### 2. Install Dependencies

Install all required packages.

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the **frontend root directory** and update as per the .env.example file.

This variable is used by the frontend application to communicate with the backend API.

---

### 4. Start the Frontend Development Server

Run the React development server.

```bash
npm run dev
```

---

Open the URL in your browser to view the application.

### Author

Nakul Prasath

Product Trainee

