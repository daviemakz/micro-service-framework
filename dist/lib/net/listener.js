'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _net = _interopRequireDefault(require('net')),
  _networkBase = _interopRequireDefault(require('./networkBase'));
function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}
var extendsObj = function (a, b) {
    function c() {
      this.constructor = a;
    }
    for (var d in b) ({}.hasOwnProperty.call(b, d) && (a[d] = b[d]));
    return (
      (c.prototype = b.prototype),
      (a.prototype = new c()),
      (a.__super__ = b.prototype),
      a
    );
  },
  Listener = (function (a) {
    function b(a) {
      var c = this;
      b.__super__.constructor.call(this),
        (this.remoteMethods = {}),
        (this.host = this.getHostByAddress(a)),
        (this.port = this.getPortByAddress(a)),
        this.startServer(),
        (this.errorFn = function () {
          return c.startServer();
        });
    }
    return (
      extendsObj(b, a),
      (b.prototype.startServer = function () {
        var a = this,
          b = _net['default'].createServer(function (b) {
            return b.on('data', function (c) {
              var d, e, f, g, h, i;
              for (
                h = a.tokenizeData(c), i = [], ((f = 0), (g = h.length));
                f < g;
                f++
              )
                (e = h[f]),
                  (d = JSON.parse(e)),
                  (d.conn = b),
                  (d = a.prepare(d)),
                  i.push(a.dispatch(d));
              return i;
            });
          });
        return (
          b.listen(this.port, this.host),
          b.setMaxListeners(1 / 0),
          b.on('error', function (b) {
            return a.errorFn(b);
          })
        );
      }),
      (b.prototype.onError = function (a) {
        this.errorFn = a;
      }),
      (b.prototype.prepare = function (a) {
        var b = this,
          c = a.subject,
          d = 0;
        return (
          (a.reply = function (c) {
            return a.conn.write(b.prepareJsonToSend({ id: a.id, data: c }));
          }),
          (a.next = function () {
            var e;
            return null === (e = b.remoteMethods[c])
              ? void 0
              : e[d++](a, a.data);
          }),
          a
        );
      }),
      (b.prototype.dispatch = function (a) {
        a.subject;
        return a.next();
      }),
      (b.prototype.on = function () {
        var a, b;
        return (
          (b = arguments[0]),
          (a = 2 <= arguments.length ? [].slice.call(arguments, 1) : []),
          (this.remoteMethods[b] = a)
        );
      }),
      b
    );
  })(_networkBase['default']),
  _default = Listener;
exports['default'] = _default;
