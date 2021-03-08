(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(247)),c={title:"Global rule"},o={unversionedId:"architecture-design/global-rule",id:"architecture-design/global-rule",isDocsHomePage:!1,title:"Global rule",description:"\x3c!--",source:"@site/docs/apisix/architecture-design/global-rule.md",slug:"/architecture-design/global-rule",permalink:"/docs/apisix/architecture-design/global-rule",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/global-rule.md",version:"current",sidebar:"docs",previous:{title:"Upstream",permalink:"/docs/apisix/architecture-design/upstream"},next:{title:"Plugin Config",permalink:"/docs/apisix/architecture-design/plugin-config"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/apisix/architecture-design/plugin"},"Plugin")," just can be binded to ",Object(i.b)("a",{parentName:"p",href:"/docs/apisix/architecture-design/service"},"Service")," or ",Object(i.b)("a",{parentName:"p",href:"/docs/apisix/architecture-design/route"},"Route"),", if we want a ",Object(i.b)("a",{parentName:"p",href:"/docs/apisix/architecture-design/plugin"},"Plugin")," work on all requests, how to do it?\nWe can register a global ",Object(i.b)("a",{parentName:"p",href:"/docs/apisix/architecture-design/plugin"},"Plugin")," with ",Object(i.b)("inlineCode",{parentName:"p"},"GlobalRule"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \\\n  https://{apisix_listen_address}/apisix/admin/global_rules/1 \\\n  -H \'Content-Type: application/json\' \\\n  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n  -d \'{\n        "plugins": {\n            "limit-count": {\n                "time_window": 60,\n                "policy": "local",\n                "count": 2,\n                "key": "remote_addr",\n                "rejected_code": 503\n            }\n        }\n    }\'\n')),Object(i.b)("p",null,"Now, the ",Object(i.b)("inlineCode",{parentName:"p"},"limit-count")," plugin will work on all requests"),Object(i.b)("p",null,"we can list all ",Object(i.b)("inlineCode",{parentName:"p"},"GlobalRule")," via admin api as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"curl https://{apisix_listen_address}/apisix/admin/global_rules\n")))}p.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||i;return n?a.a.createElement(f,o(o({ref:t},u),{},{components:n})):a.a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);