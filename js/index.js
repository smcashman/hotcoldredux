var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var Game = require('./components/game');

ReactDOM.render(
        <Provider store={store}>
            <Game />
        </Provider>,
        document.getElementById('app')
    );