import React from 'react';
import Provider from "react-redux/es/components/Provider";
import TodoolaApp from "./TodoolaApp.jsx";
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/:filter?" component={TodoolaApp} />
        </BrowserRouter>
    </Provider>
);

export default Root;