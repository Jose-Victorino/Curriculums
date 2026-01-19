# Curriculums Client

A modern React application for managing and viewing educational curriculums. This project allows users to explore mutual courses across different academic programs and view detailed curriculum information.

## Features

- **Dashboard**: View detailed curriculum information with course evaluations
- **Mutual Courses**: Discover courses shared across multiple curriculums
- **Side Navigation**: Easy navigation between different curriculums
- **Responsive Design**: Mobile-friendly interface with responsive navigation
- **Global State Management**: Centralized state using React Context API

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Routing**: React Router DOM 7.6.3
- **Styling**: SASS/SCSS
- **Build Tool**: Vite 6.3.5
- **Package Manager**: npm
- **Code Quality**: ESLint

## Project Structure


src/  
├── components/          # Reusable React components  
│   ├── Dashboard/       # Curriculum dashboard view  
│   ├── MutualCourses/   # Shared courses display  
│   ├── SideNav/         # Navigation sidebar  
│   ├── NotFoundPage/    # 404 error page  
│   └── Util/            # Utility components  
├── context/             # React Context providers  
│   ├── GlobalContext.jsx    # Global state context  
│   └── initialState.js      # Initial state configuration  
├── library/             # Global styles and utilities  
├── assets/              # Images and static files  
└── App.jsx              # Root application component  


## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
# or
npm start
```

The application will be available at `http://localhost:5173` (default Vite port).

## Building

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Key Components

- **App**: Main application component with header and layout
- **SideNav**: Navigation component for accessing different curriculums
- **Dashboard**: Displays detailed curriculum information
- **MutualCourses**: Shows courses that are common across multiple curriculums
- **GlobalContext**: Manages application-wide state and provides course evaluation logic

## Routing

- `/` - Home page (redirects to Mutual Courses)
- `/Mutual-Courses` - View all mutual courses across curriculums
- `/c/:name/*` - View specific curriculum details
- `*` - 404 Not Found page

## Dependencies

- **react**: UI library
- **react-dom**: React DOM rendering
- **react-router-dom**: Client-side routing
- **sass**: CSS preprocessing
- **classnames**: Utility for conditional classnames

## License

This project is private and not licensed for external use.
