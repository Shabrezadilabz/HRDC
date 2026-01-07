# Troubleshooting MongoDB Connection Issues

## Common Error: "Operation buffering timed out after 10000ms"

This error means MongoDB cannot be reached. Here are the most common causes and solutions:

### 1. Check Your .env File

Make sure your `.env` file exists in the root directory and has the correct format:

```env
MONGODB_URI=mongodb+srv://sheikshabrez90_db_user:YOUR_PASSWORD@cluster0.g3jahwo.mongodb.net/image-enhancer?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

**Important:**
- Replace `YOUR_PASSWORD` with your actual MongoDB password
- No spaces around the `=` sign
- No quotes around the connection string

### 2. IP Address Whitelist (Most Common Issue!)

**This is usually the problem!** MongoDB Atlas blocks connections from IPs that aren't whitelisted.

**Fix:**
1. Go to [MongoDB Atlas Dashboard](https://cloud.mongodb.com)
2. Click on your cluster
3. Go to **"Network Access"** in the left sidebar
4. Click **"Add IP Address"**
5. Choose one of these options:
   - **Option A (Easier for development):** Click "Allow Access from Anywhere" and add `0.0.0.0/0`
   - **Option B (More secure):** Add your current IP address
6. Click "Confirm"
7. Wait 1-2 minutes for changes to take effect

### 3. Verify Your Password

1. Go to MongoDB Atlas Dashboard
2. Click **"Database Access"** in the left sidebar
3. Find your user `sheikshabrez90_db_user`
4. If you forgot the password, click the three dots → "Edit" → "Edit Password"
5. Update your `.env` file with the new password

### 4. Check Your Connection String Format

Your connection string should look like this:
```
mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority
```

**Common mistakes:**
- ❌ Missing password: `mongodb+srv://username@cluster...`
- ❌ Wrong format: `mongodb://` instead of `mongodb+srv://`
- ❌ Special characters in password not URL-encoded

**If your password has special characters:**
- `@` becomes `%40`
- `#` becomes `%23`
- `$` becomes `%24`
- `%` becomes `%25`
- `&` becomes `%26`
- `/` becomes `%2F`
- `:` becomes `%3A`
- `?` becomes `%3F`

Example: If your password is `P@ssw0rd#123`, use `P%40ssw0rd%23123`

### 5. Check MongoDB Atlas Cluster Status

1. Go to MongoDB Atlas Dashboard
2. Check if your cluster is **paused** (free tier clusters pause after inactivity)
3. If paused, click **"Resume"** and wait for it to start (2-3 minutes)

### 6. Test Connection String

You can test your connection string directly:

**Windows PowerShell:**
```powershell
# Test if you can reach MongoDB (replace with your connection string)
Test-NetConnection cluster0.g3jahwo.mongodb.net -Port 27017
```

**Or use MongoDB Compass:**
1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Paste your connection string
3. Click "Connect"
4. If it fails, you'll see the exact error message

### 7. Firewall/Antivirus Issues

Sometimes firewalls or antivirus software block MongoDB connections:

- Temporarily disable firewall/antivirus to test
- Add Node.js to firewall exceptions
- Check if your network blocks port 27017

### 8. Network Issues

- Check your internet connection
- Try a different network (mobile hotspot)
- Some corporate networks block MongoDB connections

## Quick Diagnostic Steps

Run these commands to check:

```bash
# 1. Check if .env file exists and has MONGODB_URI
# (In PowerShell)
Get-Content .env

# 2. Check Node.js can access environment variables
node -e "require('dotenv').config(); console.log(process.env.MONGODB_URI ? 'Found' : 'Missing')"

# 3. Try connecting with a simple script
node -e "require('dotenv').config(); const mongoose = require('mongoose'); mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected!')).catch(e => console.error('Error:', e.message))"
```

## Still Not Working?

1. **Double-check IP whitelist** - This fixes 90% of connection issues
2. **Verify password** - Reset it in MongoDB Atlas if unsure
3. **Check cluster status** - Make sure it's not paused
4. **Try a new connection string** - Generate a new one in MongoDB Atlas

## Getting More Detailed Error Messages

The updated code now shows more detailed error messages. Look for:
- `❌ MongoDB connection error:` - This will show the specific error
- Check the full error message for clues

## Success Indicators

When it works, you'll see:
```
🔄 Connecting to MongoDB...
✅ Connected to MongoDB successfully
serving on port 5000
```


