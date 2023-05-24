import { useEffect, useState } from 'react';
import { useBetween } from 'use-between';import { useAPI } from './useAPI';
import { IUser } from 'components/models';

const useUserHook = () =>
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

    return { user };
}

export const useUser = () => useBetween(useUserHook);