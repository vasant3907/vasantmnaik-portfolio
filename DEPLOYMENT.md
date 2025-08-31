# Deployment Guide for Render

This guide explains how to deploy this full-stack portfolio application to Render.

## Prerequisites

- A Render account
- Your code pushed to a Git repository (GitHub, GitLab, etc.)

## Deployment Steps

### 1. Connect to Render

1. Go to [render.com](https://render.com) and sign in
2. Click "New +" and select "Web Service"
3. Connect your Git repository

### 2. Configure the Web Service

Use the following settings:

- **Name**: `portfolio-app` (or your preferred name)
- **Environment**: `Python`
- **Build Command**: 
  ```bash
  cd frontend && npm install && npm run build
  cd ../backend && pip install -r requirements.txt
  python manage.py collectstatic --noinput
  ```
- **Start Command**: 
  ```bash
  cd backend && gunicorn portfolio_backend.wsgi:application --bind 0.0.0.0:$PORT
  ```

### 3. Environment Variables

Add these environment variables in Render:

- `SECRET_KEY`: Generate a secure Django secret key
- `DEBUG`: Set to `false` for production
- `ALLOWED_HOSTS`: Set to `.onrender.com`

### 4. Deploy

Click "Create Web Service" and Render will automatically:
1. Build your frontend React app
2. Install Python dependencies
3. Collect static files
4. Start the Django server

## How It Works

This deployment uses a monorepo approach where:

1. **Frontend**: React app is built during deployment and served as static files
2. **Backend**: Django serves both the API endpoints and the React app
3. **Static Files**: React build files are collected into Django's static files
4. **Routing**: Django serves the React app for all non-API routes

## API Endpoints

Your API will be available at:
- `https://your-app-name.onrender.com/api/`

## Frontend

Your React app will be served at:
- `https://your-app-name.onrender.com/`

## Troubleshooting

- Check the build logs in Render for any errors
- Ensure all environment variables are set correctly
- Verify that database migrations run successfully
- Check that static files are being collected properly

## Local Development

For local development, you can still run the frontend and backend separately:

```bash
# Terminal 1 - Backend
cd backend
python manage.py runserver

# Terminal 2 - Frontend
cd frontend
npm start
```