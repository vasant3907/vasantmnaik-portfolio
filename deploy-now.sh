#!/bin/bash

echo "🚀 VasantMNaik Portfolio - Railway Deployment"
echo "============================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Step 1: Checking Git status...${NC}"
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${GREEN}✅ Working directory is clean${NC}"
else
    echo -e "${YELLOW}⚠️  You have uncommitted changes${NC}"
    echo "Committing changes..."
    git add .
    git commit -m "Auto-commit before Railway deployment"
fi

echo ""
echo -e "${BLUE}Step 2: Pushing to GitHub...${NC}"
git push origin main
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Code pushed to GitHub${NC}"
else
    echo -e "${RED}❌ Failed to push to GitHub${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}Step 3: Railway Deployment Instructions${NC}"
echo -e "${YELLOW}Now follow these steps:${NC}"
echo ""
echo "1. Go to: https://railway.app"
echo "2. Sign up with GitHub (free)"
echo "3. Click 'New Project'"
echo "4. Select 'Deploy from GitHub repo'"
echo "5. Choose your portfolio repository"
echo "6. Click 'Deploy Now'"
echo ""
echo "7. After deployment, go to Variables tab and add:"
echo "   SECRET_KEY=django-insecure-your-secret-key-here"
echo "   DEBUG=false"
echo "   ALLOWED_HOSTS=.railway.app"
echo ""
echo -e "${GREEN}Your app will be live in 2-3 minutes!${NC}"
echo ""
echo -e "${BLUE}Need help? Check: RAILWAY_DEPLOYMENT.md${NC}"