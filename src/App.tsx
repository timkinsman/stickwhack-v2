import { Layout } from 'petald';
import { Header } from './components/Header';
import SwitchRoutes from './routes/SwitchRoutes';

const App = () => (
  <Layout>
    <Layout.Header style={{ position: 'sticky', top: 0, padding: 0 }}>
      <Header />
    </Layout.Header>

    <Layout.Content>
      <SwitchRoutes />
    </Layout.Content>

    <Layout.Footer>{/* Footer */}</Layout.Footer>
  </Layout>
);

export default App;
