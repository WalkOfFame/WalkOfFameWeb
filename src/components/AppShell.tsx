import { AppNavigation } from "components/navigation/AppNavigation";
import { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAppRoutes } from "./routing/useAppRoutes";
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
    <div className="min-h-full flex flex-col bg-slate-200">
      <div className="flex h-full w-full justify-center">
        <div className="w-full md:w-[1200px] flex flex-col gap-4 md:gap-10">
          <AppNavigation />
          <div className="flex h-full flex-col gap-4 md:gap-10 px-4 md:px-0">
            <Outlet />
          </div>
          <div className="md:rounded-t-md p-3 bg-violet-500 text-white flex flex-col md:flex-row items-center md:justify-between">
            <div><b>Famewood</b>. { t('footer.rights') }</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
} 