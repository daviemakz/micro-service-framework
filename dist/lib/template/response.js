'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var isSuccess = function (a) {
  var b, c, d, e, f, g, h, i;
  return (
    2e3 ===
      (null !==
        (b =
          null === a ||
          void 0 === a ||
          null === (c = a.status) ||
          void 0 === c ||
          null === (d = c.transport) ||
          void 0 === d
            ? void 0
            : d.code) && void 0 !== b
        ? b
        : null === a ||
          void 0 === a ||
          null === (e = a.transport) ||
          void 0 === e
        ? void 0
        : e.code) &&
    200 ===
      (null !==
        (f =
          null === a ||
          void 0 === a ||
          null === (g = a.status) ||
          void 0 === g ||
          null === (h = g.command) ||
          void 0 === h
            ? void 0
            : h.code) && void 0 !== f
        ? f
        : null === a || void 0 === a || null === (i = a.command) || void 0 === i
        ? void 0
        : i.code)
  );
};
function getResponseBody() {
  return {
    status: {
      transport: {
        code: 2e3,
        message: 'Transport completed successfully',
        responseSource: void 0
      },
      command: { code: 200, message: 'Command completed successfully' }
    },
    resultBody: { resData: null, errData: null },
    setResponseSource: function setResponseSource() {
      var a =
          0 < arguments.length && arguments[0] !== void 0
            ? arguments[0]
            : {
                name: process.env.name,
                pid: process.pid,
                instanceId: process.env.instanceId,
                port: parseInt(process.env.port, 10)
              },
        b = a.name,
        c = a.pid,
        d = a.instanceId,
        e = a.port;
      this.status.transport.responseSource = {
        name: b,
        pid: c,
        port: e,
        instanceId: d
      };
    },
    setCommandStatus: function setCommandStatus(a) {
      var b = a.code,
        c = a.message;
      Object.assign(this.status.command, {
        code: b || this.status.command.code,
        message: c || this.status.command.message
      });
    },
    setTransportStatus: function setTransportStatus(a) {
      var b = a.code,
        c = a.message;
      Object.assign(this.status.transport, {
        code: b || this.status.transport.code,
        message: c || this.status.transport.message
      });
    },
    setResData: function setResData(a) {
      this.resultBody.resData = a;
    },
    setErrData: function setErrData(a) {
      this.resultBody.errData = a;
    },
    success: function success(a) {
      var b = a.data,
        c = a.code,
        d = void 0 === c ? 200 : c,
        e = a.message,
        f = void 0 === e ? 'Command completed successfully' : e;
      this.setResponseSource(),
        this.setCommandStatus({ code: d, message: f }),
        this.setResData(b);
    },
    error: function error(a) {
      var b = a.data,
        c = a.code,
        d = void 0 === c ? 400 : c,
        e = a.message,
        f =
          void 0 === e
            ? 'Command executed but an error occurred while processing the request'
            : e;
      this.setResponseSource(),
        this.setCommandStatus({ code: d, message: f }),
        this.setErrData(b);
    },
    getResponse: function getResponse() {
      return {
        status: isSuccess(this),
        transport: this.status.transport,
        command: this.status.command,
        response: this.resultBody.resData,
        error: this.resultBody.errData
      };
    }
  };
}
var _default = getResponseBody;
exports['default'] = _default;
