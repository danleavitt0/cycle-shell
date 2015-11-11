'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var verbs = ['north', 'south', 'east', 'west', 'move', 'look'];

var parse = function parse(store) {
  return function (next) {
    return function (action) {
      if (action.type === 'SUBMIT') {
        var parts = action.payload.value.split(' ');
        var match = undefined;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = verbs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var verb = _step.value;

            match = parts[0].trim().toLowerCase() === verb.toLowerCase() ? verb : match;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (match) {
          store.dispatch({
            type: 'UPDATE',
            payload: {
              verb: match,
              noun: parts[1] ? parts[1].toLowerCase : ''
            }
          });
        } else {
          store.dispatch({
            type: 'INVALID'
          });
        }
      }
      return next(action);
    };
  };
};

exports.default = parse;