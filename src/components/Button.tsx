import { FC, ReactNode, useCallback } from "react";

export const Button: FC<{ children?: ReactNode, size?: 'sm' | 'base' | 'xl', onClick?: Function, rounded?: boolean }> = props =>
{
  const { children, size = 'base', onClick, rounded = true } = props;

  const handleOnClick = useCallback(() =>
  {
    if (onClick) onClick();
  }, [ onClick ]);

  return (
    <button
      type="button"
      onClick={ handleOnClick }
      className={ `flex items-center gap-2 w-full transition-colors justify-center text-${size} ${rounded && 'rounded-md'} bg-violet-500 py-2 px-3 font-semibold text-white hover:bg-sky-500 shadow-sm whitespace-nowrap` }
    >
      { children }
    </button>
  );
};