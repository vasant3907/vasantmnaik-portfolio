exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Your portfolio skills data
  const skillsData = {
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

  return {
    statusCode: 200,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(skillsData)
  };
};