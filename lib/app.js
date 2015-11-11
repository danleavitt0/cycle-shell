'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _virtexElement = require('virtex-element');

var _virtexElement2 = _interopRequireDefault(_virtexElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function app(_ref) {
  var text = _ref.text;

  return (0, _virtexElement2.default)(
    'div',
    null,
    text.map(function (sentence) {
      return (0, _virtexElement2.default)(
        'div',
        null,
        sentence
      );
    }),
    (0, _virtexElement2.default)('input', { onKeyPress: function onKeyPress(e) {
        return handleSubmit(e);
      } })
  );
}

function handleSubmit(e) {
  var value = e.target.value;

  if (e.keyCode === 13) {
    return {
      type: 'SUBMIT',
      payload: {
        value: value
      }
    };
  } else return { type: 'IGNORE' };
}

exports.default = app;