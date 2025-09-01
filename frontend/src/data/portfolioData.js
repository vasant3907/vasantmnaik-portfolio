// Portfolio data - replaces API calls for GitHub Pages deployment

export const skillsData = {
  "programming": [
    {
      "name": "Python",
      "category": "programming",
      "icon": "fab fa-python",
      "order": 1
    },
    {
      "name": "Django",
      "category": "programming",
      "icon": "fab fa-python",
      "order": 2
    },
    {
      "name": "Django REST Framework",
      "category": "programming",
      "icon": "fas fa-code",
      "order": 3
    },
    {
      "name": "React.js",
      "category": "programming",
      "icon": "fab fa-react",
      "order": 4
    },
    {
      "name": "HTML",
      "category": "programming",
      "icon": "fab fa-html5",
      "order": 5
    },
    {
      "name": "CSS",
      "category": "programming",
      "icon": "fab fa-css3-alt",
      "order": 6
    }
  ],
  "database": [
    {
      "name": "MySQL",
      "category": "database",
      "icon": "fas fa-database",
      "order": 1
    },
    {
      "name": "SQLite",
      "category": "database",
      "icon": "fas fa-database",
      "order": 2
    }
  ],
  "concepts": [
    {
      "name": "RESTful APIs",
      "category": "concepts",
      "icon": "fas fa-cogs",
      "order": 1
    },
    {
      "name": "ORM",
      "category": "concepts",
      "icon": "fas fa-cogs",
      "order": 2
    },
    {
      "name": "MVT Architecture",
      "category": "concepts",
      "icon": "fas fa-cogs",
      "order": 3
    },
    {
      "name": "Authentication",
      "category": "concepts",
      "icon": "fas fa-cogs",
      "order": 4
    },
    {
      "name": "Computer Networks",
      "category": "concepts",
      "icon": "fas fa-cogs",
      "order": 5
    },
    {
      "name": "Software Engineering",
      "category": "concepts",
      "icon": "fas fa-cogs",
      "order": 6
    }
  ],
  "tools": [
    {
      "name": "Git",
      "category": "tools",
      "icon": "fab fa-git-alt",
      "order": 1
    },
    {
      "name": "Postman",
      "category": "tools",
      "icon": "fas fa-tools",
      "order": 2
    },
    {
      "name": "MySQL Workbench",
      "category": "tools",
      "icon": "fas fa-tools",
      "order": 3
    },
    {
      "name": "Docker",
      "category": "tools",
      "icon": "fab fa-docker",
      "order": 4
    },
    {
      "name": "CI/CD",
      "category": "tools",
      "icon": "fas fa-tools",
      "order": 5
    }
  ],
  "soft_skills": [
    {
      "name": "Problem Solving",
      "category": "soft_skills",
      "icon": "fas fa-users",
      "order": 1
    },
    {
      "name": "Time Management",
      "category": "soft_skills",
      "icon": "fas fa-users",
      "order": 2
    },
    {
      "name": "Critical Thinking",
      "category": "soft_skills",
      "icon": "fas fa-users",
      "order": 3
    },
    {
      "name": "Debugging",
      "category": "soft_skills",
      "icon": "fas fa-users",
      "order": 4
    },
    {
      "name": "Teamwork",
      "category": "soft_skills",
      "icon": "fas fa-users",
      "order": 5
    },
    {
      "name": "Communication",
      "category": "soft_skills",
      "icon": "fas fa-users",
      "order": 6
    }
  ]
};

export const projectsData = [
  {
    "id": 1,
    "title": "Neel – The Dairy Product (React, Django)",
    "description": "Built a full-stack e-commerce platform for dairy product shopping with cart system, order tracking, automated stock updates, secure payments, and offline access to past orders.",
    "github_url": "https://github.com/vasant3907/neel-dairy",
    "live_url": "https://neel-dairy.vercel.app",
    "featured": true,
    "order": 1,
    "technologies": ["React.js", "Django", "Django REST Framework"]
  },
  {
    "id": 2,
    "title": "Neel – Dairy Product (Python, Django)",
    "description": "Developed a web-based dairy product management system with product browsing, search, detailed view, customer reviews, ratings, cart & checkout system, and management-friendly admin panel.",
    "github_url": "https://github.com/vasant3907/neel-django",
    "live_url": "https://neel-django.herokuapp.com",
    "featured": true,
    "order": 2,
    "technologies": ["Python", "Django", "MySQL"]
  }
];

export const experiencesData = [
  {
    "id": 1,
    "title": "Full Stack Developer Intern",
    "company": "Apprikart Digital Solutions Pvt Ltd",
    "description": "Developed HustleBot, a campaign automation tool (Email, SMS, WhatsApp) using React.js & Django APIs. Built a Project Management Tool with Next.js and Redmine APIs for task assignment & tracking. Collaborated in a team using GitHub for branching, code reviews, and deployment.",
    "start_date": "2023-06-01",
    "end_date": "2023-12-31",
    "current": false,
    "experience_type": "internship",
    "order": 1,
    "technologies": ["React.js", "Django", "Git"]
  },
  {
    "id": 2,
    "title": "Master of Computer Applications (MCA)",
    "company": "PES University, Bengaluru",
    "description": "2023 – 2025",
    "start_date": "2023-08-01",
    "end_date": "2025-05-31",
    "current": true,
    "experience_type": "education",
    "order": 2,
    "technologies": []
  },
  {
    "id": 3,
    "title": "Bachelor of Computer Applications (BCA)",
    "company": "JSS SMI UG & PG, Dharwad",
    "description": "2020 – 2023",
    "start_date": "2020-08-01",
    "end_date": "2023-05-31",
    "current": false,
    "experience_type": "education",
    "order": 3,
    "technologies": []
  }
];

export const personalInfoData = {
  "id": 1,
  "name": "Vasant M Naik",
  "title": "Full Stack Developer",
  "description": "Passionate about creating end-to-end solutions with Python, Django, and React.js. Building scalable applications that solve real-world problems.",
  "email": "vasantnaik91369@gmail.com",
  "linkedin_url": "https://linkedin.com/in/vasant-naik-23738b297",
  "github_url": "https://github.com/vasant3907",
  "leetcode_url": "https://leetcode.com/u/vasanthnaik",
  "about_text": "Hi, I'm Vasant M Naik, a passionate Full Stack Developer specializing in Python, Django, and React.js. I love creating end-to-end solutions — from powerful backends to engaging user interfaces — with a focus on clean, scalable, and efficient code. I have hands-on experience building e-commerce platforms, campaign tools, and project management systems, and I enjoy solving real-world problems with technology. My goal is to keep learning, improve continuously, and contribute to impactful projects.",
  "years_experience": 3,
  "projects_completed": 10,
  "technologies_known": 5
};