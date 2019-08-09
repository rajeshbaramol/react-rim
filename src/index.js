import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './RootReducer'
import { userLoggedIn } from './components/actions/auth';
import decode from 'jwt-decode';
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
if (localStorage.token) {
    const useremail = decode(localStorage.token);
    const user = { token: localStorage.token, email: useremail.email };
    store.dispatch(userLoggedIn(user))
}
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
serviceWorker.unregister();
