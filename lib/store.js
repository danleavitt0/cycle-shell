'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reduxEffects = require('redux-effects');

var _reduxEffects2 = _interopRequireDefault(_reduxEffects);

var _reduxEffectsEvents = require('redux-effects-events');

var _reduxEffectsEvents2 = _interopRequireDefault(_reduxEffectsEvents);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxMulti = require('redux-multi');

var _reduxMulti2 = _interopRequireDefault(_reduxMulti);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxMulti2.default, _reduxEffects2.default, (0, _reduxEffectsEvents2.default)()];

var createStoreWithMiddleware = _redux.applyMiddleware.apply(undefined, middlewares)(_redux.createStore);

exports.default = function (initialState, update) {
  return createStoreWithMiddleware((0, _reducer2.default)(update), initialState);
};