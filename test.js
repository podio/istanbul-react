'use strict';

var fs = require('fs');
var assert = require('assert');
var eol = require('eol');

var Instrumenter = require('./').Instrumenter;

describe('istanbul-react', function(){
  it('should instrument es5 jsx', function(done) {
    var path = 'fixtures/react-es5.jsx';

    var jsx = fs.readFileSync(path, {encoding:'utf8'});
    var instrumented = fs.readFileSync(path.replace('jsx', 'instrumented'), {encoding:'utf8'});

    var instrumenter = new Instrumenter();
    instrumenter.instrument(jsx, path, function (err, instrumentedCode) {
      assert.equal(err, void 0);
      assert.equal(eol.auto(instrumentedCode), eol.auto(instrumented));

      done();
    })
  });

  it('should instrument es6 jsx', function(done) {
    var path = 'fixtures/react-es6.jsx';

    var jsx = fs.readFileSync(path, {encoding:'utf8'});
    var instrumented = fs.readFileSync(path.replace('jsx', 'instrumented'), {encoding:'utf8'});

    var instrumenter = new Instrumenter();
    instrumenter.instrument(jsx, path, function (err, instrumentedCode) {
      assert.equal(err, void 0);
      assert.equal(eol.auto(instrumentedCode), eol.auto(instrumented));

      done();
    })
  });

  it('should fail on instrumenting invalid es6 jsx', function(done) {
    var path = 'fixtures/react-es6-invalid.jsx';

    var jsx = fs.readFileSync(path, {encoding:'utf8'});

    try {
      var instrumenter = new Instrumenter();
      instrumenter.instrument(jsx, path, function (err, instrumentedCode) {
        assert.notEqual(err, void 0);
        assert.equal(instrumentedCode, void 0);
      });
    } catch(exception) {
      done();
    }
  });

  it('should instrument sync es6 jsx', function() {
    var path = 'fixtures/react-es5.jsx';

    var jsx = fs.readFileSync(path, {encoding:'utf8'});
    var instrumented = fs.readFileSync(path.replace('jsx', 'instrumented'), {encoding:'utf8'});

    var instrumenter = new Instrumenter();
    var instrumentedCode = instrumenter.instrumentSync(jsx, path);

    assert.equal(eol.auto(instrumentedCode), eol.auto(instrumented));
  });
});
