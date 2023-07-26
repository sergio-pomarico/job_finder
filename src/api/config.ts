import {AxiosHeaders, AxiosRequestConfig} from 'axios';

/**
 *
 * @param {string} url
 * @return {AxiosRequestConfig}
 */
export const buidConfig = (
  url: string,
  customHeaders?: AxiosHeaders,
): AxiosRequestConfig => {
  const commonHeaders = {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  /**
   * build Axios config request
   */
  const config: AxiosRequestConfig = {
    baseURL: url,
    withCredentials: true,
    timeout: 30000,
    headers: {...commonHeaders, ...customHeaders},
  };
  return config;
};
