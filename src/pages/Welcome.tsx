import { Button } from "components/ui/Button";
import { useAuthentication } from "components/hooks/useAuthentication";
import { Card } from "components/ui/Card";
import { FC, useCallback } from "react";

export const Welcome: FC<{}> = props =>
{
  const { login } = useAuthentication();
  const loginClick = useCallback(() =>
  {
    if (login) login("string", "strings");
  }, [ login ]);

  return (
    <>
      <Card classes="justify-between md:py-0 relative overflow-hidden">
        <img src="./assets/images/undraw_awards_fieb.png" className="h-80 hidden md:block" alt="" />
        <div className="flex flex-col gap-2 items-start">
          <div className="text-violet-500 text-3xl font-medium">Famewood</div>
          <div className="text-slate-500 mb-3">Get ready to explore the backstage of the cinema world, build a career as an ascending star and face exciting challenges to become the best!</div>
          <Button onClick={ loginClick }>Let's get started!</Button>
        </div>
      </Card>
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-md shadow-sm px-5 py-4 flex flex-col md:flex-row gap-2 items-start md:items-center">
          <div className="text-2xl text-violet-500 font-medium">News</div>
          <div className="text-slate-400 italic">— Keep up with the hot topics surrounding Famewood</div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white rounded-md shadow-sm flex flex-col overflow-hidden">
            <img src="https://www.popmundo.com/Static/Images/Front/Megadome.jpg" alt="" />
            <div className="px-5 py-4 flex flex-col gap-1">
              <div className="font-medium text-violet-500">Veja seu nível de ambição!</div>
              <div className="text-sm text-slate-500">Um bugzinho maroto fez alguns artistas perderem a configuração de nível de ambição após usarem o boost em um show. Por conta de problemas técnicos</div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-sm flex flex-col overflow-hidden">
            <img src="https://www.popmundo.com/Static/Images/Front/Megadome.jpg" alt="" />
            <div className="px-5 py-4 flex flex-col gap-1">
              <div className="font-medium text-violet-500">Veja seu nível de ambição!</div>
              <div className="text-sm text-slate-500">Um bugzinho maroto fez alguns artistas perderem a configuração de nível de ambição após usarem o boost em um show. Por conta de problemas técnicos</div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-sm flex flex-col overflow-hidden">
            <img src="https://www.popmundo.com/Static/Images/Front/Megadome.jpg" alt="" />
            <div className="px-5 py-4 flex flex-col gap-1">
              <div className="font-medium text-violet-500">Veja seu nível de ambição!</div>
              <div className="text-sm text-slate-500">Um bugzinho maroto fez alguns artistas perderem a configuração de nível de ambição após usarem o boost em um show. Por conta de problemas técnicos</div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-sm flex flex-col overflow-hidden">
            <img src="https://www.popmundo.com/Static/Images/Front/Megadome.jpg" alt="" />
            <div className="px-5 py-4 flex flex-col gap-1">
              <div className="font-medium text-violet-500">Veja seu nível de ambição!</div>
              <div className="text-sm text-slate-500">Um bugzinho maroto fez alguns artistas perderem a configuração de nível de ambição após usarem o boost em um show. Por conta de problemas técnicos</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}