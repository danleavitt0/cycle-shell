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
      borderBottom: '1px solid rgba(255,99,71, 0.2)',
      padding: '15px'
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
  // let {title, status, paragraph, response} = props.item
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

function reducer(state, action) {
  switch (action.type) {}
  return state;
}

exports.default = (0, _vduxLocal2.default)({
  render: render,
  reducer: reducer
});