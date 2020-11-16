'use strict';require("core-js"),require("regenerator-runtime");var _isPortFree=_interopRequireDefault(require("is-port-free")),_isRunning=_interopRequireDefault(require("is-running")),_validator=require("validator"),_net=require("../net"),_common=_interopRequireDefault(require("../common")),_response=_interopRequireDefault(require("../template/response")),_baseMethods=require("./baseMethods"),_request=require("../core/request"),_options=require("../../options");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var standardFunctions=[{name:"echoData",func:_baseMethods.echoData},{name:"noDataRecieved",func:_baseMethods.noDataRecieved},{name:"redirectFailed",func:_baseMethods.redirectFailed}],processManagement=function(){(0,_isRunning["default"])(process.env.parentPid)||setTimeout(function(){return process.exit()},1e3)},MicroServer=function(a){function b(){var a;return _classCallCheck(this,b),a=c.call(this),a.conId=0,a.listnerInterface=void 0,a.speakerInterface=void 0,a.connectionIndex={},a.operations={},a.settings=JSON.parse(process.env.settings),a.options=JSON.parse(process.env.options),a.serviceInfo=JSON.parse(process.env.serviceInfo),process.env.verbose=a.settings.verbose,["assignRequestFunctions","assignProcessListeners","assignFunctions","processRequest","bindService","initListener","initSpeaker"].forEach(function(b){a[b]=a[b].bind(_assertThisInitialized(a))}),setInterval(processManagement,1e3),_asyncToGenerator(regeneratorRuntime.mark(function b(){return regeneratorRuntime.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,b.next=3,a.assignRequestFunctions();case 3:return b.next=5,a.assignFunctions();case 5:return b.next=7,a.assignProcessListeners();case 7:return b.next=9,a.initListener();case 9:return b.next=11,a.initSpeaker();case 11:return b.next=13,a.bindService();case 13:return b.next=15,a.executeInitialFunctions("operations");case 15:return b.abrupt("return",void 0);case 18:throw b.prev=18,b.t0=b["catch"](0),new Error(b.t0);case 21:case"end":return b.stop();}},b,null,[[0,18]])}))(),a.operationScope={request:a.request,requestChain:a.requestChain,sendRequest:a.sendRequest,destroyConnection:a.destroyConnection,operations:a.operations,localStorage:{}},a.microServerAddress=(0,_validator.isNumeric)(process.env.address)?parseInt(process.env.address,10):process.env.address,_possibleConstructorReturn(a,_assertThisInitialized(a))}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"assignRequestFunctions",value:function assignRequestFunctions(){var a=this;return new Promise(function(b){return Object.entries(_objectSpread({},_request.requestOperations)).forEach(function(b){var c=_slicedToArray(b,2),d=c[0],e=c[1];a[d]=e.bind(a)}),b()})}},{key:"assignFunctions",value:function assignFunctions(){var a=this;return new Promise(function(b){return Object.entries(require(process.env.operations)).forEach(function(b){var c=_slicedToArray(b,2),d=c[0],e=c[1];"default"===d&&"object"===_typeof(e)?Object.entries(e).forEach(function(b){var c=_slicedToArray(b,2),d=c[0],e=c[1];a.operations[d]=e.bind(a.operationScope)}):a.operations[d]=e.bind(a.operationScope)}),standardFunctions.forEach(function(b){var c=b.name,d=b.func;a.operations[c]=d.bind(a.operationScope)}),b()})}},{key:"assignProcessListeners",value:function assignProcessListeners(){var a=this,b=function(b){var c=new _response["default"];c.setResponseSource(),c.setTransportStatus({code:5006,message:"Micro service process exited unexpectedly. CODE: ".concat(b)}),c.setCommandStatus({code:500,message:"Command not executed, transport failure"}),c.setErrData({entity:"Unknown error",action:"Micro service process exited unexpectedly. CODE: ".concat(b),originalData:null}),Object.values(a.connectionIndex).forEach(function(a){a.reply(c),a.conn.destroy()})};return new Promise(function(a){return _options.eventList.forEach(function(a){process.on(a,b)}),process.on("exit",b),a()})}},{key:"initListener",value:function initListener(){var a=this,b=function(b,c){return(a.log("Starting service on address: ".concat(a.microServerAddress),"log"),a.listnerInterface=(0,_net.createListener)(a.microServerAddress),!a.listnerInterface)?(a.log("Unable to start micro service!","log"),c(Error("Unable to start micro service!"))):(a.log("Service started successfully!","log"),b(!0))};return new Promise(function(c,d){"number"==typeof a.microServerAddress?(0,_isPortFree["default"])(a.microServerAddress).then(b(c,d))["catch"](function(b){return a.log(b,"error"),a.log("Service port \"".concat(a.microServerAddress,"\" not free or unknown error has occurred. MORE INFO: ").concat(JSON.stringify(b,null,2)),"error"),d(Error("Service port \"".concat(a.microServerAddress,"\" not free or unknown error has occurred. MORE INFO: ").concat(JSON.stringify(b,null,2))))}):b(c,d)})}},{key:"initSpeaker",value:function initSpeaker(){var a=this;return new Promise(function(b){return a.log("Connecting to service core on address: ".concat(a.settings.address),"log"),a.speakerInterface=(0,_net.createSpeakerReconnector)(a.settings.address),a.speakerInterface||a.log("Unable to connect to service core! Process will attempt to connect manually next time!","log"),b(!0)})}},{key:"bindService",value:function bindService(){var a=this;return new Promise(function(b){return a.listnerInterface.on("SERVICE_REQUEST",function(b,c){return a.log("[".concat(a.conId,"] Micro service connection request received")),a.connectionIndex=_defineProperty({},a.conId,b),c?a.processRequest(b,c):a.operations.noDataRecieved(b,c),a.log("[".concat(a.conId,"] Micro service connection request processed!")),void(a.conId+=1)}),a.listnerInterface.on("SERVICE_KILL",function(b){var c=new _response["default"];if(a.log("[".concat(a.conId,"] Micro service connection request received")),a.connectionIndex=_defineProperty({},a.conId,b),a.log("[".concat(a.conId,"] Micro service connection request processed, kill command recieved!")),a.conId+=1,c.setResponseSource(),c.setTransportStatus({code:2e3,message:"Micro service process has exited!"}),c.setCommandStatus({code:200,message:"Command completed successfully"}),b.reply(c),null===a||void 0===a?void 0:a.speakerInterface){var d;null===a||void 0===a||null===(d=a.speakerInterface)||void 0===d?void 0:d.conn.destroy()}return process.exit()}),b()})}},{key:"processRequest",value:function processRequest(a,b){var c=b.data,d=c.functionName,e=this.buildResponseFunctions(a,b,this.operationScope);return Object.prototype.hasOwnProperty.call(this.operations,d)?this.operations[d](e):this.operations.redirectFailed(e)}}]),b}(_common["default"]);new MicroServer;