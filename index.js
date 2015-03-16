var util = require('util');

var istanbul = require('istanbul');

var esprima = require('esprima');
var reactTools = require('react-tools');

function Instrumenter(opt){
  istanbul.Instrumenter.call(this, opt);
}

util.inherits(Instrumenter, istanbul.Instrumenter);

Instrumenter.prototype.instrument = function (content, file, callback) {
  var transformed = reactTools.transformWithDetails(content, {
    sourceMap: true,
    harmony: true
  });

  var program = esprima.parse(transformed.code, {
    loc: true
  });

  try {
    callback(void 0, instrumenter.instrumentASTSync(program, file, content));
  } catch (exception) {
    callback(exception);
  }
};

module.exports = Instrumenter;
