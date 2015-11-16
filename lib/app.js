'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _vdomElement = require('vdom-element');

var _vdomElement2 = _interopRequireDefault(_vdomElement);

var _vduxLocal = require('vdux-local');

var _vduxLocal2 = _interopRequireDefault(_vduxLocal);

var _header = require('./components/header');

var _header2 = _interopRequireDefault(_header);

var _feedItem = require('./components/feedItem');

var _feedItem2 = _interopRequireDefault(_feedItem);

var _feedUpdate = require('./components/feedUpdate');

var _feedUpdate2 = _interopRequireDefault(_feedUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  app: {
    fontFamily: 'Roboto, sans-serif'
  },
  container: {
    width: '80%',
    margin: '20px auto',
    boxShadow: '0 0 2px 2px rgba(255,99,71, 0.1)',
    borderRadius: '10px'
  },
  feed: {}
};

function render(_ref, childState) {
  var log = _ref.log;
  var view = _ref.view;
  var key = _ref.key;
  var state = _ref.state;
  var score = _ref.score;
  var text = state.text;

  var fixedLog = _lodash2.default.clone(log).reverse();
  return (0, _vdomElement2.default)(
    'div',
    { style: styles.app },
    (0, _vdomElement2.default)(_header2.default, {
      key: 'header',
      title: 'Zork',
      score: score || 0 }),
    (0, _vdomElement2.default)(
      'div',
      { style: styles.container },
      (0, _vdomElement2.default)(_feedUpdate2.default, _extends({ key: 'feed-update' }, childState('feed-update'))),
      (0, _vdomElement2.default)(
        'div',
        { style: styles.feed },
        fixedLog.map(function (step, i) {
          var parts = view(step);
          return (0, _vdomElement2.default)(_feedItem2.default, {
            key: 'item' + i,
            action: step.action,
            item: parts });
        })
      )
    )
  );

  function handleSubmit(e) {
    var text = e.target.value.trim();
    var parts = text.split(' ');
    var noun = parts[1] ? parts[1] : '';
    return text && e.which === ENTER_KEY ? [setText(key, ''), submit(parts[0], noun)] : setText(key, text);
  }
}

exports.default = (0, _vduxLocal2.default)({
  render: render
});