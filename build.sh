#!/bin/bash

# Exit on any error
set -e

echo "Starting build process..."

# Install Node.js dependencies and build frontend
echo "Building frontend..."
cd frontend
npm install
npm run build
cd ..

# Install Python dependencies
echo "Installing Python dependencies..."
cd backend
pip install -r requirements.txt

# Create and run database migrations
echo "Creating and running database migrations..."
python manage.py makemigrations
python manage.py migrate

# Setup initial data
echo "Setting up initial data..."
python setup_data.py

# Collect static files
echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Build completed successfully!"