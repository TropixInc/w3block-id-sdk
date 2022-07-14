import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { RepositoryProps, Environment } from './interfaces';
import { getEndpoint } from './endpoints';
import { HEADER_API_KEY } from './constants';

export default class Repository {
  apiKey: string;
  environment: Environment;
  endpoint: string;

  constructor(props: RepositoryProps) {
    this.apiKey = props.apiKey;
    this.environment = props.environment;
    this.endpoint = props.endpoint || getEndpoint(this.environment);
  }

  public getApi(): AxiosInstance {
    return axios.create({
      baseURL: this.endpoint,
      headers: {
        [HEADER_API_KEY]: this.apiKey,
      },
    });
  }

  public async post<D extends Record<string, any>, R = any>(
    path: string,
    data?: D,
    fallbackMessage?: string,
  ): Promise<R> {
    try {
      const resp = await this.getApi().post<D, AxiosResponse<R>>(path, data);
      return resp.data;
    } catch (error) {
      throw this.handleError(error, fallbackMessage);
    }
  }

  public async patch<D extends Record<string, any>, R = any>(
    path: string,
    data?: D,
    fallbackMessage?: string,
  ): Promise<R> {
    try {
      const resp = await this.getApi().patch<D, AxiosResponse<R>>(path, data);
      return resp.data;
    } catch (error) {
      throw this.handleError(error, fallbackMessage);
    }
  }

  public async get<Q extends Record<string, any>, R = any>(
    path: string,
    query?: Q,
    fallbackMessage?: string,
  ): Promise<R> {
    try {
      const resp = await this.getApi().get<any, AxiosResponse<R>>(path, { params: query });
      return resp.data;
    } catch (error) {
      throw this.handleError(error, fallbackMessage);
    }
  }

  public handleError(error: unknown, fallbackMessage?: string): Error {
    try {
      const axiosError = error as AxiosError;

      if (axiosError.isAxiosError) {
        const msg = axiosError.response?.data?.message || axiosError.message || fallbackMessage;
        return new Error(msg);
      }

      if (error instanceof Error) {
        return error;
      }
    } catch (err) {
      console.error(error);
      console.error(err);
    }

    return new Error(fallbackMessage || 'Unknown error');
  }
}
