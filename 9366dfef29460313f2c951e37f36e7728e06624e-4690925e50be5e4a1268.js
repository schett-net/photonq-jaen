"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[213],{4722:function(e,n,t){var r=t(67294),o=t(54374),a=t(78798),i=t(90515),c=t(85893);function l(e){return e.substring(2).toLowerCase()}n.Z=function(e){var n=e.children,t=e.disableReactTree,s=void 0!==t&&t,u=e.mouseEvent,d=void 0===u?"onClick":u,f=e.onClickAway,m=e.touchEvent,h=void 0===m?"onTouchEnd":m,p=r.useRef(!1),v=r.useRef(null),Z=r.useRef(!1),g=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){Z.current=!0}),0),function(){Z.current=!1}}),[]);var b=(0,o.Z)(n.ref,v),x=(0,a.Z)((function(e){var n=g.current;g.current=!1;var t=(0,i.Z)(v.current);!Z.current||!v.current||"clientX"in e&&function(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}(e,t)||(p.current?p.current=!1:(e.composedPath?e.composedPath().indexOf(v.current)>-1:!t.documentElement.contains(e.target)||v.current.contains(e.target))||!s&&n||f(e))})),k=function(e){return function(t){g.current=!0;var r=n.props[e];r&&r(t)}},w={ref:b};return!1!==h&&(w[h]=k(h)),r.useEffect((function(){if(!1!==h){var e=l(h),n=(0,i.Z)(v.current),t=function(){p.current=!0};return n.addEventListener(e,x),n.addEventListener("touchmove",t),function(){n.removeEventListener(e,x),n.removeEventListener("touchmove",t)}}}),[x,h]),!1!==d&&(w[d]=k(d)),r.useEffect((function(){if(!1!==d){var e=l(d),n=(0,i.Z)(v.current);return n.addEventListener(e,x),function(){n.removeEventListener(e,x)}}}),[x,d]),(0,c.jsx)(r.Fragment,{children:r.cloneElement(n,w)})}},23773:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(29439),o=t(63366),a=t(87462),i=t(67294),c=t(2585),l=t(50565),s=t(21672),u=t(48916),d=t(76173),f=t(21208),m=t(41590),h=t(18362);function p(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,t(57893).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=t(85893),Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,u.ZP)(m.Z)((function(e){var n=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),b=(0,u.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=i.forwardRef((function(e,n){var t=e.autoFocus,i=e.checked,u=e.checkedIcon,m=e.className,h=e.defaultChecked,x=e.disabled,k=e.disableFocusRipple,w=void 0!==k&&k,y=e.edge,C=void 0!==y&&y,P=e.icon,S=e.id,R=e.inputProps,E=e.inputRef,L=e.name,N=e.onBlur,O=e.onChange,B=e.onFocus,z=e.readOnly,M=e.required,j=e.tabIndex,F=e.type,T=e.value,I=(0,o.Z)(e,Z),q=(0,d.Z)({controlled:i,default:Boolean(h),name:"SwitchBase",state:"checked"}),H=(0,r.Z)(q,2),D=H[0],W=H[1],X=(0,f.Z)(),A=x;X&&void 0===A&&(A=X.disabled);var V="checkbox"===F||"radio"===F,_=(0,a.Z)({},e,{checked:D,disabled:A,disableFocusRipple:w,edge:C}),$=function(e){var n=e.classes,t=e.checked,r=e.disabled,o=e.edge,a={root:["root",t&&"checked",r&&"disabled",o&&"edge".concat((0,s.Z)(o))],input:["input"]};return(0,l.Z)(a,p,n)}(_);return(0,v.jsxs)(g,(0,a.Z)({component:"span",className:(0,c.Z)($.root,m),centerRipple:!0,focusRipple:!w,disabled:A,tabIndex:null,role:void 0,onFocus:function(e){B&&B(e),X&&X.onFocus&&X.onFocus(e)},onBlur:function(e){N&&N(e),X&&X.onBlur&&X.onBlur(e)},ownerState:_,ref:n},I,{children:[(0,v.jsx)(b,(0,a.Z)({autoFocus:t,checked:i,defaultChecked:h,className:$.input,disabled:A,id:V&&S,name:L,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;W(n),O&&O(e,n)}},readOnly:z,ref:E,required:M,ownerState:_,tabIndex:j,type:F},"checkbox"===F&&void 0===T?{}:{value:T},R)),D?u:P]}))}))},52847:function(e,n,t){t.r(n),t.d(n,{RegisterPage:function(){return ye},default:function(){return Ce}});var r=t(64731),o=t(61991),a=t(8352),i=t(15861),c=t(64687),l=t.n(c),s=t(99911),u=t(4942),d=t(63366),f=t(87462),m=t(67294),h=t(2585),p=t(50565),v=t(21208),Z=t(64090),g=t(21672),b=t(48916),x=t(78824),k=t(18362),w=t(57893);function y(e){return(0,k.Z)("MuiFormControlLabel",e)}var C=(0,w.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),P=t(84579),S=t(85893),R=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],E=(0,b.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[(0,u.Z)({},"& .".concat(C.label),n.label),n.root,n["labelPlacement".concat((0,g.Z)(t.labelPlacement))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,f.Z)((0,u.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(C.disabled),{cursor:"default"}),"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,u.Z)({},"& .".concat(C.label),(0,u.Z)({},"&.".concat(C.disabled),{color:(n.vars||n).palette.text.disabled})))})),L=m.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiFormControlLabel"}),r=t.className,o=t.componentsProps,a=void 0===o?{}:o,i=t.control,c=t.disabled,l=t.disableTypography,s=t.label,u=t.labelPlacement,b=void 0===u?"end":u,k=(0,d.Z)(t,R),w=(0,v.Z)(),C=c;void 0===C&&void 0!==i.props.disabled&&(C=i.props.disabled),void 0===C&&w&&(C=w.disabled);var L={disabled:C};["checked","name","onChange","value","inputRef"].forEach((function(e){void 0===i.props[e]&&void 0!==t[e]&&(L[e]=t[e])}));var N=(0,P.Z)({props:t,muiFormControl:w,states:["error"]}),O=(0,f.Z)({},t,{disabled:C,labelPlacement:b,error:N.error}),B=function(e){var n=e.classes,t=e.disabled,r=e.labelPlacement,o=e.error,a={root:["root",t&&"disabled","labelPlacement".concat((0,g.Z)(r)),o&&"error"],label:["label",t&&"disabled"]};return(0,p.Z)(a,y,n)}(O),z=s;return null==z||z.type===Z.Z||l||(z=(0,S.jsx)(Z.Z,(0,f.Z)({component:"span",className:B.label},a.typography,{children:z}))),(0,S.jsxs)(E,(0,f.Z)({className:(0,h.Z)(B.root,r),ownerState:O,ref:n},k,{children:[m.cloneElement(i,L),z]}))})),N=t(62915),O=t(23773),B=t(43327),z=(0,B.Z)((0,S.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),M=(0,B.Z)((0,S.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),j=(0,B.Z)((0,S.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function F(e){return(0,k.Z)("MuiCheckbox",e)}var T=(0,w.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),I=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],q=(0,b.ZP)(O.Z,{shouldForwardProp:function(e){return(0,b.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,g.Z)(t.color))]]}})((function(e){var n,t=e.theme,r=e.ownerState;return(0,f.Z)({color:(t.vars||t).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===r.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,N.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(n={},(0,u.Z)(n,"&.".concat(T.checked,", &.").concat(T.indeterminate),{color:(t.vars||t).palette[r.color].main}),(0,u.Z)(n,"&.".concat(T.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),H=(0,S.jsx)(M,{}),D=(0,S.jsx)(z,{}),W=(0,S.jsx)(j,{}),X=m.forwardRef((function(e,n){var t,r,o=(0,x.Z)({props:e,name:"MuiCheckbox"}),a=o.checkedIcon,i=void 0===a?H:a,c=o.color,l=void 0===c?"primary":c,s=o.icon,u=void 0===s?D:s,h=o.indeterminate,v=void 0!==h&&h,Z=o.indeterminateIcon,b=void 0===Z?W:Z,k=o.inputProps,w=o.size,y=void 0===w?"medium":w,C=(0,d.Z)(o,I),P=v?b:u,R=v?b:i,E=(0,f.Z)({},o,{color:l,indeterminate:v,size:y}),L=function(e){var n=e.classes,t=e.indeterminate,r=e.color,o={root:["root",t&&"indeterminate","color".concat((0,g.Z)(r))]},a=(0,p.Z)(o,F,n);return(0,f.Z)({},n,a)}(E);return(0,S.jsx)(q,(0,f.Z)({type:"checkbox",inputProps:(0,f.Z)({"data-indeterminate":v},k),icon:m.cloneElement(P,{fontSize:null!=(t=P.props.fontSize)?t:y}),checkedIcon:m.cloneElement(R,{fontSize:null!=(r=R.props.fontSize)?r:y}),ownerState:E,ref:n},C,{classes:L}))})),A=t(29439),V=t(4722),_=t(26247),$=t(78603),G=t(53954),Y=t(85934);function K(e){return(0,k.Z)("MuiSnackbarContent",e)}(0,w.Z)("MuiSnackbarContent",["root","message","action"]);var J=["action","className","message","role"],Q=(0,b.ZP)(Y.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n=e.theme,t="light"===n.palette.mode?.8:.98,r=(0,N._4)(n.palette.background.default,t);return(0,f.Z)({},n.typography.body2,(0,u.Z)({color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(r),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:r,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1},n.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}))})),U=(0,b.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(e,n){return n.message}})({padding:"8px 0"}),ee=(0,b.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(e,n){return n.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),ne=m.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiSnackbarContent"}),r=t.action,o=t.className,a=t.message,i=t.role,c=void 0===i?"alert":i,l=(0,d.Z)(t,J),s=t,u=function(e){var n=e.classes;return(0,p.Z)({root:["root"],action:["action"],message:["message"]},K,n)}(s);return(0,S.jsxs)(Q,(0,f.Z)({role:c,square:!0,elevation:6,className:(0,h.Z)(u.root,o),ownerState:s,ref:n},l,{children:[(0,S.jsx)(U,{className:u.message,ownerState:s,children:a}),r?(0,S.jsx)(ee,{className:u.action,ownerState:s,children:r}):null]}))}));function te(e){return(0,k.Z)("MuiSnackbar",e)}(0,w.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);var re=["onEnter","onExited"],oe=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],ae=(0,b.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["anchorOrigin".concat((0,g.Z)(t.anchorOrigin.vertical)).concat((0,g.Z)(t.anchorOrigin.horizontal))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,f.Z)({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},(0,u.Z)({},n.breakpoints.up("sm"),(0,f.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===t.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===t.anchorOrigin.horizontal&&{right:24,left:"auto"})))})),ie=m.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiSnackbar"}),r=(0,_.Z)(),o={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},a=t.action,i=t.anchorOrigin,c=(i=void 0===i?{vertical:"bottom",horizontal:"left"}:i).vertical,l=i.horizontal,s=t.autoHideDuration,u=void 0===s?null:s,v=t.children,Z=t.className,b=t.ClickAwayListenerProps,k=t.ContentProps,w=t.disableWindowBlurListener,y=void 0!==w&&w,C=t.message,P=t.onBlur,R=t.onClose,E=t.onFocus,L=t.onMouseEnter,N=t.onMouseLeave,O=t.open,B=t.resumeHideDuration,z=t.TransitionComponent,M=void 0===z?G.Z:z,j=t.transitionDuration,F=void 0===j?o:j,T=t.TransitionProps,I=(T=void 0===T?{}:T).onEnter,q=T.onExited,H=(0,d.Z)(t.TransitionProps,re),D=(0,d.Z)(t,oe),W=(0,f.Z)({},t,{anchorOrigin:{vertical:c,horizontal:l}}),X=function(e){var n=e.classes,t=e.anchorOrigin,r={root:["root","anchorOrigin".concat((0,g.Z)(t.vertical)).concat((0,g.Z)(t.horizontal))]};return(0,p.Z)(r,te,n)}(W),Y=m.useRef(),K=m.useState(!0),J=(0,A.Z)(K,2),Q=J[0],U=J[1],ee=(0,$.Z)((function(){R&&R.apply(void 0,arguments)})),ie=(0,$.Z)((function(e){R&&null!=e&&(clearTimeout(Y.current),Y.current=setTimeout((function(){ee(null,"timeout")}),e))}));m.useEffect((function(){return O&&ie(u),function(){clearTimeout(Y.current)}}),[O,u,ie]);var ce=function(){clearTimeout(Y.current)},le=m.useCallback((function(){null!=u&&ie(null!=B?B:.5*u)}),[u,B,ie]);return m.useEffect((function(){if(!y&&O)return window.addEventListener("focus",le),window.addEventListener("blur",ce),function(){window.removeEventListener("focus",le),window.removeEventListener("blur",ce)}}),[y,le,O]),m.useEffect((function(){if(O)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||R&&R(e,"escapeKeyDown")}}),[Q,O,R]),!O&&Q?null:(0,S.jsx)(V.Z,(0,f.Z)({onClickAway:function(e){R&&R(e,"clickaway")}},b,{children:(0,S.jsx)(ae,(0,f.Z)({className:(0,h.Z)(X.root,Z),onBlur:function(e){P&&P(e),le()},onFocus:function(e){E&&E(e),ce()},onMouseEnter:function(e){L&&L(e),ce()},onMouseLeave:function(e){N&&N(e),le()},ownerState:W,ref:n,role:"presentation"},D,{children:(0,S.jsx)(M,(0,f.Z)({appear:!0,in:O,timeout:F,direction:"top"===c?"down":"up",onEnter:function(e,n){U(!1),I&&I(e,n)},onExited:function(e){U(!0),q&&q(e)}},H,{children:v||(0,S.jsx)(ne,(0,f.Z)({message:C,action:a},k))}))}))}))})),ce=ie,le=t(99133),se=t(7575),ue=t(99052),de=t(84664),fe=t(86533),me=t(8161),he=t(19701),pe=t(96290),ve=t(32739),Ze=t(46857),ge=t(88837);function be(){var e=(0,de.$)().t,n=(0,m.useState)(!1),t=n[0],o=n[1],a=(0,m.useState)(""),c=a[0],u=a[1],d=m.useState(!1),f=d[0],h=d[1],p=(0,m.useState)({firstName:"",secondName:"",email:"",password:""}),v=p[0],Z=p[1],g=m.useState(!1),b=g[0],x=g[1],k=(0,fe.R)({value:v.password});m.useEffect((function(){1==b&&0===c.length&&(h(!0),setTimeout((function(){(0,ue.navigate)(he.y$.Login)}),1500))}),[b]);var w=function(){var e=(0,i.Z)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!C(k)){e.next=17;break}return o(!0),t={name:v.firstName+" "+v.secondName,email:v.email,password:v.password},e.prev=4,e.next=7,(0,me.z2)(t);case 7:u(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),u(e.t0.message);case 13:return e.prev=13,x(!0),o(!1),e.finish(13);case 17:case"end":return e.stop()}}),e,null,[[4,10,13,17]])})));return function(n){return e.apply(this,arguments)}}(),y=function(e,n){Z((function(t){var r;return Object.assign({},t,((r={})[n]=e.target.value,r))}))},C=function(e){return!e.length&&!e.strength};return(0,ge.BX)(ge.HY,{children:[(0,ge.BX)(ve.Z,{header:(0,ge.tZ)(r.Field.Text,{name:"register",defaultValue:"Registration"}),onSubmit:function(e){w(e)},children:[(0,ge.tZ)(s.Z,{value:v.firstName,onChange:function(e){return y(e,"firstName")},fullWidth:!0,required:!0,variant:"outlined",label:e("First Name")}),(0,ge.tZ)(s.Z,{value:v.secondName,onChange:function(e){return y(e,"secondName")},fullWidth:!0,required:!0,variant:"outlined",label:e("Last Name")}),(0,ge.tZ)(s.Z,{value:v.email,onChange:function(e){return y(e,"email")},fullWidth:!0,required:!0,variant:"outlined",type:"email",label:e("Email Address")}),(0,ge.tZ)(Ze.Z,{value:v.password,handleOnChange:function(e){return y(e,"password")},required:!0,fullWidth:!0,errorObject:k,label:"Password *"}),(0,ge.tZ)(L,{control:(0,ge.tZ)(X,{required:!0,defaultChecked:!0}),label:e("I accept the terms of service.")}),(0,ge.tZ)(pe.Z,{isLoading:t,fullWidth:!0,variant:"contained",type:"submit",text:e("Register Now")}),c.length?(0,ge.BX)("div",{style:{color:se.Z.A700},className:"flex justify-center",children:["*",e(c)]}):null,(0,ge.tZ)("div",{className:"flex justify-center",children:(0,ge.BX)("div",{className:"flex space-x-5",children:[(0,ge.tZ)("p",{children:e("Already have an account?")}),(0,ge.tZ)(ue.Link,{to:he.y$.Login,children:(0,ge.tZ)("p",{className:"cursor-pointer text-primary font-bold transform hover:-translate-y-1 duration-300",children:e("Sign in")})})]})})]}),(0,ge.tZ)(ce,{open:f,autoHideDuration:2e3,children:(0,ge.BX)(le.Z,{variant:"filled",severity:"success",sx:{width:"100%"},children:["Sucessfully registered with ",v.email]})})]})}function xe(e){var n=e.children;return(0,ge.tZ)("div",{className:"flex flex-col items-center",children:(0,ge.tZ)("div",{style:{maxWidth:1440},children:n})})}var ke=t(82385),we=t(36368);function ye(e){return(0,ge.tZ)(we.Z,{pathname:e.path,children:(0,ge.BX)(xe,{children:[(0,ge.tZ)("div",{className:"2xl:hidden",children:(0,ge.tZ)(ke.Z,{})}),(0,ge.BX)(o.ZP,{container:!0,columnSpacing:12,children:[(0,ge.tZ)(o.ZP,{item:!0,md:7,children:(0,ge.tZ)("div",{className:"pt-8 md:pt-0 md:h-screen flex flex-col justify-center",children:(0,ge.tZ)(be,{})})}),(0,ge.tZ)(o.ZP,{item:!0,md:5,children:(0,ge.tZ)(a.Z,{header:(0,ge.tZ)(r.Field.Text,{name:"header",defaultValue:"Start quantum computing with us!"}),content:(0,ge.tZ)(r.Field.Text,{name:"content",defaultValue:"Our intuitive approach makes it easy for beginners to start with quantum computing and allows experts and educators to run complex photonic experiments on real quantum hardware."})})})]})]})})}var Ce=(0,r.connectPage)(ye,{displayName:"RegisterPage"})}}]);
//# sourceMappingURL=9366dfef29460313f2c951e37f36e7728e06624e-4690925e50be5e4a1268.js.map