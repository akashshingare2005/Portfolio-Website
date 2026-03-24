# 📚 Portfolio Directory & File Reference Guide

## 📂 Complete Project Structure

```
Portfolio_1/
│
├── 📖 README.md                          (Main documentation)
├── 📖 UPDATES_SUMMARY.md                 (What changed - detailed)
├── 📖 DEPLOYMENT_CHECKLIST.md            (Deploy & test guide)
├── 📖 PORTFOLIO_SUMMARY.md               (This portfolio overview)
├── 📄 quick-start.bat                    (Windows batch helper)
├── 📄 quick-start.ps1                    (PowerShell helper)
│
├── 📁 client/                            (React Frontend)
│   ├── index.html                        (HTML entry point)
│   ├── package.json                      (Dependencies)
│   ├── vite.config.js                    (Vite configuration)
│   ├── tailwind.config.js                (Tailwind CSS config)
│   ├── postcss.config.js                 (PostCSS config)
│   ├── .env.example                      (Env template)
│   ├── .gitignore                        (Git ignore rules)
│   ├── vercel.json                       (Vercel deployment config)
│   │
│   ├── 📁 public/
│   │   ├── Akash_Shingare_Resume.pdf    (Your actual resume)
│   │   └── Akash-Shingare-Resume.txt    (Text version)
│   │
│   └── 📁 src/
│       ├── main.jsx                      (React entry)
│       ├── App.jsx                       (Main app component)
│       ├── index.css                     (Tailwind + custom styles)
│       │
│       ├── 📁 components/                (All React components)
│       │   ├── About.jsx                 (About + skills badges)
│       │   ├── Contact.jsx               (Contact form)
│       │   ├── Footer.jsx                (Footer with socials)
│       │   ├── Hero.jsx                  (Hero typed intro)
│       │   ├── Loader.jsx                (Loading animation)
│       │   ├── Navbar.jsx                (Fixed navbar + scroll spy)
│       │   ├── Projects.jsx              (8 projects + filter)
│       │   ├── SectionHeading.jsx        (Reusable heading)
│       │   ├── Skills.jsx                (Skills categories)
│       │   └── Timeline.jsx              (Education timeline)
│       │
│       ├── 📁 data/
│       │   └── portfolioData.js          (ALL CONTENT HERE!)
│       │       ├── navLinks              (Navbar items)
│       │       ├── personalInfo          (Bio, name, role)
│       │       ├── skills                (34+ skills)
│       │       ├── projects              (8 projects)
│       │       └── timeline              (3 education entries)
│       │
│       └── 📁 utils/
│           └── animations.js             (Framer Motion presets)
│
├── 📁 server/                            (Node.js + Express Backend)
│   ├── package.json                      (Dependencies)
│   ├── .env.example                      (Env template)
│   ├── .gitignore                        (Git ignore rules)
│   ├── render.yaml                       (Render deployment config)
│   │
│   └── 📁 src/
│       ├── server.js                     (Server entry - START HERE)
│       ├── app.js                        (Express app setup)
│       │
│       ├── 📁 config/
│       │   └── db.js                     (MongoDB connection)
│       │
│       ├── 📁 models/
│       │   └── ContactMessage.js         (MongoDB schema)
│       │
│       ├── 📁 controllers/
│       │   └── contactController.js      (Form logic)
│       │
│       ├── 📁 routes/
│       │   └── contactRoutes.js          (API endpoints)
│       │
│       └── 📁 middleware/
│           ├── errorHandler.js           (Error handling)
│           └── notFound.js               (404 handler)
│
└── 📁 node_modules/                     (Dependencies - auto created)
```

---

## 🔧 File Purpose Guide

### Frontend Entry Points
| File | Purpose |
|------|---------|
| `client/index.html` | HTML shell, loads React app |
| `client/src/main.jsx` | React DOM render, Toast setup |
| `client/src/App.jsx` | Main comp, renders all sections |
| `client/vite.config.js` | Vite dev server config |

### Frontend Components
| Component | What It Shows |
|-----------|---------------|
| `Hero.jsx` | Typing animation, name, resume btn |
| `Navbar.jsx` | Fixed nav, scroll spy, mobile menu |
| `About.jsx` | Bio + skills badges in 2-col grid |
| `Skills.jsx` | 34+ skills in 6 categories |
| `Projects.jsx` | 8 projects with filter + counter |
| `Timeline.jsx` | Education from 10th to B.Tech |
| `Contact.jsx` | Contact form + toast notify |
| `Footer.jsx` | Social links + copyright |
| `Loader.jsx` | Loading animation on mount |

### Data Files (Edit These to Customize)
| File | Contains |
|------|----------|
| `portfolioData.js` | **ALL portfolio content** (skills, projects, education) |
| `.env.example` | Template for environment variables |

### Backend Core
| File | Purpose |
|------|---------|
| `server.js` | Entry point, starts server + DB |
| `app.js` | Express middleware setup |
| `db.js` | MongoDB Mongoose connection |
| `ContactMessage.js` | MongoDB schema for messages |
| `contactController.js` | Form validation + save logic |
| `contactRoutes.js` | API endpoint definition (`POST /api/contact`) |

### Styling
| File | Purpose |
|------|---------|
| `index.css` | Tailwind imports + custom utilities |
| `tailwind.config.js` | Tailwind theme config (colors, fonts) |
| `postcss.config.js` | CSS processing pipeline |

### Configuration
| File | Purpose |
|------|---------|
| `package.json` | Dependencies + scripts (both frontend & backend) |
| `vercel.json` | Frontend deployment to Vercel |
| `render.yaml` | Backend deployment to Render |
| `.env.example` | Environment variables template |

---

## 🎯 Where to Make Changes

### Change Portfolio Content?
→ **Edit:** `client/src/data/portfolioData.js`
- Update `personalInfo.bio` for bio text
- Add skills to `skills` array
- Update `projects` array for projects
- Modify `timeline` for education

### Change UI/Styling?
→ **Edit:** `client/src/index.css` or component files (`.jsx`)
- Colors in `tailwind.config.js`
- Component layouts in `client/src/components/`

### Change Backend Logic?
→ **Edit:** `server/src/controllers/contactController.js`
- Validation rules
- Error messages
- Additional API logic

### Change API Endpoints?
→ **Edit:** `server/src/routes/contactRoutes.js`
- Route definitions
- HTTP methods
- Endpoint paths

### Deploy Changes?
→ **Edit:** `server/render.yaml` or `client/vercel.json`
- Build commands
- Environment variables
- Start commands

---

## 📊 Data File Deep Dive

### `portfolioData.js` Structure

```javascript
// Navigation links
export const navLinks = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  // ... more nav items
]

// Personal information
export const personalInfo = {
  name: "Akash Shingare",
  role: "Engineering Student | Web Developer | AI Enthusiast",
  location: "India",
  bio: "Your bio text here...",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile"
  }
}

// Skills (34 total, organized by level)
export const skills = [
  { name: "C", level: 80 },
  { name: "C++", level: 82 },
  // ... more skills
]

// Projects (8 total)
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "What the project does...",
    tech: ["Tech1", "Tech2", "Tech3"],
    category: "Web",  // Filter category
    image: "https://...",
    github: "https://github.com/...",
    demo: "https://deployed-url.com"
  },
  // ... more projects
]

// Timeline (Education journey)
export const timeline = [
  {
    year: "Class X (SSC)",
    title: "Secondary School Certificate",
    description: "Institution, score, date..."
  },
  // ... more timeline entries
]
```

---

## 🔐 Environment Variables Guide

### Backend `.env` (server folder)
```env
PORT=5000                          # Server port
MONGO_URI=mongodb+srv://...        # MongoDB connection string
CLIENT_URL=http://localhost:5173   # Frontend URL (for CORS)
NODE_ENV=development               # Environment
```

### Frontend `.env` (client folder)
```env
VITE_API_BASE_URL=http://localhost:5000  # Backend API URL
```

---

## 🚀 How Files Connect

```
Browser Request
    ↓
index.html (loads React app)
    ↓
main.jsx (renders App component)
    ↓
App.jsx (renders Hero, About, Skills, Projects, Timeline, Contact, Footer)
    ↓
Each Component
    ├→ Imports data from portfolioData.js
    ├→ Uses Framer Motion from animations.js
    ├→ Styles with Tailwind classes
    └→ On form submit → Calls backend API
                           ↓
                    server.js starts Express
                           ↓
                    app.js sets up middleware
                           ↓
                    contactRoutes.js defines POST /api/contact
                           ↓
                    contactController.js validates & saves
                           ↓
                    db.js connects to MongoDB
                           ↓
                    ContactMessage.js stores in database
```

---

## 📋 Quick File Editing Checklist

```
TO CUSTOMIZE YOUR PORTFOLIO:

☐ Add your GitHub URL
  → Edit: client/src/data/portfolioData.js
  → Find: personalInfo.socials.github
  → Change: "https://github.com/" → "https://github.com/your-username"

☐ Add your LinkedIn URL
  → Same file, personalInfo.socials.linkedin

☐ Update project demo links
  → Same file, projects array, each project's "demo" field

☐ Add project GitHub repos
  → Same file, projects array, each project's "github" field

☐ Set MongoDB connection
  → Edit: server/.env (copy from .env.example)
  → Find or create: MONGO_URI=your-connection-string

☐ Update API base URL (if deployed)
  → Edit: client/.env
  → Find or create: VITE_API_BASE_URL=your-render-backend-url

☐ Deploy backend URL to Render
  → Edit: server/render.yaml
  → Set CLIENT_URL environment variable

☐ Deploy frontend URL to Vercel
  → In Vercel dashboard: Add VITE_API_BASE_URL env var
```

---

## 📞 File Location Quick Reference

| Need to... | File is at... |
|-----------|---------------|
| Add/remove skills | `client/src/data/portfolioData.js` |
| Add/edit projects | `client/src/data/portfolioData.js` |
| Change hero section | `client/src/components/Hero.jsx` |
| Change navbar | `client/src/components/Navbar.jsx` |
| Change colors | `client/tailwind.config.js` |
| Fix contact form | `server/src/controllers/contactController.js` |
| Add new API route | `server/src/routes/contactRoutes.js` |
| Change server port | `server/.env` |
| Update resume link | `client/src/components/Hero.jsx` OR `client/src/data/portfolioData.js` |
| Change animations | `client/src/utils/animations.js` or component files |

---

**All files are well-organized and ready to customize!** 🎉
