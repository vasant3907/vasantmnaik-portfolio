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

  // Your portfolio projects data
  const projectsData = [
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

  return {
    statusCode: 200,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      count: projectsData.length,
      results: projectsData
    })
  };
};