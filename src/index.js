import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducer from './store/Reducer';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storageSession from 'redux-persist/lib/storage/session'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

const persistConfig = {
    key: 'root',
    storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, Reducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
