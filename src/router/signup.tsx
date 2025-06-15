import SignupInput from '../pages/signup/Input.tsx';
import SignupConfirm from '../pages/signup/Confirm.tsx';
import SignupComplete from '../pages/signup/Complete.tsx';

export const signupRoutes = [
  {
    path: '/signup/input',
    element: <SignupInput />,
  },
  {
    path: '/signup/confirm',
    element: <SignupConfirm />,
  },
  {
    path: '/signup/complete',
    element: <SignupComplete />,
  },
];
