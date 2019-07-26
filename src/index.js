import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import Game from './containers/Game';
import reducer from './reducers';
import sega from './sagas';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sega);

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);