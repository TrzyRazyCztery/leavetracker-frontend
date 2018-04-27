import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layout/components/App'
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'



ReactDOM.render((
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

