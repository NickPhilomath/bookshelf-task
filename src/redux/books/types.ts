export const RESET_STATE = 'BOOKS_RESET_STATE';

export const REQUEST_LOADING = 'BOOKS_REQUEST_LOADING';
export const REQUEST_SUCCESS = 'BOOKS_REQUEST_SUCCESS';
export const REQUEST_FAILED = 'BOOKS_REQUEST_FAILED';

export type ActionType =
  | typeof RESET_STATE
  | typeof REQUEST_LOADING
  | typeof REQUEST_SUCCESS
  | typeof REQUEST_FAILED;
