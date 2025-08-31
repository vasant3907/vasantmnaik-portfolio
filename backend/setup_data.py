#!/usr/bin/env python
"""
Django management script to populate the database with initial portfolio data.
Run this after creating and running migrations.
"""

import os
import sys
import django
from datetime import date

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from portfolio.models import Skill, Project, Experience, PersonalInfo

def create_skills():
    """Create initial skills data"""
    skills_data = [
        # Programming & Frameworks
        {'name': 'Python', 'category': 'programming', 'icon': 'fab fa-python', 'order': 1},
        {'name': 'Django', 'category': 'programming', 'icon': 'fab fa-python', 'order': 2},
        {'name': 'Django REST Framework', 'category': 'programming', 'icon': 'fas fa-code', 'order': 3},
        {'name': 'React.js', 'category': 'programming', 'icon': 'fab fa-react', 'order': 4},
        {'name': 'HTML', 'category': 'programming', 'icon': 'fab fa-html5', 'order': 5},
        {'name': 'CSS', 'category': 'programming', 'icon': 'fab fa-css3-alt', 'order': 6},
        
        # Databases
        {'name': 'MySQL', 'category': 'database', 'icon': 'fas fa-database', 'order': 1},
        {'name': 'SQLite', 'category': 'database', 'icon': 'fas fa-database', 'order': 2},
        
        # Core Concepts
        {'name': 'RESTful APIs', 'category': 'concepts', 'icon': 'fas fa-cogs', 'order': 1},
        {'name': 'ORM', 'category': 'concepts', 'icon': 'fas fa-cogs', 'order': 2},
        {'name': 'MVT Architecture', 'category': 'concepts', 'icon': 'fas fa-cogs', 'order': 3},
        {'name': 'Authentication', 'category': 'concepts', 'icon': 'fas fa-cogs', 'order': 4},
        {'name': 'Computer Networks', 'category': 'concepts', 'icon': 'fas fa-cogs', 'order': 5},
        {'name': 'Software Engineering', 'category': 'concepts', 'icon': 'fas fa-cogs', 'order': 6},
        
        # Tools
        {'name': 'Git', 'category': 'tools', 'icon': 'fab fa-git-alt', 'order': 1},
        {'name': 'Postman', 'category': 'tools', 'icon': 'fas fa-tools', 'order': 2},
        {'name': 'MySQL Workbench', 'category': 'tools', 'icon': 'fas fa-tools', 'order': 3},
        {'name': 'Docker', 'category': 'tools', 'icon': 'fab fa-docker', 'order': 4},
        {'name': 'CI/CD', 'category': 'tools', 'icon': 'fas fa-tools', 'order': 5},
        
        # Soft Skills
        {'name': 'Problem Solving', 'category': 'soft_skills', 'icon': 'fas fa-users', 'order': 1},
        {'name': 'Time Management', 'category': 'soft_skills', 'icon': 'fas fa-users', 'order': 2},
        {'name': 'Critical Thinking', 'category': 'soft_skills', 'icon': 'fas fa-users', 'order': 3},
        {'name': 'Debugging', 'category': 'soft_skills', 'icon': 'fas fa-users', 'order': 4},
        {'name': 'Teamwork', 'category': 'soft_skills', 'icon': 'fas fa-users', 'order': 5},
        {'name': 'Communication', 'category': 'soft_skills', 'icon': 'fas fa-users', 'order': 6},
    ]
    
    for skill_data in skills_data:
        Skill.objects.get_or_create(
            name=skill_data['name'],
            defaults=skill_data
        )
    
    print(f"Created {len(skills_data)} skills")

def create_projects():
    """Create initial projects data"""
    projects_data = [
        {
            'title': 'Neel – The Dairy Product (React, Django)',
            'description': 'Built a full-stack e-commerce platform for dairy product shopping with cart system, order tracking, automated stock updates, secure payments, and offline access to past orders.',
            'github_url': 'https://github.com/vasant3907/neel-dairy',
            'live_url': 'https://neel-dairy.vercel.app',
            'featured': True,
            'order': 1
        },
        {
            'title': 'Neel – Dairy Product (Python, Django)',
            'description': 'Developed a web-based dairy product management system with product browsing, search, detailed view, customer reviews, ratings, cart & checkout system, and management-friendly admin panel.',
            'github_url': 'https://github.com/vasant3907/neel-django',
            'live_url': 'https://neel-django.herokuapp.com',
            'featured': True,
            'order': 2
        }
    ]
    
    for project_data in projects_data:
        project, created = Project.objects.get_or_create(
            title=project_data['title'],
            defaults=project_data
        )
        
        # Add technologies to projects
        if created:
            if 'React' in project_data['title']:
                project.technologies.add(Skill.objects.get(name='React.js'))
                project.technologies.add(Skill.objects.get(name='Django'))
            else:
                project.technologies.add(Skill.objects.get(name='Python'))
                project.technologies.add(Skill.objects.get(name='Django'))
    
    print(f"Created {len(projects_data)} projects")

def create_experience():
    """Create initial experience data"""
    experience_data = [
        {
            'title': 'Full Stack Developer Intern',
            'company': 'Apprikart Digital Solutions Pvt Ltd',
            'description': 'Developed HustleBot, a campaign automation tool (Email, SMS, WhatsApp) using React.js & Django APIs. Built a Project Management Tool with Next.js and Redmine APIs for task assignment & tracking. Collaborated in a team using GitHub for branching, code reviews, and deployment.',
            'start_date': date(2023, 6, 1),
            'end_date': date(2023, 12, 31),
            'current': False,
            'experience_type': 'internship',
            'order': 1
        },
        {
            'title': 'Master of Computer Applications (MCA)',
            'company': 'PES University, Bengaluru',
            'description': '2023 – 2025',
            'start_date': date(2023, 8, 1),
            'end_date': date(2025, 5, 31),
            'current': True,
            'experience_type': 'education',
            'order': 2
        },
        {
            'title': 'Bachelor of Computer Applications (BCA)',
            'company': 'JSS SMI UG & PG, Dharwad',
            'description': '2020 – 2023',
            'start_date': date(2020, 8, 1),
            'end_date': date(2023, 5, 31),
            'current': False,
            'experience_type': 'education',
            'order': 3
        }
    ]
    
    for exp_data in experience_data:
        experience, created = Experience.objects.get_or_create(
            title=exp_data['title'],
            company=exp_data['company'],
            defaults=exp_data
        )
        
        # Add technologies to work experience
        if created and exp_data['experience_type'] == 'internship':
            experience.technologies.add(Skill.objects.get(name='React.js'))
            experience.technologies.add(Skill.objects.get(name='Django'))
            experience.technologies.add(Skill.objects.get(name='Git'))
    
    print(f"Created {len(experience_data)} experiences")

def create_personal_info():
    """Create initial personal info data"""
    personal_info_data = {
        'name': 'Vasant M Naik',
        'title': 'Full Stack Developer',
        'description': 'Passionate about creating end-to-end solutions with Python, Django, and React.js. Building scalable applications that solve real-world problems.',
        'email': 'vasantnaik91369@gmail.com',
        'linkedin_url': 'https://linkedin.com/in/vasant-naik-23738b297',
        'github_url': 'https://github.com/vasant3907',
        'leetcode_url': 'https://leetcode.com/u/vasanthnaik',
        'about_text': 'Hi, I\'m Vasant M Naik, a passionate Full Stack Developer specializing in Python, Django, and React.js. I love creating end-to-end solutions — from powerful backends to engaging user interfaces — with a focus on clean, scalable, and efficient code. I have hands-on experience building e-commerce platforms, campaign tools, and project management systems, and I enjoy solving real-world problems with technology. My goal is to keep learning, improve continuously, and contribute to impactful projects.',
        'years_experience': 3,
        'projects_completed': 10,
        'technologies_known': 5
    }
    
    PersonalInfo.objects.get_or_create(
        id=1,
        defaults=personal_info_data
    )
    
    print("Created personal info")

def main():
    """Main function to run all setup functions"""
    print("Setting up portfolio data...")
    
    try:
        create_skills()
        create_projects()
        create_experience()
        create_personal_info()
        
        print("\n✅ Portfolio setup completed successfully!")
        print("\nYou can now:")
        print("1. Access Django admin at http://localhost:8000/admin/")
        print("2. Start the React frontend with 'npm start'")
        print("3. View your portfolio at http://localhost:3000")
        
    except Exception as e:
        print(f"\n❌ Error during setup: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()
