#!/usr/bin/env python
"""
Deployment script for Django portfolio backend.
This script helps prepare the Django app for production deployment.
"""

import os
import sys
import django
from pathlib import Path

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from django.core.management import call_command
from django.conf import settings

def collect_static():
    """Collect static files for production"""
    print("Collecting static files...")
    try:
        call_command('collectstatic', '--noinput', '--clear')
        print("✅ Static files collected successfully!")
    except Exception as e:
        print(f"❌ Error collecting static files: {e}")
        return False
    return True

def run_migrations():
    """Run database migrations"""
    print("Running database migrations...")
    try:
        call_command('makemigrations')
        call_command('migrate')
        print("✅ Migrations completed successfully!")
    except Exception as e:
        print(f"❌ Error running migrations: {e}")
        return False
    return True

def check_production_settings():
    """Check if production settings are properly configured"""
    print("Checking production settings...")
    
    if settings.DEBUG:
        print("⚠️  WARNING: DEBUG is still True. Set DEBUG = False for production.")
        return False
    
    if 'django-insecure' in settings.SECRET_KEY:
        print("⚠️  WARNING: Using default SECRET_KEY. Set a proper secret key for production.")
        return False
    
    print("✅ Production settings look good!")
    return True

def create_requirements_prod():
    """Create production requirements file"""
    print("Creating production requirements...")
    
    prod_requirements = [
        'Django==4.2.7',
        'djangorestframework==3.14.0',
        'django-cors-headers==4.3.1',
        'Pillow==10.1.0',
        'gunicorn==21.2.0',
        'whitenoise==6.6.0',
        'psycopg2-binary==2.9.7',  # For PostgreSQL
        'dj-database-url==2.1.0',   # For database URL parsing
    ]
    
    with open('requirements-prod.txt', 'w') as f:
        for req in prod_requirements:
            f.write(f'{req}\n')
    
    print("✅ Production requirements created: requirements-prod.txt")
    return True

def main():
    """Main deployment function"""
    print("🚀 Starting Django deployment preparation...")
    print("=" * 50)
    
    success = True
    
    # Run migrations
    if not run_migrations():
        success = False
    
    # Collect static files
    if not collect_static():
        success = False
    
    # Check production settings
    if not check_production_settings():
        success = False
    
    # Create production requirements
    if not create_requirements_prod():
        success = False
    
    print("=" * 50)
    if success:
        print("✅ Deployment preparation completed successfully!")
        print("\nNext steps:")
        print("1. Set DEBUG = False in settings.py")
        print("2. Set a proper SECRET_KEY")
        print("3. Configure production database")
        print("4. Set up environment variables")
        print("5. Deploy to your hosting service")
    else:
        print("❌ Deployment preparation failed!")
        sys.exit(1)

if __name__ == '__main__':
    main()
