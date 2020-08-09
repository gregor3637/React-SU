import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Publications from './pages/publications';
import ShareThoughts from './pages/share-thoughts';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';

const Navigation = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publications} />
                <Route path="/share" component={ShareThoughts} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Navigation;