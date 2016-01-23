/// <reference path='../typings/tsd.d.ts'/>
var React = require('react');
var ReactDOM = require('react-dom');
var redux_1 = require('redux');
var react_redux_1 = require('react-redux');
var App_1 = require('./containers/App');
var rootReducer_1 = require('./reducers/rootReducer');
var initialState = {};
var store = redux_1.createStore(rootReducer_1.rootReducer, initialState);
ReactDOM.render(React.createElement(react_redux_1.Provider, {"store": store}, React.createElement(App_1.default, null)), document.getElementById('app'));
