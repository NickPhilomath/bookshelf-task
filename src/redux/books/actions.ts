import * as actionTypes from './types';
import request from '../request/request';

export const listAllBooks = () => async (dispatch: any) => {
  dispatch({
    type: actionTypes.REQUEST_LOADING,
    payload: null,
  });

  let res_data = await request.listBooks();

  if (res_data.success) {
    console.log('data&&&&&&&&&&', res_data);
    dispatch({
      type: actionTypes.REQUEST_SUCCESS,
      keyState: 'list',
      payload: res_data.result.data,
    });
  } else {
    dispatch({
      type: actionTypes.REQUEST_FAILED,
      keyState: 'list',
      payload: null,
    });
  }
};

export const createBook = (isbn: string) => async (dispatch: any) => {
  dispatch({
    type: actionTypes.REQUEST_LOADING,
    keyState: 'create',
    payload: null,
  });

  let resData = await request.newBook({ isbn });

  if (resData.success) {
    dispatch({
      type: actionTypes.REQUEST_SUCCESS,
      keyState: 'create',
      payload: resData.result,
    });
  } else {
    dispatch({
      type: actionTypes.REQUEST_FAILED,
      keyState: 'create',
      payload: {
        data: null,
        errorFields: resData.result,
      },
    });
  }
};
