'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = require('./utils/merge');

var _merge2 = _interopRequireDefault(_merge);

var _vdomElement = require('vdom-element');

var _vdomElement2 = _interopRequireDefault(_vdomElement);

var _vduxLocal = require('vdux-local');

var _vduxLocal2 = _interopRequireDefault(_vduxLocal);

var _header = require('./components/header');

var _header2 = _interopRequireDefault(_header);

var _card = require('./components/card');

var _card2 = _interopRequireDefault(_card);

var _feedUpdate = require('./components/feedUpdate');

var _feedUpdate2 = _interopRequireDefault(_feedUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  app: {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    height: '100%'
  },
  feed: {
    margin: '20px 30%',
    minWidth: '600px'
  },
  header: {
    padding: '0 30%',
    minWidth: '600px'
  }
};

function render(_ref, childState) {
  var log = _ref.log;
  var view = _ref.view;
  var key = _ref.key;
  var state = _ref.state;
  var user = _ref.user;

  var fixedLog = _.clone(log).reverse();
  var headerColor = user.headerColor;
  var headerTextColor = user.headerTextColor;

  return (0, _vdomElement2.default)(
    'div',
    { style: styles.app },
    (0, _vdomElement2.default)(
      _header2.default,
      {
        key: 'header',
        title: user.title || 'Zork',
        score: user.score || 0,
        style: (0, _merge2.default)({
          backgroundColor: headerColor,
          color: headerTextColor
        }, styles.header) },
      (0, _vdomElement2.default)(_feedUpdate2.default, _extends({ key: 'feed-update' }, childState('feed-update')))
    ),
    (0, _vdomElement2.default)(
      'div',
      null,
      (0, _vdomElement2.default)(
        'div',
        { style: styles.feed },
        fixedLog.map(function (step, i) {
          var message = view(step);
          return (0, _vdomElement2.default)(_card2.default, {
            key: 'item' + i,
            action: step.action,
            item: message,
            color: step.color });
        })
      )
    )
  );
}

exports.default = (0, _vduxLocal2.default)({
  render: render
});