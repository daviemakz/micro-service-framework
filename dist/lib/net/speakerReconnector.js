'use strict';

var _net = _interopRequireDefault(require("net"));

var _networkBase = _interopRequireDefault(require("./networkBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERR_REQ_REFUSED = -1;
var MAX_WAITERS = 9999999;

var extendsObj = function extendsObj(child, parent) {
  for (var key in parent) {
    if ({}.hasOwnProperty.call(parent, key)) {
      child[key] = parent[key];
    }
  }

  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
  child.__super__ = parent.prototype;
  return child;
};

var SpeakerReconnector = function (_super) {
  extendsObj(SpeakerReconnector, _super);

  function SpeakerReconnector(addresses) {
    var address;

    var _i;

    var _len;

    SpeakerReconnector.__super__.constructor.call(this);

    this.uniqueId = 1;
    this.sockets = [];
    this.waiters = {};
    this.socketIterator = 0;

    for (_i = 0, _len = addresses.length; _i < _len; _i++) {
      address = addresses[_i];
      this.connect(address);
    }
  }

  SpeakerReconnector.prototype.connect = function (address) {
    var host;
    var port;
    var self;
    var socket;

    var _this = this;

    self = this;
    host = this.getHostByAddress(address);
    port = this.getPortByAddress(address);
    socket = new _net.default.Socket();
    socket.uniqueSocketId = this.generateUniqueId();
    socket.setEncoding('utf8');
    socket.setNoDelay(true);
    socket.setMaxListeners(Infinity);
    socket.connect(port, host, function () {
      console.log("Successfully connected on port: ".concat(port));
      return _this.sockets.push(socket);
    });
    socket.on('data', function (data) {
      var message;
      var messageText;

      var _i;

      var _len;

      var _ref;

      var _results;

      _ref = _this.tokenizeData(data);
      _results = [];

      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        messageText = _ref[_i];
        message = JSON.parse(messageText);

        if (!_this.waiters[message.id]) {
          continue;
        }

        _this.waiters[message.id](message.data);

        _results.push(delete _this.waiters[message.id]);
      }

      return _results;
    });
    socket.on('error', function () {});
    return socket.on('close', function () {
      if (!(typeof process.env.exitedProcessPorts === 'string' ? process.env.exitedProcessPorts.split(',') : process.env.exitedProcessPorts).map(function (port) {
        return parseInt(port, 10);
      }).includes(port)) {
        console.log("Attempting to connect to port: ".concat(port));
        var index;
        var sock;

        var _i;

        var _len;

        var _ref;

        index = 0;
        _ref = _this.sockets;

        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          sock = _ref[_i];

          if (sock.uniqueSocketId === socket.uniqueSocketId) {
            break;
          }

          index = index + 1;
        }

        _this.sockets.splice(index, 1);

        socket.destroy();
        return setTimeout(function () {
          return self.connect(address);
        }, 100);
      }
    });
  };

  SpeakerReconnector.prototype.request = function (subject, data, callback) {
    if (callback === null) {
      callback = null;
    }

    return this.send(subject, data, callback);
  };

  SpeakerReconnector.prototype.send = function (subject, data, callback) {
    var messageId;
    var payload;

    if (callback === null) {
      callback = null;
    }

    if (this.sockets.length === 0) {
      if (callback) {
        callback({
          error: ERR_REQ_REFUSED
        });
      }

      return;
    }

    if (!this.sockets[this.socketIterator]) {
      this.socketIterator = 0;
    }

    if (callback) {
      messageId = this.generateUniqueId();
      this.waiters[messageId] = callback;
    }

    payload = this.prepareJsonToSend({
      id: messageId,
      subject: subject,
      data: data
    });
    return this.sockets[this.socketIterator++].write(payload);
  };

  SpeakerReconnector.prototype.shout = function (subject, data) {
    var payload;
    var socket;

    var _i;

    var _len;

    var _ref;

    var _results;

    payload = {
      subject: subject,
      data: data
    };
    _ref = this.sockets;
    _results = [];

    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      socket = _ref[_i];

      _results.push(socket.write(this.prepareJsonToSend(payload)));
    }

    return _results;
  };

  SpeakerReconnector.prototype.generateUniqueId = function () {
    var id;
    var newId;
    id = "id-".concat(this.uniqueId);

    if (!this.waiters[id]) {
      return id;
    }

    if (this.uniqueId++ === MAX_WAITERS) {
      this.uniqueId = 1;
    }

    if (this.waiters[newId = "id-".concat(this.uniqueId)]) {
      delete this.waiters[newId];
    }

    return this.generateUniqueId();
  };

  return SpeakerReconnector;
}(_networkBase.default);

module.exports = SpeakerReconnector;