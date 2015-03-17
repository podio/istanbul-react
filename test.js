'use strict';

var fs = require('fs');
var assert = require('assert');

var Instrumenter = require('./').Instrumenter;

describe('istanbul-react', function(){
  it('should instrument es5 jsx', function(done) {
    var path = 'fixtures/react-es5.jsx';

    var jsx = fs.readFileSync(path, {encoding:'utf8'});

    var instrumenter = new Instrumenter();
    instrumenter.instrument(jsx, path, function (err, instrumentedCode) {
      assert.equal(err, void 0);
      assert.equal(instrumentedCode, "\nvar __cov_TEhtOrl3pQbzvDff90Xx4g = (Function('return this'))();\nif (!__cov_TEhtOrl3pQbzvDff90Xx4g.__coverage__) { __cov_TEhtOrl3pQbzvDff90Xx4g.__coverage__ = {}; }\n__cov_TEhtOrl3pQbzvDff90Xx4g = __cov_TEhtOrl3pQbzvDff90Xx4g.__coverage__;\nif (!(__cov_TEhtOrl3pQbzvDff90Xx4g['fixtures/react-es5.jsx'])) {\n   __cov_TEhtOrl3pQbzvDff90Xx4g['fixtures/react-es5.jsx'] = {\"path\":\"fixtures/react-es5.jsx\",\"s\":{\"1\":0,\"2\":0},\"b\":{},\"f\":{\"1\":0},\"fnMap\":{\"1\":{\"name\":\"(anonymous_1)\",\"line\":2,\"loc\":{\"start\":{\"line\":2,\"column\":10},\"end\":{\"line\":2,\"column\":21}}}},\"statementMap\":{\"1\":{\"start\":{\"line\":1,\"column\":-15},\"end\":{\"line\":5,\"column\":3}},\"2\":{\"start\":{\"line\":3,\"column\":4},\"end\":{\"line\":3,\"column\":71}}},\"branchMap\":{}};\n}\n__cov_TEhtOrl3pQbzvDff90Xx4g = __cov_TEhtOrl3pQbzvDff90Xx4g['fixtures/react-es5.jsx'];\n__cov_TEhtOrl3pQbzvDff90Xx4g.s['1']++;var HelloMessage=React.createClass({displayName:'HelloMessage',render:function(){__cov_TEhtOrl3pQbzvDff90Xx4g.f['1']++;__cov_TEhtOrl3pQbzvDff90Xx4g.s['2']++;return React.createElement('div',null,'Hello ',this.props.name);}});\n");

      done();
    })
  });

  it('should instrument es6 jsx', function(done) {
    var path = 'fixtures/react-es6.jsx';

    var jsx = fs.readFileSync(path, {encoding:'utf8'});

    var instrumenter = new Instrumenter();
    instrumenter.instrument(jsx, path, function (err, instrumentedCode) {
      assert.equal(err, void 0);
      assert.equal(instrumentedCode, "\nvar __cov_FYUMjcew5i0vIy$Xc5RZOA = (Function('return this'))();\nif (!__cov_FYUMjcew5i0vIy$Xc5RZOA.__coverage__) { __cov_FYUMjcew5i0vIy$Xc5RZOA.__coverage__ = {}; }\n__cov_FYUMjcew5i0vIy$Xc5RZOA = __cov_FYUMjcew5i0vIy$Xc5RZOA.__coverage__;\nif (!(__cov_FYUMjcew5i0vIy$Xc5RZOA['fixtures/react-es6.jsx'])) {\n   __cov_FYUMjcew5i0vIy$Xc5RZOA['fixtures/react-es6.jsx'] = {\"path\":\"fixtures/react-es6.jsx\",\"s\":{\"1\":0,\"2\":0,\"3\":0,\"4\":0,\"5\":0,\"6\":0,\"7\":0,\"8\":0,\"9\":1,\"10\":0,\"11\":0,\"12\":0,\"13\":0},\"b\":{\"1\":[0,0],\"2\":[0,0],\"3\":[0,0]},\"f\":{\"1\":0,\"2\":0},\"fnMap\":{\"1\":{\"name\":\"HelloMessage\",\"line\":1,\"loc\":{\"start\":{\"line\":1,\"column\":388},\"end\":{\"line\":1,\"column\":426}}},\"2\":{\"name\":\"(anonymous_2)\",\"line\":2,\"loc\":{\"start\":{\"line\":2,\"column\":95},\"end\":{\"line\":2,\"column\":106}}}},\"statementMap\":{\"1\":{\"start\":{\"line\":1,\"column\":-15},\"end\":{\"line\":1,\"column\":16}},\"2\":{\"start\":{\"line\":1,\"column\":16},\"end\":{\"line\":1,\"column\":170}},\"3\":{\"start\":{\"line\":1,\"column\":57},\"end\":{\"line\":1,\"column\":169}},\"4\":{\"start\":{\"line\":1,\"column\":106},\"end\":{\"line\":1,\"column\":168}},\"5\":{\"start\":{\"line\":1,\"column\":170},\"end\":{\"line\":1,\"column\":245}},\"6\":{\"start\":{\"line\":1,\"column\":245},\"end\":{\"line\":1,\"column\":310}},\"7\":{\"start\":{\"line\":1,\"column\":310},\"end\":{\"line\":1,\"column\":358}},\"8\":{\"start\":{\"line\":1,\"column\":358},\"end\":{\"line\":1,\"column\":403}},\"9\":{\"start\":{\"line\":1,\"column\":388},\"end\":{\"line\":1,\"column\":497}},\"10\":{\"start\":{\"line\":1,\"column\":440},\"end\":{\"line\":1,\"column\":496}},\"11\":{\"start\":{\"line\":1,\"column\":462},\"end\":{\"line\":1,\"column\":495}},\"12\":{\"start\":{\"line\":2,\"column\":2},\"end\":{\"line\":4,\"column\":6}},\"13\":{\"start\":{\"line\":3,\"column\":4},\"end\":{\"line\":3,\"column\":71}}},\"branchMap\":{\"1\":{\"line\":1,\"type\":\"if\",\"locations\":[{\"start\":{\"line\":1,\"column\":42},\"end\":{\"line\":1,\"column\":42}},{\"start\":{\"line\":1,\"column\":42},\"end\":{\"line\":1,\"column\":42}}]},\"2\":{\"line\":1,\"type\":\"cond-expr\",\"locations\":[{\"start\":{\"line\":1,\"column\":219},\"end\":{\"line\":1,\"column\":223}},{\"start\":{\"line\":1,\"column\":224},\"end\":{\"line\":1,\"column\":244}}]},\"3\":{\"line\":1,\"type\":\"if\",\"locations\":[{\"start\":{\"line\":1,\"column\":425},\"end\":{\"line\":1,\"column\":425}},{\"start\":{\"line\":1,\"column\":425},\"end\":{\"line\":1,\"column\":425}}]}}};\n}\n__cov_FYUMjcew5i0vIy$Xc5RZOA = __cov_FYUMjcew5i0vIy$Xc5RZOA['fixtures/react-es6.jsx'];\n__cov_FYUMjcew5i0vIy$Xc5RZOA.s['1']++;var ____Class0=React.Component;__cov_FYUMjcew5i0vIy$Xc5RZOA.s['2']++;for(var ____Class0____Key in ____Class0){__cov_FYUMjcew5i0vIy$Xc5RZOA.s['3']++;if(____Class0.hasOwnProperty(____Class0____Key)){__cov_FYUMjcew5i0vIy$Xc5RZOA.b['1'][0]++;__cov_FYUMjcew5i0vIy$Xc5RZOA.s['4']++;HelloMessage[____Class0____Key]=____Class0[____Class0____Key];}else{__cov_FYUMjcew5i0vIy$Xc5RZOA.b['1'][1]++;}}__cov_FYUMjcew5i0vIy$Xc5RZOA.s['5']++;var ____SuperProtoOf____Class0=____Class0===null?(__cov_FYUMjcew5i0vIy$Xc5RZOA.b['2'][0]++,null):(__cov_FYUMjcew5i0vIy$Xc5RZOA.b['2'][1]++,____Class0.prototype);__cov_FYUMjcew5i0vIy$Xc5RZOA.s['6']++;HelloMessage.prototype=Object.create(____SuperProtoOf____Class0);__cov_FYUMjcew5i0vIy$Xc5RZOA.s['7']++;HelloMessage.prototype.constructor=HelloMessage;__cov_FYUMjcew5i0vIy$Xc5RZOA.s['8']++;HelloMessage.__superConstructor__=____Class0;function HelloMessage(){'use strict';__cov_FYUMjcew5i0vIy$Xc5RZOA.f['1']++;__cov_FYUMjcew5i0vIy$Xc5RZOA.s['10']++;if(____Class0!==null){__cov_FYUMjcew5i0vIy$Xc5RZOA.b['3'][0]++;__cov_FYUMjcew5i0vIy$Xc5RZOA.s['11']++;____Class0.apply(this,arguments);}else{__cov_FYUMjcew5i0vIy$Xc5RZOA.b['3'][1]++;}}__cov_FYUMjcew5i0vIy$Xc5RZOA.s['12']++;Object.defineProperty(HelloMessage.prototype,'render',{writable:true,configurable:true,value:function(){'use strict';__cov_FYUMjcew5i0vIy$Xc5RZOA.f['2']++;__cov_FYUMjcew5i0vIy$Xc5RZOA.s['13']++;return React.createElement('div',null,'Hello ',this.props.name);}});\n");

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

    var instrumenter = new Instrumenter();
    var instrumentedCode = instrumenter.instrumentSync(jsx, path);

    assert.equal(instrumentedCode, "\nvar __cov_TEhtOrl3pQbzvDff90Xx4g = (Function('return this'))();\nif (!__cov_TEhtOrl3pQbzvDff90Xx4g.__coverage__) { __cov_TEhtOrl3pQbzvDff90Xx4g.__coverage__ = {}; }\n__cov_TEhtOrl3pQbzvDff90Xx4g = __cov_TEhtOrl3pQbzvDff90Xx4g.__coverage__;\nif (!(__cov_TEhtOrl3pQbzvDff90Xx4g['fixtures/react-es5.jsx'])) {\n   __cov_TEhtOrl3pQbzvDff90Xx4g['fixtures/react-es5.jsx'] = {\"path\":\"fixtures/react-es5.jsx\",\"s\":{\"1\":0,\"2\":0},\"b\":{},\"f\":{\"1\":0},\"fnMap\":{\"1\":{\"name\":\"(anonymous_1)\",\"line\":2,\"loc\":{\"start\":{\"line\":2,\"column\":10},\"end\":{\"line\":2,\"column\":21}}}},\"statementMap\":{\"1\":{\"start\":{\"line\":1,\"column\":-15},\"end\":{\"line\":5,\"column\":3}},\"2\":{\"start\":{\"line\":3,\"column\":4},\"end\":{\"line\":3,\"column\":71}}},\"branchMap\":{}};\n}\n__cov_TEhtOrl3pQbzvDff90Xx4g = __cov_TEhtOrl3pQbzvDff90Xx4g['fixtures/react-es5.jsx'];\n__cov_TEhtOrl3pQbzvDff90Xx4g.s['1']++;var HelloMessage=React.createClass({displayName:'HelloMessage',render:function(){__cov_TEhtOrl3pQbzvDff90Xx4g.f['1']++;__cov_TEhtOrl3pQbzvDff90Xx4g.s['2']++;return React.createElement('div',null,'Hello ',this.props.name);}});\n");
  });
});
