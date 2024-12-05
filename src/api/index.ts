import axios, {AxiosError, AxiosResponse} from 'axios';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

const BASE_URL = 'http://localhost:1234/';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
  },
});

instance.interceptors.request.use(async config => {
  return config;
});

export const setUserName = (username: string) => {
  if (username) {
    instance.defaults.headers.common['username'] = `${username}`;
  } else {
    delete instance.defaults.headers.common['username'];
  }
};

export const deleteUserName = () => {
  delete instance.defaults.headers.common['username'];
};

instance.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError) => {
    let message = err.message;

    if (/network error/i.test(message)) {
      const netinfo = await NetInfo.fetch();
      const isConnected = !!(
        netinfo.isConnected && netinfo.isInternetReachable
      );
      message = isConnected
        ? 'Whoops, something went wrong, please try again in a moment.'
        : "No internet connection, please ensure you're connected to the internet and try again.";
    }

    if (err.response?.status === 403) {
      return Promise.reject(err.response.data);
    }

    if (err.response?.status === 401) {
      setTimeout(() => {
        Toast.show({
          type: 'info',
          autoHide: true,
          text1: 'An error occured',
          text2: message,
        });
      }, 1000);
    }

    if (
      err.response?.status === 404 ||
      err.response?.status === 500 ||
      err.response?.status === 400 ||
      err.response?.status === 409
    ) {
      message = err?.response?.data?.message ?? 'Unknown error occurred';

      setTimeout(() => {
        Toast.show({
          type: 'error',
          autoHide: true,
          text1: 'An error occured',
          text2: message,
        });
      }, 1000);
    }

    if (err.request) {
      return Promise.reject(err.request);
    }

    return Promise.reject(err.message);
  },
);

const api = instance;

export default api;
