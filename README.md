# istanbul-react [![Build Status](http://img.shields.io/travis/podio/istanbul-react.svg?style=flat-square)](https://travis-ci.org/podio/istanbul-react) [![Dependency Status](http://img.shields.io/gemnasium/podio/istanbul-react.svg?style=flat-square)](https://gemnasium.com/podio/istanbul-react)
> Instrumenter for 1:1 mapping of React JSX components, can be used with [karma-coverage](https://github.com/karma-runner/karma-coverage)

## Install

```sh
$ npm install --save-dev istanbul-react
```

## Usage

Use with [karma-coverage](https://github.com/karma-runner/karma-coverage#instrumenter)

```js
coverageReporter: {
  instrumenters: { 'istanbul-react' : require('istanbul-react') }
  instrumenter: {
    '**/*.jsx': 'istanbul-react'
  },
  // ...
}
```

You can also just use it directly

```js
var instrumenter = new require('istanbul-react').Instrumenter({});

instrumenter.instrument(content, path, function(err, instrumentedCode) {
  // ...
});
```

## Tests

```sh
$ npm test
```

## License

MIT © [Podio](https://podio.com)
