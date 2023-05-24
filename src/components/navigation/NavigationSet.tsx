import { IAppRoute } from 'components/models';
import { FC, useCallback, useMemo } from 'react';
import { NavigationSetItem } from './NavigationSetItem';

interface NavigationSetProps
{
    route: IAppRoute;
    activeRoutes: IAppRoute[];
    isChild?: boolean;
}

export const NavigationSet: FC<NavigationSetProps> = props =>
{
    const { route = null, activeRoutes = [], isChild = false } = props;

    const getChildren = useCallback((venusRoute: IAppRoute) => venusRoute?.children?.filter(child => (child && !child.hide)) ?? [], []);

    const children = useMemo(() => getChildren(route) ?? [], [ route, getChildren ]);

    return (
        <>
            { !!children.length && children.map(child =>
                <NavigationSetItem
                    key={ child.uniqueId }
                    route={ child }
                    routeChildren={ getChildren(child) }
                    activeRoutes={ activeRoutes }
                    isChild={ isChild } />) }
        </>
    );
}