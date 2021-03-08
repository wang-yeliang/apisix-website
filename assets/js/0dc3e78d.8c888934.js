(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{247:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||c;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<c;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),c=(n(0),n(247)),a={title:"Script"},o={unversionedId:"architecture-design/script",id:"architecture-design/script",isDocsHomePage:!1,title:"Script",description:"\x3c!--",source:"@site/docs/apisix/architecture-design/script.md",slug:"/architecture-design/script",permalink:"/docs/apisix/architecture-design/script",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/script.md",version:"current",sidebar:"docs",previous:{title:"Plugin",permalink:"/docs/apisix/architecture-design/plugin"},next:{title:"Service",permalink:"/docs/apisix/architecture-design/service"}},p=[],l={toc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Script")," represents a script that will be executed during the ",Object(c.b)("inlineCode",{parentName:"p"},"HTTP")," request/response life cycle."),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Script")," configuration can be directly bound to the ",Object(c.b)("inlineCode",{parentName:"p"},"Route"),"."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Script")," and ",Object(c.b)("inlineCode",{parentName:"p"},"Plugin")," are mutually exclusive, and ",Object(c.b)("inlineCode",{parentName:"p"},"Script")," is executed first. This means that after configuring ",Object(c.b)("inlineCode",{parentName:"p"},"Script"),", the ",Object(c.b)("inlineCode",{parentName:"p"},"Plugin")," configured on ",Object(c.b)("inlineCode",{parentName:"p"},"Route")," will not be executed."),Object(c.b)("p",null,"In theory, you can write arbitrary Lua code in ",Object(c.b)("inlineCode",{parentName:"p"},"Script"),", or you can directly call existing plugins to reuse existing code."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Script")," also has the concept of execution phase, supporting ",Object(c.b)("inlineCode",{parentName:"p"},"access"),", ",Object(c.b)("inlineCode",{parentName:"p"},"header_filter"),", ",Object(c.b)("inlineCode",{parentName:"p"},"body_filter")," and ",Object(c.b)("inlineCode",{parentName:"p"},"log")," phase. The system will automatically execute the code of the corresponding phase in the ",Object(c.b)("inlineCode",{parentName:"p"},"Script")," script in the corresponding phase."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "script": "local _M = {} \\n function _M.access(api_ctx) \\n ngx.log(ngx.INFO,\\"hit access phase\\") \\n end \\nreturn _M"\n}\n')))}s.isMDXComponent=!0}}]);