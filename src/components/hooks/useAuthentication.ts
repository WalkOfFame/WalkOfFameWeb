import { useState } from "react";
import { useAPI } from "./useAPI";
import { useSession } from "./useSession";

const useAuthenticationHook = () =>
{
  const { get = null, post = null, setSessionToken = null } = useAPI();
  const { setUser } = useSession();
  const [ expiresAt, setExpiresAt ] = useState<Date>(null);

  const login = async (username: string, password: string) =>
  {
    try
    {
      const response = await post('auth/login', { username, password });

      setUser(response.user);
      setSessionToken(response.token);
      setExpiresAt(new Date(response.expiresAt));
    }
    catch (err)
    {
      throw new Error(err.message);
    }
  };

  return { login };
}

export const useAuthentication = useAuthenticationHook;