# Quick Start Guide

## Prerequisites
- Node.js 18+ installed
- MongoDB installed locally OR MongoDB Atlas account

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Set Up Environment
Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/image-enhancer
PORT=5000
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=5000
NODE_ENV=development
```

## Step 3: Start MongoDB (Local Only)
If using local MongoDB:

**Windows:**
- MongoDB should start automatically as a service
- Or run: `mongod` in a separate terminal

**macOS:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

## Step 4: Run the Application
```bash
npm run dev
```

Open your browser to: `http://localhost:5000`

## Troubleshooting

### MongoDB Connection Error
- **Local MongoDB**: Ensure MongoDB is running (`mongod` command)
- **MongoDB Atlas**: Check your connection string and IP whitelist

### Port Already in Use
- Change `PORT` in `.env` to a different number (e.g., 3000, 8000)

### Images Not Showing
- Ensure images are in `client/public/assets/` directory
- Check that `logo-seal.jpg` exists in that folder

### Build Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## Next Steps
- See `README.md` for full documentation
- See `DEPLOYMENT.md` for deployment instructions




