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

var _merge = require('../utils/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTER_KEY = 13;

var SET_TEXT = 'SET_TEXT';
var SET_FOCUS = 'SET_FOCUS';
var REMOVE_FOCUS = 'REMOVE_FOCUS';
var setText = (0, _vduxLocal.localAction)(SET_TEXT);
var setFocus = (0, _vduxLocal.localAction)(SET_FOCUS);
var removeFocus = (0, _vduxLocal.localAction)(REMOVE_FOCUS);

var getStyles = function getStyles() {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px'
    },
    input: {
      padding: '10px',
      width: '80%',
      fontSize: '16px',
      borderRadius: '10px',
      border: '1px solid rgba(51,51,51,0.2)',
      textIndent: '25px',
      transition: 'all .3s ease-in-out',
      outline: 'none'
    },
    caret: {
      transition: 'color .3s ease-in-out',
      position: 'relative',
      color: 'rgba(51,51,51,0.2)',
      left: '25px'
    },
    focusedInput: {
      border: '1px solid rgba(51,51,51,0.7)'
    },
    focusedCaret: {
      color: 'rgba(51,51,51,0.7)'
    }
  };
};

function initialState() {
  return {
    text: '',
    focus: true
  };
}

function render(_ref, childState) {
  var key = _ref.key;
  var state = _ref.state;

  var styles = getStyles();
  var text = state.text;
  var focus = state.focus;

  return (0, _vdomElement2.default)(
    'div',
    { style: styles.container },
    (0, _vdomElement2.default)(
      'div',
      { style: focus ? (0, _merge2.default)(styles.focusedCaret, styles.caret) : styles.caret },
      ' > '
    ),
    (0, _vdomElement2.default)('input', {
      autofocus: true,
      style: focus ? (0, _merge2.default)(styles.focusedInput, styles.input) : styles.input,
      type: 'text',
      value: text,
      'ev-focus': handleFocus,
      'ev-blur': handleBlur,
      'ev-keyup': handleSubmit })
  );

  function handleFocus() {
    return setFocus(key);
  }

  function handleBlur() {
    return removeFocus(key);
  }

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
    case SET_FOCUS:
      return _extends({}, state, {
        focus: true
      });
    case REMOVE_FOCUS:
      return _extends({}, state, {
        focus: false
      });
  }
  return state;
}

exports.default = (0, _vduxLocal2.default)({
  initialState: initialState,
  reducer: reducer,
  render: render
});