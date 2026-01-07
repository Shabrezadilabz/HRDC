# 🚀 Deploy to Vercel - Complete Guide

## ✅ YES! Vercel can host BOTH Frontend + Backend!

Your full-stack app will run perfectly on Vercel with this setup:
- ✅ React Frontend
- ✅ Express.js Backend (API)
- ✅ MongoDB Connection
- ✅ Email Notifications
- ✅ All in ONE deployment!

---

## 📋 Prerequisites Checklist

Before deploying, make sure:
- ✅ Code pushed to GitHub: `https://github.com/Shabrezadilabz/HRDC.git`
- ✅ MongoDB Atlas database is accessible
- ✅ Gmail App Password for email notifications
- ✅ `.env.example` file exists (for reference)

---

## 🚀 Step-by-Step Deployment

### **Step 1: Sign Up / Login to Vercel**

1. Go to: https://vercel.com
2. Click **"Sign Up"** (or **"Login"**)
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

---

### **Step 2: Import Your Project**

1. On Vercel Dashboard, click **"Add New"** → **"Project"**
2. Find **"Shabrezadilabz/HRDC"** in the list
3. Click **"Import"**

---

### **Step 3: Configure Project Settings**

#### **Framework Preset:**
- Vercel should auto-detect: **"Other"** or **"Vite"**
- ✅ This is fine!

#### **Root Directory:**
- Leave as: `.` (root)

#### **Build & Output Settings:**
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `dist/public` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

---

### **Step 4: Add Environment Variables** ⚠️ **CRITICAL!**

Click **"Environment Variables"** and add these:

#### **1. MongoDB Connection:**
```
Name: MONGODB_URI
Value: mongodb+srv://sheikshabrez90_db_user:YOUR_PASSWORD@cluster0.g3jahwo.mongodb.net/image-enhancer?retryWrites=true&w=majority&appName=Cluster0
```
**⚠️ Replace `YOUR_PASSWORD` with your actual MongoDB password!**

#### **2. Node Environment:**
```
Name: NODE_ENV
Value: production
```

#### **3. Email Configuration:**
```
Name: EMAIL_USER
Value: ardc.ceo.ap@gmail.com
```

```
Name: EMAIL_PASSWORD
Value: YOUR_GMAIL_APP_PASSWORD
```
**⚠️ Use your Gmail App Password (NOT your regular password!)**

---

### **Step 5: Deploy!**

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. ✅ Your site will be live at: `https://hrdc-xxxxx.vercel.app`

---

## 🎨 Custom Domain (Optional)

### **Option 1: Use Vercel Subdomain**
Your app will be at: `https://hrdc-shabrezadilabz.vercel.app`

### **Option 2: Add Custom Domain**
1. Go to Project Settings → **"Domains"**
2. Add your domain (e.g., `aviationacademy.com`)
3. Update DNS records as shown by Vercel
4. ✅ Done!

---

## 🔄 Automatic Deployments

Every time you push to GitHub:
```bash
git add .
git commit -m "Update website"
git push
```

Vercel will **automatically**:
1. Pull latest code
2. Build the project
3. Deploy to production
4. ✅ Live in 2-3 minutes!

---

## 📊 Project Structure (How Vercel Handles It)

```
Your Repo
├── client/          → React Frontend
│   └── src/         → Vite builds this
├── server/          → Express Backend
│   ├── index.ts     → Main API server
│   ├── routes.ts    → API endpoints
│   └── db.ts        → MongoDB connection
├── vercel.json      → Vercel configuration (✅ ADDED)
└── package.json     → Dependencies & scripts
```

**How it works:**
- `/` → Frontend (React app)
- `/api/*` → Backend (Express API)
- All routes handled by the same deployment!

---

## 🧪 Testing Your Deployment

After deployment, test these:

### **1. Frontend:**
```
https://your-app.vercel.app/
```
✅ Should show your homepage

### **2. API:**
```
https://your-app.vercel.app/api/enquiries
```
✅ Should return JSON (might be empty array `[]`)

### **3. Test Route:**
```
https://your-app.vercel.app/test
```
✅ Should show server status

### **4. Submit a Form:**
- Fill out scholarship or enquiry form
- ✅ Should save to MongoDB
- ✅ Should send email to `ardc.ceo.ap@gmail.com`

---

## 🐛 Troubleshooting

### **Error: "Module not found"**
**Fix:** Check vercel.json is committed to GitHub
```bash
git add vercel.json
git commit -m "Add Vercel config"
git push
```

### **Error: "Database connection failed"**
**Fix:** Check environment variables:
1. Go to Vercel Project → **Settings** → **Environment Variables**
2. Verify `MONGODB_URI` is correct
3. Click **"Redeploy"**

### **Error: "Email not sending"**
**Fix:**
1. Verify `EMAIL_USER` and `EMAIL_PASSWORD` in Vercel
2. Check Gmail App Password is correct
3. Check Vercel logs: Project → **Deployments** → Click deployment → **Logs**

### **Error: 404 on page refresh**
**Fix:** Already handled by `vercel.json` routes! ✅

---

## 📈 View Logs & Monitor

### **Real-time Logs:**
1. Go to your project on Vercel
2. Click **"Deployments"**
3. Click latest deployment
4. Click **"View Function Logs"**

### **Performance Analytics:**
1. Project Dashboard → **"Analytics"**
2. See page views, response times, errors

---

## 💰 Pricing

### **Free Tier Includes:**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Serverless Functions
- ✅ Perfect for this project!

### **When to Upgrade:**
- If you get 100,000+ monthly visitors
- If you need more serverless execution time

---

## 🔒 Security Checklist

Before deploying:
- ✅ `.env` is in `.gitignore` (already done)
- ✅ Environment variables set in Vercel (not in code)
- ✅ MongoDB URI contains password (stored securely)
- ✅ Email credentials protected
- ✅ No sensitive data in GitHub repo

---

## 🚀 Quick Deploy Commands

### **Push Changes to Deploy:**
```bash
# Make changes to your code
git add .
git commit -m "Your update message"
git push

# Vercel auto-deploys in 2-3 minutes!
```

### **Manual Redeploy:**
1. Go to Vercel Dashboard
2. Project → **"Deployments"**
3. Click **"..."** on latest deployment
4. Click **"Redeploy"**

---

## 📱 Your Live URLs

After deployment, you'll have:

### **Main Site:**
```
https://hrdc-shabrezadilabz.vercel.app
```

### **API Endpoints:**
```
https://hrdc-shabrezadilabz.vercel.app/api/enquiries
https://hrdc-shabrezadilabz.vercel.app/api/scholarship-registrations
https://hrdc-shabrezadilabz.vercel.app/api/student-exam-register
https://hrdc-shabrezadilabz.vercel.app/api/visitors
https://hrdc-shabrezadilabz.vercel.app/test
```

---

## ✅ Deployment Checklist

Before clicking "Deploy":
- [ ] Code pushed to GitHub
- [ ] `vercel.json` file committed
- [ ] MongoDB URI copied (with password)
- [ ] Gmail App Password ready
- [ ] All environment variables prepared

---

## 🎯 What Happens During Deployment

1. **Build Phase (2 minutes):**
   - Vercel clones your GitHub repo
   - Runs `npm install`
   - Runs `npm run build`
   - Compiles TypeScript
   - Bundles frontend with Vite

2. **Deploy Phase (1 minute):**
   - Uploads assets to CDN
   - Deploys serverless functions
   - Assigns domain
   - Enables HTTPS

3. **Live! 🎉**
   - Your app is online
   - Auto-scaling enabled
   - Global CDN active

---

## 🌐 Environment Variables Summary

Copy these values when setting up on Vercel:

| Variable | Value | Where to Get |
|----------|-------|--------------|
| `MONGODB_URI` | `mongodb+srv://...` | From `.env` file |
| `NODE_ENV` | `production` | Type manually |
| `EMAIL_USER` | `ardc.ceo.ap@gmail.com` | From `.env` file |
| `EMAIL_PASSWORD` | `your_app_password` | Gmail App Password |

---

## 💡 Pro Tips

1. **Preview Deployments:**
   - Each commit gets a unique preview URL
   - Test before going to production

2. **Branch Deployments:**
   - Create a `dev` branch for testing
   - `main` branch → Production
   - Other branches → Preview URLs

3. **Rollback:**
   - Click any previous deployment
   - Click "Promote to Production"
   - Instant rollback!

---

## 📞 Need Help?

If deployment fails:
1. Check Vercel deployment logs
2. Verify all environment variables
3. Test MongoDB connection
4. Check GitHub repo is public or connected

---

## 🎉 Success Checklist

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] Navigation works (courses, study abroad)
- [ ] Forms submit successfully
- [ ] Email notifications received
- [ ] MongoDB data is saved
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] HTTPS enabled (automatic)

---

**Ready to deploy?** 🚀

1. Go to: https://vercel.com
2. Import: `Shabrezadilabz/HRDC`
3. Add environment variables
4. Click Deploy!

**Estimated time: 5 minutes total!** ⚡

