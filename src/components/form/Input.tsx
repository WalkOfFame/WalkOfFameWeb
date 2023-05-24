import { FC } from "react";

export const Input: FC<{ type: string }> = props =>
{
  const { type } = props;

  return <input type={ type } className="outline-none focus:outline-none border-none ring-2 ring-inset ring-slate-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 rounded-md transition-all" />;
}