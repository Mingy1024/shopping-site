import { createContext } from 'react';

// useContext 跨元件傳遞
export const MessageContext = createContext({});

export const initState = {
  type: '',
  title: '',
  text: '',
};

export const messageReducer = (state, action) => {
  switch (action.type) {
    case 'POST_MESSAGE':
      return {
        ...action.payload,
      };
    case 'CLEAR_MESSAGE':
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export function handleSuccessMessage(dispatch, res) {
  dispatch({
    type: 'POST_MESSAGE',
    payload: {
      type: 'success',
      title: '更新成功',
      text: res.data.message,
    },
  });
  setTimeout(() => {
    dispatch({
      type: 'CLEAR_MESSAGE',
    });
  }, 3000);
}

export function handleErrorMessage(dispatch, error) {
  function text() {
    if(error.response) {
      return (
        Array.isArray(error?.response?.data?.message)
        ? error?.response?.data?.message.join('、')
        : error?.response?.data?.message
      )
    } else {
      return (
        Array.isArray(error?.data?.message)
        ? error?.data?.message.join('、')
        : error?.data?.message
      )
    }
  }
  dispatch({
    type: 'POST_MESSAGE',
    payload: {
      type: 'danger',
      title: '失敗',
      text: text(),
    },
  });
  setTimeout(() => {
    dispatch({
      type: 'CLEAR_MESSAGE',
    });
  }, 3000);
}
