"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[35],{91645:function(e,t,r){var n=r(64836);t.Z=void 0;var i=n(r(64198)),a=r(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");t.Z=o},70292:function(e,t,r){var n=r(64836);t.Z=void 0;var i=n(r(64198)),a=r(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");t.Z=o},45658:function(e){var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],i(r),i(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},i=n.exec(e);i;){try{r[i[0]]=decodeURIComponent(i[0])}catch(t){var o=a(i[0]);o!==i[0]&&(r[i[0]]=o)}i=n.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),s=0;s<c.length;s++){var l=c[s];e=e.replace(new RegExp(l,"g"),r[l])}return e}(e)}}},83297:function(e){e.exports=function(e,t){for(var r={},n=Object.keys(e),i=Array.isArray(t),a=0;a<n.length;a++){var o=n[a],c=e[o];(i?-1!==t.indexOf(o):t(o,c,e))&&(r[o]=c)}return r}},82163:function(e,t,r){var n=r(27424),i=r(861);function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=r(94159),s=r(45658),l=r(90187),u=r(83297);function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function p(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function m(e,t){return t.decode?s(e):e}function f(e){return Array.isArray(e)?e.sort():"object"==typeof e?f(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function h(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function g(e){var t=(e=h(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function v(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function b(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var i="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!i&&m(r,e).includes(e.arrayFormatSeparator);r=a?m(r,e):r;var o=i||a?r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===r?r:m(r,e);n[t]=o};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),i=Object.create(null);if("string"!=typeof e)return i;if(!(e=e.trim().replace(/^[?#&]/,"")))return i;var o,c=a(e.split("&"));try{for(c.s();!(o=c.n()).done;){var s=o.value;if(""!==s){var u=l(t.decode?s.replace(/\+/g," "):s,"="),p=n(u,2),h=p[0],g=p[1];g=void 0===g?null:["comma","separator"].includes(t.arrayFormat)?g:m(g,t),r(m(h,t),g,i)}}}catch(N){c.e(N)}finally{c.f()}for(var b=0,Z=Object.keys(i);b<Z.length;b++){var x=Z[b],y=i[x];if("object"==typeof y&&null!==y)for(var C=0,S=Object.keys(y);C<S.length;C++){var w=S[C];y[w]=v(y[w],t)}else i[x]=v(y,t)}return!1===t.sort?i:(!0===t.sort?Object.keys(i).sort():Object.keys(i).sort(t.sort)).reduce((function(e,t){var r=i[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=f(r):e[t]=r,e}),Object.create(null))}t.extract=g,t.parse=b,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[p(t,e),"[",a,"]"].join("")]:[[p(t,e),"[",p(a,e),"]=",p(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[[p(t,e),"[]"].join("")]:[[p(t,e),"[]=",p(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(r,n){return null==n||0===n.length?r:0===r.length?[[p(t,e),"=",p(n,e)].join("")]:[[r,p(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(i(r),null===n?[p(t,e)]:[[p(t,e),"=",p(n,e)].join("")])}}}}(t),a={},o=0,c=Object.keys(e);o<c.length;o++){var s=c[o];r(s)||(a[s]=e[s])}var l=Object.keys(a);return!1!==t.sort&&l.sort(t.sort),l.map((function(r){var i=e[r];return void 0===i?"":null===i?p(r,t):Array.isArray(i)?i.reduce(n(r),[]).join("&"):p(r,t)+"="+p(i,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),i=n(r,2),a=i[0],o=i[1];return Object.assign({url:a.split("?")[0]||"",query:b(g(e),t)},t&&t.parseFragmentIdentifier&&o?{fragmentIdentifier:m(o,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign({encode:!0,strict:!0},r);var n=h(e.url).split("?")[0]||"",i=t.extract(e.url),a=t.parse(i,{sort:!1}),o=Object.assign(a,e.query),c=t.stringify(o,r);c&&(c="?".concat(c));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(p(e.fragmentIdentifier,r))),"".concat(n).concat(c).concat(s)},t.pick=function(e,r,n){n=Object.assign({parseFragmentIdentifier:!0},n);var i=t.parseUrl(e,n),a=i.url,o=i.query,c=i.fragmentIdentifier;return t.stringifyUrl({url:a,query:u(o,r),fragmentIdentifier:c},n)},t.exclude=function(e,r,n){var i=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,i,n)}},90187:function(e){e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},94159:function(e){e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},71460:function(e,t,r){r.r(t),r.d(t,{default:function(){return ke}});var n=r(67294),i=r(15861),a=r(64687),o=r.n(a),c=r(8304),s=r(99052),l=r(84664),u=r(67925),d=r(27156),p=r(8161),m=r(80557),f=r(82163),h=function(){var e=(0,n.useState)({}),t=e[0],r=e[1],i="undefined"!=typeof document;return(0,n.useEffect)((function(){i&&r(document.location.search?f.parse(document.location.search):{})}),i?[document.location.search]:[]),t},g=r(69260),v=r(31030),b=r(62771),Z=r(21770),x=r(70292),y=r(25483),C=r(88837);function S(e){var t=e.children,r=e.onClick,i=e.actions,a=e.isDisabled,o=(0,n.useState)(!1),c=o[0],s=o[1],l=n.useState(null),u=l[0],d=l[1];return(0,C.BX)("div",{className:"flex items-center h-full",children:[(0,C.tZ)(Z.Z,{disabled:a,onClick:r,style:{borderTopRightRadius:0,borderBottomRightRadius:0},variant:"contained",children:t}),(0,C.tZ)(Z.Z,{disabled:a,onClick:function(e){d(u?null:e.currentTarget),s((function(e){return!e}))},size:"large",style:{minWidth:20,minHeight:36.5,padding:0,borderTopLeftRadius:0,borderBottomLeftRadius:0},variant:"contained",children:(0,C.tZ)(x.Z,{})}),(0,C.tZ)(y.Z,{isOpen:c,setIsOpen:s,anchorEl:u,actions:i})]})}var w=r(85934),N=r(2585);function k(e){var t=e.children,r=e.color,n=e.className,i=e.withPadding;return(0,C.tZ)(w.Z,{className:(0,N.Z)(n,{"p-4":i}),style:{backgroundColor:r},children:t})}var j=r(92544);function B(e){var t=e.header,r=(0,l.$)().t;return(0,C.tZ)("h2",{className:"font-bold text-white text-xl",children:r(t)})}var O=r(4942),R=r(63366),_=r(87462),E=r(50565),q=r(62915),I=r(21672),X=r(69114),A=r(25309),D=r(18362),z=r(57893);function F(e){return(0,D.Z)("MuiButtonGroup",e)}var M=(0,z.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),T=r(9503),Q=r(85893),P=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],L=(0,X.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,O.Z)({},"& .".concat(M.grouped),t.grouped),(0,O.Z)({},"& .".concat(M.grouped),t["grouped".concat((0,I.Z)(r.orientation))]),(0,O.Z)({},"& .".concat(M.grouped),t["grouped".concat((0,I.Z)(r.variant))]),(0,O.Z)({},"& .".concat(M.grouped),t["grouped".concat((0,I.Z)(r.variant)).concat((0,I.Z)(r.orientation))]),(0,O.Z)({},"& .".concat(M.grouped),t["grouped".concat((0,I.Z)(r.variant)).concat((0,I.Z)(r.color))]),t.root,t[r.variant],!0===r.disableElevation&&t.disableElevation,r.fullWidth&&t.fullWidth,"vertical"===r.orientation&&t.vertical]}})((function(e){var t=e.theme,r=e.ownerState;return(0,_.Z)({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius},"contained"===r.variant&&{boxShadow:(t.vars||t).shadows[2]},r.disableElevation&&{boxShadow:"none"},r.fullWidth&&{width:"100%"},"vertical"===r.orientation&&{flexDirection:"column"},(0,O.Z)({},"& .".concat(M.grouped),(0,_.Z)({minWidth:40,"&:not(:first-of-type)":(0,_.Z)({},"horizontal"===r.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===r.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===r.variant&&"horizontal"===r.orientation&&{marginLeft:-1},"outlined"===r.variant&&"vertical"===r.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,_.Z)({},"horizontal"===r.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===r.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===r.variant&&"horizontal"===r.orientation&&{borderRight:t.vars?"1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===r.variant&&"vertical"===r.orientation&&{borderBottom:t.vars?"1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===r.variant&&"inherit"!==r.color&&{borderColor:t.vars?"rgba(".concat(t.vars.palette[r.color].mainChannel," / 0.5)"):(0,q.Fq)(t.palette[r.color].main,.5)},"outlined"===r.variant&&"horizontal"===r.orientation&&{borderRightColor:"transparent"},"outlined"===r.variant&&"vertical"===r.orientation&&{borderBottomColor:"transparent"},"contained"===r.variant&&"horizontal"===r.orientation&&(0,O.Z)({borderRight:"1px solid ".concat((t.vars||t).palette.grey[400])},"&.".concat(M.disabled),{borderRight:"1px solid ".concat((t.vars||t).palette.action.disabled)}),"contained"===r.variant&&"vertical"===r.orientation&&(0,O.Z)({borderBottom:"1px solid ".concat((t.vars||t).palette.grey[400])},"&.".concat(M.disabled),{borderBottom:"1px solid ".concat((t.vars||t).palette.action.disabled)}),"contained"===r.variant&&"inherit"!==r.color&&{borderColor:(t.vars||t).palette[r.color].dark},{"&:hover":(0,_.Z)({},"outlined"===r.variant&&"horizontal"===r.orientation&&{borderRightColor:"currentColor"},"outlined"===r.variant&&"vertical"===r.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,_.Z)({},"contained"===r.variant&&{boxShadow:"none"})},"contained"===r.variant&&{boxShadow:"none"})))})),U=n.forwardRef((function(e,t){var r=(0,A.Z)({props:e,name:"MuiButtonGroup"}),i=r.children,a=r.className,o=r.color,c=void 0===o?"primary":o,s=r.component,l=void 0===s?"div":s,u=r.disabled,d=void 0!==u&&u,p=r.disableElevation,m=void 0!==p&&p,f=r.disableFocusRipple,h=void 0!==f&&f,g=r.disableRipple,v=void 0!==g&&g,b=r.fullWidth,Z=void 0!==b&&b,x=r.orientation,y=void 0===x?"horizontal":x,C=r.size,S=void 0===C?"medium":C,w=r.variant,k=void 0===w?"outlined":w,j=(0,R.Z)(r,P),B=(0,_.Z)({},r,{color:c,component:l,disabled:d,disableElevation:m,disableFocusRipple:h,disableRipple:v,fullWidth:Z,orientation:y,size:S,variant:k}),O=function(e){var t=e.classes,r=e.color,n=e.disabled,i=e.disableElevation,a=e.fullWidth,o=e.orientation,c=e.variant,s={root:["root",c,"vertical"===o&&"vertical",a&&"fullWidth",i&&"disableElevation"],grouped:["grouped","grouped".concat((0,I.Z)(o)),"grouped".concat((0,I.Z)(c)),"grouped".concat((0,I.Z)(c)).concat((0,I.Z)(o)),"grouped".concat((0,I.Z)(c)).concat((0,I.Z)(r)),n&&"disabled"]};return(0,E.Z)(s,F,t)}(B),q=n.useMemo((function(){return{className:O.grouped,color:c,disabled:d,disableElevation:m,disableFocusRipple:h,disableRipple:v,fullWidth:Z,size:S,variant:k}}),[c,d,m,h,v,Z,S,k,O.grouped]);return(0,Q.jsx)(L,(0,_.Z)({as:l,role:"group",className:(0,N.Z)(O.root,a),ref:t,ownerState:B},j,{children:(0,Q.jsx)(T.Z.Provider,{value:q,children:i})}))})),$=r(91747),W=r(52179);function V(e){var t=e.src,r=e.normal,i=e.onError,a=(0,n.useState)(t),o=a[0],c=a[1];return(0,n.useLayoutEffect)((function(){c(t)}),[t]),(0,C.tZ)("img",{alt:"Configuration Image",src:o,onError:function(){return null==i?void 0:i(c)},style:{filter:r?"":"invert(100%) sepia(0%) saturate(7500%) hue-rotate(63deg) brightness(103%) contrast(103%)"}})}function H(e){var t=e.setExperiment,r=e.experiment,n=e.inputsDisabled,i=(0,l.$)().t,a=function(e){return r.ComputeSettings.clusterState.amountQubits===e?"contained":void 0},o=function(e){var t=u.O.find((function(e){return e.csp_number_of_qubits===r.ComputeSettings.clusterState.amountQubits&&e.csp_preset_settings_name===r.ComputeSettings.clusterState.presetSettings}));return t?"/circuitConfig/"+(e?"csp_preset_settings_svg":"csp_cluster_state")+"/"+(e?t.csp_preset_settings_svg:t.csp_cluster_state):""};return(0,C.BX)(k,{className:"flex space-x-10",withPadding:!0,color:j.secondaryDark,children:[(0,C.BX)("div",{className:"space-y-6 w-1/2",children:[(0,C.BX)("div",{children:[(0,C.tZ)(B,{header:"Cluster State Preparation"}),(0,C.tZ)("p",{className:"text-white",children:i("Choose your preferred number of qubits and preset settings to prepare the cluster state.")})]}),(0,C.BX)("div",{className:"space-y-2",children:[(0,C.tZ)("h3",{className:"text-white font-bold",children:i("Number of Qubits")}),(0,C.tZ)(U,{children:[2,3,4].map((function(e){return n||4!==e&&r.ComputeSettings.clusterState.presetSettings===m.Z.Ghz?r.ComputeSettings.clusterState.amountQubits===e?(0,C.tZ)(Z.Z,{variant:"contained",children:e},e):(0,C.tZ)(Z.Z,{variant:"outlined",children:e},e):(0,C.tZ)(Z.Z,{onClick:function(){return function(e){r.ComputeSettings.clusterState.presetSettings!==m.Z.Ghz&&t((function(t){return Object.assign({},t,{ComputeSettings:Object.assign({},t.ComputeSettings,{clusterState:Object.assign({},t.ComputeSettings.clusterState,{amountQubits:e})})})}))}(e)},variant:a(e),children:e},e)}))})]}),(0,C.BX)("div",{className:"space-y-2",children:[(0,C.tZ)("h3",{className:"text-white font-bold",children:i("Preset Settings")}),(0,C.BX)("div",{className:"flex space-x-1 items-center",children:[n?(0,C.tZ)(Z.Z,{variant:"outlined",children:r.ComputeSettings.clusterState.presetSettings}):(0,C.tZ)($.Z,{size:"small",className:"bg-primaryDark",color:"primary",defaultValue:m.Z.Linear,style:{color:"white"},value:r.ComputeSettings.clusterState.presetSettings,onChange:function(e){return r=e.target.value,void t((function(e){return Object.assign({},e,{ComputeSettings:Object.assign({},e.ComputeSettings,{clusterState:{amountQubits:r===m.Z.Ghz?4:e.ComputeSettings.clusterState.amountQubits,presetSettings:r}})})}));var r},children:Object.values(m.Z).map((function(e,t){return(0,C.tZ)(W.Z,{value:e,children:i(("ghz"!==e?e.substring(0,1).toUpperCase()+e.substring(1):e.toUpperCase())+" Cluster")},t)}))}),(0,C.tZ)("img",{className:"max-h-8",src:o(!0),alt:"Cluster State configuration image"})]})]})]}),(0,C.BX)("div",{className:"flex flex-col justify-center text-white space-y-4",children:[(0,C.tZ)("h3",{className:"font-bold text-lg",children:i("Cluster State")}),(0,C.tZ)("div",{className:"border border-gray-500 p-2",children:(0,C.tZ)(V,{src:o()})})]})]})}var G=r(91645);function Y(){var e=(0,l.$)().t;return(0,C.BX)("div",{className:"flex space-x-10",children:[(0,C.tZ)(k,{withPadding:!0,className:"w-full relative",color:j.secondaryDark,children:(0,C.BX)("div",{className:"w-full text-white space-y-4",children:[(0,C.tZ)(B,{header:"Source"}),(0,C.BX)("div",{className:"flex",children:[(0,C.BX)("div",{className:"flex space-x-16 mr-10",children:[(0,C.BX)("div",{children:[(0,C.tZ)("p",{children:e("Wavelength")}),(0,C.tZ)("p",{children:e("Single Photon Rate")}),(0,C.tZ)("p",{children:e("Brightness")})]}),(0,C.BX)("div",{children:[(0,C.tZ)("p",{children:"925.00 nm"}),(0,C.tZ)("p",{children:"16.00 MHz"}),(0,C.tZ)("p",{children:"20.00%"})]}),(0,C.BX)("div",{children:[(0,C.tZ)("p",{children:e("Purity")}),(0,C.tZ)("p",{children:e("Indistinguishable")}),(0,C.tZ)("p",{children:e("Temperature")})]}),(0,C.BX)("div",{children:[(0,C.tZ)("p",{children:"95.00%"}),(0,C.tZ)("p",{children:"90.00%"}),(0,C.tZ)("p",{children:"4.00 K"})]})]}),(0,C.tZ)("embed",{src:"/images/demultiplexer-editor.svg"})]}),(0,C.tZ)("div",{className:"absolute -right-9 top-1/2 transform -translate-y-1/2",children:(0,C.tZ)(G.Z,{color:"primary",sx:{height:"2.20em"},fontSize:"large"})})]})}),(0,C.BX)(k,{withPadding:!0,className:"w-full space-y-3",color:j.secondaryDark,children:[(0,C.tZ)(B,{header:"Demultiplexer"}),(0,C.tZ)("p",{className:"text-white",children:e("The demultiplexer is a combination logic circuit designed to switch one common input line to one of several separate output line.")})]})]})}var K=r(23773);function J(e){return(0,D.Z)("MuiSwitch",e)}var ee=(0,z.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),te=["className","color","edge","size","sx"],re=(0,X.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.edge&&t["edge".concat((0,I.Z)(r.edge))],t["size".concat((0,I.Z)(r.size))]]}})((function(e){var t,r=e.ownerState;return(0,_.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===r.edge&&{marginLeft:-8},"end"===r.edge&&{marginRight:-8},"small"===r.size&&(t={width:40,height:24,padding:7},(0,O.Z)(t,"& .".concat(ee.thumb),{width:16,height:16}),(0,O.Z)(t,"& .".concat(ee.switchBase),(0,O.Z)({padding:4},"&.".concat(ee.checked),{transform:"translateX(16px)"})),t))})),ne=(0,X.ZP)(K.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var r=e.ownerState;return[t.switchBase,(0,O.Z)({},"& .".concat(ee.input),t.input),"default"!==r.color&&t["color".concat((0,I.Z)(r.color))]]}})((function(e){var t,r=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:r.vars?r.vars.palette.Switch.defaultColor:"".concat("light"===r.palette.mode?r.palette.common.white:r.palette.grey[300]),transition:r.transitions.create(["left","transform"],{duration:r.transitions.duration.shortest})},(0,O.Z)(t,"&.".concat(ee.checked),{transform:"translateX(20px)"}),(0,O.Z)(t,"&.".concat(ee.disabled),{color:r.vars?r.vars.palette.Switch.defaultDisabledColor:"".concat("light"===r.palette.mode?r.palette.grey[100]:r.palette.grey[600])}),(0,O.Z)(t,"&.".concat(ee.checked," + .").concat(ee.track),{opacity:.5}),(0,O.Z)(t,"&.".concat(ee.disabled," + .").concat(ee.track),{opacity:r.vars?r.vars.opacity.switchTrackDisabled:"".concat("light"===r.palette.mode?.12:.2)}),(0,O.Z)(t,"& .".concat(ee.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,r=e.theme,n=e.ownerState;return(0,_.Z)({"&:hover":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.action.activeChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,q.Fq)(r.palette.action.active,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(t={},(0,O.Z)(t,"&.".concat(ee.checked),(0,O.Z)({color:(r.vars||r).palette[n.color].main,"&:hover":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette[n.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,q.Fq)(r.palette[n.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(ee.disabled),{color:r.vars?r.vars.palette.Switch["".concat(n.color,"DisabledColor")]:"".concat("light"===r.palette.mode?(0,q.$n)(r.palette[n.color].main,.62):(0,q._j)(r.palette[n.color].main,.55))})),(0,O.Z)(t,"&.".concat(ee.checked," + .").concat(ee.track),{backgroundColor:(r.vars||r).palette[n.color].main}),t))})),ie=(0,X.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),ae=(0,X.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),oe=n.forwardRef((function(e,t){var r=(0,A.Z)({props:e,name:"MuiSwitch"}),n=r.className,i=r.color,a=void 0===i?"primary":i,o=r.edge,c=void 0!==o&&o,s=r.size,l=void 0===s?"medium":s,u=r.sx,d=(0,R.Z)(r,te),p=(0,_.Z)({},r,{color:a,edge:c,size:l}),m=function(e){var t=e.classes,r=e.edge,n=e.size,i=e.color,a=e.checked,o=e.disabled,c={root:["root",r&&"edge".concat((0,I.Z)(r)),"size".concat((0,I.Z)(n))],switchBase:["switchBase","color".concat((0,I.Z)(i)),a&&"checked",o&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},s=(0,E.Z)(c,J,t);return(0,_.Z)({},t,s)}(p),f=(0,Q.jsx)(ae,{className:m.thumb,ownerState:p});return(0,Q.jsxs)(re,{className:(0,N.Z)(m.root,n),sx:u,ownerState:p,children:[(0,Q.jsx)(ne,(0,_.Z)({type:"checkbox",icon:f,checkedIcon:f,ref:t,ownerState:p},d,{classes:(0,_.Z)({},m,{root:m.switchBase})})),(0,Q.jsx)(ie,{className:m.track,ownerState:p})]})})),ce=r(56531),se=r(4722),le=r(99911);function ue(e){var t=e.iconsSrc,r=e.value,n=e.setValue,i=e.isDisabled,a=e.unit;return(0,C.BX)("div",{className:"flex items-center space-x-2",children:[(0,C.tZ)("embed",{src:t}),(0,C.tZ)(le.Z,{inputProps:{style:{color:"white"},step:.1},InputProps:{endAdornment:a,style:{color:i?"":"white"}},type:"number",value:r,disabled:i,size:"small",onChange:function(e){n(e.target.value.replace(",","."))},color:"primary",className:(0,N.Z)({"bg-primaryDark rounded-sm":!i})})]})}var de=["/images/alpha.svg","/images/beta.svg","/images/gamma.svg"],pe=["alpha","beta","gamma"];function me(e){var t=e.setExperiment,r=e.experiment,i=e.inputsDisabled,a=e.currentConfig,o=(0,l.$)().t,c=(0,n.useState)(!0),s=c[0],d=c[1],p=(0,n.useMemo)((function(){return u.O.filter((function(e){return e.csp_number_of_qubits===r.ComputeSettings.clusterState.amountQubits&&e.csp_preset_settings_name===r.ComputeSettings.clusterState.presetSettings&&(s?e.qc_circuit_model&&e.qc_circuit_conf:e.qc_encoded_onoff===Number(s))}))}),[r.ComputeSettings.clusterState,s]),f=function(e){var t;return(null===(t=r.ComputeSettings.qubitComputing.circuitAngles.find((function(t){return t.circuitAngleName===e})))||void 0===t?void 0:t.circuitAngleValue)||"0"},h=function(){t((function(e){return Object.assign({},e,{withQubitConfig:s,ComputeSettings:Object.assign({},e.ComputeSettings,{qubitComputing:Object.assign({},e.ComputeSettings.qubitComputing,{circuitAngles:Array.from({length:((null==a?void 0:a.csp_number_of_qubits)||0)-((null==a?void 0:a.qc_encoded_qubits)||0)}).map((function(e,t){return{circuitAngleName:pe[t],circuitAngleValue:0}}))})})})}))};return(0,n.useEffect)((function(){i||r.status!==m.F.DRAFT||t((function(e){return Object.assign({},e,{circuitId:p[0].circuit_id})}))}),[p,t,i,r.status]),(0,n.useEffect)((function(){i||r.status!==m.F.DRAFT||h()}),[a]),(0,C.BX)(k,{withPadding:!0,color:j.secondaryDark,className:"relative space-y-6",children:[(0,C.tZ)("div",{className:"flex text-white",children:(0,C.BX)("div",{children:[(0,C.BX)("div",{className:"flex items-center space-x-5",children:[(0,C.tZ)(B,{header:"Qubit Computing"}),(0,C.BX)("div",{className:"flex items-center space-x-2",children:[(0,C.tZ)(oe,{disabled:i,checked:s,onChange:function(){s?t((function(e){return Object.assign({},e,{ComputeSettings:Object.assign({},e.ComputeSettings,{qubitComputing:Object.assign({},e.ComputeSettings.qubitComputing,{circuitAngles:[]})})})})):h(),d(!s)}}),(0,C.tZ)("p",{children:s?"On":"Off"})]})]}),(0,C.tZ)("p",{children:o("Implement different quantum circuits by rearranging the prepared cluster state.")})]})}),p.length&&s&&(0,C.BX)("div",{className:"flex space-x-10 text-white",children:[(0,C.BX)("div",{className:"space-y-3 w-1/2",children:[(0,C.tZ)("h3",{className:"font-bold",children:o("Circuit Configuration")}),(0,C.BX)("div",{className:"flex space-x-6",children:[(0,C.tZ)("div",{children:(0,C.tZ)(fe,{inputsDisabled:i,currentConfig:a,configs:p,setCurrentConfig:function(e){t((function(t){return Object.assign({},t,{circuitId:e.circuit_id})}))}})}),(0,C.BX)("div",{children:[(0,C.tZ)("p",{children:o("Encoded quibts:")+" "+((null==a?void 0:a.qc_encoded_qubits)||"0")}),(0,C.tZ)("p",{children:o("CPhase gates:")+" "+((null==a?void 0:a.qc_cphase_gates)||"0")}),(0,C.tZ)("div",{className:"space-y-3 mt-2",children:Array.from({length:((null==a?void 0:a.csp_number_of_qubits)||0)-((null==a?void 0:a.qc_encoded_qubits)||0)}).map((function(e,r){return i?(0,C.BX)("div",{className:"flex space-x-2",children:[(0,C.tZ)("img",{src:de[r]}),(0,C.tZ)("p",{className:"text-white",children:f(pe[r])+"°"})]}):(0,C.tZ)(ue,{unit:"°",iconsSrc:de[r],value:""+f(pe[r]),setValue:function(e){!function(e,r){t((function(t){return Object.assign({},t,{ComputeSettings:Object.assign({},t.ComputeSettings,{qubitComputing:Object.assign({},t.ComputeSettings.qubitComputing,{circuitAngles:t.ComputeSettings.qubitComputing.circuitAngles.map((function(t){return t.circuitAngleName===r?Object.assign({},t,{circuitAngleValue:Math.min(Math.abs(Number(e)),360)}):t}))})})})}))}(e,pe[r])}},r)}))})]})]})]}),(0,C.BX)("div",{className:"flex flex-col justify-center text-white space-y-4",children:[(0,C.tZ)("h3",{className:"font-bold text-lg",children:o("Circuit")}),(0,C.tZ)("div",{className:"border border-gray-500 p-2",children:(0,C.tZ)(V,{normal:!0,src:"/circuitConfig/qc_circuit_model/"+(null==a?void 0:a.qc_circuit_model)})})]})]})]})}function fe(e){var t=e.configs,r=e.currentConfig,i=e.setCurrentConfig,a=e.inputsDisabled,o=(0,n.useState)(null),c=o[0],s=o[1],l=function(e){return e?"/circuitConfig/qc_circuit_conf/"+e.qc_circuit_conf:""},u=(0,n.useCallback)((function(){var e={1:[],2:[],3:[],4:[]};return t.forEach((function(t){t.qc_encoded_qubits&&e[t.qc_encoded_qubits].push(t)})),e}),[t]),d=(0,n.useMemo)((function(){return u()}),[u]);return(0,C.BX)(n.Fragment,{children:[(0,C.tZ)(Z.Z,{disabled:a,style:{backgroundColor:j.primaryDark},onClick:function(e){s(c?null:e.currentTarget)},className:"p-1",children:(0,C.tZ)("img",{src:l(r),alt:""})}),(0,C.tZ)(ce.Z,{open:!!c,anchorEl:c,placement:"right",children:(0,C.tZ)(se.Z,{onClickAway:function(){return s(null)},children:(0,C.tZ)(w.Z,{className:"overflow-auto space-y-8 p-4",style:{backgroundColor:j.secondaryDark},children:Object.keys(d).filter((function(e){return d[e].length})).map((function(e){var t;return(0,C.BX)("div",{className:"space-y-2",children:[(0,C.tZ)("h3",{className:"font-bold text-white",children:"Encoded Qubits "+(null===(t=d[e][0])||void 0===t?void 0:t.qc_encoded_qubits)}),(0,C.tZ)("div",{className:"flex space-x-2",children:d[e].map((function(e){return(0,C.tZ)(Z.Z,{style:{backgroundColor:j.primaryDark},onClick:function(){i(e),s(null)},children:(0,C.tZ)("img",{src:l(e),alt:""})},e.circuit_id)}))})]},e)}))})})})]})}var he=r(70615);function ge(e){var t=e.setExperiment,r=e.experiment,i=e.inputsDisabled,a=e.currentConfig,o=null!=a&&a.qc_encoded_onoff?(null==a?void 0:a.qm_number_of_qubits)||0:(null==a?void 0:a.csp_number_of_qubits)||0,c=(0,l.$)().t;return(0,n.useEffect)((function(){i||r.status!==m.F.DRAFT||t((function(e){return Object.assign({},e,{ComputeSettings:Object.assign({},e.ComputeSettings,{encodedQubitMeasurements:Array.from({length:o}).map((function(e,t){return(0,he.T8)(t+1)}))})})}))}),[a]),(0,C.BX)(k,{withPadding:!0,color:j.secondaryDark,className:"space-y-6",children:[(0,C.BX)("div",{children:[(0,C.tZ)(B,{header:"Qubit Measurements"}),(0,C.tZ)("p",{className:"text-white",children:c("Choose the basis on which to measure each encoded qubit.")})]}),(0,C.BX)("div",{className:"flex space-x-10 text-white",children:[(0,C.BX)("div",{className:"flex space-x-5 w-1/2",children:[(0,C.BX)("div",{className:"space-y-7",children:[(0,C.tZ)(ve,{inputsDisabled:i,nr:1,experiment:r,encodedQubits:o,setExperiment:t}),(0,C.tZ)(ve,{inputsDisabled:i,nr:2,experiment:r,encodedQubits:o,setExperiment:t})]}),(0,C.BX)("div",{className:"space-y-7",children:[(0,C.tZ)(ve,{inputsDisabled:i,nr:3,experiment:r,encodedQubits:o,setExperiment:t}),(0,C.tZ)(ve,{inputsDisabled:i,nr:4,experiment:r,encodedQubits:o,setExperiment:t})]})]}),(0,C.tZ)("div",{children:(0,C.BX)("div",{className:"flex flex-col justify-center text-white space-y-4 h-full",children:[(0,C.tZ)("div",{className:"border border-gray-500 p-2",children:(0,C.tZ)(V,{src:"/circuitConfig/EcMeas.svg"})}),(0,C.tZ)("div",{className:"border border-gray-500 p-2",children:(0,C.tZ)(V,{normal:!0,src:"/circuitConfig/qm_circuit_model/"+(null==a?void 0:a.qm_circuit_model)})})]})})]})]})}function ve(e){var t=e.nr,r=e.encodedQubits,n=e.experiment,i=e.setExperiment,a=e.inputsDisabled,o=(0,l.$)().t,c=function(){return!!r&&t>r},s=function(e,r){i((function(n){return Object.assign({},n,{ComputeSettings:Object.assign({},n.ComputeSettings,{encodedQubitMeasurements:n.ComputeSettings.encodedQubitMeasurements.map((function(n){var i;return n.encodedQubitIndex===t?Object.assign({},n,((i={})[r]=Math.min(Math.abs(Number(e)),360),i)):n}))})})}))},u=function(e,t){var r;return null===(r=n.ComputeSettings.encodedQubitMeasurements.find((function(t){return t.encodedQubitIndex===e})))||void 0===r?void 0:r[t]};return(0,C.BX)("div",{className:"space-y-3",children:[(0,C.tZ)("h3",{className:(0,N.Z)("font-bold",{"text-gray-500":c()}),children:o("Encoded Qubit")+" "+t}),(0,C.tZ)("div",{className:(0,N.Z)("space-y-3",{"text-gray-500":c()}),children:a?(0,C.BX)(C.HY,{children:[(0,C.BX)("div",{className:"flex space-x-2 text-white",children:[(0,C.tZ)("img",{src:"/images/theta.svg",alt:"theta"}),(0,C.tZ)("p",{className:(0,N.Z)({"text-gray-500":c()}),children:(u(t,"theta")||"0")+"°"})]}),(0,C.BX)("div",{className:"flex space-x-2 text-white",children:[(0,C.tZ)("img",{src:"/images/phi.svg",alt:"phi"}),(0,C.tZ)("p",{className:(0,N.Z)({"text-gray-500":c()}),children:(u(t,"phi")||"0")+"°"})]})]}):(0,C.BX)(C.HY,{children:[(0,C.tZ)(ue,{unit:"°",isDisabled:c(),iconsSrc:"/images/theta.svg",value:""+(u(t,"theta")||"0"),setValue:function(e){s(e,"theta")}}),(0,C.tZ)(ue,{unit:"°",isDisabled:c(),iconsSrc:"/images/phi.svg",value:""+(u(t,"phi")||"0"),setValue:function(e){return s(e,"phi")}})]})})]})}function be(e){return(0,C.tZ)(b.Z,{defaultInput:e.currentMaxRuntime,inputType:"number",isOpen:e.open,setIsOpen:e.isOpen,label:"Max Runtime",buttonText:"Save",onButtonClick:e.onButtonClick,title:"Set Max Runtime"})}var Ze=function(e){var t=e.experiment,r=e.setExperiment,a=e.isLoading,f=e.action,b=e.isDialogOpen,Z=e.setIsDialogOpen,x=(0,n.useState)(!1),y=x[0],w=x[1],N=(0,l.$)().t,k=(0,d.U)(),j=h().id,B=(0,n.useMemo)((function(){return u.O.find((function(e){return e.circuit_id===t.circuitId}))}),[t.circuitId]),O=(0,n.useMemo)((function(){return"new"!==j}),[j]),R=function(){var e=(0,i.Z)(o().mark((function e(){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,g.J)(t,["experimentId","withQubitConfig","config"]),e.next=4,(0,p.BQ)({circuitId:r.circuitId,experimentName:r.experimentName,projectId:r.projectId,maxRuntime:r.maxRuntime,ComputeSettings:r.ComputeSettings},k.token);case 4:n=e.sent,(0,s.navigate)("?id="+n.experimentId+"?type=result"),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),w(!0),setTimeout((function(){return w(!1)}),5e3);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return a?(0,C.tZ)("div",{className:"h-screen flex justify-center items-center",children:(0,C.tZ)(c.Z,{size:80})}):(0,C.BX)("div",{className:"space-y-20 py-16",children:[(0,C.tZ)(Y,{}),(0,C.tZ)(H,{inputsDisabled:O,experiment:t,setExperiment:r}),(0,C.tZ)(me,{inputsDisabled:O,experiment:t,setExperiment:r,currentConfig:B}),(0,C.tZ)(ge,{inputsDisabled:O,experiment:t,setExperiment:r,currentConfig:B}),(0,C.tZ)("div",{className:"flex justify-end items-center",children:(0,C.tZ)(S,{isDisabled:O,actions:[{label:"Set Max Runtime",action:f}],onClick:R,children:N("Run")})}),b&&t.status===m.F.DRAFT&&(0,C.tZ)(be,{currentMaxRuntime:t.maxRuntime.toString(),open:b,isOpen:Z,onButtonClick:function(e){if(e)return+e>120?"Has to be smaller or equal than 120":+e<1?"Has to be at least 1":void r((function(t){return Object.assign({},t,{maxRuntime:+e})}))}}),y&&!a&&(0,C.tZ)(v.Z,{severity:"error",children:N("Could not run Experiment")})]})},xe=r(19701);function ye(e){var t=e.experiment,r=e.isLoading,i=e.reset,a=(0,l.$)().t,o=(0,n.useMemo)((function(){return t.status!==m.F.DRAFT||r}),[t,r]),c=h().type,u=(h().name,(0,n.useMemo)((function(){return"result"===c}),[c]));return(0,C.tZ)("div",{className:"relative w-full text-white",children:(0,C.tZ)("nav",{className:"absolute left-0 right-0 bg-secondaryDark py-4 px-8",children:(0,C.BX)("div",{className:"grid grid-cols-3 w-full",children:[(0,C.BX)("div",{className:"flex items-center space-x-4 justify-self-start",children:[(0,C.tZ)("img",{className:"cursor-pointer",onClick:function(){return(0,s.navigate)(xe.y$.MyProjects)},src:"/images/logo-white.png",alt:"Logo of the university of vienna"}),(0,C.tZ)("h2",{className:"text-xl font-bold transition duration-200",children:r?"":t.experimentName})]}),(0,C.BX)("div",{className:"flex space-x-4 items-center justify-center",children:[(0,C.tZ)(Ce,{highlight:!u,path:"?id="+t.experimentId,text:"Editor"}),t.status!==m.F.DRAFT&&(0,C.tZ)(Ce,{highlight:u,path:"?type=result&id="+t.experimentId,disabled:t.experimentId===t.experimentName,text:"Result"})]}),(0,C.tZ)("div",{className:"flex justify-end items-center",children:(0,C.tZ)(Z.Z,{disabled:o,variant:"outlined",onClick:i,children:a("Reset")})})]})})})}function Ce(e){var t=e.highlight,r=e.text,n=e.path,i=e.disabled,a=(0,l.$)().t;return i?(0,C.tZ)("p",{className:(0,N.Z)("text-lg",{"text-gray":i}),children:a(r)}):(0,C.tZ)(s.Link,{to:n,children:(0,C.tZ)("p",{style:{textTransform:"uppercase"},className:(0,N.Z)("cursor-pointer text-lg duration-300 transform hover:underline",{"underline font-bold text-white":t,"text-primary":!t}),children:a(r)})})}var Se=r(82385),we=r(90209);function Ne(e){var t=h().id,r=n.useState(!1),a=r[0],c=r[1],s=function(e){var t=(0,d.U)(),r=(0,n.useState)(),a=r[0],c=r[1],s=(0,n.useState)((0,he.iZ)("")),l=s[0],u=s[1],m=(0,n.useState)(!0),f=m[0],h=m[1],g=function(){var r=(0,i.Z)(o().mark((function r(){var n,i,a,s;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,p.C2)(e,t.token);case 3:n=r.sent,i=(0,we.Y)(n),a=i.experiment,s=i.result,u((function(e){return Object.assign({},e,a)})),s&&c(s),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.error(r.t0);case 12:return r.prev=12,h(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();return(0,n.useEffect)((function(){if(e&&t)if("new"!==e)g();else{var r=new URLSearchParams(window.location.search);u(Object.assign({},l,{experimentName:r.get("name")||""})),h(!1)}}),[t,e]),{experiment:l,experimentResult:a,setExperiment:u,isLoading:f}}(t||"new"),l=s.experiment,u=s.setExperiment,m=s.isLoading;return(0,C.BX)("div",{style:{backgroundColor:"#222328"},children:[(0,C.tZ)(ye,{experiment:l,setExperiment:u,isLoading:m,reset:function(){var e=(0,he.iZ)(l.experimentName);u(Object.assign({},e,{experimentId:l.experimentId,projectId:l.projectId}))}}),(0,C.tZ)(Se.Z,{}),(0,C.tZ)(Ze,{experiment:l,setExperiment:u,isLoading:m,action:function(){c(!0)},isDialogOpen:a,setIsDialogOpen:c})]})}Ne.displayName="editor";var ke=Ne}}]);
//# sourceMappingURL=component---src-pages-experiment-tsx-016c91af8fd70a1332c7.js.map