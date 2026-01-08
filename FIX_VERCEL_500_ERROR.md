# 🔧 Fix Vercel 500 Error - Serverless Function Crash

## 🚨 Error You're Seeing:
```
500: INTERNAL_SERVER_ERROR
Code: FUNCTION_INVOCATION_FAILED
```

This means your backend crashed. Let's fix it!

---

## 🔍 Step 1: CHECK VERCEL LOGS (MOST IMPORTANT!)

### **How to View Logs:**
1. Go to: https://vercel.com/dashboard
2. Click your **"HRDC"** project
3. Click **"Deployments"** tab
4. Click on the latest deployment (top one)
5. Click **"View Function Logs"** or **"Runtime Logs"**

### **What to Look For:**
- ❌ MongoDB connection errors
- ❌ Missing environment variables
- ❌ Module not found errors
- ❌ Server startup errors

**📸 Take a screenshot of the error and share it!**

---

## ⚙️ Step 2: VERIFY ENVIRONMENT VARIABLES

Go to: **Project Settings** → **Environment Variables**

Make sure ALL of these are set:

### **Required Variables:**
```
✅ MONGODB_URI
   Value: mongodb+srv://sheikshabrez90_db_user:YOUR_ACTUAL_PASSWORD@cluster0.g3jahwo.mongodb.net/image-enhancer?retryWrites=true&w=majority&appName=Cluster0

✅ NODE_ENV
   Value: production

✅ EMAIL_USER
   Value: ardc.ceo.ap@gmail.com

✅ EMAIL_PASSWORD
   Value: YOUR_GMAIL_APP_PASSWORD
```

### **Common Mistakes:**
- ❌ Forgot to add `MONGODB_URI`
- ❌ Password has special characters not URL-encoded
- ❌ Copy-pasted with extra spaces
- ❌ Missing database name in URI

---

## 🔧 Step 3: FIX SERVER CODE FOR SERVERLESS

The issue is likely that `server/index.ts` tries to start a server, but Vercel uses **serverless functions**.

### **Quick Fix - Update vercel.json:**

Replace your current `vercel.json` with this:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/assets/(.*)",
      "dest": "/client/public/assets/$1"
    },
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/client/dist/$1"
    }
  ]
}
```

---

## 🛠️ Step 4: CREATE SERVERLESS HANDLER

We need to create a Vercel-compatible handler:

### **Create: `api/index.js`**

This will be your serverless function entry point.

---

## 🔍 Most Common Issues & Fixes:

### **Issue 1: MongoDB Connection Timeout**
**Symptoms:** "ETIMEDOUT" or "ENOTFOUND" in logs

**Fix:**
1. Check `MONGODB_URI` is correct
2. Make sure MongoDB Atlas allows connections from `0.0.0.0/0` (all IPs)
3. In MongoDB Atlas:
   - Go to **Network Access**
   - Click **"Add IP Address"**
   - Click **"Allow Access from Anywhere"** (0.0.0.0/0)

### **Issue 2: Missing Environment Variables**
**Symptoms:** "MONGODB_URI must be set" in logs

**Fix:**
1. Go to Vercel Project → Settings → Environment Variables
2. Add all required variables
3. Click **"Redeploy"** after adding

### **Issue 3: Server Listening on Port**
**Symptoms:** Function times out or crashes

**Fix:** Serverless functions don't use `app.listen()`. The code needs adjustment.

### **Issue 4: Build Errors**
**Symptoms:** Deployment fails during build

**Fix:**
1. Check **"Build Logs"** in Vercel
2. Look for TypeScript errors
3. Run `npm run build` locally to test

---

## 🚀 Quick Fix Steps (Try This First):

### **1. Update MongoDB Network Access:**
```
MongoDB Atlas → Network Access → Add IP → 0.0.0.0/0
```

### **2. Verify Environment Variables:**
```
Vercel Project → Settings → Environment Variables
```
Make sure ALL 4 variables are set!

### **3. Redeploy:**
```
Vercel → Deployments → ... menu → Redeploy
```

---

## 📋 Debugging Checklist:

Check these in order:

- [ ] Viewed Vercel Function Logs (most important!)
- [ ] All environment variables set in Vercel
- [ ] MongoDB Atlas allows connections from anywhere
- [ ] MONGODB_URI includes password
- [ ] EMAIL_PASSWORD is Gmail App Password (not regular password)
- [ ] No typos in environment variable names
- [ ] Redeployed after adding environment variables

---

## 🔍 How to Read Vercel Logs:

### **Build Logs:**
Shows if your code compiled successfully
- Go to: Deployments → Click deployment → "Building" tab

### **Function Logs:**
Shows runtime errors
- Go to: Deployments → Click deployment → "Functions" tab

### **Runtime Logs:**
Shows what happened when function ran
- Go to: Project → "Logs" tab (real-time)

---

## 💡 Alternative: Check Build Output

1. In Vercel, go to your deployment
2. Look for **"Build Logs"** section
3. Check if build succeeded:
   ```
   ✅ Build Completed
   ```
4. If build failed, it will show error messages

---

## 🆘 Emergency Fix (If Nothing Works):

### **Option 1: Simplify vercel.json**

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    }
  ]
}
```

### **Option 2: Use Different Deployment Platform**

If Vercel serverless is problematic, try:
- **Render.com** (easier for traditional servers)
- **Railway.app** (simple deployment)
- **Heroku** (classic option)

---

## 📞 Next Steps:

**Please provide:**
1. Screenshot of Vercel Function Logs
2. Screenshot of your Environment Variables (hide the values!)
3. Tell me what error message you see in logs

**I'll help you fix it!** 🚀

---

## 🔧 Quick Commands to Test Locally:

Before deploying again, test locally:

```bash
# Test build
npm run build

# Test production mode
npm run start

# Check if it works at http://localhost:5000
```

If it works locally but not on Vercel, it's likely:
- Environment variables issue
- MongoDB network access issue
- Serverless compatibility issue

---

**Let me see your Vercel logs and I'll tell you exactly what's wrong!** 📊


