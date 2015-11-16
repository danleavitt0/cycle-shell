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
    header: {
      height: '64px',
      padding: '0 10%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'tomato',
      boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)',
      color: '#ffffff'
    },
    title: {
      fontSize: '26px',
      flex: '1'
    }
  };
};

function render(props, childState) {
  var styles = getStyles();
  var title = props.title;
  var score = props.score;

  return (0, _vdomElement2.default)(
    'div',
    { style: styles.header },
    (0, _vdomElement2.default)(
      'div',
      { style: styles.title },
      ' ',
      title && title,
      ' '
    ),
    (0, _vdomElement2.default)(
      'div',
      { style: styles.score },
      ' score: ',
      score,
      ' '
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