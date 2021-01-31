import React from 'react';
import { render } from 'react-dom';

import './../public/stylesheets/style.css';
import Main from './main';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; 

import store from './store';

render(
    <Provider store={store}>
        <Router>
            <Main/>
        </Router>
    </Provider>,
    document.getElementById('app')
);