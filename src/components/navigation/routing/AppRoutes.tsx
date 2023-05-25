import { AppShell } from "components/AppShell";
import { IAppRoute } from "components/models";
import { Login } from "pages/auth/Login";
import { Register } from "pages/auth/Register";
import { Home } from "pages/home/Home";
import { Welcome } from "pages/Welcome";

export const AppRoutes = (loggedIn: boolean): IAppRoute[] =>
{
  return [
    {
      path: '/',
      element: <AppShell />,
      children: [
        {
          index: true,
          redirect: loggedIn ? '/home' : '/welcome',
          hide: true
        },
        {
          name: 'welcome',
          path: 'welcome',
          element: <Welcome />,
          preventLoggedIn: true
        },
        {
          name: 'signup',
          path: 'signup',
          element: <Register />,
          preventLoggedIn: true
        },
        {
          name: 'home',
          path: 'home',
          element: <Home />,
          loginRequired: true
        }
      ]
    },
    {
      path: '*',
      redirect: '/',
      hide: true
    }
  ];
};