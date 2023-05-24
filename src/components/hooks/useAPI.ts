import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useCallback, useEffect } from 'react';
import { useBetween } from 'use-between';
import { useLocalStorage } from './useLocalStorage';

export class HttpError extends Error
{
  public data: { [key: string]: any };

  constructor(data: { [key: string]: any } & { message: string })
  {
    super(data.message);

    this.data = data.data ?? null;
  }
}

const useAPIHook = () =>
{
    const [ sessionToken, setSessionToken ] = useLocalStorage('system.session.token', null);
    //const { loadingBarRef = null } = useLoadingBar();

    //@ts-ignore
    const processResponse = useCallback(async <Res = any, Req = AxiosResponse<Res>, D = any>(response: AxiosResponse<Res, D>) => response.data.data, []);

    const processError = useCallback((err: AxiosError) =>
    {
        const data = err?.response?.data as any;

        if (data?.message === 'invalid_token') setSessionToken(null);

        throw new HttpError({
            message: data?.message ?? 'invalid_error',
            data: data
        });
    }, [ setSessionToken ]);

    const get = useCallback(async <Req = any, Res = any>(url: string, config?: AxiosRequestConfig<Req>) =>
    {
        try
        {
            const response = await axios.get<Res, AxiosResponse<Res>, Req>(`${ window.AppConfig['api.url'] }/${ url }`, config);

            return processResponse<Res, AxiosResponse<Res>, Req>(response as AxiosResponse<Res, Req>);
        }

        catch (err)
        {
            return processError(err as AxiosError);
        }
    }, [ processResponse, processError ]);

    const remove = useCallback(async <Req = any, Res = any>(url: string, config?: AxiosRequestConfig<Req>) =>
    {
        try
        {
            const response = await axios.delete<Res, AxiosResponse<Res>, Req>(`${ window.AppConfig['api.url'] }/${ url }`, config);

            return processResponse<Res, AxiosResponse<Res>, Req>(response as AxiosResponse<Res, Req>);
        }

        catch (err)
        {
            return processError(err as AxiosError);
        }
    }, [ processResponse, processError ]);

    const post = useCallback(async <Req = any, Res = any>(url: string, data?: Req, config?: AxiosRequestConfig<Req>) =>
    {
        try
        {
            const response = await axios.post<Res, AxiosResponse<Res>, Req>(`${ window.AppConfig['api.url'] }/${ url }`, data, config);

            return processResponse<Res, AxiosResponse<Res>, Req>(response as AxiosResponse<Res, Req>);
        }

        catch (err)
        {
            return processError(err as AxiosError);
        }
    }, [ processResponse, processError ]);

    const put = useCallback(async <Req = any, Res = any>(url: string, data?: Req, config?: AxiosRequestConfig<Req>) =>
    {
        try
        {
            const response = await axios.put<Res, AxiosResponse<Res>, Req>(`${ window.AppConfig['api.url'] }/${ url }`, data, config);

            return processResponse<Res, AxiosResponse<Res>, Req>(response as AxiosResponse<Res, Req>);
        }

        catch (err)
        {
            return processError(err as AxiosError);
        }
    }, [ processResponse, processError ]);

    const patch = useCallback(async <Req = any, Res = any>(url: string, data?: Req, config?: AxiosRequestConfig<Req>) =>
    {
        try
        {
            const response = await axios.patch<Res, AxiosResponse<Res>, Req>(`${ window.AppConfig['api.url'] }/${ url }`, data, config);

            return processResponse<Res, AxiosResponse<Res>, Req>(response as AxiosResponse<Res, Req>);
        }

        catch (err)
        {
            return processError(err as AxiosError);
        }
    }, [ processResponse, processError ]);

    useEffect(() =>
    {
        if (!sessionToken) return;

        axios.defaults.headers.common = { 'Authorization': `Bearer ${ sessionToken }` };

        return () =>
        {
            axios.defaults.headers.common = {};
        }
    }, [ sessionToken ]);

    /*useEffect(() =>
    {
        axios.defaults.onDownloadProgress = (event: ProgressEvent) =>
        {
            loadingBarRef?.current?.continuousStart();

            if (((event.loaded / event.total) * 100) === 100) loadingBarRef?.current?.complete();
        }
    }, [ loadingBarRef ]);*/

    return { sessionToken, setSessionToken, get, remove, post, put, patch };
}

export const useAPI = () => useBetween(useAPIHook);