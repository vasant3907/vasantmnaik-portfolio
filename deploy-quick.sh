#!/bin/bash
echo "🚀 Quick Netlify Deployment"
cd frontend && npm install && npm run build
netlify deploy --prod --dir=build