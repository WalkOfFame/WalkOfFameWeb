import { FC, ReactNode } from "react";

export const Card: FC<{ children?: ReactNode, classes?: string }> = props =>
{
  const { children, classes = '' } = props;

  return (
    <div className={ 'bg-white rounded-md shadow-sm px-10 py-4 flex gap-2 items-center' + (classes.length ? ' ' + classes : '') }>
      { children }
    </div>
  );
}