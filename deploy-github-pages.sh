#!/bin/bash

echo "🚀 VasantMNaik Portfolio - GitHub Pages Deployment"
echo "=================================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}Step 1: Building frontend...${NC}"
cd frontend
npm install
npm run build
cd ..

echo -e "${BLUE}Step 2: Creating gh-pages branch...${NC}"
git checkout -b gh-pages || git checkout gh-pages

# Copy build files to root
cp -r frontend/build/* .

# Create .nojekyll file
touch .nojekyll

echo -e "${BLUE}Step 3: Committing and pushing...${NC}"
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

echo -e "${BLUE}Step 4: Switching back to main...${NC}"
git checkout main

echo ""
echo -e "${GREEN}✅ Frontend deployed to GitHub Pages!${NC}"
echo ""
echo -e "${YELLOW}Your portfolio will be available at:${NC}"
echo -e "${BLUE}https://yourusername.github.io/your-repo-name${NC}"
echo ""
echo -e "${YELLOW}Next: Deploy backend to Railway${NC}"
echo "1. Go to: https://railway.app"
echo "2. Deploy your backend"
echo "3. Update API URL in frontend"
echo ""
echo -e "${BLUE}Need help? Check: GITHUB_PAGES_DEPLOYMENT.md${NC}"