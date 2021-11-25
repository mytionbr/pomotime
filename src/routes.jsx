import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/TimerApp';
import TasksBoard from './pages/TasksBoard';
import TimerApp from './pages/TimerApp';


export default function Router() {
    return useRoutes([
        {
            path: '/app',
            element: <DashboardLayout />,
            children: [
              { element: <Navigate to="/app/pomodoro" replace /> },
              { path: 'pomodoro', element: <TimerApp /> },
              { path: 'tasks', element: <TasksBoard /> },
              { path: 'statistics',element:  <Navigate to="/app/pomodoro"/>},
              { path: 'settings',element:  <Navigate to="/app/pomodoro" /> },
              { path: 'profile',element:  <Navigate to="/app/pomodoro" /> },
            ]
          },
          {
            path: '/',
            element: <Navigate to="/app/pomodoro" />
   
          }
        ]);
}
