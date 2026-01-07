# 🔐 Fix GitHub Push Permission Error

## 🚨 Problem Identified:
```
remote: Permission to Shabrezadilabz/HRDC.git denied to shahnawaz1302.
fatal: unable to access 'https://github.com/Shabrezadilabz/HRDC.git/': The requested URL returned error: 403
```

**Issue:** Windows cached the old GitHub credentials (`shahnawaz1302`) but you're pushing to `Shabrezadilabz` repo.

---

## ✅ Quick Fix (3 Steps):

### **Step 1: Clear Cached GitHub Credentials**

**Option A: Using Windows Credential Manager (GUI)**
1. Press `Windows + R`
2. Type: `control /name Microsoft.CredentialManager`
3. Click **"Windows Credentials"**
4. Find entries starting with: `git:https://github.com`
5. Click each one → **Remove**

**Option B: Using Command (Faster)**
```powershell
cmdkey /list | findstr "git:https://github.com" | ForEach-Object { cmdkey /delete:($_ -split " ")[-1] }
```

---

### **Step 2: Create Personal Access Token for Shabrezadilabz**

1. **Log into GitHub** as `Shabrezadilabz`:
   - Go to: https://github.com/login
   - Use email: `shabrezadilabz@gmail.com`
   - Password: `9440152021Ms#`

2. **Create Token:**
   - Go to: https://github.com/settings/tokens
   - Click **"Generate new token (classic)"**
   - Name: `HRDC Repo Access`
   - Expiration: **90 days**
   - Check: ✅ `repo` (full control)
   - Click **"Generate token"**
   - **COPY THE TOKEN** (starts with `ghp_`)

---

### **Step 3: Push with New Credentials**

```bash
git push -u origin main
```

**When prompted:**
- **Username:** `Shabrezadilabz` (or `shabrezadilabz@gmail.com`)
- **Password:** Paste your **Personal Access Token** (NOT your password!)

---

## 🎯 Alternative: Update Remote URL with Token

If you want to avoid typing credentials:

```bash
# Replace YOUR_TOKEN with your actual token
git remote set-url origin https://YOUR_TOKEN@github.com/Shabrezadilabz/HRDC.git
git push -u origin main
```

**Example:**
```bash
git remote set-url origin https://ghp_xxxxxxxxxxxxxx@github.com/Shabrezadilabz/HRDC.git
git push -u origin main
```

---

## 🔒 Why This Happened:

1. **Old Config:** Global git was set to `shahnawaz1302`
2. **Windows Cached:** Credential Manager stored old credentials
3. **Wrong Account:** Trying to push to `Shabrezadilabz` with `shahnawaz1302` credentials
4. **GitHub Blocked:** 403 Forbidden error

---

## ✅ Current Configuration:

**Local Repo (This Repo Only):**
```
✅ Username: Shabrezadilabz
✅ Email: shabrezadilabz@gmail.com
✅ Remote: https://github.com/Shabrezadilabz/HRDC.git
```

**Global Config (Other Repos):**
```
⚠️ Username: shahnawaz1302
⚠️ Email: shanawaz.k@ikhub.biz
```

This is **perfect** - different accounts for different repos!

---

## 🚀 Quick Test After Fixing:

```bash
# Verify remote
git remote -v

# Should show:
# origin  https://github.com/Shabrezadilabz/HRDC.git (fetch)
# origin  https://github.com/Shabrezadilabz/HRDC.git (push)

# Try push
git push -u origin main
```

---

## 📝 Summary:

**You need to:**
1. ✅ Clear Windows cached credentials for GitHub
2. ✅ Create Personal Access Token for `Shabrezadilabz` account
3. ✅ Push using the new token

**The password `9440152021Ms#` won't work for Git push - GitHub requires PAT!**

---

Ready to proceed? Let me know if you need help with any step! 🚀

