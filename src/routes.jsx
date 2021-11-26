import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/TimerApp';
import TasksBoard from './pages/TasksBoard';
import TimerApp from './pages/TimerApp';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import Profile from './pages/Profile';


export default function Router() {
    return useRoutes([
        {
            path: '/app',
            element: <DashboardLayout />,
            children: [
              { element: <Navigate to="/app/pomodoro" replace /> },
              { path: 'pomodoro', element: <TimerApp /> },
              { path: 'tasks', element: <TasksBoard /> },
              { path: 'statistics',element: <Statistics/>},
              { path: 'settings',element:  <Settings /> },
              { path: 'profile',element:  <Profile /> },
            ]
          },
          {
            path: '/',
            element: <Navigate to="/app/pomodoro" />
   
          }
        ]);
}
