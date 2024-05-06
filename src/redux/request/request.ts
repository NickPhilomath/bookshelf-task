import axios from 'axios';

import { BASE_URL } from '@/config/apiConfig';
import { getUserAuth, getSign } from '@/auth/auth.service';
import handleSuccess from './handleSuccess';
import handleError from './handleError';

const BOOKS_URL = '/books';

const request = {
  listBooks: async () => {
    const userAuth = getUserAuth();
    const signStr = getSign('GET', BOOKS_URL, '', userAuth.secret);

    try {
      const response = await axios.get(`${BASE_URL}/${BOOKS_URL}`, {
        headers: { Key: userAuth.key, Sign: signStr },
      });

      return handleSuccess(response);
    } catch (error) {
      return handleError(error);
    }
  },
  newBook: async (bookData: any) => {
    const userAuth = getUserAuth();
    const signStr = getSign('POST', BOOKS_URL, JSON.stringify(bookData), userAuth.secret);

    try {
      const response = await axios.post(`${BASE_URL}/${BOOKS_URL}`, bookData, {
        headers: { Key: userAuth.key, Sign: signStr },
      });

      return handleSuccess(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

export default request;
