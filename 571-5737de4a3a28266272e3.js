"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[571,676],{61370:function(e,t,n){var a=n(64731),i=n(88837);t.Z=(0,a.connectSection)((function(e){var t=(0,a.useField)("mainImage","IMA:ImageField"),n={className:"relative rounded filter drop-shadow-2xl transform hover:scale-105 duration-300 cursor-pointer w-full h-96"};return t.isEditing||(n.role="link",n.onClick=function(){(0,a.navigate)("/"+e.index+"/"+e.slug)}),(0,i.BX)("div",Object.assign({},n,{children:[(0,i.tZ)(a.Field.Image,{name:"mainImage",objectFit:"cover",className:"rounded",alt:"Content Image",defaultValue:void 0}),!t.isEditing&&(0,i.tZ)("div",{style:{backgroundColor:"#263238"},className:"absolute inset-0 z-10 opacity-40"}),(0,i.tZ)("div",{className:"absolute top-4 right-0 bg-primary-light z-20 px-1",children:(0,i.tZ)(a.Field.Text,{name:"contentType",defaultValue:"foo",className:"text-primary"})}),(0,i.BX)("div",{className:"absolute bottom-0 text-white mx-5 mb-5 z-20 backdrop-filter backdrop-blur-lg rounded p-1",children:[(0,i.tZ)("h4",{children:(0,i.tZ)(a.Field.Text,{name:"title",defaultValue:"foo",className:"text-lg font-bold"})}),(0,i.tZ)(a.Field.Text,{name:"teaser",defaultValue:"foo",className:"leading-normal"})]})]}))}),{name:"GuidePreview",displayName:"GuidePreview"})},49245:function(e,t,n){n.d(t,{c:function(){return i}});var a=n(88837),i=function(e){return(0,a.tZ)("div",{className:"grid md:grid-cols-3 gap-10 w-full space-y-10 md:space-y-0",children:e.children})}},58467:function(e,t,n){n.d(t,{M:function(){return a},Z:function(){return l}});var a,i=n(21770),r=n(88837);function l(e){var t=e.currentCategory,n=e.setCurrentCategory;return(0,r.tZ)("div",{className:"flex flex-col items-center",children:(0,r.tZ)("div",{className:"flex w-full md:w-auto justify-between md:space-x-10",children:Object.values(a).map((function(e,a){return(0,r.tZ)("div",{className:"w-filter-button-sm md:w-filter-button text-sm",children:(0,r.tZ)(i.Z,{size:"small",onClick:function(){return n(e)},variant:t===e?"contained":"text",children:e})},a)}))})})}!function(e){e.All="All",e.Beginner="Beginner",e.Advanced="Advanced"}(a||(a={}))},84826:function(e,t,n){n.d(t,{m:function(){return o}});var a=n(15861),i=n(64687),r=n.n(i),l=n(64731),d=n(67294),u=n(58467);function o(e){var t=(0,l.useJaenPageIndex)({jaenPageId:e.jaenPageId}),n=t.children,i=t.withJaenPage,o=(0,d.useState)(!0),c=o[0],s=o[1],f=(0,d.useState)(!1),m=f[0],g=f[1],h=(0,d.useState)(n),v=h[0],p=h[1],Z=(0,d.useState)(u.M.All),x=Z[0],w=Z[1],y=function(){var e=(0,a.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!0),t=x===u.M.All?n:n.filter((function(e){var t,n,a=null===(t=e.jaenFields)||void 0===t||null===(n=t["IMA:ChoiceField"])||void 0===n?void 0:n.category.value;return console.log("Field value",a,x),a===x})),p(t),g((function(){return!1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){c?s(!1):y()}),[x]);var b=(0,d.useMemo)((function(){return v.sort((function(e,t){var n,a,i,r,l=new Date(null!==(n=null===(a=e.jaenPageMetadata)||void 0===a?void 0:a.datePublished)&&void 0!==n?n:"").getTime();return new Date(null!==(i=null===(r=t.jaenPageMetadata)||void 0===r?void 0:r.datePublished)&&void 0!==i?i:"").getTime()-l}))}),[v]);return{currentCategory:x,setCurrentCategory:w,filteredGuides:b,setFilteredGuides:p,isLoading:m,withJaenPage:i}}},9638:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(2585),i=n(88837);function r(e){var t,n=e.text,r=e.centered;return(0,i.tZ)("h1",{className:(0,a.Z)("text-3xl lg:text-5xl font-bold",(t={},t["text-center"]=r,t)),children:n})}},60571:function(e,t,n){n.r(t);var a=n(64731),i=n(56021);t.default=(0,a.connectTemplate)(i.HowToGuidesPage,{displayName:"HowToGuides",children:["HowToGuide"]})},56021:function(e,t,n){n.r(t),n.d(t,{HowToGuidesPage:function(){return g}});var a=n(64731),i=n(61370),r=n(49245),l=n(58467),d=n(84826),u=n(93361),o=n(82385),c=n(35748),s=n(27729),f=n(9638),m=n(88837);function g(e){var t=(0,d.m)({jaenPageId:"JaenPage /how-to-guides/"}),n=t.currentCategory,g=t.setCurrentCategory,h=t.filteredGuides,v=t.isLoading,p=t.withJaenPage;return(0,m.tZ)(c.Z,{pathname:e.path,children:(0,m.tZ)("div",{className:"flex flex-col items-center",children:(0,m.BX)(u.Z,{className:"space-y-12",children:[(0,m.tZ)(o.Z,{}),(0,m.tZ)(s.Z,{children:(0,m.BX)("div",{className:"flex flex-col items-center space-y-5",children:[(0,m.tZ)(f.Z,{text:(0,m.tZ)(a.Field.Text,{name:"how-to-guide-header",defaultValue:"Documentation and How-To-Guides"})}),(0,m.tZ)("p",{className:"md:w-8/12 md:text-center",children:(0,m.tZ)(a.Field.Text,{name:"how-to-guide-text",defaultValue:"\nEach of these guides and documentation contains advice and\nresearch to give you guidelines for your successful quantum\ncomputing experiment."})})]})}),(0,m.tZ)(l.Z,{currentCategory:n,setCurrentCategory:g}),(0,m.tZ)(s.Z,{children:v?(0,m.BX)("div",{className:"flex justify-center",children:[(0,m.tZ)("span",{className:"h-10 w-10 animate-ping inline-flex rounded-full bg-primary opacity-75"}),(0,m.tZ)("p",{children:"Loading..."})]}):(0,m.tZ)("div",{className:"pb-8",children:(0,m.tZ)(r.c,{children:h.map((function(e){return p(e.id,(0,m.tZ)(i.Z,{index:"how-to-guides",slug:e.slug},e.id))}))})})})]})})})}t.default=(0,a.connectPage)(g,{displayName:"HowToGuidesPage",children:["HowToGuide"]})}}]);
//# sourceMappingURL=571-5737de4a3a28266272e3.js.map