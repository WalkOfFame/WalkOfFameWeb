import { faDiscord, faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "components/form/Input";
import { Button } from "components/ui/Button";
import { Card } from "components/ui/Card";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Register: FC<{}> = props =>
{
  const { t } = useTranslation();

  return (
    <div className="flex w-full h-full items-center justify-center">
      <Card className="max-w-[450px]" title={ t('navigation.signup') }>
        <div className="w-full flex flex-col gap-2">
          <Input label={ t('label.username') } type="text" />
          <Input label={ t('label.password') } type="password" />
          <div className="text-slate-400 hover:text-violet-500 text-sm font-medium cursor-pointer transition-colors text-right">
            { t('label.forgot_password') }
          </div>
          <Button>{ t('navigation.signin') }</Button>
          <div className="relative flex justify-center items-center h-10 pointer-events-none">
            <div className="w-full border-b-2 border-slate-300"></div>
            <div className="absolute bg-white px-4 text-slate-400">{ t('auth.continue_with') }</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-indigo-600 hover:bg-white ring-indigo-600 hover:text-indigo-600 ring-2 ring-inset rounded-md px-3 py-2 text-white font-medium text-center shadow-md transition-colors cursor-pointer flex items-center justify-center select-none">
              <FontAwesomeIcon icon={ faDiscord } className="mr-2" />
              Discord
            </div>
            <div className="bg-red-500 hover:bg-white ring-red-500 hover:text-red-500 ring-2 ring-inset rounded-md px-3 py-2 text-white font-medium text-center shadow-md transition-colors cursor-pointer flex items-center justify-center select-none">
              <FontAwesomeIcon icon={ faGoogle } className="mr-2" />
              Google
            </div>
            <div className="bg-blue-700 hover:bg-white ring-blue-700 hover:text-blue-700 ring-2 ring-inset rounded-md px-3 py-2 text-white font-medium text-center  shadow-md transition-colors cursor-pointer flex items-center justify-center select-none">
              <FontAwesomeIcon icon={ faFacebook } className="mr-2" />
              Facebook
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}