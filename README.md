# istanbul-react [![Dependency Status](http://img.shields.io/gemnasium/podio/istanbul-react.svg?style=flat-square)](https://gemnasium.com/podio/istanbul-react)
> Instrumenter for 1:1 mapping of React JSX components

# Usage

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

# License

[MIT](LICENSE)
