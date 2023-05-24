import { classNames } from "components/utils";
import { FC, ReactNode, useCallback } from "react";

export const Button: FC<{ children?: ReactNode, className?: string, onClick?: () => void }> = props =>
{
  const { children, className, onClick } = props;

  const handleOnClick = useCallback(() =>
  {
    if (onClick) onClick();
  }, [ onClick ]);

  return (
    <div onClick={ handleOnClick } className={ classNames('px-4 py-2 bg-violet-500 shadow-sm text-white font-medium ring-2 ring-inset ring-violet-500 hover:text-violet-500 hover:bg-gray-100 rounded-md transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center', className) }>
      { children }
    </div>
  );
}