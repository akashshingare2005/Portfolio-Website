# 🚀 DEPLOYMENT GUIDE - Deploy Your Portfolio Live!

**Status:** ✅ Local Git initialized, Ready for deployment  
**Estimated Time:** 30-45 minutes total

---

## 📋 Deployment Overview

You have 2 services to deploy:
1. **Backend API** → Render (Node.js + Express + MongoDB)
2. **Frontend Website** → Vercel (React + Vite + Tailwind)

---

## STEP 1: Create GitHub Account & Push Code (5-10 minutes)

### 1.1 Create GitHub Account (if needed)
- Go to https://github.com/signup
- Sign up with your email
- Create a username (e.g., `akash-shingare`)
- Verify email
- ✅ GitHub account ready

### 1.2 Create a New Repository
- Go to https://github.com/new
- Repository name: `Portfolio`
- Description: `Professional MERN Portfolio Website`
- Make it **PUBLIC** (so Render/Vercel can access it)
- ✅ Click "Create repository"

### 1.3 Push Code to GitHub
Copy and run these commands in PowerShell (in `c:\Users\NAGESH\OneDrive\Desktop\Portfolio_1`):

```powershell
cd "c:\Users\NAGESH\OneDrive\Desktop\Portfolio_1"

# Add your GitHub repository URL
git remote add origin https://github.com/YOUR-USERNAME/Portfolio.git

# Rename branch to main
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Replace `YOUR-USERNAME`** with your actual GitHub username!

**Expected output:**
```
Enumerating objects: 46, done.
Counting objects: 100% (46/46), done.
Writing objects: 100% (46/46), ...
 * [new branch]      main -> main
```

✅ **Your code is now on GitHub!**

---

## STEP 2: Deploy Backend to Render (10-15 minutes)

### 2.1 Go to Render Dashboard
- Open https://dashboard.render.com
- Sign in with your Render account
- Click "New" → "Web Service"

### 2.2 Connect GitHub
- Select "Build and deploy from a Git repository"
- Click "Connect account" (if needed)
- Authorize Render to access GitHub
- ✅ GitHub connected

### 2.3 Select Your Repository
- Search for `Portfolio` in the list
- Click to connect it
- ✅ Repository selected

### 2.4 Configure Web Service

**Settings:**

| Field | Value |
|-------|-------|
| Name | `portfolio-api` |
| Environment | `Node` |
| Region | `Oregon` (or closest to you) |
| Branch | `main` |
| Root Directory | `server` |
| Build Command | `npm install` |
| Start Command | `npm run start` |

### 2.5 Add Environment Variables

Scroll down to "Environment Variables" and add these:

```
KEY                  VALUE
---                  -----
PORT                 5000
MONGO_URI            mongodb+srv://your_mongo_user:your_mongo_password@your_cluster.mongodb.net/portfolio?retryWrites=true&w=majority
CLIENT_URL           (Leave blank for now - we'll update after Vercel deployment)
NODE_ENV             production
```

⚠️ **Your MONGO_URI:** Check your `server/.env` file for the MongoDB connection string!

### 2.6 Create Web Service
- Click "Create Web Service"
- Wait ~ 2-3 minutes for build & deployment
- ✅ You should see "Your service is live at: `https://portfolio-api-XXXX.onrender.com`"

**Copy this URL!** You'll need it for Vercel.

---

## STEP 3: Deploy Frontend to Vercel (10-15 minutes)

### 3.1 Go to Vercel Dashboard
- Open https://vercel.com/dashboard
- Sign in with your Vercel account
- Click "Add New..." → "Project"

### 3.2 Import GitHub Repository
- Click "Import Git Repository"
- Paste: `https://github.com/YOUR-USERNAME/Portfolio` (or select from list)
- ✅ Repository selected

### 3.3 Configure Project

**Basic Settings:**

| Field | Value |
|-------|-------|
| Project Name | `akash-portfolio` |
| Framework | `Vite` |
| Root Directory | `client` |

### 3.4 Add Environment Variables

Scroll to "Environment Variables" and add:

```
KEY                        VALUE
---                        -----
VITE_API_BASE_URL         https://portfolio-api-XXXX.onrender.com
```

(Replace `XXXX` with your actual Render URL from Step 2.6)

### 3.5 Deploy
- Click "Deploy"
- Wait ~ 3-5 minutes for build
- ✅ You should see "Congratulations! Your site is deployed at: `https://akash-portfolio.vercel.app`"

**Copy this URL!**

---

## STEP 4: Update Render with Frontend URL (2 minutes)

### 4.1 Go Back to Render
- Open https://dashboard.render.com
- Click on your `portfolio-api` service
- Go to "Settings"
- Scroll to "Environment Variables"
- Edit `CLIENT_URL` and set it to your Vercel URL: `https://akash-portfolio.vercel.app`
- Click "Save Changes"

### 4.2 Render Auto-Redeploys
- Service will automatically redeploy with new CORS settings
- Wait ~2 minutes

✅ **Your backend and frontend are now connected!**

---

## STEP 5: Final Setup - Personalize Your Portfolio (5 minutes)

Before the final test, ensure your links are personalized:

### 5.1 Update GitHub Link
- File: `client/src/data/portfolioData.js`
- Find: `personalInfo.socials.github`
- Change from: `"https://github.com/"`
- Change to: `"https://github.com/YOUR-USERNAME"`

### 5.2 Update LinkedIn Link
- Same file: `personalInfo.socials.linkedin`
- Change to: `"https://www.linkedin.com/in/YOUR-PROFILE"`

### 5.3 Update Project Links (Optional)
- Same file: in `projects` array
- Update each project's `github` and `demo` URLs if you have them

### 5.4 Push Changes to GitHub
```powershell
cd "c:\Users\NAGESH\OneDrive\Desktop\Portfolio_1"
git add .
git commit -m "Update social links"
git push
```

- Vercel & Render will auto-redeploy! (wait ~3 minutes)

✅ **Your portfolio is live and updated!**

---

## STEP 6: Test Your Live Portfolio (5 minutes)

### Testing Checklist

```
Frontend (https://akash-portfolio.vercel.app):
☐ Page loads without errors
☐ Animations work smoothly
☐ Navbar scroll spy highlights correctly
☐ All sections are visible
☐ Resume PDF downloads
☐ GitHub link works
☐ LinkedIn link works

Contact Form Test:
☐ Fill in name, email, message
☐ Click "Send Message"
☐ Success toast appears
☐ Form clears
☐ No errors in console

Mobile Test:
☐ Open on phone/tablet
☐ Layout responsive
☐ Hamburger menu works
☐ All content visible
```

---

## 🎉 Success! Here Are Your Live URLs

After deployment, you'll have:

### 🌐 **Frontend (Share This!)**
```
https://akash-portfolio.vercel.app
```

### 🔌 **Backend API (Optional Share)**
```
https://portfolio-api-XXXX.onrender.com
```

---

## 📱 Quick Share Template

Use this to share your portfolio on LinkedIn/WhatsApp/Email:

```
🎉 My Professional Portfolio is Live! 🎉

Check out my portfolio showcasing my projects, skills, and experience:
👉 https://akash-portfolio.vercel.app

Features:
✨ 8 Full-Stack Projects
💪 34+ Technical Skills
📚 Education & Experience
📝 Contact Form
🎨 Modern Animations

Feel free to reach out via the contact form!
```

---

## ⚠️ Troubleshooting

### **Render Build Failed**
- Check "Build Logs" in Render dashboard
- Ensure `server/package.json` exists
- Ensure `.env` variables are correct
- Run `npm install` locally to verify dependencies

### **Frontend shows "Cannot connect to API"**
- Check that `VITE_API_BASE_URL` is correct in Vercel
- Check that Render `CLIENT_URL` includes your Vercel URL
- Wait 2 minutes for Render to redeploy with CORS changes
- Check browser console for exact error

### **Contact Form Not Working**
- Open browser DevTools (F12)
- Check Network tab when form submitted
- Should see POST request to `API_BASE_URL/api/contact`
- If 401/403 error: CORS issue - check Render settings

### **Changes Not Reflecting Live**
- Give the deployment 3-5 minutes
- Hard refresh browser (Ctrl+Shift+R)
- Check deployment logs in Vercel/Render dashboard

---

## 🔐 Keeping Secrets Safe

Remember:
- ✅ NEVER share your `.env` files
- ✅ MongoDB URI stays in Render environment variables only
- ✅ GitHub repository is public (that's fine)
- ✅ Sensitive data never goes in code

---

## 📊 What Just Happened

```
Your Local Computer
        ↓
    Git Push
        ↓
    GitHub (Backup)
        ↓
   ┌─────────────────┐
   │  Render detects │
   │  new push to    │
   │  GitHub         │
   └─────────────────┘
        ↓
  ┌─────────────────┐
  │  Auto-redeploy  │
  │  Backend API    │
  │  (production)   │
  └─────────────────┘

   ┌─────────────────┐
   │  Vercel detects │
   │  new push to    │
   │  GitHub         │
   └─────────────────┘
        ↓
  ┌─────────────────┐
  │  Auto-redeploy  │
  │  Frontend       │
  │  (production)   │
  └─────────────────┘

Both services are now LIVE on the internet!
Users can visit: https://akash-portfolio.vercel.app
```

---

## ✅ Final Checklist

```
Before Sharing:
☐ GitHub account created
☐ Code pushed to GitHub
☐ Render deployed & running
☐ Vercel deployed & running
☐ Backend URL set in Render CLIENT_URL
☐ Frontend URL set in Vercel VITE_API_BASE_URL
☐ Personal links updated (GitHub, LinkedIn)
☐ Contact form tested
☐ Mobile tested
☐ No console errors

Ready to Share:
☐ Copy Vercel URL
☐ Share on LinkedIn
☐ Share on WhatsApp
☐ Share in resume
☐ Send to recruiters
```

---

## 🚀 Next Steps

1. **Immediately:** Follow Step 1-4 above
2. **Then:** Personalize links (Step 5)
3. **Then:** Test everything (Step 6)
4. **Finally:** Share your portfolio! 🎉

**Estimated total time: 30-45 minutes**

---

## 💬 Questions?

If something breaks:
1. Check "Build Logs" in Render dashboard
2. Check "Deployments" in Vercel dashboard
3. Check browser console for errors (F12)
4. Compare with local setup that works
5. Re-read the troubleshooting section above

Good luck! Your portfolio is ready to impress! 🚀

---

**Your portfolio URL (once deployed):** `https://akash-portfolio.vercel.app` ✨
