import { FC, useCallback } from "react";

export const Input: FC<{ label?: string, type: string, value?: any, onChange?: (value: any) => void }> = props =>
{
  const { label, type, value, onChange } = props;

  const handleOnChange = useCallback((e) =>
  {
    if (onChange) onChange(e.target.value);
  }, [ onChange ]);

  return (
    <div className="w-full">
      { label && <div className="text-slate-500 font-medium">{ label }</div> }
      <input
        type={ type }
        value={ value }
        onChange={ handleOnChange }
        className="w-full outline-none focus:outline-none border-none ring-2 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-violet-500 rounded-md transition-all"
      />
    </div>
  );
}