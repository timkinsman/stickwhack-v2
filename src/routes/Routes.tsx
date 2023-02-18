import { Home } from '../views/Home';
import { Work } from '../views/Work';

const routes = [
  {
    path: '/',
    main: () => <Home />,
  },
  {
    path: '/work/:slug',
    main: () => <Work />,
  },
];

export default routes;
