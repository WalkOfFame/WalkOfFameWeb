import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { IAppRoute } from 'components/models';
import { useSession } from 'components/hooks/useSession';
import { useAPI } from 'components/hooks';
import { useAppRoutes } from './useAppRoutes';

export const AppRouter: FC<{}> = props =>
{
    const { routes = [] } = useAppRoutes();
    const { user = null } = useSession();
    const { sessionToken = null } = useAPI();

    if(sessionToken && sessionToken.length)
    {
        if(!user) return null;
    }

    const getNavigationElements = (routes: IAppRoute[], parent = null) =>
    {
        return routes.map(route =>
        {
            return (
                <Route
                    key={ (parent ? `${ parent.path }-${ route.path }` : route.path) }
                    path={ route.path }
                    index={ route.index as any }
                    element={ (route.redirect ? <Navigate
                        to={ route.redirect } /> : route.element) }>
                    { route.children && route.children.length && getNavigationElements(route.children, route) }
                </Route>
            );
        });
    }

    return (
        <BrowserRouter>
            <Routes>
                { (routes && routes.length > 0) && getNavigationElements(routes) }
            </Routes>
        </BrowserRouter>
    );
}