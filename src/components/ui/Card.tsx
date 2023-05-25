import { classNames } from "components/utils";
import { FC, ReactNode } from "react";

export const Card: FC<{ title?: string, children?: ReactNode, className?: string }> = props =>
{
  const { title = null, children, className = '' } = props;

  return (
    <div className={ classNames('bg-white rounded-md shadow-sm p-4 flex flex-col gap-2 w-full', className)}>
      { title && <div className="font-medium text-xl text-slate-500">{ title }</div> }
      { children }
    </div>
  );
}