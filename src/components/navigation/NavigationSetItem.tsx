import { IAppRoute } from 'components/models';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'components/utils';
import { useTranslation } from 'react-i18next';

interface NavigationSetItemProps
{
    route: IAppRoute;
    routeChildren?: IAppRoute[];
    activeRoutes: IAppRoute[];
    isChild?: boolean;
}

export const NavigationSetItem: FC<NavigationSetItemProps> = props =>
{
    const { route = null, routeChildren = [], activeRoutes = [] } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const selectRoute = () =>
    {
        if(!routeChildren || !routeChildren.length)
        {
            navigate(route.navigateTo ? route.navigateTo : route.fullPath);
            
            return;
        }
    }

    if(!route) return null;

    const isActive = (activeRoutes?.indexOf(route) > -1);

    return (
    <div
        className={ classNames('px-4 py-2 hover:bg-white hover:text-violet-500 rounded-md transition-all cursor-pointer', isActive && 'bg-white text-violet-500') }
        onClick={ event => selectRoute() }>
        <div className="flex items-center gap-2">{ t(`navigation.${route.name}`) }</div>
    </div>
  )
}