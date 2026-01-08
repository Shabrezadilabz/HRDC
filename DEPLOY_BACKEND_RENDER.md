# 🚀 Deploy Backend to Render.com

## ✅ **Step 1: Create Render Account**

1. Go to: https://render.com
2. Click **"Get Started"** or **"Sign Up"**
3. Choose **"Sign up with GitHub"**
4. Authorize Render to access your GitHub

---

## 🔧 **Step 2: Create New Web Service**

1. On Render Dashboard, click **"New +"**
2. Select **"Web Service"**
3. Click **"Build and deploy from a Git repository"**
4. Click **"Next"**

---

## 🔗 **Step 3: Connect Repository**

1. Find **"Shabrezadilabz/HRDC"** in the list
2. Click **"Connect"**

*(If you don't see it, click "Configure GitHub App" to grant access)*

---

## ⚙️ **Step 4: Configure Service**

Fill in these settings:

### **Basic Settings:**
```
Name: hrdc-backend
Region: Singapore (or closest to you)
Branch: main
Root Directory: (leave blank)
```

### **Build Settings:**
```
Runtime: Node
Build Command: npm install && npm run build
Start Command: npm start
```

### **Instance Type:**
```
Select: Free (for testing)
```

---

## 🔐 **Step 5: Add Environment Variables**

Click **"Advanced"** → Scroll to **"Environment Variables"**

Add these **3 variables**:

#### **Variable 1:**
```
Key: MONGODB_URI
Value: mongodb+srv://sheikshabrez90_db_user:YOUR_PASSWORD@cluster0.g3jahwo.mongodb.net/image-enhancer?retryWrites=true&w=majority&appName=Cluster0
```
*(Replace YOUR_PASSWORD with actual MongoDB password)*

#### **Variable 2:**
```
Key: EMAIL_USER
Value: ardc.ceo.ap@gmail.com
```

#### **Variable 3:**
```
Key: EMAIL_PASSWORD
Value: Boeing@737
```

#### **Variable 4:**
```
Key: NODE_ENV
Value: production
```

#### **Variable 5:**
```
Key: PORT
Value: 5000
```

---

## 🚀 **Step 6: Deploy!**

1. Scroll to bottom
2. Click **"Create Web Service"**
3. Wait 5-10 minutes for first deployment

---

## ✅ **Step 7: Get Your Backend URL**

After deployment completes:

1. You'll see a URL like: `https://hrdc-backend.onrender.com`
2. **Copy this URL!** You'll need it for frontend

---

## 🧪 **Step 8: Test Backend**

Visit these URLs in your browser:

### **Health Check:**
```
https://hrdc-backend.onrender.com/health
```
Should return: `{"status":"ok"}`

### **Test Endpoint:**
```
https://hrdc-backend.onrender.com/test
```
Should return server info

### **API Test:**
```
https://hrdc-backend.onrender.com/api/enquiries
```
Should return: `[]` or list of enquiries

---

## 📋 **Render Dashboard Features:**

### **View Logs:**
```
Dashboard → Your Service → Logs
```
Real-time server logs!

### **Restart Service:**
```
Dashboard → Your Service → Manual Deploy → "Clear build cache & deploy"
```

### **Update Environment Variables:**
```
Dashboard → Your Service → Environment → Edit
```

---

## 💡 **Important Notes:**

### **Free Tier Limitations:**
- ⚠️ **Spins down after 15 min of inactivity**
- First request after sleep takes ~30 seconds
- **Upgrade to paid ($7/month) to keep always-on**

### **Auto-Deploy:**
- Every `git push` to main branch auto-deploys!
- No manual work needed

### **Custom Domain (Optional):**
- Go to: Settings → Custom Domain
- Add your domain
- Update DNS records

---

## 🎯 **Your Backend Will Be:**

```
Live URL: https://hrdc-backend.onrender.com
Health:   https://hrdc-backend.onrender.com/health
API:      https://hrdc-backend.onrender.com/api/*
```

---

## ✅ **Success Checklist:**

- [ ] Render account created
- [ ] Repository connected
- [ ] All 5 environment variables added
- [ ] Build command: `npm install && npm run build`
- [ ] Start command: `npm start`
- [ ] Deployment completed successfully
- [ ] Health endpoint returns `{"status":"ok"}`
- [ ] Backend URL copied for frontend setup

---

**Next:** Configure frontend to use this backend URL! 🎉


