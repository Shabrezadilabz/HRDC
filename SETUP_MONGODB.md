# MongoDB Atlas Setup Instructions

## Your MongoDB Atlas Connection String

You've received this connection string from MongoDB Atlas:
```
mongodb+srv://sheikshabrez90_db_user:<db_password>@cluster0.g3jahwo.mongodb.net/?appName=Cluster0
```

## Steps to Complete Setup

### 1. Replace the Password

In your `.env` file, replace `<db_password>` with your actual MongoDB Atlas password.

**Example:**
```env
MONGODB_URI=mongodb+srv://sheikshabrez90_db_user:MyActualPassword123@cluster0.g3jahwo.mongodb.net/image-enhancer?retryWrites=true&w=majority&appName=Cluster0
```

### 2. Verify Your MongoDB Atlas Settings

1. **Network Access (IP Whitelist):**
   - Go to MongoDB Atlas Dashboard
   - Click "Network Access" in the left sidebar
   - Add your IP address (or use `0.0.0.0/0` for all IPs - less secure but easier for development)
   - Click "Add IP Address"

2. **Database User:**
   - Go to "Database Access" in MongoDB Atlas
   - Verify your user `sheikshabrez90_db_user` exists
   - If you forgot the password, you can reset it here

### 3. Test the Connection

After updating your `.env` file with the actual password:

```bash
# Install dependencies (if not done already)
npm install

# Run the development server
npm run dev
```

If the connection is successful, you'll see:
```
Connected to MongoDB
serving on port 5000
```

### 4. Troubleshooting

**Connection Error:**
- Check that your IP is whitelisted in MongoDB Atlas
- Verify the password is correct (no extra spaces)
- Ensure the connection string format is correct

**Authentication Failed:**
- Double-check your username and password
- Make sure special characters in password are URL-encoded if needed
- Try resetting the database user password in MongoDB Atlas

**Network Timeout:**
- Check your internet connection
- Verify MongoDB Atlas cluster is running (not paused)
- Check firewall settings

## Security Notes

⚠️ **Important:**
- Never commit your `.env` file to Git
- The `.env` file is already in `.gitignore`
- Keep your MongoDB password secure
- For production, use environment variables in your hosting platform

## Next Steps

Once connected:
1. The app will automatically create the database `image-enhancer`
2. Collections (tables) will be created automatically when you submit forms
3. You can view your data in MongoDB Atlas Dashboard → Browse Collections




