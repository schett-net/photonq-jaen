(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[317],{81424:function(e,t,r){"use strict";r.r(t),r.d(t,{aliasAvailable:function(){return b},publishAuth:function(){return w},userGet:function(){return D},usersAdd:function(){return k},usersDelete:function(){return E},usersGet:function(){return M},usersUpdate:function(){return R}});var n=r(94587);function o(e,t,r,n,o,u,a){try{var i=e[u](a),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,u){var a=e.apply(t,r);function i(e){o(a,n,u,i,l,"next",e)}function l(e){o(a,n,u,i,l,"throw",e)}i(void 0)}))}}var a,i=function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(i){u=[6,i],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},l={}.IS_OFFLINE?{}.CODESPACE_NAME?"https://".concat({}.CODESPACE_NAME,"-4050.githubpreview.dev/graphql"):"http://localhost:4050/graphql":"".concat({}.ENDPOINT_URL_IAM),c=(0,n.d)({url:l}),s=(a=u((function(e,t,n){var o,u,a;return i(this,(function(i){switch(i.label){case 0:return o=(null==n?void 0:n.host)||"127.0.0.1",u=(null==n?void 0:n.port)||12e3,[4,Promise.resolve().then(r.t.bind(r,41808,23))];case 1:return a=i.sent(),[2,new Promise((function(r,n){var i=new a.Socket;i.connect(u,o,(function(){var r=JSON.stringify({fnName:e,data:t});i.write(r),i.end()})),i.on("data",(function(e){var t=e.toString();try{console.log(t);var n=JSON.parse(t);r(n)}catch(o){r(t)}finally{i.end()}})),i.on("error",(function(e){n(e)}))}))]}}))})),function(e,t,r){return a.apply(this,arguments)});function f(e,t,r,n,o,u,a){try{var i=e[u](a),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,o)}var p=function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(i){u=[6,i],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},h=c(function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){f(u,n,o,a,i,"next",e)}function i(e){f(u,n,o,a,i,"throw",e)}a(void 0)}))}}((function(e,t){return p(this,(function(t){return console.log("args",e),[2,s("aliasAvailable",e)]}))}));return function(t,r){return e.apply(this,arguments)}}(),{name:"aliasAvailable",decorators:[]}),b=h;function y(e,t,r,n,o,u,a){try{var i=e[u](a),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,o)}var v=function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(i){u=[6,i],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},d=c(function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){y(u,n,o,a,i,"next",e)}function i(e){y(u,n,o,a,i,"throw",e)}a(void 0)}))}}((function(e){return v(this,(function(t){return[2,s("publishAuth",e)]}))}));return function(t){return e.apply(this,arguments)}}(),{name:"publishAuth",decorators:[]}),w=d;function x(e,t,r,n,o,u,a){try{var i=e[u](a),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,o)}var g=function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(i){u=[6,i],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},m=c(function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){x(u,n,o,a,i,"next",e)}function i(e){x(u,n,o,a,i,"throw",e)}a(void 0)}))}}((function(e,t){var r;return g(this,(function(t){switch(t.label){case 0:return console.log("args",e),[4,s("usersAdd",e)];case 1:if(null==(null==(r=t.sent())?void 0:r.userId))throw new Error("UNIQUE constraint failed");return[2,r]}}))}));return function(t,r){return e.apply(this,arguments)}}(),{name:"usersAdd",decorators:[]}),k=m;function _(e,t,r,n,o,u,a){try{var i=e[u](a),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,o)}var P=function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(i){u=[6,i],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},S=c(function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){_(u,n,o,a,i,"next",e)}function i(e){_(u,n,o,a,i,"throw",e)}a(void 0)}))}}((function(e,t){var r;return P(this,(function(t){switch(t.label){case 0:return console.log("args",e),[4,s("usersDelete",e)];case 1:if(!(r=t.sent()))throw new Error("User could not be deleted.");return[2,r]}}))}));return function(t,r){return e.apply(this,arguments)}}(),{name:"usersDelete",decorators:[]}),E=S;function O(e,t,r,n,o,u,a){try{var i=e[u](a),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,o)}var A=function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(i){u=[6,i],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},G=c(function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){O(u,n,o,a,i,"next",e)}function i(e){O(u,n,o,a,i,"throw",e)}a(void 0)}))}}((function(e,t){var r;return A(this,(function(t){switch(t.label){case 0:return console.log("args",e),[4,s("usersGet",e)];case 1:if(r=t.sent(),!Array.isArray(r))throw new Error("Oh no! Something has gone wrong.");return[2,r]}}))}));return function(t,r){return e.apply(this,arguments)}}(),{name:"usersGet",decorators:[]}),M=G;function T(e,t,r,n,o,u,a){try{var i=e[u](a),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,o)}var j=function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(i){u=[6,i],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},N=c(function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){T(u,n,o,a,i,"next",e)}function i(e){T(u,n,o,a,i,"throw",e)}a(void 0)}))}}((function(e,t){return j(this,(function(t){switch(t.label){case 0:return console.log("args",e),[4,s("userGet",e)];case 1:return[2,t.sent()]}}))}));return function(t,r){return e.apply(this,arguments)}}(),{name:"userGet",decorators:[]}),D=N;function C(e,t,r,n,o,u,a){try{var i=e[u](a),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,o)}var I=function(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(i){u=[6,i],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}},U=c(function(){var e=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){C(u,n,o,a,i,"next",e)}function i(e){C(u,n,o,a,i,"throw",e)}a(void 0)}))}}((function(e,t){var r;return I(this,(function(t){switch(t.label){case 0:return console.log("args",e),[4,s("usersUpdate",e)];case 1:if(null==(null==(r=t.sent())?void 0:r.userId))throw new Error("Oh no! Something has gone wrong.");return[4,s("publishAuth",e)];case 2:return t.sent(),[2,r]}}))}));return function(t,r){return e.apply(this,arguments)}}(),{name:"usersUpdate",decorators:[]}),R=U},56690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},89728:function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},41588:function(e,t,r){var n=r(1753);function o(){return"undefined"!=typeof Reflect&&Reflect.get?(e.exports=o=Reflect.get.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,r){var o=n(e,t);if(o){var u=Object.getOwnPropertyDescriptor(o,t);return u.get?u.get.call(arguments.length<3?e:r):u.value}},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(this,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},73808:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},61655:function(e,t,r){var n=r(6015);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},94993:function(e,t,r){var n=r(18698).default,o=r(66115);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},1753:function(e,t,r){var n=r(73808);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n(e)););return e},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=c8f7fe3b0e41be846d5687592cf2018ff6e22687-9b1170f281e6432ccfab.js.map