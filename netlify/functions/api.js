const { spawn } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  // Set up environment for Django
  process.env.DJANGO_SETTINGS_MODULE = 'portfolio_backend.settings';
  process.env.PYTHONPATH = path.join(__dirname, '../backend');
  
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Run Django management command to handle the request
    const pythonProcess = spawn('python', [
      path.join(__dirname, '../backend/manage.py'),
      'runserver',
      '--noreload',
      '--nothreading'
    ], {
      cwd: path.join(__dirname, '../backend'),
      env: { ...process.env, PORT: '8000' }
    });

    // For now, return a simple response
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Django API is running',
        endpoints: {
          skills: '/api/skills/by_category/',
          projects: '/api/projects/',
          experience: '/api/experiences/',
          contact: '/api/contact/',
          personal_info: '/api/personal-info/'
        }
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};