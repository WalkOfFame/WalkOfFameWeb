import { Dispatch, SetStateAction, useState } from 'react';

const GetLocalStorage = <T>(key: string) => JSON.parse(window.localStorage.getItem(key)) as T ?? null;
const SetLocalStorage = <T>(key: string, value: T) => window.localStorage.setItem(key, JSON.stringify(value));

const useLocalStorageHook = <T>(key: string, initialValue: T): [ T, Dispatch<SetStateAction<T>>] =>
{
    const [ storedValue, setStoredValue ] = useState<T>(() =>
    {
        if(typeof window === 'undefined') return initialValue;

        try
        {
            let item = GetLocalStorage<T>(key);

            if(!item && typeof window !== 'undefined') SetLocalStorage(key, initialValue);

            return GetLocalStorage<T>(key) ?? initialValue;
        }

        catch(error)
        {
            return initialValue;
        }
    });

    const setValue = (value: T) =>
    {
        try
        {
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            if(typeof window !== 'undefined') SetLocalStorage(key, valueToStore);
        }

        catch(error)
        {
            console.error(error);
        }
    }

    return [ storedValue, setValue ];
}

export const useLocalStorage = useLocalStorageHook;