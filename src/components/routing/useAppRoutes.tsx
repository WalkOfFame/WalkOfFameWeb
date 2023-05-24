import { useCallback, useMemo, useState } from 'react';
import { matchRoutes } from 'react-router-dom';
import { useBetween } from 'use-between';
import { IAppRoute } from 'components/models';
import { AppRoutes } from './AppRoutes';
import { useSession } from 'components/hooks/useSession';

let ROUTE_UNIQUE_ID: number = -1;

const useAppRoutesHook = () =>
{
    const [ routeMap, setRouteMap ] = useState<{ path: string, route: IAppRoute }[]>(null);
    const [ activePath, setActivePath ] = useState<string>('');
    const { user = null } = useSession();

    const routes = useMemo(() =>
    {
        const processRoutes = (routes: IAppRoute[], parent: IAppRoute = null, allRoutes: { path: string, route: IAppRoute }[] = []) =>
        {
            const addToRouteMap = (route: IAppRoute, pathNames: string[] = []) =>
            {
                const doRoute = (route: IAppRoute) =>
                {
                    pathNames.push(route.path);

                    if(route.parent) doRoute(route.parent);
                }

                doRoute(route);

                pathNames.reverse();

                let pathName = pathNames.join('/');

                if(pathName.startsWith('//')) pathName = pathName.slice(1);

                route.fullPath = pathName;

                allRoutes.push({ path: route.fullPath, route });
            }
    
            const allowedRoutes: IAppRoute[] = [];

            routes.forEach(route =>
            {
                route.uniqueId = ROUTE_UNIQUE_ID++;
                
                if(route.preventLoggedIn && user) return;

                let mustLogin = (route.loginRequired || (route.permission && route.permission.length));

                if(mustLogin && !user) return;

                //if((route.permission && route.permission.length) && !hasPermissionName(route.permission)) return;

                if(parent) route.parent = parent;

                if(route.children && route.children.length)
                {
                    route.children = processRoutes(route.children, route, allRoutes);

                    if(!route.children || !route.children.length) return;
                }
                else
                {
                    route.children = [];
                }

                allowedRoutes.push(route);

                if(!route.redirect) addToRouteMap(route);
            });

            setRouteMap(allRoutes);

            return allowedRoutes;
        }

        return processRoutes(AppRoutes(!!user), null)
    }, [ user ]);

    const getRouteForPath = useCallback((path: string) =>
    {
        const matches = matchRoutes(routeMap, path);
        
        if(!matches || !matches.length) return null;

        const match = matches[0];

        return routeMap.find(route => (route.path === match?.route?.path))?.route ?? null;
    }, [ routeMap ]);

    const activeRoutes = useMemo(() =>
    {
        if(!activePath) return [];

        const route = getRouteForPath(activePath);

        if(!route) return [];
        
        const pages: IAppRoute[] = [];

        const addPage = (route: IAppRoute) =>
        {
            pages.push(route);

            if(route.parent && route.parent.parent) addPage(route.parent);
        }

        addPage(route);

        pages.reverse();

        return pages;
    }, [ activePath, getRouteForPath ]);

    return { routes, activePath, setActivePath, getRouteForPath, activeRoutes };
}

export const useAppRoutes = () => useBetween(useAppRoutesHook);