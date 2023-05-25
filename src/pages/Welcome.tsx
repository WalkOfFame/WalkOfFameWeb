import { Button } from "components/ui/Button";
import { Card } from "components/ui/Card";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Login } from "./auth/Login";

export const Welcome: FC<{}> = props =>
{
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <Card className="md:py-0 relative overflow-hidden">
          <div className="flex h-full gap-2 items-center">
            <img src="./assets/images/undraw_awards_fieb.png" className="h-64 hidden md:block" alt="" />
            <div className="flex flex-col gap-2 items-start">
              <div className="text-violet-500 text-3xl font-medium">Famewood</div>
              <div className="text-slate-500 mb-3">{ t('welcome.jumbotron.text') }</div>
              <Button className="w-full md:w-auto">{ t('welcome.jumbotron.button') }</Button>
            </div>
          </div>
        </Card>
        <Login />
      </div>
      <div className="flex flex-col gap-5">
        <Card className="px-6">
          <div className="text-2xl text-violet-500 font-medium">{ t('news') }</div>
          <div className="text-slate-400 italic">— { t('news.subtitle') }</div>
        </Card>
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
        </div>
      </div>
    </>
  );
}