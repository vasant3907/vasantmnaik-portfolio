# 🚀 Railway Deployment Guide (Free & Fast in India)

## Why Railway?
- ✅ **Free tier available**
- ✅ **Fast servers in Asia/India**
- ✅ **Automatic deployment from GitHub**
- ✅ **No credit card required**
- ✅ **Supports both Node.js and Python**

## 🎯 Quick Deployment (5 minutes)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Railway deployment"
git push origin main
```

### Step 2: Deploy to Railway
1. **Go to Railway**: https://railway.app
2. **Sign up** with GitHub (free)
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Choose your portfolio repository**
6. **Click "Deploy Now"**

### Step 3: Configure Environment Variables
In Railway dashboard:
- Go to your project → Variables tab
- Add these variables:
  ```
  SECRET_KEY=django-insecure-your-super-secret-key-here
  DEBUG=false
  ALLOWED_HOSTS=.railway.app
  ```

### Step 4: Get Your URL
- Railway will automatically assign a URL like: `https://your-app-name-production.up.railway.app`
- Your app will be live in 2-3 minutes!

## 🔄 Automatic Deployment Setup

### Option A: GitHub Actions (Recommended)
1. In Railway dashboard → Settings → Tokens
2. Generate a new token
3. Copy the token
4. In GitHub → Settings → Secrets → Actions
5. Add secret: `RAILWAY_TOKEN` = your token
6. Add secret: `RAILWAY_SERVICE_NAME` = your service name
7. Push any change to trigger deployment

### Option B: Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

## 🌐 Custom Domain (Optional)
1. In Railway dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records at your domain registrar
4. Point to Railway's servers

## 📊 Monitoring
- **Dashboard**: https://railway.app/dashboard
- **Logs**: Available in Railway dashboard
- **Metrics**: CPU, memory, network usage
- **Uptime**: 99.9% guaranteed

## 🎉 Expected Result
After deployment, you'll have:
- **Frontend**: React portfolio at main URL
- **API**: Django backend at `/api/`
- **Database**: SQLite with your portfolio data
- **Static Files**: Served by Django/WhiteNoise

## 🔧 Troubleshooting

### Build Fails
- Check Railway logs in dashboard
- Verify Python/Node.js versions in nixpacks.toml
- Ensure all dependencies are in requirements.txt

### App Not Loading
- Check environment variables
- Verify ALLOWED_HOSTS includes .railway.app
- Check if database migrations ran

### API Issues
- Test API endpoints directly
- Check CORS settings
- Verify Django settings

## 💰 Cost
- **Free tier**: $5 credit/month
- **Your app**: ~$2-3/month
- **Upgrade**: Only if you exceed free tier

## 🚀 Next Steps
1. Deploy using the steps above
2. Test your application
3. Set up custom domain (optional)
4. Monitor performance
5. Share your portfolio URL!

## 📞 Support
- Railway Discord: https://discord.gg/railway
- Documentation: https://docs.railway.app
- Status: https://status.railway.app