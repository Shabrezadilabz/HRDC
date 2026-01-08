# Image Enhancer - Aviation Website

A modern full-stack web application for HR Aviation Research & Developments, built with React, Express, and MongoDB.

## Features

- 🎨 Modern, responsive UI with animations
- 📝 Scholarship registration system
- 📧 Contact/enquiry form
- 🗄️ MongoDB database integration
- 🚀 Ready for deployment

## Tech Stack

- **Frontend**: React, TypeScript, Vite, TailwindCSS, Framer Motion
- **Backend**: Express.js, TypeScript
- **Database**: MongoDB (Mongoose)
- **Build Tool**: Vite, ESBuild

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# MongoDB Connection String
# For local MongoDB: mongodb://localhost:27017/image-enhancer
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/dbname
MONGODB_URI=mongodb://localhost:27017/image-enhancer

# Server Port (default: 5000)
PORT=5000

# Node Environment
NODE_ENV=development
```

### 3. Start MongoDB (if using local MongoDB)

**Windows:**
```bash
# If MongoDB is installed as a service, it should start automatically
# Or start manually:
mongod
```

**macOS/Linux:**
```bash
# Using Homebrew (macOS)
brew services start mongodb-community

# Or start manually
mongod
```

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### 5. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── client/              # Frontend React application
│   ├── public/         # Static assets (images, favicon)
│   │   └── assets/     # Image assets
│   └── src/            # React source code
│       ├── components/ # React components
│       ├── pages/      # Page components
│       └── hooks/      # Custom React hooks
├── server/             # Backend Express server
│   ├── db.ts          # MongoDB connection
│   ├── routes.ts      # API routes
│   ├── storage.ts     # Database operations
│   └── index.ts       # Server entry point
├── shared/            # Shared types and schemas
│   ├── schema.ts      # MongoDB schemas
│   └── routes.ts      # API route definitions
└── dist/              # Production build output
```

## API Endpoints

- `POST /api/scholarship-registrations` - Create scholarship registration
- `GET /api/scholarship-registrations` - Get all registrations
- `POST /api/enquiries` - Create enquiry
- `GET /api/enquiries` - Get all enquiries

## Deployment Guide

### Option 1: Separate Backend and Frontend (Recommended)

#### Backend Deployment (Railway, Render, or Heroku)

1. **Prepare Backend:**
   - Create a `backend/` folder with server files
   - Add `package.json` with backend dependencies
   - Set environment variables: `MONGODB_URI`, `PORT`, `NODE_ENV`

2. **Deploy Backend:**
   - Push to GitHub
   - Connect to Railway/Render/Heroku
   - Set `MONGODB_URI` environment variable
   - Set build command: `npm run build`
   - Set start command: `npm start`

#### Frontend Deployment (Vercel, Netlify, or Cloudflare Pages)

1. **Prepare Frontend:**
   - Update API URLs in frontend to point to backend URL
   - Add `CORS` configuration in backend
   - Build frontend: `npm run build`

2. **Deploy Frontend:**
   - Push to GitHub
   - Connect to Vercel/Netlify
   - Set build command: `npm run build`
   - Set output directory: `dist/public`

### Option 2: Monolithic Deployment (Single Server)

Deploy the entire app to a single platform (Railway, Render, Heroku):

1. Set environment variables
2. Build command: `npm run build`
3. Start command: `npm start`
4. The server serves both API and frontend

### Best Practices

**For Production:**
- Use MongoDB Atlas (cloud) instead of local MongoDB
- Set `NODE_ENV=production`
- Enable CORS for frontend-backend communication
- Use environment variables for all sensitive data
- Set up proper error logging (e.g., Sentry)

**Recommended Platforms:**
- **Backend**: Railway, Render, or Heroku
- **Frontend**: Vercel, Netlify, or Cloudflare Pages
- **Database**: MongoDB Atlas (free tier available)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `PORT` | Server port (default: 5000) | No |
| `NODE_ENV` | Environment (development/production) | No |

## Troubleshooting

### Images Not Loading
- Ensure images are in `client/public/assets/` directory
- Check that static file serving is configured correctly
- Verify image paths in components match the public directory structure

### MongoDB Connection Issues
- Verify MongoDB is running (if using local)
- Check `MONGODB_URI` is correct
- For MongoDB Atlas, ensure IP whitelist includes your IP

### Port Already in Use
- Change `PORT` in `.env` file
- Or kill the process using the port

## License

MIT





