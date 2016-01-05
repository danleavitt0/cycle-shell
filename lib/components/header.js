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

var _merge = require('../utils/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles() {
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
    children: {
      flex: 1
    },
    inner: {
      width: '80%',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      minWidth: '600px'
    }
  };
}

function render(_ref, childState) {
  var title = _ref.title;
  var score = _ref.score;
  var children = _ref.children;
  var style = _ref.style;
  var innerWidth = _ref.innerWidth;

  var styles = getStyles();
  return (0, _vdomElement2.default)(
    'div',
    { style: (0, _merge2.default)(style, styles.header) },
    (0, _vdomElement2.default)(
      'div',
      { style: (0, _merge2.default)({ width: innerWidth }, styles.inner) },
      (0, _vdomElement2.default)(
        'div',
        { style: styles.title },
        ' ',
        title && title,
        ' '
      ),
      (0, _vdomElement2.default)(
        'div',
        { style: styles.children },
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
    )
  );
}

exports.default = (0, _vduxLocal2.default)({
  render: render
});