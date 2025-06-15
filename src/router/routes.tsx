import { RouteObject } from 'react-router-dom';
import { signupRoutes } from './signup';
import NotFound from '../pages/common/NotFound';

export const appRoutes: RouteObject[] = [
  ...signupRoutes,

  {
    path: '*',
    element: <NotFound />,
  },
];
