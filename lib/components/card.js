'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vdomElement = require('vdom-element');

var _vdomElement2 = _interopRequireDefault(_vdomElement);

var _vduxLocal = require('vdux-local');

var _vduxLocal2 = _interopRequireDefault(_vduxLocal);

var _merge = require('../utils/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles() {
  return {
    container: {
      padding: '20px 25px',
      backgroundColor: 'white',
      boxShadow: '0 0 5px 0 rgba(0,0,0,0.2)',
      marginBottom: '10px'
    },
    title: {
      fontSize: '18px',
      margin: '5px 0',
      fontWeight: 'bold'
    },
    action: {
      marginBottom: '5px',
      fontStyle: 'italic'
    },
    paragraph: {
      whiteSpace: 'pre-wrap'
    }
  };
};

function render(_ref, childState) {
  var action = _ref.action;
  var item = _ref.item;
  var color = _ref.color;

  var styles = getStyles();
  return (0, _vdomElement2.default)(
    'div',
    { style: styles.container },
    action && (0, _vdomElement2.default)(
      'div',
      { style: styles.action },
      ' > ',
      action,
      ' '
    ),
    (0, _vdomElement2.default)(
      'div',
      { style: (0, _merge2.default)({ color: color }, styles.paragraph) },
      item
    )
  );
}

exports.default = (0, _vduxLocal2.default)({
  render: render
});