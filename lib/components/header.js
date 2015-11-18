'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vdomElement = require('vdom-element');

var _vdomElement2 = _interopRequireDefault(_vdomElement);

var _vduxLocal = require('vdux-local');

var _vduxLocal2 = _interopRequireDefault(_vduxLocal);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles() {
  return {
    header: {
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)',
      color: '#333'
    },
    title: {
      fontSize: '20px'
    },
    inner: {
      flex: 1
    }
  };
};

var merge = function merge(base) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _lodash2.default.defaultsDeep.apply(_lodash2.default, [base].concat(args));
};

function render(props, childState) {
  var styles = getStyles();
  var title = props.title;
  var score = props.score;
  var children = props.children;

  return (0, _vdomElement2.default)(
    'div',
    { style: merge(props.style, styles.header) },
    (0, _vdomElement2.default)(
      'div',
      { style: styles.title },
      ' ',
      title && title,
      ' '
    ),
    (0, _vdomElement2.default)(
      'div',
      { style: styles.inner },
      children && children.map(function (child) {
        return (0, _vdomElement2.default)(
          'div',
          null,
          child
        );
      })
    ),
    (0, _vdomElement2.default)(
      'div',
      { style: styles.score },
      ' score: ',
      score,
      ' '
    )
  );
}

exports.default = (0, _vduxLocal2.default)({
  render: render
});