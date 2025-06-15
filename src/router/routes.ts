import { RouteObject } from 'react-router-dom';
import { signupRoutes } from './signup';

export const appRoutes: RouteObject[] = [
  ...signupRoutes,
];
