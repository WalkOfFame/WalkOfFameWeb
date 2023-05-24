import { AppNavigation } from "components/navigation/AppNavigation";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const AppShell: FC<{}> = props =>
{
  return (
    <div className="min-h-full flex flex-col bg-slate-200 pb-10">
      <div className="flex h-full w-full justify-center">
        <div className="w-full md:w-[1200px] flex flex-col gap-4 md:gap-10">
          <AppNavigation />
          <div className="flex flex-col gap-4 md:gap-10 px-4 md:px-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
} 