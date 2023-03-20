import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './components/layouts/dashboard';
import DashboardAppPage from './pages/Dashboard.page';

const Router = () => {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },

      ],
    },

    {
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '*', element: <Navigate to="/" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return routes;
}
export default Router
