import axios, {AxiosError, AxiosResponse} from 'axios';
import {Platform} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import {asyncStore, asyncGet, asyncRemove} from '../utils';

interface ErrorResponse {
  message: string;
}

const BASE_URL =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:1234/'
    : 'http://localhost:1234/';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
  },
});

export const setUserName = async (username: string) => {
  if (username) {
    await asyncStore('username', username);
  }
};

export const deleteUserName = async () => {
  delete instance.defaults.headers.common['username'];
  await asyncRemove('username');
};

// Request Interceptor
instance.interceptors.request.use(async config => {
  const username = await asyncGet('username');
  if (username) {
    config.headers['username'] = `${username}`;
  }
  return config;
});

// Response Interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError<ErrorResponse>) => {
    const defaultErrorMessage =
      'An unexpected error occurred. Please try again.';
    let errorMessage = error.message;

    // Network errors
    if (/network error/i.test(errorMessage)) {
      const netInfo = await NetInfo.fetch();
      const isConnected = netInfo.isConnected && netInfo.isInternetReachable;
      errorMessage = isConnected
        ? 'Whoops, something went wrong. Please try again in a moment.'
        : "No internet connection. Please ensure you're connected to the internet and try again.";
    }

    // Server-side errors
    if (error.response) {
      const {status, data} = error.response;

      switch (status) {
        case 401:
          errorMessage = data?.message || 'Unauthorized access. Please log in.';
          setTimeout(() => {
            Toast.show({
              type: 'info',
              autoHide: true,
              text1: 'An error occurred',
              text2: errorMessage,
            });
          }, 1000);
          break;

        case 403:
          errorMessage =
            data?.message ||
            'Forbidden. You do not have access to this resource.';
          return Promise.reject(data);

        case 404:
          errorMessage =
            data?.message || 'The requested resource was not found.';
          setTimeout(() => {
            Toast.show({
              type: 'info',
              autoHide: true,
              text1: 'Not Found',
              text2: errorMessage,
            });
          }, 1000);
          break;

        case 400:
        case 409:
        case 500:
          errorMessage = data?.message || defaultErrorMessage;
          setTimeout(() => {
            Toast.show({
              type: 'info',
              autoHide: true,
              text1: 'Server Error',
              text2: errorMessage,
            });
          }, 1000);
          break;

        default:
          errorMessage = defaultErrorMessage;
          setTimeout(() => {
            Toast.show({
              type: 'info',
              autoHide: true,
              text1: 'An error occurred',
              text2: errorMessage,
            });
          }, 1000);
      }
    } else if (error.request) {
      // No response received from the server
      errorMessage =
        'No response from the server. Please check your connection.';
    }

    // Reject with the final error message
    return Promise.reject(errorMessage);
  },
);

const api = instance;

export default api;
