import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <Route path="/" component={App}>
    </Route> 
  </BrowserRouter>
);

render(router, document.getElementById('root'));