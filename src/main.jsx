import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import {StrictMode} from 'react';
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

