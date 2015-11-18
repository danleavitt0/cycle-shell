'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var parse = function parse(store) {
  return function (next) {
    return function (action) {
      if (action.type === 'SUBMIT') {
        var parts = action.payload.value.split(' ');
        store.dispatch({
          type: 'UPDATE',
          payload: {
            verb: parts[0],
            noun: parts[1] ? parts[1].toLowerCase : ''
          }
        });
      }
      return next(action);
    };
  };
};

exports.default = parse;