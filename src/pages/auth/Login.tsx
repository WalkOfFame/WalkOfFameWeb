import { Button } from "components/ui/Button";
import { Input } from "components/form/Input";
import { FC, useCallback, useState } from "react";
import { Card } from "components/ui/Card";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useAuthentication } from "components/hooks/useAuthentication";

export const Login: FC<{}> = props =>
{
  const { t } = useTranslation();
  const { login } = useAuthentication();

  const [ username, setUsername ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const loginClick = useCallback(() =>
  {
    if (!username.length || !password.length) return;

    if (login) login(username, password);
  }, [ login, username, password ]);

  return (
    <Card className="max-w-[450px]" title={ t('navigation.signin') }>
      <div className="w-full flex flex-col gap-2">
        <Input label={ t('label.username') } type="text" value={ username } onChange={ setUsername } />
        <Input label={ t('label.password') } type="password" value={ password } onChange={ setPassword } />
        <div className="text-slate-400 hover:text-violet-500 text-sm font-medium cursor-pointer transition-colors text-right">
          Forgot your password?
        </div>
        <Button onClick={ loginClick }>{ t('navigation.signin') }</Button>
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
  );
};