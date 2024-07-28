import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import './index.css';
import Body from './components/Body/Body';
import AboutUs from './components/About-Us/About-Us';
import ContactUs from './components/Contact-Us/Contact-Us';
import ErrorElement from './components/Error/Error';
import RestaurantMenu from './components/Restaurant-Menu/Restaurant-Menu';

const styles = {
  appLayoutContainter: 'app-layout-container',
};

const AppLayout: React.FC = (): Element => {
  return (
    <div className={styles.appLayoutContainter}>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <AboutUs /> },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
