(self.webpackChunk=self.webpackChunk||[]).push([[597],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9996:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),l={title:"proxy-mirror"},o={unversionedId:"plugins/proxy-mirror",id:"plugins/proxy-mirror",isDocsHomePage:!1,title:"proxy-mirror",description:"\x3c!--",source:"@site/docs/apisix/plugins/proxy-mirror.md",sourceDirName:"plugins",slug:"/plugins/proxy-mirror",permalink:"/docs/apisix/plugins/proxy-mirror",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/proxy-mirror.md",version:"current",frontMatter:{title:"proxy-mirror"},sidebar:"docs",previous:{title:"request-validation",permalink:"/docs/apisix/plugins/request-validation"},next:{title:"api-breaker",permalink:"/docs/apisix/plugins/api-breaker"}},p=[{value:"Attributes",id:"attributes",children:[{value:"Examples",id:"examples",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:p};function s(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The proxy-mirror plugin, which provides the ability to mirror client requests."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note"),": The response returned by the mirror request is ignored."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"host"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"optional"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Specify a mirror service address, e.g. ",(0,a.kt)("a",{parentName:"td",href:"http://127.0.0.1:9797"},"http://127.0.0.1:9797")," (address needs to contain schema: http or https, not URI part)")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"enable-the-plugin"},"Enable the plugin"),(0,a.kt)("p",null,"1:  enable the proxy-mirror plugin for a specific route :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-mirror": {\n           "host": "http://127.0.0.1:9797"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,a.kt)("p",null,"Test plugin\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -i\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 12\nConnection: keep-alive\nServer: APISIX web server\nDate: Wed, 18 Mar 2020 13:01:11 GMT\nLast-Modified: Thu, 20 Feb 2020 14:21:41 GMT\n\nhello world\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since the specified mirror address is 127.0.0.1:9797, so to verify whether this plugin is in effect, we need to confirm on the service with port 9797.\nFor example, we can start a simple server:  python -m SimpleHTTPServer 9797")),(0,a.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,a.kt)("p",null,"Remove the corresponding JSON in the plugin configuration to disable the plugin immediately without restarting the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1999": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"The plugin has been disabled now."))}s.isMDXComponent=!0}}]);