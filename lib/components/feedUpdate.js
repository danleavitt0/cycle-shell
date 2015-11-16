'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vdomElement = require('vdom-element');

var _vdomElement2 = _interopRequireDefault(_vdomElement);

var _vduxLocal = require('vdux-local');

var _vduxLocal2 = _interopRequireDefault(_vduxLocal);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTER_KEY = 13;

var SET_TEXT = 'SET_TEXT';
var setText = (0, _vduxLocal.localAction)(SET_TEXT);

var getStyles = function getStyles() {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,99,71, 0.3)',
      padding: '15px'
    },
    input: {
      padding: '10px',
      width: '50%',
      fontSize: '16px'
    }
  };
};

function initialState() {
  return {
    text: ''
  };
}

function render(_ref, childState) {
  var key = _ref.key;
  var state = _ref.state;

  var styles = getStyles();
  var text = state.text;

  return (0, _vdomElement2.default)(
    'div',
    { style: styles.container },
    (0, _vdomElement2.default)('input', {
      autofocus: true,
      style: styles.input,
      type: 'text',
      value: text,
      placeholder: 'What\'s next?',
      'ev-keyup': handleSubmit })
  );

  function handleSubmit(e) {
    var text = e.target.value;
    var parts = text.split(' ');
    var noun = parts[1] ? parts[1] : '';
    return text && e.which === ENTER_KEY ? [setText(key, ''), (0, _actions.submit)(parts[0], noun)] : setText(key, text);
  }
}

function reducer(state, action) {
  switch (action.type) {
    case SET_TEXT:
      return _extends({}, state, {
        text: action.payload
      });
  }
  return state;
}

exports.default = (0, _vduxLocal2.default)({
  initialState: initialState,
  reducer: reducer,
  render: render
});