import { Button } from "components/ui/Button";
import { Input } from "components/form/Input";
import { FC } from "react";
import { Card } from "components/ui/Card";

export const Login: FC<{}> = props =>
{
  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full md:w-[450px] flex flex-col items-center justify-center gap-2">
        <Card>
          <div className="font-medium">Usuário</div>
          <Input type="text" />
          <div className="font-medium">Senha</div>
          <Input type="password" />
          <Button>Entrar</Button>
        </Card>
      </div>
    </div>
  );
};