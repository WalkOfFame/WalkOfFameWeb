import { useBetween } from 'use-between';
import { IUser } from 'components/models';
import { useState, useEffect } from 'react';
import { useAPI } from './useAPI';

const useSessionHook = () =>
{
  const [ user, setUser ] = useState<IUser>(null);
  const { get = null, sessionToken = null, setSessionToken = null } = useAPI();

  useEffect(() =>
  {
    if (!sessionToken || !sessionToken.length)
    {
      setUser(null);
      return;
    }

    const getUser = async () =>
    {
        try
        {
          const response = await get<IUser>('user');

          setUser(response);
        }
        catch(err)
        {
          setSessionToken(null);
        }
    }

    getUser();
  }, [ sessionToken, setSessionToken, get ]);

  return { user, setUser };
}

export const useSession = () => useBetween(useSessionHook);