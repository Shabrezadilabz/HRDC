# 🚀 Deploy Frontend to Vercel (Static Site)

## ⚙️ **Prerequisites:**

You need your **Render backend URL** first:
```
https://hrdc-backend.onrender.com
```

---

## 🔧 **Step 1: Update Frontend API URL**

The frontend needs to know where the backend is!

### **Update `.env`:**
```env
VITE_API_URL=https://hrdc-backend.onrender.com
```

*(Replace with your actual Render URL)*

---

## 📦 **Step 2: Create Vercel Configuration**

We'll deploy ONLY the frontend as a static site.

---

## 🚀 **Step 3: Deploy to Vercel**

### **Option A: Vercel Dashboard (Easiest)**

1. Go to: https://vercel.com/dashboard
2. Click **"Add New"** → **"Project"**
3. Select **"Shabrezadilabz/HRDC"**
4. Click **"Import"**

### **Configure Project:**

```
Framework Preset: Vite
Root Directory: client
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### **Environment Variables:**

Add this **1 variable**:

```
Key: VITE_API_URL
Value: https://hrdc-backend.onrender.com
```
*(Your Render backend URL)*

5. Click **"Deploy"**
6. Wait 2-3 minutes

---

## ✅ **Your Frontend Will Be Live!**

Vercel will give you:
```
https://hrdc-xxxxx.vercel.app
```

---

## 🧪 **Test Everything:**

### **Frontend:**
```
https://hrdc-xxxxx.vercel.app/
```
Should load homepage

### **API Connection:**
Open browser console and submit a form
Should connect to Render backend

---

## 🎯 **How It Works:**

```
User Browser
    ↓
Vercel (Frontend - Static Files)
    ↓ API calls
Render (Backend - Express Server)
    ↓
MongoDB Atlas (Database)
```

---

## 💡 **Benefits of This Setup:**

✅ **Frontend:** Fast static hosting (Vercel's specialty)
✅ **Backend:** Traditional server (easier to debug)
✅ **Separation:** Each can be updated independently
✅ **Scaling:** Backend can handle any load
✅ **Logs:** Easy to view on Render
✅ **No Serverless Issues:** Traditional Express works perfectly

---

## 🔄 **Auto-Deploy:**

- Push to GitHub → Both deploy automatically!
- Frontend: Vercel rebuilds
- Backend: Render rebuilds

---

## ✅ **Success Checklist:**

- [ ] Backend deployed on Render
- [ ] Backend URL copied
- [ ] Frontend updated with backend URL
- [ ] Frontend deployed on Vercel
- [ ] Forms work and save to MongoDB
- [ ] Emails send successfully

---

**Perfect! Your full-stack app is now live with proper separation!** 🎉


