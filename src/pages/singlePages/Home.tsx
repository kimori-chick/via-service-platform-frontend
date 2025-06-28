import BaseLayout from '../../components/layouts/BaseLayout';
import { Footer } from '../../components/common/Footer';
import { Header } from '../../components/common/Header';
import { LeftMenu } from '../../components/common/LeftMenu';
import '../../styles/global.css';

const Home = () => {
  return (
    <BaseLayout title="ホーム | My App" description="これはホームページの説明です。">
      <Header />
      <main className="home_wrapper">
        <LeftMenu />
      </main>
      <Footer />
    </BaseLayout>
  );
};

export default Home;
