import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import store from "../src/Components/Minting/redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
