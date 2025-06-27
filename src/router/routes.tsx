import { RouteObject } from 'react-router-dom';
import NotFound from '../pages/common/NotFound';
import { siglePagesRoutes } from './singlePages';
import { signupRoutes } from './signup';

export const appRoutes: RouteObject[] = [
  ...siglePagesRoutes,
  ...signupRoutes,

  {
    path: '*',
    element: <NotFound />,
  },
];
