import { AppShell } from "components/AppShell";
import { IAppRoute } from "components/models";
import { Login } from "pages/Login";
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
          redirect: loggedIn ? '/dashboard' : '/welcome',
          hide: true
        },
        {
          name: 'Welcome',
          path: 'welcome',
          element: <Welcome />,
          preventLoggedIn: true
        },
        {
          name: 'Login',
          path: 'login',
          element: <Login />,
          preventLoggedIn: true
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