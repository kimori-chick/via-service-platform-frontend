import { useRoutes } from 'react-router-dom';
import { appRoutes } from './router/routes';

const App = () => {
  const routing = useRoutes(appRoutes);
  return routing;
};

export default App;
