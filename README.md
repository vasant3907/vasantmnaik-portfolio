# Vasant M Naik - Portfolio Website

A modern, responsive portfolio website built with React.js frontend and Django backend.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first approach with responsive design
- **Interactive**: Smooth scrolling, hover effects, and animations
- **Full-Stack**: Django REST API backend with React frontend
- **Dynamic Content**: Content managed through Django admin panel
- **Contact Form**: Functional contact form with backend storage

## 🛠️ Tech Stack

### Frontend
- React.js 18
- Framer Motion (animations)
- React Icons
- CSS3 with modern features
- Responsive design

### Backend
- Django 4.2
- Django REST Framework
- SQLite database
- CORS support
- Admin panel

## 📁 Project Structure

```
portfolio/
├── backend/                 # Django backend
│   ├── portfolio_backend/   # Django project settings
│   ├── portfolio/          # Portfolio app
│   ├── manage.py
│   └── requirements.txt
├── frontend/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start Django server**
   ```bash
   python manage.py runserver
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## 📊 API Endpoints

### Skills
- `GET /api/skills/` - List all skills
- `GET /api/skills/by_category/` - Skills grouped by category

### Projects
- `GET /api/projects/` - List all projects
- `GET /api/projects/featured/` - Featured projects

### Experience
- `GET /api/experiences/` - List all experiences
- `GET /api/experiences/by_type/?type=work` - Filter by type

### Contact
- `POST /api/contact/` - Send contact message

### Profile
- `GET /api/profile/profile/` - Get personal information

## 🎨 Customization

### Adding Content

1. **Access Django Admin**: Go to `http://localhost:8000/admin/`
2. **Login with superuser credentials**
3. **Add/Edit content** in the respective sections:
   - Skills
   - Projects
   - Experience
   - Personal Info

### Styling

- **Colors**: Update CSS variables in component files
- **Layout**: Modify CSS Grid/Flexbox properties
- **Animations**: Adjust Framer Motion parameters

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Backend Deployment
1. Set `DEBUG = False` in settings
2. Configure production database
3. Set up static file serving
4. Deploy to your preferred hosting service

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service

## 🔧 Development

### Running Tests
```bash
# Backend
python manage.py test

# Frontend
npm test
```

### Code Formatting
```bash
# Frontend
npm run format
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: vasantnaik91369@gmail.com
- **LinkedIn**: [Vasant Naik](https://linkedin.com/in/vasant-naik-23738b297)
- **GitHub**: [vasant3907](https://github.com/vasant3907)

---

**Built with ❤️ by Vasant M Naik**
