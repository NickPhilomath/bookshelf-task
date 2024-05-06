import * as actionTypes from './types';
import * as authService from '@/auth/auth.service';

export const login = (loginData: any) => async (dispatch: any) => {
  dispatch({ type: actionTypes.REQUEST_LOADING });

  const resData = await authService.login({ loginData });

  if (resData.success) {
    const auth_state = {
      data: resData.result?.data,
    };

    window.localStorage.setItem('auth', JSON.stringify(auth_state));
    // todo: remove is logout from localstorage

    dispatch({
      type: actionTypes.REQUEST_SUCCESS,
      payload: {
        data: resData.result?.data,
        errorFields: null,
      },
    });
  } else {
    dispatch({
      type: actionTypes.REQUEST_FAILED,
      payload: {
        data: null,
        errorFields: resData.result,
      },
    });
  }
};

export const register = (registerData: any) => async (dispatch: any) => {
  dispatch({ type: actionTypes.REQUEST_LOADING });

  const resData = await authService.register({ registerData });

  if (resData.success) {
    dispatch({
      type: actionTypes.REQUEST_SUCCESS,
      payload: {
        data: resData.result,
        errorFields: null,
      },
    });
  } else {
    dispatch({
      type: actionTypes.REQUEST_FAILED,
      payload: {
        data: null,
        errorFields: resData.result,
      },
    });
  }
};

export const logout = () => async (dispatch: any) => {
  dispatch({
    type: actionTypes.LOGOUT,
  });

  window.localStorage.removeItem('auth');
};
