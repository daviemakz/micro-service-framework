'use strict';Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var assignProp=function(a,b,c){if("string"==typeof c)return Object.assign(a,_defineProperty({},b,c));throw new Error("'destination' must be a string!")};function getCommandBody(){return{destination:void 0,functionName:"",body:null,source:null,conId:null,setDestination:function setDestination(a){assignProp(this,"destination",a)},setFuncName:function setFuncName(a){assignProp(this,"functionName",a)},setBody:function setBody(a){this.body=a},setConnectionId:function setConnectionId(a){this.conId=a},setCommandSource:function setCommandSource(){var a,b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{name:process.env.name||"serviceCore",pid:process.pid,instanceId:process.env.instanceId||null,address:process.env.address?process.env.address:null===this||void 0===this||null===(a=this.settings)||void 0===a?void 0:a.address},c=b.name,d=b.pid,e=b.instanceId,f=b.address;this.source={name:c,pid:d,address:f,instanceId:e}}}}var _default=getCommandBody;exports["default"]=_default;