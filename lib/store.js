'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _virtexDom = require('virtex-dom');

var _virtexDom2 = _interopRequireDefault(_virtexDom);

var _virtexComponent = require('virtex-component');

var _virtexComponent2 = _interopRequireDefault(_virtexComponent);

var _parse = require('./middleware/parse');

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)((0, _virtexDom2.default)(document), _virtexComponent2.default, _parse2.default)(_redux.createStore);

exports.default = function (initialState) {
  return createStoreWithMiddleware(_reducer2.default, initialState);
};