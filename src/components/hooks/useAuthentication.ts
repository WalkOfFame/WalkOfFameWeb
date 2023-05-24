import { useAPI } from "./useAPI";

const useAuthenticationHook = () =>
{
  const { get = null, post = null, setSessionToken = null } = useAPI();

  const login = async (username: string, password: string) =>
  {
    try
    {
      const response = await post('auth/login', { username, password });
      console.log(response);
      setSessionToken(response.token);
    }
    catch (err)
    {
      throw new Error(err.message);
    }
  };

  return { login };
}

export const useAuthentication = useAuthenticationHook;