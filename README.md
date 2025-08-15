# FitLife Fitness Center - React Frontend

A React frontend for a fitness center website that displays classes and trainers. Built for HTTP5222 Assignment 2.

## Features

- Home page with hero section and features
- Classes page showing available fitness classes
- Trainers page with trainer profiles and specialties
- Contact page with contact form
- Responsive design for mobile and desktop
- Connects to Express backend API (optional)

## Pages

1. **Home**: Welcome page with call-to-action buttons
2. **Classes**: Shows all fitness classes with schedules and trainers
3. **Trainers**: Displays trainer profiles with specialties and contact info
4. **Contact**: Contact form and fitness center information

## Technology Used

- React 19.1.1
- React Router for navigation
- Axios for API calls
- CSS for styling
- Express backend (optional)

## Setup

1. Make sure you have Node.js installed
2. Clone or download the project
3. Open terminal in the project folder
4. Run `npm install` to install dependencies
5. Run `npm start` to start the development server
6. Open http://localhost:3000 in your browser

## API Setup (Optional)

If you want to use live data from a backend:

1. Start your Express backend server on port 3000
2. Make sure your backend has these API endpoints:
   - GET /api/classes
   - GET /api/trainers
3. The React app will automatically use live data

If the backend is not available, the app will use sample data.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation bar
│   ├── Home.js            # Home page
│   ├── Classes.js         # Classes page
│   ├── Trainers.js        # Trainers page
│   ├── Contact.js         # Contact page
│   ├── Footer.js          # Footer
│   └── *.css              # Styles for each component
├── App.js                 # Main app component
├── App.css               # Global styles
└── index.js              # Entry point
```

## Deployment

To deploy to Vercel:

1. Install Vercel CLI: `npm install -g vercel`
2. Build the project: `npm run build`
3. Deploy: `vercel`

## Assignment Requirements

This project meets all HTTP5222 Assignment 2 requirements:
- Built with React
- Connects to backend API (Express)
- Professional design and styling
- Data from two collections (Classes & Trainers)
- CORS configured
- Ready for deployment

## Notes

- The app works with sample data if no backend is available
- All styling is done with CSS
- Responsive design works on mobile and desktop
- Error handling included for API failures

## Contact

For questions about this project, contact the developer.
