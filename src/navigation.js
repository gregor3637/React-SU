import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Publications from './pages/publications';
import ShareThoughts from './pages/share-thoughts';

const Navigation = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publications} />
                <Route path="/share" component={ShareThoughts} />
            </Switch>
        </BrowserRouter>
    );
};

export default Navigation;