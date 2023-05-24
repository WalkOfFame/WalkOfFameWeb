import { classNames } from "components/utils";
import { FC, ReactNode } from "react";

export const Card: FC<{ children?: ReactNode, className?: string }> = props =>
{
  const { children, className = '' } = props;

  return (
    <div className={ classNames('bg-white rounded-md shadow-sm p-4 flex gap-2 items-center', className)}>
      { children }
    </div>
  );
}