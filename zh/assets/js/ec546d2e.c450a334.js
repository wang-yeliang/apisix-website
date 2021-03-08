(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(247)),o={title:"Consumer"},c={unversionedId:"architecture-design/consumer",id:"architecture-design/consumer",isDocsHomePage:!1,title:"Consumer",description:"\x3c!--",source:"@site/docs/apisix/architecture-design/consumer.md",slug:"/architecture-design/consumer",permalink:"/zh/docs/apisix/architecture-design/consumer",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/architecture-design/consumer.md",version:"current",sidebar:"docs",previous:{title:"Service",permalink:"/zh/docs/apisix/architecture-design/service"},next:{title:"Upstream",permalink:"/zh/docs/apisix/architecture-design/upstream"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For the API gateway, it is usually possible to identify a certain type of requester by using a domain name such as a request domain name, a client IP address, etc., and then perform plugin filtering and forward the request to the specified upstream, but sometimes the depth is insufficient."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/consumer-who.png",alt:"consumer-who"})),Object(i.b)("p",null,"As shown in the image above, as an API gateway, you should know who the API Consumer is, so you can configure different rules for different API Consumers."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Field"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"username"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"Consumer Name.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"plugins"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"The corresponding plugin configuration of the Consumer, which has the highest priority: Consumer > Route > Service. For specific plugin configurations, refer to the ",Object(i.b)("a",{parentName:"td",href:"/zh/docs/apisix/architecture-design/plugin"},"Plugins")," section.")))),Object(i.b)("p",null,"In APISIX, the process of identifying a Consumer is as follows:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/consumer-internal.png",alt:"consumer-internal"})),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Authorization certification: e.g ",Object(i.b)("a",{parentName:"li",href:"../plugins/key-auth.md"},"key-auth"),", ",Object(i.b)("a",{parentName:"li",href:"../plugins/jwt-auth.md"},"JWT"),", etc."),Object(i.b)("li",{parentName:"ol"},"Get consumer_name: By authorization, you can naturally get the corresponding Consumer ",Object(i.b)("inlineCode",{parentName:"li"},"id"),", which is the unique identifier of the Consumer object."),Object(i.b)("li",{parentName:"ol"},"Get the Plugin or Upstream information bound to the Consumer: Complete the different configurations for different Consumers.")),Object(i.b)("p",null,"To sum up, Consumer is a consumer of certain types of services and needs to be used in conjunction with the user authentication system."),Object(i.b)("p",null,"For example, different consumers request the same API, and the gateway service corresponds to different Plugin or Upstream configurations according to the current request user information."),Object(i.b)("p",null,"In addition, you can refer to the ",Object(i.b)("a",{parentName:"p",href:"../plugins/key-auth.md"},"key-auth")," authentication authorization plugin call logic to help you further understand the Consumer concept and usage."),Object(i.b)("p",null,"How to enable a specific plugin for a Consumer, you can see the following example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'# Create a Consumer, specify the authentication plugin key-auth, and enable the specific plugin limit-count\n$ curl http://127.0.0.1:9080/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        },\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n\n# Create a Router, set routing rules and enable plugin configuration\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n\n# Send a test request, the first two return to normal, did not reach the speed limit threshold\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\n...\n\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\n...\n\n# The third test returns 503 and the request is restricted\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\nHTTP/1.1 503 Service Temporarily Unavailable\n...\n\n')),Object(i.b)("p",null,"Use the ",Object(i.b)("a",{parentName:"p",href:"../plugins/consumer-restriction.md"},"consumer-restriction")," plug-in to restrict the access of Jack to this API."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'# Add Jack to the blacklist\n$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {},\n        "consumer-restriction": {\n            "blacklist": [\n                "jack"\n            ]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n\n# Repeated tests, all return 403; Jack is forbidden to access this API\n$ curl http://127.0.0.1:9080/hello -H \'apikey: auth-one\' -I\nHTTP/1.1 403\n...\n\n')))}l.isMDXComponent=!0},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);