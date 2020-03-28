import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';
import {ToDosWithRedux} from "./components/ToDos";
import {UserPanelWithRedux} from "./components/UserPanel";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ToDosWithRedux />
        <UserPanelWithRedux />
      </div>
    </Provider>
  );
}

export default App;