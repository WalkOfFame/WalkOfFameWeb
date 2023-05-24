import { FC } from "react";
import { NavigationItem } from "./NavigationItem";

export const AppNavigation: FC<{}> = props =>
{
  return (
    <div className="md:rounded-b-md p-2 sticky top-0 z-50 bg-violet-500 shadow-sm font-medium text-white flex flex-col md:flex-row items-center md:justify-between">
      <div className="px-4 py-2 text-white text-xl">Famewood</div>
      <div className="flex gap-2 overflow-y-auto w-full md:w-auto">
        <NavigationItem label="Home" />
        <NavigationItem label="Register" />
      </div>
    </div>
  );
}