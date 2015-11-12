'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _virtexElement = require('virtex-element');

var _virtexElement2 = _interopRequireDefault(_virtexElement);

var _delegant = require('delegant');

var _delegant2 = _interopRequireDefault(_delegant);

var _virtex2 = require('virtex');

var _virtex3 = _interopRequireDefault(_virtex2);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState) {
  var userUpdate = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
  var view = arguments.length <= 2 || arguments[2] === undefined ? function () {} : arguments[2];

  var store = (0, _store2.default)({ log: [], user: initialState }, userUpdate);

  var _virtex = (0, _virtex3.default)(store.dispatch);

  var create = _virtex.create;
  var update = _virtex.update;

  var tree = undefined;
  var node = undefined;
  var pending = false;

  function start() {
    var rootNode = document.body;
    store.subscribe(function () {
      if (pending) return;
      pending = true;
      setTimeout(rerender);
    });
    tree = (0, _app2.default)(_extends({}, store.getState(), { view: view }));
    node = create(tree);
    rootNode.appendChild(node);
    (0, _delegant2.default)(rootNode, store.dispatch);
  }

  function rerender() {
    pending = false;
    var newTree = (0, _app2.default)(_extends({}, store.getState(), { view: view }));
    update(tree, newTree, node);
    tree = newTree;
  }

  return start;
};