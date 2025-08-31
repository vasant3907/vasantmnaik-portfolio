# Portfolio App - Render Deployment Configuration

## Overview

This repository has been configured for deployment on Render with both frontend (React) and backend (Django) running as a single web service.

## Files Created/Modified for Deployment

### New Files:
- `render.yaml` - Render configuration file
- `build.sh` - Build script for local testing
- `package.json` - Root-level package.json for Node.js configuration
- `DEPLOYMENT.md` - Step-by-step deployment guide
- `.gitignore` - Git ignore file
- `backend/runtime.txt` - Python version specification

### Modified Files:
- `backend/portfolio_backend/settings.py` - Updated for production deployment
- `backend/portfolio_backend/urls.py` - Added React app serving
- `frontend/package.json` - Removed proxy configuration

## Key Configuration Changes

### 1. Django Settings (`backend/portfolio_backend/settings.py`)
- Added Render domains to `ALLOWED_HOSTS`
- Updated CORS settings for Render
- Modified static files configuration to include React build
- Updated templates directory to include React build

### 2. Django URLs (`backend/portfolio_backend/urls.py`)
- Added route to serve React app for non-API routes
- Configured static file serving

### 3. Frontend Configuration
- Removed proxy configuration (no longer needed)
- API calls already use relative paths (`/api/`)

## Deployment Architecture

```
Render Web Service
├── Build Process:
│   ├── Install Node.js dependencies
│   ├── Build React app
│   ├── Install Python dependencies
│   ├── Create Django migrations
│   ├── Run migrations
│   ├── Setup initial data
│   └── Collect static files
└── Runtime:
    ├── Django serves API at /api/
    ├── Django serves React app at /
    └── Static files served by Django/WhiteNoise
```

## Environment Variables Required

In Render dashboard, set these environment variables:

- `SECRET_KEY`: Generate a secure Django secret key
- `DEBUG`: Set to `false`
- `ALLOWED_HOSTS`: Set to `.onrender.com`

## API Endpoints

After deployment, your API will be available at:
- `https://your-app-name.onrender.com/api/`

## Frontend

Your React app will be served at:
- `https://your-app-name.onrender.com/`

## Database

- Uses SQLite (suitable for small applications)
- Initial data is populated via `setup_data.py`
- Database file is created during deployment

## Static Files

- React build files are collected into Django's static files
- Served by WhiteNoise middleware
- No separate static file hosting needed

## Local Development

You can still develop locally with separate frontend/backend:

```bash
# Backend
cd backend
python manage.py runserver

# Frontend (in another terminal)
cd frontend
npm start
```

## Troubleshooting

1. **Build fails**: Check Node.js and Python versions in render.yaml
2. **Static files not loading**: Verify STATICFILES_DIRS configuration
3. **API calls failing**: Check CORS settings and API routes
4. **Database issues**: Ensure migrations run successfully

## Next Steps

1. Push your code to a Git repository
2. Connect the repository to Render
3. Configure environment variables
4. Deploy!

The application will automatically build and deploy both frontend and backend together.