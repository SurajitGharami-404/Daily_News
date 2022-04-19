import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CountryProvider } from './contexts/countryContext';
import { CategoryProvider } from './contexts/categoryContext';
import { Provider } from "react-redux";
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CountryProvider>
        <CategoryProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </CategoryProvider>
      </CountryProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


