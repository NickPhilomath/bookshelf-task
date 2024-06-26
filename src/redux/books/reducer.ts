import * as actionTypes from './types';

const INITIAL_KEY_STATE = {
  result: null,
  // current: null,
  isLoading: false,
  isSuccess: false,
};

const INITIAL_STATE = {
  current: {
    data: null,
    errorFields: null,
  },
  list: {
    result: [],
    isLoading: false,
    isSuccess: false,
  },
  create: INITIAL_KEY_STATE,
};

interface Action {
  type: actionTypes.ActionType;
  keyState: 'list' | 'create';
  payload: any;
}

const booksReducer = (state = INITIAL_STATE, action: Action) => {
  const { payload, keyState } = action;
  switch (action.type) {
    case actionTypes.RESET_STATE:
      return INITIAL_STATE;
    case actionTypes.REQUEST_LOADING:
      return {
        ...state,
        [keyState]: {
          ...state[keyState],
          isLoading: true,
        },
      };
    case actionTypes.REQUEST_SUCCESS:
      return {
        ...state,
        [keyState]: {
          result: payload,
          isLoading: false,
          isSuccess: true,
        },
      };
    case actionTypes.REQUEST_FAILED:
      return {
        ...state,
        current: action.payload,
        [keyState]: {
          ...state[keyState],
          isLoading: false,
          isSuccess: false,
        },
      };

    default:
      return state;
  }
};

export default booksReducer;
