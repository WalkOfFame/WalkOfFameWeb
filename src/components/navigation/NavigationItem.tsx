import { FC } from "react";

export const NavigationItem: FC<{ label: string }> = props =>
{
  const { label } = props;

  return (
    <div className="px-4 py-2 hover:bg-white hover:text-violet-500 rounded-md transition-all cursor-pointer">{ label }</div>
  );
}