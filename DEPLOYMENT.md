# Deployment Guide

This guide covers deploying the Image Enhancer application with separate backend and frontend.

## Architecture Overview

**Recommended Setup:**
- **Backend**: Railway, Render, or Heroku
- **Frontend**: Vercel, Netlify, or Cloudflare Pages
- **Database**: MongoDB Atlas (cloud)

## Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Create a database user
5. Whitelist your IP (or use `0.0.0.0/0` for all IPs in development)
6. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

## Step 2: Deploy Backend

### Option A: Railway (Recommended)

1. Go to [Railway](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`
   - `PORT`: Railway will set this automatically
   - `FRONTEND_URL`: Your frontend URL (e.g., `https://your-app.vercel.app`)
6. Railway will auto-detect and deploy
7. Copy your backend URL (e.g., `https://your-app.railway.app`)

### Option B: Render

1. Go to [Render](https://render.com)
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your repository
5. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
6. Add environment variables (same as Railway)
7. Deploy

### Option C: Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set NODE_ENV=production
   heroku config:set FRONTEND_URL=https://your-frontend.vercel.app
   ```
5. Deploy: `git push heroku main`

## Step 3: Deploy Frontend

### Option A: Vercel (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`
6. Add environment variable:
   - `VITE_API_URL`: Your backend URL (e.g., `https://your-app.railway.app`)
7. Deploy

### Option B: Netlify

1. Go to [Netlify](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
6. Add environment variable:
   - `VITE_API_URL`: Your backend URL
7. Deploy

### Option C: Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Sign up with GitHub
3. Create a new project
4. Connect repository
5. Configure:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/public`
6. Add environment variable:
   - `VITE_API_URL`: Your backend URL
7. Deploy

## Step 4: Update Frontend API Configuration

After deploying, update your frontend to use the backend URL:

1. Create `client/src/lib/api.ts`:
```typescript
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
```

2. Update API calls to use `API_URL` instead of hardcoded URLs.

## Step 5: Update CORS in Backend

Ensure your backend allows requests from your frontend domain:

```typescript
// In server/index.ts
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  credentials: true,
}));
```

Set `FRONTEND_URL` environment variable in your backend deployment.

## Environment Variables Summary

### Backend (.env)
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
NODE_ENV=production
PORT=5000
FRONTEND_URL=https://your-frontend.vercel.app
```

### Frontend (.env)
```
VITE_API_URL=https://your-backend.railway.app
```

## Testing Deployment

1. **Test Backend:**
   ```bash
   curl https://your-backend.railway.app/api/enquiries
   ```

2. **Test Frontend:**
   - Visit your frontend URL
   - Submit a form
   - Check if data is saved in MongoDB Atlas

## Troubleshooting

### CORS Errors
- Ensure `FRONTEND_URL` is set correctly in backend
- Check that frontend URL matches exactly (including https/http)

### Database Connection Issues
- Verify MongoDB Atlas IP whitelist
- Check connection string format
- Ensure database user has proper permissions

### Build Failures
- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

### Images Not Loading
- Ensure images are in `client/public/assets/`
- Check that static file serving is configured
- Verify image paths in components

## Monolithic Deployment (Alternative)

If you prefer a single deployment:

1. Deploy to Railway/Render/Heroku
2. Set all environment variables
3. Build command: `npm run build`
4. Start command: `npm start`
5. The server will serve both API and frontend on one domain

## Cost Estimates

**Free Tier Options:**
- MongoDB Atlas: Free (512MB storage)
- Railway: $5/month (after free trial)
- Render: Free tier available
- Vercel: Free tier available
- Netlify: Free tier available

**Recommended Free Setup:**
- MongoDB Atlas (Free)
- Railway Backend (Free trial, then $5/month)
- Vercel Frontend (Free)




