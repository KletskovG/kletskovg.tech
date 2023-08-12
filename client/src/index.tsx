import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import './index.scss';
import './styles.scss';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(
    root
  ).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

