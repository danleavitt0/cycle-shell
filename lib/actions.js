'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SUBMIT = 'SUBMIT';
var INITIALIZE = 'INITIALIZE';

function initializeApp() {
  return {
    type: 'INITIALIZE'
  };
}

function submit(v, n) {
  return {
    type: SUBMIT,
    payload: {
      verb: v,
      noun: n
    }
  };
}

exports.submit = submit;
exports.initializeApp = initializeApp;
exports.INITIALIZE = INITIALIZE;
exports.SUBMIT = SUBMIT;