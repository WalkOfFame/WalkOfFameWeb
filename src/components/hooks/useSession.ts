import { useBetween } from 'use-between';
import { useUser } from './useUser';

const useSessionHook = () =>
{
    const { user = null } = useUser();

    return { user };
}

export const useSession = () => useBetween(useSessionHook);