'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = undefined;

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

var _API = require('./API');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.update = _API.update;

exports.default = function () {
  var store = (0, _store2.default)({ position: 0, text: ['You are in a large empty forest'] });

  var _virtex = (0, _virtex3.default)(store.dispatch);

  var create = _virtex.create;
  var update = _virtex.update;

  var tree = undefined;
  var node = undefined;
  var pending = false;

  if (document.readyState === 'complete' || document.readyState === 'loaded') {
    setup();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      setup();
    });
  }

  function setup() {
    var rootNode = document.getElementById('app');
    store.subscribe(function () {
      if (pending) return;
      pending = true;
      setTimeout(rerender);
    });
    tree = (0, _app2.default)(store.getState());
    node = create(tree);
    rootNode.appendChild(node);
    (0, _delegant2.default)(rootNode, store.dispatch);
  }

  function rerender() {
    pending = false;
    var newTree = (0, _app2.default)(store.getState());
    update(tree, newTree, node);
    tree = newTree;
  }
};