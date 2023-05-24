import { FC } from "react";
import { useAppRoutes } from "components/routing/useAppRoutes";
import { NavigationSet } from "./NavigationSet";

export const AppNavigation: FC<{}> = props =>
{
  const { routes = [], activeRoutes = [] } = useAppRoutes();

  if(!routes || !routes.length) return null;

  return (
    <div className="md:rounded-b-md p-2 sticky top-0 z-50 bg-violet-500 shadow-sm font-medium text-white flex flex-col md:flex-row items-center md:justify-between">
      <div className="px-4 py-2 text-white text-xl">Famewood</div>
      <div className="flex gap-2 overflow-y-auto w-full md:w-auto">
        <NavigationSet route={ routes[0] } activeRoutes={ activeRoutes } />
      </div>
    </div>
  );
}