import { Button } from "components/Button";
import { Input } from "components/form/Input";
import { FC } from "react";

export const Login: FC<{}> = props =>
{
  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full md:w-[450px] flex flex-col items-center justify-center gap-2">
      <div className="text-white">Walk of Fame</div>
      <div className="bg-slate-300 rounded-md shadow-md w-full flex flex-col gap-2 px-5 py-4">
        <div className="font-medium">Usuário</div>
        <Input type="text" />
        <div className="font-medium">Senha</div>
        <Input type="password" />
        <Button>Entrar</Button>
        <div className="text-center">ou</div>
        <Button>Registre-se</Button>
      </div>
      </div>
    </div>
  );
};