#!/bin/bash

echo "🚀 VasantMNaik Portfolio - Netlify Deployment"
echo "============================================="
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

echo -e "${BLUE}Step 3: Deploying to Netlify...${NC}"
echo -e "${YELLOW}This will open Netlify in your browser...${NC}"

# Deploy to Netlify
netlify deploy --prod --dir=frontend/build

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
echo -e "${BLUE}Need help? Check: NETLIFY_DEPLOYMENT.md${NC}"