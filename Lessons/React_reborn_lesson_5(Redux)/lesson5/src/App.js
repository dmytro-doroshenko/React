import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import { CounterWithRedux } from "./Counter/Counter";

const initialState = {
  counter: 0,
  userIsAuth: false,
};

const action = {
  type: 'INCREMENT',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case 'AUTH_USER': {
      return {
        ...state,
        userIsAuth: true,
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);




function App() {
  return (
    <Provider store={store}>
      <CounterWithRedux />
    </Provider>

  );
}

export default App;
