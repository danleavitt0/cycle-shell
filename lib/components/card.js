'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vdomElement = require('vdom-element');

var _vdomElement2 = _interopRequireDefault(_vdomElement);

var _vduxLocal = require('vdux-local');

var _vduxLocal2 = _interopRequireDefault(_vduxLocal);

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
    }
  };
};

function render(props, childState) {
  var styles = getStyles();
  var action = props.action;

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
      { style: styles.paragraph },
      props.item
    )
  );
}

exports.default = (0, _vduxLocal2.default)({
  render: render
});