#!/bin/bash

echo "🚀 Railway Deployment Script for VasantMNaik Portfolio"
echo "=================================================="

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "📦 Installing Railway CLI..."
    npm install -g @railway/cli
fi

echo "🔐 Please login to Railway..."
railway login

echo "🚀 Deploying to Railway..."
railway up

echo "✅ Deployment complete!"
echo "🌐 Your app will be available at the URL shown above"
echo "📊 Check status at: https://railway.app/dashboard"