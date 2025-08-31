# 🚀 EXACT DEPLOYMENT STEPS FOR RENDER

## Step 1: Prepare Your Repository
```bash
# Make sure all files are committed
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

## Step 2: Deploy to Render (Copy-Paste Steps)

### 2.1 Go to Render
- Open: https://render.com
- Click "Sign Up" or "Log In"

### 2.2 Create Web Service
- Click "New +" button (top right)
- Select "Web Service"
- Click "Connect account" next to your Git provider (GitHub/GitLab)
- Authorize Render to access your repositories

### 2.3 Configure Service
- **Repository**: Select your portfolio repository
- **Name**: `vasantmnaik-portfolio`
- **Environment**: `Python`
- **Region**: Choose closest to you
- **Branch**: `main`
- **Build Command**: (leave empty - uses render.yaml)
- **Start Command**: (leave empty - uses render.yaml)

### 2.4 Set Environment Variables
Click "Advanced" and add:
- **Key**: `SECRET_KEY`
- **Value**: `django-insecure-your-super-secret-key-change-this-in-production`
- **Key**: `DEBUG`
- **Value**: `false`
- **Key**: `ALLOWED_HOSTS`
- **Value**: `.onrender.com`

### 2.5 Deploy
- Click "Create Web Service"
- Wait 5-10 minutes for build to complete
- Your app will be live at: `https://vasantmnaik-portfolio.onrender.com`

## Step 3: Test Your Deployment
- Visit your URL
- Check if React frontend loads
- Test API at: `https://vasantmnaik-portfolio.onrender.com/api/`

## Step 4: Custom Domain (Optional)
- In Render dashboard → Settings → Custom Domains
- Add your domain
- Update DNS records at your domain registrar

## Troubleshooting
- If build fails, check the logs in Render dashboard
- If app doesn't load, verify environment variables are set
- If API fails, check CORS settings in Django

## Success Indicators
✅ Build completes without errors
✅ Application shows "Live" status
✅ Frontend loads at main URL
✅ API responds at /api/ endpoints
✅ Database data is populated