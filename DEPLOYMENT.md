# HRDC - Aviation Education Platform

## 🚀 Deployment

This project is split into two separate deployments:

### 📦 Backend (Render)

**Repository:** Same repo, use `backend-package.json`

**Build Command:**
```bash
cp backend-package.json package.json && npm install && npm run build
```

**Start Command:**
```bash
npm start
```

**Environment Variables (Render Dashboard):**
```
NODE_ENV=production
MONGODB_URI=your_mongodb_uri
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
PORT=3000
```

**Render Service Settings:**
- Environment: Node
- Build Command: `cp backend-package.json package.json && npm install && npm run build`
- Start Command: `npm start`
- Auto-Deploy: Yes

### 🎨 Frontend (Vercel)

**Repository:** Same repo

**Root Directory:** `client`

**Build Command:**
```bash
npm install && npm run build
```

**Output Directory:** `dist`

**Environment Variables (Vercel Dashboard):**
```
VITE_API_URL=https://your-backend-url.onrender.com
```

**Vercel Settings:**
- Framework Preset: Vite
- Root Directory: `client`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

## 🏃 Local Development

### Backend
```bash
npm install
npm run dev
```

Backend runs on `http://localhost:3000`

### Frontend
```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5000`

---

## 📁 Project Structure

```
├── server/              # Backend Express API
├── client/              # Frontend React App
│   ├── src/
│   ├── package.json    # Frontend dependencies only
│   └── vite.config.ts
├── shared/              # Shared types/schemas
├── script/              # Build scripts
├── backend-package.json # Backend dependencies
├── frontend-package.json # Frontend dependencies (same as client/package.json)
└── package.json         # Root package (for monorepo dev)
```

---

## 🔧 How It Works

1. **Backend** uses `backend-package.json` (only server deps)
2. **Frontend** uses `client/package.json` (only client deps)
3. Each deploys independently
4. Frontend connects to backend via `VITE_API_URL`

---

## 📦 Dependencies

### Backend Only
- express, mongoose, nodemailer, cors, ws, zod

### Frontend Only
- react, vite, @radix-ui/*, @tanstack/react-query, framer-motion

### Shared
- typescript, zod (for type safety)

