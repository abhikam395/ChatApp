import React from 'react';
import { render } from 'react-dom';

import './../public/stylesheets/style.css';
import Main from './main';

import { BrowserRouter as Router } from 'react-router-dom';

render(
    <Router>
        <Main/>
    </Router>,
    document.getElementById('app')
);