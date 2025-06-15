import { useRoutes } from 'react-router-dom';
import { appRoutes } from './router/routes';
import Maintenance from './pages/common/Maintenance';

// メンテナンス中はこの値を true に変更する
const isMaintenance = false;

const App = () => {
  const routing = useRoutes(appRoutes);

  if (isMaintenance) {
    return <Maintenance />;
  }

  return routing;
};

export default App;
