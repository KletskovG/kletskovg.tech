import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import { Provider } from 'react-redux';
// import { store }  from './store/index';

ReactDOM.render(
  <React.StrictMode>
      <App />
    {/* <Provider store={store}>
    </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
