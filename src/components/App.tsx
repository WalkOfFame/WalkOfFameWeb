import { FC } from "react";
import { AppRouter } from "./routing/AppRouter";

export const App: FC<{}> = props =>
{
  return (
    <AppRouter />
  );
}