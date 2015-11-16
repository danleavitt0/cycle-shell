'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = require('./actions');

var _reduxEphemeral = require('redux-ephemeral');

var _reduxEphemeral2 = _interopRequireDefault(_reduxEphemeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function reducer(update, state, action) {
  switch (action.type) {
    case _actions.INITIALIZE:
      return _extends({}, state, {
        log: [].concat(_toConsumableArray(state.log), [state.user])
      });
    case _actions.SUBMIT:
      var stateCopy = _lodash2.default.clone(state.user, true);
      var _action$payload = action.payload;
      var verb = _action$payload.verb;
      var noun = _action$payload.noun;

      var user = update(stateCopy, verb, noun);
      var prevAction = verb + ' ' + noun;
      return _extends({}, state, {
        user: user,
        log: [].concat(_toConsumableArray(state.log), [_extends({}, user, { action: prevAction })])
      });
  }
  return (0, _reduxEphemeral2.default)(state, action);
}

exports.default = function (update) {
  return reducer.bind(undefined, update);
};