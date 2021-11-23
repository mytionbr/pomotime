import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/DashboardApp';
import TasksBoard from './pages/TasksBoard';


export default function Router() {
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
              { element: <Navigate to="/dashboard/app" replace /> },
              { path: 'app', element: <DashboardApp /> },
              { path: 'tasks', element: <TasksBoard /> },
            ]
          },
          {
            path: '/',
            element: <DashboardLayout />,
            children:[
                {path: '/', element: <Navigate to="/" />}
            ]  
          }
        ]);
}
