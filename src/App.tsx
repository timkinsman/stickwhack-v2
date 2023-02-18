import { Box, Layout } from 'petald';
import { Header } from './components/Header';
import SwitchRoutes from './routes/SwitchRoutes';

const App = () => (
  <Layout>
    <Layout.Header style={{ position: 'sticky', top: 0, padding: 0 }}>
      <Header />
    </Layout.Header>

    <Layout.Content>
      {/* <Box onResize={undefined} onResizeCapture={undefined} style={{ padding: '20px' }}> */}
      <SwitchRoutes />
      {/* </Box> */}
    </Layout.Content>

    <Layout.Footer>{/* Footer */}</Layout.Footer>
  </Layout>
);

export default App;
