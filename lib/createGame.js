'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _vdomElement = require('vdom-element');

var _vdomElement2 = _interopRequireDefault(_vdomElement);

var _virtualComponent = require('virtual-component');

var _actions = require('./actions');

var _vdux = require('vdux');

var _vdux2 = _interopRequireDefault(_vdux);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultView = function defaultView(state) {
  return state.message;
};

exports.default = function (initialState) {
  var userUpdate = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
  var view = arguments.length <= 2 || arguments[2] === undefined ? defaultView : arguments[2];

  var store = (0, _store2.default)({ log: [], user: initialState }, userUpdate);

  function start() {
    (0, _virtualComponent.listen)(store.dispatch);
    store.dispatch((0, _actions.initializeApp)());
    (0, _vdux2.default)(store, function (state) {
      return (0, _vdomElement2.default)(_app2.default, _extends({ key: 'app', state: state.app, view: view }, state));
    }, document.body);
  }

  return start;
};