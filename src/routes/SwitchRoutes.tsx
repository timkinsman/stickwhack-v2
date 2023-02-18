import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ScrollToTop } from '../components/ScrollToTop';
import { NotFound } from '../views/NotFound';
import routes from './Routes';

const SwitchRoutes = () => (
  <Router>
    <ScrollToTop>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.main()} />
        ))}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ScrollToTop>
  </Router>
);
export default SwitchRoutes;
