# cycle shell

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

A programmable web based shell-like interface

## Installation
```
npm install cycle-shell
```

## Usage
```js
import cycle from 'cycle-shell'

cycle(main, {
  welcome: 'Welcome to my shell.'
})

function main (input) {
  return input
}
```

## API

### cycle(update, opts)
Initialize a cycle shell instance. By default, the cycle shell will be placed in the `<body>` of the document.

##### `update`
- type: `function`
- An update function that gets run when the input box is submitted

##### `opts`
- type: `object`

###### welcome
- type: `string`
- A message to be displayed when the shell is first run

###### title
- type: `string`
- The title of the game/application to be displayed next to the input box

###### view
- type: `function`
- The return value from the `main` function gets run through the view function to produce a valid output.

The default view function is set up to handle objects, arrays, strings, numbers, and [vdux](https://github.com/vdux/vdux) components.
```js
const defaultView = (output) => {
  if (typeof (output) !== 'object' || output.props) {
    return output
  } else if (isArray(output)) {
    output.join('\n')
  } else {
    return reduce((arr, item, key) => {
      arr.push(`${key}: ${item}`)
      return arr
    }, [], output).join('\n')
  }
}
```

###### initialState
- type: `object`
- set an initial state for the application

###### middleware
- type: `function || generator`
- Connect custom middleware to cycle shell

### out(msg)
Exposed out action for adding messages to the output log.

##### `msg`
- type: `string`
- A message to be placed in the output log.

[travis-image]: https://img.shields.io/travis/danleavitt0/cycle-shell.svg?style=flat
[travis-url]: https://travis-ci.org/danleavitt0/cycle-shell
[git-image]: https://img.shields.io/github/tag/danleavitt0/cycle-shell.svg?style=flat
[git-url]: https://github.com/danleavitt0/cycle-shell
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/cycle-shell.svg?style=flat
[npm-url]: https://npmjs.org/package/cycle-shell
