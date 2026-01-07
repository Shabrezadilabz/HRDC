# Complete Setup Guide - Backend & Frontend

## 🚀 Quick Setup (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create .env File
Create a `.env` file in the root directory with:

```env
MONGODB_URI=mongodb+srv://sheikshabrez90_db_user:YOUR_PASSWORD@cluster0.g3jahwo.mongodb.net/image-enhancer?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

**⚠️ IMPORTANT:** Replace `YOUR_PASSWORD` with your actual MongoDB password!

### Step 3: Whitelist Your IP in MongoDB Atlas
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Click your cluster → **"Network Access"**
3. Click **"Add IP Address"**
4. Click **"Allow Access from Anywhere"** → Add `0.0.0.0/0`
5. Click **"Confirm"**
6. Wait 1-2 minutes

### Step 4: Run the Application
```bash
npm run dev
```

You should see:
```
🔄 Connecting to MongoDB...
✅ Connected to MongoDB successfully
serving on port 5000
```

Then open: **http://localhost:5000**

---

## 📁 Project Structure

```
Image-Enhancer/
├── client/                 # Frontend (React + Vite)
│   ├── public/
│   │   └── assets/        # Images (logo-seal.jpg, etc.)
│   └── src/
│       ├── components/    # React components
│       ├── pages/         # Page components
│       └── lib/           # Utilities (api.ts)
├── server/                # Backend (Express + MongoDB)
│   ├── db.ts             # MongoDB connection
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database operations
│   └── index.ts          # Server entry point
├── shared/               # Shared code
│   ├── schema.ts         # MongoDB schemas
│   └── routes.ts         # API route definitions
└── .env                  # Environment variables (create this!)
```

---

## ✅ Verification Checklist

After setup, verify:

- [ ] `npm install` completed without errors
- [ ] `.env` file exists with correct `MONGODB_URI`
- [ ] MongoDB Atlas IP whitelist configured
- [ ] `npm run dev` shows "Connected to MongoDB successfully"
- [ ] App opens at http://localhost:5000
- [ ] Images load correctly (logo in navbar)
- [ ] Forms can submit (scholarship & enquiry)

---

## 🔧 Troubleshooting

### Error: "Cannot find package 'dotenv'"
**Solution:** Run `npm install` again

### Error: "MongoDB connection timeout"
**Solution:** 
1. Check IP whitelist in MongoDB Atlas
2. Verify password in `.env` file
3. Check cluster is not paused

### Images Not Loading
**Solution:**
- Images should be in `client/public/assets/`
- Check browser console for 404 errors
- Verify file names match exactly

### Port Already in Use
**Solution:**
- Change `PORT=5000` to `PORT=3000` in `.env`
- Or kill the process using port 5000

---

## 📦 Available Commands

```bash
# Development (with hot reload)
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Type checking
npm run check
```

---

## 🌐 Deployment

See `DEPLOYMENT.md` for:
- Separate backend/frontend deployment
- MongoDB Atlas setup
- Platform-specific guides (Railway, Vercel, etc.)

---

## 📝 Notes

- **Backend & Frontend run together** in development (single server)
- **MongoDB Atlas** is used (cloud database)
- **Images** are served from `client/public/assets/`
- **Environment variables** are in `.env` (not committed to git)

---

## 🆘 Still Having Issues?

1. Check `TROUBLESHOOTING.md` for detailed solutions
2. Verify all steps in this guide
3. Check MongoDB Atlas dashboard for connection issues
4. Review error messages in terminal


