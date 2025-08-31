#!/bin/bash

echo "🚀 VasantMNaik Portfolio - Vercel Deployment"
echo "============================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}Step 1: Installing Vercel CLI...${NC}"
npm install -g vercel

echo -e "${BLUE}Step 2: Preparing for deployment...${NC}"
git add .
git commit -m "Ready for Vercel deployment" || true
git push origin main || true

echo -e "${BLUE}Step 3: Deploying to Vercel...${NC}"
echo -e "${YELLOW}This will open Vercel in your browser...${NC}"

# Deploy to Vercel
vercel --prod

echo ""
echo -e "${GREEN}✅ Deployment Complete!${NC}"
echo ""
echo -e "${BLUE}Your portfolio is now live at the URL shown above!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Copy the URL from above"
echo "2. Share it with others"
echo "3. Set up custom domain (optional)"
echo ""
echo -e "${BLUE}Need help? Check: VERCEL_DEPLOYMENT.md${NC}"