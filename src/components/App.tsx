import { FC } from "react";
import { AppRouter } from "./navigation/routing/AppRouter";

export const App: FC<{}> = props =>
{
  return (
    <AppRouter />
  );
}