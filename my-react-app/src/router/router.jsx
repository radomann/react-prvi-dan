import { AppLayout } from '../layout';
import { AboutPage } from '../pages/about';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { UsersPage } from '../pages/users';
import { ProtectedRoute, PublicRoute } from './Routes';

export const appRoutes = [
  {
    path: '',
    element: <ProtectedRoute element={<AppLayout />} />,
    children: [
      {
        index: true,
        element: <HomePage />,
        exact: true,
      },
      {
        path: 'about',
        children: [
          {
            index: true,
            element: <AboutPage />,
            exact: true,
          },
          { path: 'team', element: <h1>Team page</h1> },
        ],
      },
      { path: 'users/:id', element: <UsersPage /> },
      { path: '*', element: <h1>404 Not found</h1> },
    ],
  },
  { path: 'login', element: <PublicRoute element={<LoginPage />} /> },
];