import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Home from './components/pages/Home';
import { StudentDetails } from './components/pages/students/StudentDetails';
import Students from './components/pages/students/Students';
import Teachers from './components/pages/teachers/Teachers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace /> // Redirect "/" to "/home"
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'teachers',
        element: <Teachers />
      },
      {
        path: 'students',
        element: <Students />,
      },
      {
        path: 'students/details/:id',
        element: <StudentDetails />
      }
    ]
  }
])