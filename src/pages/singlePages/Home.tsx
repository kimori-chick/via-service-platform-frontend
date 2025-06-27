import { Header } from '../../components/common/Header';
import BaseLayout from '../../components/layouts/BaseLayout';

const Home = () => {
  return (
    <BaseLayout title="ホーム | My App" description="これはホームページの説明です。">
      <Header />
      <h1>ホーム</h1>
    </BaseLayout>
  );
};

export default Home;
