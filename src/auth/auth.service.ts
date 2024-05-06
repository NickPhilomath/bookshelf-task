import axios from 'axios';
import CryptoJS from 'crypto-js';

import handleError from '@/request/handleError';
import { BASE_URL } from '@/config/apiConfig';

const LOGIN_URL = '/myself';

export const getUserAuth = () => {
  const auth_data = JSON.parse(window.localStorage.getItem('auth') || '');
  return auth_data?.data;
};

export const getSign = (method: string, url: string, body: string, userSecret: string) => {
  return CryptoJS.MD5(method + url + body + userSecret).toString();
};

export const login = async ({ loginData }: { loginData: any }) => {
  try {
    const response = await axios.get(BASE_URL + LOGIN_URL, {
      headers: {
        Key: loginData.key,
        Sign: getSign('GET', LOGIN_URL, '', loginData.secret),
      },
    });

    console.log('**auth response', response);

    const { data } = response;

    return {
      success: true,
      result: data,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const register = async ({ registerData }: { registerData: any }) => {
  try {
    const response = await axios.post(BASE_URL + '/signup', registerData);

    console.log('**auth response', response);

    return {
      success: true,
      result: null,
    };
  } catch (error) {
    return handleError(error);
  }
};
