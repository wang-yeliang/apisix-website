(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{231:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var i=t(3),r=t(7),o=(t(0),t(247)),a={title:"Plugin"},c={unversionedId:"architecture-design/plugin",id:"architecture-design/plugin",isDocsHomePage:!1,title:"Plugin",description:"\x3c!--",source:"@site/docs/apisix/architecture-design/plugin.md",slug:"/architecture-design/plugin",permalink:"/docs/apisix/architecture-design/plugin",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/architecture-design/plugin.md",version:"current",sidebar:"docs",previous:{title:"Route",permalink:"/docs/apisix/architecture-design/route"},next:{title:"Script",permalink:"/docs/apisix/architecture-design/script"}},l=[],u={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Plugin")," represents the plugin configuration that will be executed during the ",Object(o.b)("inlineCode",{parentName:"p"},"HTTP")," request/response lifecycle."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Plugin")," configuration can be bound directly to ",Object(o.b)("inlineCode",{parentName:"p"},"Route")," or it can be bound to ",Object(o.b)("inlineCode",{parentName:"p"},"Service")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Consumer"),". For the configuration of the same plugin, only one copy is valid, and the configuration selection priority is always ",Object(o.b)("inlineCode",{parentName:"p"},"Consumer")," > ",Object(o.b)("inlineCode",{parentName:"p"},"Route")," > ",Object(o.b)("inlineCode",{parentName:"p"},"Service"),"."),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),", you can declare which plugins are supported by the local APISIX node. This is a whitelisting mechanism. Plugins that are not in this whitelist will be automatically ignored. This feature can be used to temporarily turn off or turn on specific plugins, which is very effective in dealing with unexpected situations. If you want to add new plugins based on existing plugins, you need to copy the data of ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," node which in ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," node of ",Object(o.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),Object(o.b)("p",null,"The configuration of the plugin can be directly bound to the specified Route, or it can be bound to the Service, but the plugin configuration in Route has a higher priority."),Object(o.b)("p",null,"A plugin will only be executed once in a single request, even if it is bound to multiple different objects (such as Route or Service)."),Object(o.b)("p",null,"The order in which plugins are run is determined by the priority of the plugin itself, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"local _M = {\n    version = 0.1,\n    priority = 0, -- the priority of this plugin will be 0\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n")),Object(o.b)("p",null,"The plugin configuration is submitted as part of Route or Service and placed under ",Object(o.b)("inlineCode",{parentName:"p"},"plugins"),". It internally uses the plugin name as the hash's key to hold configuration items for different plugins."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        },\n        "prometheus": {}\n    }\n}\n')),Object(o.b)("p",null,"Not all plugins have specific configuration items. For example, there is no specific configuration item under ",Object(o.b)("inlineCode",{parentName:"p"},"prometheus"),". In this case, an empty object identifier can be used."),Object(o.b)("p",null,"If a request is rejected by a plugin, there will be warn level log like ",Object(o.b)("inlineCode",{parentName:"p"},"ip-restriction exits with http status code 403"),"."))}p.isMDXComponent=!0},247:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),p=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),b=i,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||o;return t?r.a.createElement(f,c(c({ref:n},u),{},{components:t})):r.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);