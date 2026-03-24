# Akash Shingare - Professional MERN Portfolio Website

A cutting-edge full-stack MERN portfolio website showcasing real projects, education, complete skills inventory, and integrated contact management. Built with React, Tailwind CSS, Framer Motion animations, Node.js, Express, and MongoDB.

## 🚀 Features Implemented

### Frontend Features
- **Responsive Hero Section** with animated typing effect, intro, and dual CTAs
- **Fixed Navbar** with scroll spy active section highlight and mobile hamburger menu
- **About Section** with introduction and all skills displayed as badges
- **Comprehensive Skills Section** (34+ skills) organized by category:
  - Programming Languages (C, C++, Python, Java, JavaScript, Swing)
  - Web Development (HTML, CSS, React, Node, Express, Tailwind, REST APIs)
  - Databases (MySQL, MongoDB)
  - Core CS (DSA, OOP, DBMS, OS, Networks, Cloud)
  - Tools & IDE (Git, VS Code, Eclipse, AutoCAD, ZWCAD, Scilab, Canva, MS Office)
  - Soft Skills (Communication, Teamwork, Leadership, Adaptability, Time Management)
- **8 Featured Projects** with categories, descriptions, tech stacks, and links
- **Education Timeline** from Class X (SSC - 94.60%) to B.Tech at AISSMS
- **Contact Form** with real-time toast notifications and MongoDB backend storage
- **Footer** with social media links
- **Dark modern UI** with gradient atmosphere, animations, and hover effects

### Projects Included (8 Total)
1. **Employee Management Admin Dashboard** - HTML, CSS, JavaScript, MongoDB
2. **AkWebify Freelance Website** - HTML, CSS, JavaScript, Node.js, Express, Vercel + Render
3. **Electricity Billing System** - Java Swing, MySQL
4. **Personal Portfolio Website** - React, Tailwind, Framer Motion, Node.js, MongoDB
5. **BookShelf Platform** - React, Node, Express, MongoDB, Stripe
6. **AI Career Coach** - React, Python, ML, Node, MongoDB
7. **Mental Health Care Platform** - React, Node, MongoDB, WebSocket, Tailwind
8. **Upstyle E-commerce** - React, JavaScript, Tailwind, Node, MongoDB

### Backend Features
- Node.js + Express REST API with MVC structure
- MongoDB connection via Mongoose with validation
- `POST /api/contact` endpoint for storing contact messages
- `GET /api/health` health check endpoint
- Centralized error handling middleware
- CORS enabled for frontend communication

## 📁 Project Structure

```
Portfolio_1/
  client/
    public/
      Akash_Shingare_Resume.pdf (YOUR ACTUAL RESUME)
      Akash-Shingare-Resume.txt
    src/
      components/
        - About.jsx
        - Contact.jsx
        - Footer.jsx
        - Hero.jsx
        - Loader.jsx
        - Navbar.jsx
        - Projects.jsx
        - SectionHeading.jsx
        - Skills.jsx
        - Timeline.jsx
      data/
        - portfolioData.js (34 skills, 8 projects, education timeline)
      utils/
        - animations.js
      App.jsx
      index.css
      main.jsx
    .env.example
    vercel.json
    tailwind.config.js
    vite.config.js
    package.json
  
  server/
    src/
      config/
        - db.js (MongoDB connection)
      controllers/
        - contactController.js
      models/
        - ContactMessage.js
      routes/
        - contactRoutes.js
      middleware/
        - errorHandler.js
        - notFound.js
      app.js
      server.js
    .env.example
    render.yaml
    package.json

  README.md
```

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Deployment**: Vercel (Frontend), Render (Backend)
- **Notifications**: React Hot Toast
- **Icons**: React Icons

## 1️⃣ Local Setup (Step-by-Step)

### Prerequisites
- Node.js (v18+)
- npm
- MongoDB Atlas account

### Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio_db
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Start backend:

```bash
npm run dev
```

Backend runs on: `http://localhost:5000`

### Frontend Setup

Open a new terminal:

```bash
cd client
npm install
```

Create `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000
```

Start frontend:

```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

## 2️⃣ API Endpoints

### Health Check
- `GET /api/health` → Returns API status

### Contact Form
- `POST /api/contact`
- Request body:
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message"
}
```

## 3️⃣ Environment Variables

### Backend (.env in /server)
```
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### Frontend (.env in /client)
```
VITE_API_BASE_URL=http://localhost:5000
```

## 4️⃣ Deployment Guide

### Deploy Backend on Render

1. Push code to GitHub
2. Go to Render.com → New Web Service
3. Select your repository
4. Set Root Directory: `server`
5. Build Command: `npm install`
6. Start Command: `npm run start`
7. Add Environment Variables:
   - `MONGO_URI` (your MongoDB Atlas URI)
   - `CLIENT_URL` (your Vercel frontend URL)
   - `NODE_ENV=production`
8. Deploy and copy backend URL

Example: `https://akash-portfolio-api.onrender.com`

### Deploy Frontend on Vercel

1. Go to Vercel.com → Import Project
2. Select GitHub repository
3. Set Root Directory: `client`
4. Add Environment Variable:
   - `VITE_API_BASE_URL=https://your-render-backend-url`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Deploy

### Connect Frontend & Backend

After deployment:
1. Update Render `CLIENT_URL` env var with your Vercel URL
2. Update Vercel `VITE_API_BASE_URL` with your Render URL
3. Redeploy both services

## 5️⃣ Personalization

To make it truly yours:

- **Update Social Links**: [client/src/data/portfolioData.js](client/src/data/portfolioData.js)
  - Replace GitHub, LinkedIn URLs
  
- **Add Real Demo/GitHub Links**: Same file, update project `github` and `demo` fields

- **Resume**: Already integrated
  - [client/public/Akash_Shingare_Resume.pdf](client/public/Akash_Shingare_Resume.pdf)

- **Education Details**: Already populated from your documents
  - SSC: 94.60% | HSC: 76% | B.Tech at AISSMS, Pune (Expected 2027)

## 📊 What's New in This Version

✅ **34+ Skills** organized by category  
✅ **8 Complete Projects** with real descriptions  
✅ **Real Education Timeline** from 10th to Engineering  
✅ **Your Actual Resume PDF** integrated for download  
✅ **Updated Bio** reflecting full-stack + AI focus  
✅ **Enhanced Skills UI** with category grouping  
✅ **Professional Timeline** with education icons  
✅ **Improved Projects Grid** with filtering and counters  

## 🚀 Quick Commands

**Backend**
```bash
cd server
npm install
npm run dev
```

**Frontend**
```bash
cd client
npm install
npm run dev
```

**Test both locally**
- Backend: http://localhost:5000/api/health
- Frontend: http://localhost:5173

## 📝 Notes

- Contact form messages are stored in MongoDB
- All animations use Framer Motion for smooth performance
- Fully responsive on mobile, tablet, and desktop
- Built following modern web development best practices

---

**Your portfolio is production-ready.** Deploy with confidence! 🚀

