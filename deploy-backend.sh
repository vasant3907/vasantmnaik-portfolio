#!/bin/bash

echo "🚀 VasantMNaik Portfolio - Backend Deployment to Railway"
echo "======================================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}Step 1: Installing Railway CLI...${NC}"
npm install -g @railway/cli

echo -e "${BLUE}Step 2: Preparing for deployment...${NC}"
git add .
git commit -m "Ready for Railway backend deployment" || true
git push origin main || true

echo -e "${BLUE}Step 3: Deploying to Railway...${NC}"
echo -e "${YELLOW}This will open Railway in your browser...${NC}"

# Deploy to Railway
railway up

echo ""
echo -e "${GREEN}✅ Backend Deployment Complete!${NC}"
echo ""
echo -e "${BLUE}Your backend API will be available at the URL shown above!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Copy the backend URL from above"
echo "2. Update frontend API calls to use this URL"
echo "3. Your portfolio will be complete!"
echo ""
echo -e "${BLUE}API Endpoints:${NC}"
echo "- Skills: /api/skills/by_category/"
echo "- Projects: /api/projects/"
echo "- Experience: /api/experiences/"
echo "- Contact: /api/contact/"
echo "- Personal Info: /api/personal-info/"