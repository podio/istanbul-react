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

## Options

You can use `modifyCodeBeforeInstrumentation` to modify code before instrumentation. It might be useful for example to get around chrome bug with [`'use strict';`](https://github.com/podio/istanbul-react/issues/3). It has one argument, which is an object, with two properties `code` - original code, `filename` - name of the file. It must return resulting code, which will be instrumented. In the example below you can see how `'use strict';` is prefixed with semi-colon to work around bug (or feature?) in chrome.

```js
coverageReporter: {
  instrumenters: { 'istanbul-react' : require('istanbul-react') }
  instrumenter: {
    '**/*.jsx': 'istanbul-react'
  },
  instrumenterOptions: {
    'istanbul-react': {
      modifyCodeBeforeInstrumentation: function fixChromeBugWithUseStrict(params) {
        return params.code.replace(/(['"]use strict['"];)/g, ';$1');
      }
    }
  },
  // ...
}
```

## Tests

```sh
$ npm test
```

## License

MIT © [Podio](https://podio.com)
