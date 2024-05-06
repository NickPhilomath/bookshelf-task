import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Home from '@/pages/Home';

const routes = {
  default: [
    // authorization
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/logout',
      element: <>logout</>,
    },
    {
      path: '/register',
      element: <Register />,
    },
    // app pages
    {
      path: '/',
      element: <Home />,
    },
  ],
};

export default routes;
