import { AppNavigation } from "components/navigation/AppNavigation";
import { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAppRoutes } from "./navigation/routing/useAppRoutes";
import { useTranslation } from "react-i18next";

export const AppShell: FC<{}> = props =>
{
  const { setActivePath = null } = useAppRoutes();
  const { t } = useTranslation();
  const { pathname = null } = useLocation();

  useEffect(() =>
  {
      setActivePath(pathname);
  }, [ pathname, setActivePath ]);

  return (
    <div className="flex flex-col h-full bg-slate-200 overflow-y-auto">
      <div className="flex h-full w-full">
        <div className="w-full md:w-[1200px] flex flex-col gap-4 md:gap-10 mx-auto">
          <AppNavigation />
          <div className="flex h-full flex-col gap-4 md:gap-10 px-4 md:px-0">
            <Outlet />
          </div>
          <div className="md:rounded-t-md p-3 bg-slate-300 text-slate-500 flex flex-col md:flex-row items-center md:justify-between">
            <div><b>Famewood</b>. { t('footer.rights') }</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
} 