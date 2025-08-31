#!/bin/bash

echo "🚀 VasantMNaik Portfolio - Complete Netlify Deployment"
echo "====================================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}Step 1: Installing Netlify CLI...${NC}"
npm install -g netlify-cli

echo -e "${BLUE}Step 2: Building frontend...${NC}"
cd frontend
npm install
npm run build
cd ..

echo -e "${BLUE}Step 3: Preparing for deployment...${NC}"
git add .
git commit -m "Complete Netlify deployment with API functions" || true

echo -e "${BLUE}Step 4: Deploying to Netlify...${NC}"
echo -e "${YELLOW}This will open Netlify in your browser...${NC}"

# Deploy to Netlify
netlify deploy --prod --dir=frontend/build

echo ""
echo -e "${GREEN}✅ Complete Deployment Finished!${NC}"
echo ""
echo -e "${BLUE}Your portfolio is now live with:${NC}"
echo "✅ Frontend: React portfolio"
echo "✅ Backend: API functions for data"
echo "✅ Skills: /api/skills/"
echo "✅ Projects: /api/projects/"
echo "✅ Experience: /api/experiences/"
echo "✅ Contact: /api/contact/"
echo "✅ Personal Info: /api/personal-info/"
echo ""
echo -e "${YELLOW}Your complete portfolio is now live!${NC}"