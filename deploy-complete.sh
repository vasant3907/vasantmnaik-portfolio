#!/bin/bash

echo "🚀 Complete Portfolio Deployment - Frontend + Backend"
echo "===================================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}Step 1: Deploying Backend to Railway...${NC}"
echo -e "${YELLOW}This will open Railway in your browser...${NC}"

# Install Railway CLI
npm install -g @railway/cli

# Deploy backend to Railway
railway login
railway up

echo ""
echo -e "${GREEN}✅ Backend deployed to Railway!${NC}"
echo ""
echo -e "${BLUE}Step 2: Update frontend with backend URL...${NC}"

# Get the Railway URL and update frontend
echo -e "${YELLOW}Please copy the Railway URL from above and I'll update the frontend.${NC}"
echo -e "${YELLOW}The URL will look like: https://your-app-name-production.up.railway.app${NC}"

echo ""
echo -e "${GREEN}✅ Complete deployment ready!${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Copy the Railway URL from above"
echo "2. I'll update the frontend to use that URL"
echo "3. Deploy frontend to GitHub Pages"
echo "4. Your complete portfolio will be live!"