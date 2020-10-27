'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.createListener = createListener),
  (exports.createSpeaker = createSpeaker),
  (exports.createSpeakerReconnector = createSpeakerReconnector);
var _listener = _interopRequireDefault(require('./listener')),
  _speaker = _interopRequireDefault(require('./speaker')),
  _speakerReconnector = _interopRequireDefault(require('./speakerReconnector'));
function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}
function createListener(a) {
  return new _listener['default'](a);
}
function createSpeaker() {
  for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)
    b[c] = arguments[c];
  var d = 1 <= b.length ? [].slice.call(b, 0) : [];
  return new _speaker['default'](d);
}
function createSpeakerReconnector() {
  for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)
    b[c] = arguments[c];
  var d = 1 <= b.length ? [].slice.call(b, 0) : [];
  return new _speakerReconnector['default'](d);
}
