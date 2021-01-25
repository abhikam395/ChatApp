import React from 'react';
import { render } from 'react-dom';

import './../public/stylesheets/style.css';

import Router from './common/Router';

render(
    <Router></Router>, 
    document.getElementById('app')
);