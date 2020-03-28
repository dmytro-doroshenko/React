import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { CounterWithRedux } from "./Counter/Counter";
import {ToDosWithRedux} from "./ToDos/ToDos";
import {store} from "./store/store";








function App() {
  return (
    <Provider store={store}>
      <CounterWithRedux />
      <ToDosWithRedux />
    </Provider>

  );
}

export default App;
