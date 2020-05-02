import React from 'react';
import { Router } from '@reach/router';

import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
    <>
        <Header />
        <Router>
        <Home path="/" />
        <NotFound default />   
        </Router>
        <GlobalStyle />
    </>
)

export default App;
