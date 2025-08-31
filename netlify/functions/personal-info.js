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

  // Your portfolio personal info data
  const personalInfoData = {
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

  return {
    statusCode: 200,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(personalInfoData)
  };
};