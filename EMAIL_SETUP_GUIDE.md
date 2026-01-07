# Email Notifications Setup Guide 📧

## ✅ What Was Implemented

Email notifications are now configured to send to **ardc.ceo.ap@gmail.com** whenever:
1. 🎓 Someone fills the **Scholarship Registration** form
2. 📩 Someone fills the **Contact/Enquiry** form
3. 📝 Someone fills the **Exam Registration** form

---

## 🎨 Email Templates

### 1. Scholarship Registration Email
```
Subject: 🎓 New Scholarship Registration - Aviation Academy

Content:
- Student Name
- 12th Stream (MPC/BiPC/etc.)
- City
- Phone Number
- Timestamp
```

### 2. Enquiry/Contact Email
```
Subject: 📩 New Enquiry - Aviation Academy

Content:
- Name
- Email (clickable)
- Phone (clickable)
- Interested Course
- Message (if provided)
- WhatsApp button (direct link)
- Timestamp
```

### 3. Exam Registration Email
```
Subject: 📝 New Exam Registration - Aviation Academy

Content:
- Name
- Email
- Phone
- Course
- Education Level
- City & State
- Exam Date
- Preferred Time
- Timestamp
```

---

## 🔧 Setup Instructions

### Step 1: Create Gmail App Password

**Why?** Gmail blocks regular password logins from apps for security. You need a special "App Password".

#### Option A: Using ardc.ceo.ap@gmail.com

1. **Go to your Google Account**:
   - Visit: https://myaccount.google.com/

2. **Enable 2-Step Verification** (if not already enabled):
   - Go to: https://myaccount.google.com/security
   - Click "2-Step Verification"
   - Follow setup instructions

3. **Create App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Sign in if prompted
   - Select "Mail" and "Other (Custom name)"
   - Type: "Aviation Academy Website"
   - Click "Generate"
   - **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

4. **Save the App Password**:
   - You'll use this in Step 2 below

---

### Step 2: Update Your `.env` File

1. **Open your `.env` file** (in the project root)

2. **Add these lines**:
```env
EMAIL_USER=ardc.ceo.ap@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

**Replace `abcd efgh ijkl mnop` with your actual 16-character App Password from Step 1!**

Example:
```env
MONGODB_URI=mongodb+srv://sheikshabrez90_db_user:yourpassword@cluster0.g3jahwo.mongodb.net/image-enhancer?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
NODE_ENV=development

# Email Configuration
EMAIL_USER=ardc.ceo.ap@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

---

### Step 3: Restart Your Server

```bash
# Stop the current server (Ctrl+C if running)

# Start it again
npm run dev
```

---

### Step 4: Test It!

1. **Go to your website**: http://localhost:5000

2. **Fill the scholarship form**:
   - Name: Test Student
   - Stream: MPC
   - City: Hyderabad
   - Phone: 9876543210
   - Submit

3. **Check your email**: ardc.ceo.ap@gmail.com
   - You should receive a beautiful HTML email! 📧

4. **Repeat for contact form**

---

## 🎨 What the Emails Look Like

### Scholarship Registration Email:
```
┌──────────────────────────────────────┐
│  🎓 New Scholarship Registration     │
│  Aviation Research & Development     │
│  Center                              │
├──────────────────────────────────────┤
│                                      │
│  A new student has registered...    │
│                                      │
│  👤 Name: John Doe                   │
│  📚 Stream: MPC                      │
│  📍 City: Hyderabad                  │
│  📱 Phone: 9876543210                │
│                                      │
│  Received: Jan 5, 2026, 10:30 PM    │
└──────────────────────────────────────┘
```

### Enquiry Email:
```
┌──────────────────────────────────────┐
│  📩 New Enquiry Received             │
│  Aviation Research & Development     │
│  Center                              │
├──────────────────────────────────────┤
│                                      │
│  A potential student has enquired... │
│                                      │
│  👤 Name: Jane Smith                 │
│  📧 Email: jane@example.com          │
│  📱 Phone: 9123456789                │
│  🎓 Interested In: CPL               │
│                                      │
│  💬 Message:                         │
│  I want to know about the course...  │
│                                      │
│  [💬 Contact via WhatsApp]          │
│                                      │
│  Received: Jan 5, 2026, 10:35 PM    │
└──────────────────────────────────────┘
```

---

## 🔐 Security Features

1. **App Password** (not regular password)
   - More secure
   - Can be revoked anytime
   - Doesn't expose main password

2. **Non-Blocking Emails**
   - Form submission succeeds even if email fails
   - Users don't wait for email to send
   - Better user experience

3. **Error Handling**
   - If email fails, app continues working
   - Errors logged to console
   - Data still saved to database

---

## 📊 Email Delivery Status

### In Terminal/Console:
```bash
✅ Scholarship notification email sent to: ardc.ceo.ap@gmail.com
✅ Enquiry notification email sent to: ardc.ceo.ap@gmail.com
✅ Exam registration notification email sent to: ardc.ceo.ap@gmail.com
```

Or if email not configured:
```bash
📧 Email disabled - scholarship notification skipped
⚠️ Email credentials not configured. Emails will not be sent.
```

---

## 🐛 Troubleshooting

### Problem 1: "Username and Password not accepted"

**Solution**:
- Make sure you're using an **App Password**, not your regular Gmail password
- Double-check the 16-character code
- Remove any spaces in the `.env` file

### Problem 2: "Less secure app access"

**Solution**:
- You need to use an App Password (Step 1 above)
- Regular password won't work with Gmail

### Problem 3: No email received

**Check**:
1. Is the `.env` file updated?
2. Did you restart the server after updating `.env`?
3. Check spam/junk folder
4. Check console for error messages

### Problem 4: "Invalid login" error

**Solutions**:
1. Make sure 2-Step Verification is enabled
2. Generate a new App Password
3. Copy-paste the password carefully (no extra spaces)

---

## 💡 Alternative: Use Different Email Service

### If you want to use a different email (not Gmail):

#### For Outlook/Hotmail:
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

Update `server/email.ts`:
```typescript
service: 'hotmail',  // instead of 'gmail'
```

#### For Custom SMTP (like Zoho, SendGrid):
Update `server/email.ts`:
```typescript
host: 'smtp.example.com',
port: 587,
secure: false,
auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASSWORD,
},
```

---

## 📱 Email Features

### Clickable Links:
- ✅ Email addresses → Opens email client
- ✅ Phone numbers → Opens dialer on mobile
- ✅ WhatsApp button → Opens WhatsApp chat

### Responsive Design:
- ✅ Looks great on desktop
- ✅ Looks great on mobile
- ✅ Beautiful HTML formatting
- ✅ Professional appearance

### Timestamps:
- ✅ All emails include Indian Standard Time (IST)
- ✅ Format: Jan 5, 2026, 10:30 PM

---

## 🎯 Testing Checklist

- [ ] Created Gmail App Password
- [ ] Updated `.env` file with EMAIL_USER and EMAIL_PASSWORD
- [ ] Restarted server
- [ ] Filled scholarship form → Received email
- [ ] Filled enquiry form → Received email
- [ ] Emails look good (not in spam)
- [ ] Links work (email, phone, WhatsApp)

---

## 📝 Next Steps

Once everything is working:

1. **Test all three forms**:
   - Scholarship registration
   - Contact/Enquiry
   - Exam registration (if implemented)

2. **Check email formatting**:
   - Open on desktop
   - Open on mobile
   - Check all links work

3. **Set up email filtering** (optional):
   - Create Gmail labels
   - Set up auto-categorization
   - Create filter rules

---

## 🚀 You're All Set!

Once you complete Steps 1-3 above, you'll receive beautiful email notifications for every form submission!

**Questions?** Check the troubleshooting section or let me know!


