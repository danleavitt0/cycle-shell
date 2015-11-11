'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _API = require('./API');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      var _action$payload = action.payload;
      var verb = _action$payload.verb;
      var noun = _action$payload.noun;

      return (0, _API.update)(state, verb, noun);
    case 'INVALID':
      return _extends({}, state, {
        text: [].concat(_toConsumableArray(state.text), ['Invalid verb/noun entry'])
      });
  }
  return state;
}

exports.default = reducer;