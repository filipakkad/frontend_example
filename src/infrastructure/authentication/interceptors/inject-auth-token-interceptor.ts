/* eslint-disable no-param-reassign */
import axios from 'axios';
import AuthTokensProvider from '../auth-tokens-provider';

axios.interceptors.request.use(
  (config) => {
    const authToken = AuthTokensProvider.getAuthToken();
    if (authToken !== undefined) {
      config.headers ??= {};
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
