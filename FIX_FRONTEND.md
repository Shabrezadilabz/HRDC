# Fix Frontend Not Loading

## 🔍 Diagnosis Steps

### Step 1: Check if Server is Running
Look at your terminal where you ran `npm run dev`. You should see:
```
✅ SERVER STARTED SUCCESSFULLY!
🌐 Frontend: http://localhost:5000
```

**If you DON'T see this:** The server didn't start. Check for errors above this message.

### Step 2: Check Terminal Output
Look for these messages in order:
1. `🔄 Connecting to MongoDB...`
2. `✅ Connected to MongoDB successfully`
3. `✅ API routes registered`
4. `🔄 Setting up Vite dev server for frontend...`
5. `✅ Vite dev server configured`
6. `✅ SERVER STARTED SUCCESSFULLY!`

**If any are missing:** That's where the problem is.

### Step 3: Test Routes
Open these URLs in your browser:

1. **Test Route:** http://localhost:5000/test
   - Should show JSON: `{"message":"Server is working!",...}`
   - If 404: Server routes aren't working

2. **API Route:** http://localhost:5000/api/enquiries
   - Should show JSON array
   - If 404: API routes aren't registered

3. **Frontend:** http://localhost:5000
   - Should show your React app
   - If 404: Vite isn't serving frontend

## 🔧 Common Fixes

### Fix 1: Server Not Starting
**Symptom:** No "SERVER STARTED" message

**Solution:**
1. Stop server (Ctrl+C)
2. Check for errors in terminal
3. Make sure `.env` file exists with `MONGODB_URI`
4. Restart: `npm run dev`

### Fix 2: Vite Not Starting
**Symptom:** See "API routes registered" but no "Vite dev server configured"

**Solution:**
- Check terminal for Vite errors
- Verify `client/index.html` exists
- Check `client/src/main.tsx` exists

### Fix 3: Frontend 404 but API Works
**Symptom:** `/test` and `/api` work, but `/` returns 404

**Solution:**
- Vite catch-all route issue
- Check terminal for "Serving frontend for: /" message
- Look for Vite errors

### Fix 4: Everything Returns 404
**Symptom:** All routes return 404

**Solution:**
- Server might not be listening on port 5000
- Check if another app is using port 5000
- Try changing `PORT=3000` in `.env`

## 🚀 Quick Restart

1. **Stop server:** Press Ctrl+C in terminal
2. **Clear and restart:**
   ```bash
   npm run dev
   ```
3. **Watch for errors** in terminal
4. **Try URLs** after seeing "SERVER STARTED"

## 📝 Share This Info

If still not working, share:
1. **Full terminal output** from `npm run dev`
2. **What you see** when accessing:
   - http://localhost:5000/test
   - http://localhost:5000/api/enquiries
   - http://localhost:5000
3. **Any error messages** in terminal


