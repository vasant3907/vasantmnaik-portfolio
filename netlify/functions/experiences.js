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

  // Your portfolio experience data
  const experiencesData = [
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

  return {
    statusCode: 200,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      count: experiencesData.length,
      results: experiencesData
    })
  };
};