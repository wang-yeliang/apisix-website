(self.webpackChunk=self.webpackChunk||[]).push([[5348],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),k=r,d=m["".concat(o,".").concat(k)]||m[k]||s[k]||l;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7917:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return o},default:function(){return u}});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),i={title:"\u63d2\u4ef6\u5f00\u53d1"},p={unversionedId:"plugin-develop",id:"plugin-develop",isDocsHomePage:!1,title:"\u63d2\u4ef6\u5f00\u53d1",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugin-develop.md",sourceDirName:".",slug:"/plugin-develop",permalink:"/zh/docs/apisix/plugin-develop",editUrl:"https://github.com/apache/apisix/edit/master/docs/zh/latest/plugin-develop.md",version:"current",frontMatter:{title:"\u63d2\u4ef6\u5f00\u53d1"},sidebar:"docs",previous:{title:"\u5b89\u88c5\u4f9d\u8d56",permalink:"/zh/docs/apisix/install-dependencies"},next:{title:"\u63d2\u4ef6\u62e6\u622a\u5668",permalink:"/zh/docs/apisix/plugin-interceptors"}},o=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u68c0\u67e5\u5916\u90e8\u4f9d\u8d56",id:"\u68c0\u67e5\u5916\u90e8\u4f9d\u8d56",children:[]},{value:"\u63d2\u4ef6\u547d\u540d\u4e0e\u914d\u7f6e",id:"\u63d2\u4ef6\u547d\u540d\u4e0e\u914d\u7f6e",children:[]},{value:"\u914d\u7f6e\u63cf\u8ff0\u4e0e\u6821\u9a8c",id:"\u914d\u7f6e\u63cf\u8ff0\u4e0e\u6821\u9a8c",children:[]},{value:"\u786e\u5b9a\u6267\u884c\u9636\u6bb5",id:"\u786e\u5b9a\u6267\u884c\u9636\u6bb5",children:[]},{value:"\u7f16\u5199\u6267\u884c\u903b\u8f91",id:"\u7f16\u5199\u6267\u884c\u903b\u8f91",children:[{value:"conf \u53c2\u6570",id:"conf-\u53c2\u6570",children:[]},{value:"ctx \u53c2\u6570",id:"ctx-\u53c2\u6570",children:[]}]},{value:"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",id:"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",children:[{value:"\u9644\u4e0a test-nginx \u6267\u884c\u6d41\u7a0b",id:"\u9644\u4e0a-test-nginx-\u6267\u884c\u6d41\u7a0b",children:[]},{value:"\u6ce8\u518c\u516c\u5171\u63a5\u53e3",id:"\u6ce8\u518c\u516c\u5171\u63a5\u53e3",children:[]},{value:"\u6ce8\u518c\u63a7\u5236\u63a5\u53e3",id:"\u6ce8\u518c\u63a7\u5236\u63a5\u53e3",children:[]}]}],c={toc:o};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%9B%AE%E5%BD%95"},"\u76ee\u5f55")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%A3%80%E6%9F%A5%E5%A4%96%E9%83%A8%E4%BE%9D%E8%B5%96"},"\u68c0\u67e5\u5916\u90e8\u4f9d\u8d56")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%8F%92%E4%BB%B6%E5%91%BD%E5%90%8D%E4%B8%8E%E9%85%8D%E7%BD%AE"},"\u63d2\u4ef6\u547d\u540d\u4e0e\u914d\u7f6e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%85%8D%E7%BD%AE%E6%8F%8F%E8%BF%B0%E4%B8%8E%E6%A0%A1%E9%AA%8C"},"\u914d\u7f6e\u63cf\u8ff0\u4e0e\u6821\u9a8c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A1%AE%E5%AE%9A%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5"},"\u786e\u5b9a\u6267\u884c\u9636\u6bb5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%BC%96%E5%86%99%E6%89%A7%E8%A1%8C%E9%80%BB%E8%BE%91"},"\u7f16\u5199\u6267\u884c\u903b\u8f91"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#conf-%E5%8F%82%E6%95%B0"},"conf \u53c2\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ctx-%E5%8F%82%E6%95%B0"},"ctx \u53c2\u6570")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95%E7%94%A8%E4%BE%8B"},"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E9%99%84%E4%B8%8A-test-nginx-%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B"},"\u9644\u4e0a test-nginx \u6267\u884c\u6d41\u7a0b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B3%A8%E5%86%8C%E5%85%AC%E5%85%B1%E6%8E%A5%E5%8F%A3"},"\u6ce8\u518c\u516c\u5171\u63a5\u53e3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B3%A8%E5%86%8C%E6%8E%A7%E5%88%B6%E6%8E%A5%E5%8F%A3"},"\u6ce8\u518c\u63a7\u5236\u63a5\u53e3"))))),(0,l.kt)("h2",{id:"\u68c0\u67e5\u5916\u90e8\u4f9d\u8d56"},"\u68c0\u67e5\u5916\u90e8\u4f9d\u8d56"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u63d2\u4ef6\uff0c\u6d89\u53ca\u5230\u4e00\u4e9b\u5916\u90e8\u7684\u4f9d\u8d56\u548c\u4e09\u65b9\u5e93\uff0c\u8bf7\u9996\u5148\u68c0\u67e5\u4e00\u4e0b\u4f9d\u8d56\u9879\u7684\u5185\u5bb9\u3002 \u5982\u679c\u63d2\u4ef6\u9700\u8981\u7528\u5230\u5171\u4eab\u5185\u5b58\uff0c\u9700\u8981\u5728",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/customize-nginx-configuration"},"\u81ea\u5b9a\u4e49 Nginx \u914d\u7f6e"),"\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# put this in config.yaml:\nnginx_config:\n    http_configuration_snippet: |\n        # for openid-connect plugin\n        lua_shared_dict discovery             1m; # cache for discovery metadata documents\n        lua_shared_dict jwks                  1m; # cache for JWKs\n        lua_shared_dict introspection        10m; # cache for JWT verification results\n")),(0,l.kt)("p",null,"\u63d2\u4ef6\u672c\u8eab\u63d0\u4f9b\u4e86 init \u65b9\u6cd5\u3002\u65b9\u4fbf\u63d2\u4ef6\u52a0\u8f7d\u540e\u505a\u521d\u59cb\u5316\u52a8\u4f5c\u3002"),(0,l.kt)("p",null,"\u6ce8\uff1a\u5982\u679c\u90e8\u5206\u63d2\u4ef6\u7684\u529f\u80fd\u5b9e\u73b0\uff0c\u9700\u8981\u5728 Nginx \u521d\u59cb\u5316\u542f\u52a8\uff0c\u5219\u53ef\u80fd\u9700\u8981\u5728 ",(0,l.kt)("strong",{parentName:"p"},"apisix/init.lua")," \u6587\u4ef6\u7684\u521d\u59cb\u5316\u65b9\u6cd5 http_init \u4e2d\u6dfb\u52a0\u903b\u8f91\uff0c\u5e76\u4e14\n\u53ef\u80fd\u9700\u8981\u5728 ",(0,l.kt)("strong",{parentName:"p"},"apisix/cli/ngx_tpl.lua")," \u6587\u4ef6\u4e2d\uff0c\u5bf9 Nginx \u914d\u7f6e\u6587\u4ef6\u751f\u6210\u7684\u90e8\u5206\uff0c\u6dfb\u52a0\u4e00\u4e9b\u4f60\u9700\u8981\u7684\u5904\u7406\u3002\u4f46\u662f\u8fd9\u6837\u5bb9\u6613\u5bf9\u5168\u5c40\u4ea7\u751f\u5f71\u54cd\uff0c\u6839\u636e\u73b0\u6709\u7684\n\u63d2\u4ef6\u673a\u5236\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u6211\u4eec\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a\uff0c\u9664\u975e\u4f60\u5df2\u7ecf\u5bf9\u4ee3\u7801\u5b8c\u5168\u638c\u63e1"),"\u3002"),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u547d\u540d\u4e0e\u914d\u7f6e"},"\u63d2\u4ef6\u547d\u540d\u4e0e\u914d\u7f6e"),(0,l.kt)("p",null,"\u7ed9\u63d2\u4ef6\u53d6\u4e00\u4e2a\u5f88\u68d2\u7684\u540d\u5b57\uff0c\u786e\u5b9a\u63d2\u4ef6\u7684\u52a0\u8f7d\u4f18\u5148\u7ea7\uff0c\u7136\u540e\u5728 ",(0,l.kt)("strong",{parentName:"p"},"conf/config-default.yaml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e0a\u4f60\u7684\u63d2\u4ef6\u540d\u3002\u4f8b\u5982 example-plugin \u8fd9\u4e2a\u63d2\u4ef6\uff0c\n\u9700\u8981\u5728\u4ee3\u7801\u91cc\u6307\u5b9a\u63d2\u4ef6\u540d\u79f0\uff08\u540d\u79f0\u662f\u63d2\u4ef6\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u4e0d\u53ef\u91cd\u540d\uff09\uff0c\u5728 ",(0,l.kt)("strong",{parentName:"p"},"apisix/plugins/example-plugin.lua")," \u6587\u4ef6\u4e2d\u53ef\u4ee5\u770b\u5230\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local plugin_name = "example-plugin"\n\nlocal _M = {\n    version = 0.1,\n    priority = 0,\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n')),(0,l.kt)("p",null,"\u6ce8\uff1a\u65b0\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\uff08 priority \u5c5e\u6027 \uff09\u4e0d\u80fd\u4e0e\u73b0\u6709\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\u76f8\u540c\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"../../en/latest/control-api.md#get-v1schema"},"control API")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/schema")," \u65b9\u6cd5\u67e5\u770b\u6240\u6709\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\u3002\u53e6\u5916\uff0c\u540c\u4e00\u4e2a\u9636\u6bb5\u91cc\u9762\uff0c\u4f18\u5148\u7ea7( priority )\u503c\u5927\u7684\u63d2\u4ef6\uff0c\u4f1a\u4f18\u5148\u6267\u884c\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"example-plugin")," \u7684\u4f18\u5148\u7ea7\u662f 0 \uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ip-restriction")," \u7684\u4f18\u5148\u7ea7\u662f 3000 \uff0c\u6240\u4ee5\u5728\u6bcf\u4e2a\u9636\u6bb5\uff0c\u4f1a\u5148\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"ip-restriction")," \u63d2\u4ef6\uff0c\u518d\u53bb\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"example-plugin")," \u63d2\u4ef6\u3002\u8fd9\u91cc\u7684\u201c\u9636\u6bb5\u201d\u7684\u5b9a\u4e49\uff0c\u53c2\u89c1\u540e\u7eed\u7684",(0,l.kt)("a",{parentName:"p",href:"#%E7%A1%AE%E5%AE%9A%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5"},"\u786e\u5b9a\u6267\u884c\u9636\u6bb5"),"\u8fd9\u4e00\u8282\u3002"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"conf/config-default.yaml")," \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5217\u51fa\u4e86\u542f\u7528\u7684\u63d2\u4ef6\uff08\u90fd\u662f\u4ee5\u63d2\u4ef6\u540d\u6307\u5b9a\u7684\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:                          # plugin list\n  - limit-req\n  - limit-count\n  - limit-conn\n  - key-auth\n  - prometheus\n  - node-status\n  - jwt-auth\n  - zipkin\n  - ip-restriction\n  - grpc-transcode\n  - serverless-pre-function\n  - serverless-post-function\n  - openid-connect\n  - proxy-rewrite\n  - redirect\n  ...\n")),(0,l.kt)("p",null,"\u6ce8\uff1a\u5148\u540e\u987a\u5e8f\u4e0e\u6267\u884c\u987a\u5e8f\u65e0\u5173\u3002"),(0,l.kt)("p",null,"\u7279\u522b\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u4f60\u7684\u63d2\u4ef6\u6709\u65b0\u5efa\u81ea\u5df1\u7684\u4ee3\u7801\u76ee\u5f55\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u4fee\u6539 Makefile \u6587\u4ef6\uff0c\u65b0\u589e\u521b\u5efa\u6587\u4ef6\u5939\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$(INSTALL) -d $(INST_LUADIR)/apisix/plugins/skywalking\n$(INSTALL) apisix/plugins/skywalking/*.lua $(INST_LUADIR)/apisix/plugins/skywalking/\n")),(0,l.kt)("h2",{id:"\u914d\u7f6e\u63cf\u8ff0\u4e0e\u6821\u9a8c"},"\u914d\u7f6e\u63cf\u8ff0\u4e0e\u6821\u9a8c"),(0,l.kt)("p",null,"\u5b9a\u4e49\u63d2\u4ef6\u7684\u914d\u7f6e\u9879\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org"},"Json Schema")," \u63cf\u8ff0\uff0c\u5e76\u5b8c\u6210\u5bf9 json \u7684\u6821\u9a8c\uff0c\u8fd9\u6837\u65b9\u4fbf\u5bf9\u914d\u7f6e\u7684\u6570\u636e\u89c4\n\u683c\u8fdb\u884c\u9a8c\u8bc1\uff0c\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u5b8c\u6574\u6027\u4ee5\u53ca\u7a0b\u5e8f\u7684\u5065\u58ee\u6027\u3002\u540c\u6837\uff0c\u6211\u4eec\u4ee5 example-plugin \u63d2\u4ef6\u4e3a\u4f8b\uff0c\u770b\u770b\u4ed6\u7684\u914d\u7f6e\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "example-plugin": {\n    "i": 1,\n    "s": "s",\n    "t": [1]\n  }\n}\n')),(0,l.kt)("p",null,"\u6211\u4eec\u770b\u4e0b\u4ed6\u7684 Schema \u63cf\u8ff0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local schema = {\n    type = "object",\n    properties = {\n        i = {type = "number", minimum = 0},\n        s = {type = "string"},\n        t = {type = "array", minItems = 1},\n        ip = {type = "string"},\n        port = {type = "integer"},\n    },\n    required = {"i"},\n}\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a schema \u5b9a\u4e49\u4e86\u4e00\u4e2a\u975e\u8d1f\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"i"),"\uff0c\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),"\uff0c\u975e\u7a7a\u6570\u7ec4 ",(0,l.kt)("inlineCode",{parentName:"p"},"t"),"\uff0c\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ip")," \u8ddf ",(0,l.kt)("inlineCode",{parentName:"p"},"port"),"\u3002\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"i")," \u662f\u5fc5\u9700\u7684\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u9700\u8981\u5b9e\u73b0 ",(0,l.kt)("strong",{parentName:"p"},"check_schema(conf)")," \u65b9\u6cd5\uff0c\u5b8c\u6210\u914d\u7f6e\u53c2\u6570\u7684\u5408\u6cd5\u6027\u6821\u9a8c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.check_schema(conf)\n    return core.schema.check(schema, conf)\nend\n")),(0,l.kt)("p",null,"\u6ce8\uff1a\u9879\u76ee\u5df2\u7ecf\u63d0\u4f9b\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"core.schema.check")," \u516c\u5171\u65b9\u6cd5\uff0c\u76f4\u63a5\u4f7f\u7528\u5373\u53ef\u5b8c\u6210\u914d\u7f6e\u53c2\u6570\u6821\u9a8c\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u63d2\u4ef6\u9700\u8981\u4f7f\u7528\u4e00\u4e9b\u5143\u6570\u636e\uff0c\u53ef\u4ee5\u5b9a\u4e49\u63d2\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata_schema")," \uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"admin api")," \u52a8\u6001\u7684\u7ba1\u7406\u8fd9\u4e9b\u5143\u6570\u636e\u4e86\u3002\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local metadata_schema = {\n    type = "object",\n    properties = {\n        ikey = {type = "number", minimum = 0},\n        skey = {type = "string"},\n    },\n    required = {"ikey", "skey"},\n    additionalProperties = false,\n}\n\nlocal plugin_name = "example-plugin"\n\nlocal _M = {\n    version = 0.1,\n    priority = 0,        -- TODO: add a type field, may be a good idea\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n')),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u4e4b\u524d\u89c1\u8fc7 key-auth \u8fd9\u4e2a\u63d2\u4ef6\u5728\u5b83\u7684\u6a21\u5757\u5b9a\u4e49\u65f6\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"type = 'auth'"),"\u3002\n\u5f53\u4e00\u4e2a\u63d2\u4ef6\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"type = 'auth'"),"\uff0c\u8bf4\u660e\u5b83\u662f\u4e2a\u8ba4\u8bc1\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u8ba4\u8bc1\u63d2\u4ef6\u9700\u8981\u5728\u6267\u884c\u540e\u9009\u62e9\u5bf9\u5e94\u7684 consumer\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5728 key-auth \u63d2\u4ef6\u4e2d\uff0c\u5b83\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"apikey")," \u8bf7\u6c42\u5934\u83b7\u53d6\u5bf9\u5e94\u7684 consumer\uff0c\u7136\u540e\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer.attach_consumer")," \u8bbe\u7f6e\u5b83\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ddf ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u8d44\u6e90\u4e00\u8d77\u4f7f\u7528\uff0c\u8ba4\u8bc1\u63d2\u4ef6\u9700\u8981\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer_schema")," \u6765\u68c0\u9a8c ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," \u8d44\u6e90\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")," \u5c5e\u6027\u91cc\u9762\u7684\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f key-auth \u63d2\u4ef6\u7684 consumer \u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "Joe",\n  "plugins": {\n    "key-auth": {\n      "key": "Joe\'s key"\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u4f60\u5728\u521b\u5efa ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/zh/latest/admin-api.md#consumer"},"Consumer")," \u65f6\u4f1a\u7528\u5230\u5b83\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u68c0\u9a8c\u8fd9\u4e2a\u914d\u7f6e\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u4f7f\u7528\u4e86\u5982\u4e0b\u7684 schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local consumer_schema = {\n    type = "object",\n    additionalProperties = false,\n    properties = {\n        key = {type = "string"},\n    },\n    required = {"key"},\n}\n')),(0,l.kt)("p",null,"\u6ce8\u610f key-auth \u7684 ",(0,l.kt)("strong",{parentName:"p"},"check_schema(conf)")," \u65b9\u6cd5\u548c example-plugin \u7684\u540c\u540d\u65b9\u6cd5\u7684\u533a\u522b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- key-auth\nfunction _M.check_schema(conf, schema_type)\n    if schema_type == core.schema.TYPE_CONSUMER then\n        return core.schema.check(consumer_schema, conf)\n    else\n        return core.schema.check(schema, conf)\n    end\nend\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- example-plugin\nfunction _M.check_schema(conf, schema_type)\n    return core.schema.check(schema, conf)\nend\n")),(0,l.kt)("h2",{id:"\u786e\u5b9a\u6267\u884c\u9636\u6bb5"},"\u786e\u5b9a\u6267\u884c\u9636\u6bb5"),(0,l.kt)("p",null,"\u6839\u636e\u4e1a\u52a1\u529f\u80fd\uff0c\u786e\u5b9a\u4f60\u7684\u63d2\u4ef6\u9700\u8981\u5728\u54ea\u4e2a\u9636\u6bb5\u6267\u884c\u3002 key-auth \u662f\u4e00\u4e2a\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u6240\u4ee5\u9700\u8981\u5728 rewrite \u9636\u6bb5\u6267\u884c\u3002\u5728 APISIX\uff0c\u53ea\u6709\u8ba4\u8bc1\u903b\u8f91\u53ef\u4ee5\u5728 rewrite \u9636\u6bb5\u91cc\u9762\u5b8c\u6210\uff0c\u5176\u4ed6\u9700\u8981\u5728\u4ee3\u7406\u5230\u4e0a\u6e38\u4e4b\u524d\u6267\u884c\u7684\u903b\u8f91\u90fd\u662f\u5728 access \u9636\u6bb5\u5b8c\u6210\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u6211\u4eec\u4e0d\u80fd\u5728 rewrite \u548c access \u9636\u6bb5\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"strong"},"ngx.exit")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"strong"},"core.respond.exit"),"\u3002\u5982\u679c\u786e\u5b9e\u9700\u8981\u9000\u51fa\uff0c\u53ea\u9700\u8981 return \u72b6\u6001\u7801\u548c\u6b63\u6587\uff0c\u63d2\u4ef6\u5f15\u64ce\u5c06\u4f7f\u7528\u8fd4\u56de\u7684\u72b6\u6001\u7801\u548c\u6b63\u6587\u8fdb\u884c\u9000\u51fa\u3002",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/apache/apisix/blob/35269581e21473e1a27b11cceca6f773cad0192a/apisix/plugins/limit-count.lua#L177"},"\u4f8b\u5b50"))),(0,l.kt)("h2",{id:"\u7f16\u5199\u6267\u884c\u903b\u8f91"},"\u7f16\u5199\u6267\u884c\u903b\u8f91"),(0,l.kt)("p",null,"\u5728\u5bf9\u5e94\u7684\u9636\u6bb5\u65b9\u6cd5\u91cc\u7f16\u5199\u529f\u80fd\u7684\u903b\u8f91\u4ee3\u7801\uff0c\u5728\u9636\u6bb5\u65b9\u6cd5\u4e2d\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"ctx")," \u4e24\u4e2a\u53c2\u6570\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit-conn")," \u63d2\u4ef6\u914d\u7f6e\u4e3a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h3",{id:"conf-\u53c2\u6570"},"conf \u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"conf")," \u53c2\u6570\u662f\u63d2\u4ef6\u7684\u76f8\u5173\u914d\u7f6e\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"core.log.warn(core.json.encode(conf))")," \u5c06\u5176\u8f93\u51fa\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"error.log")," \u4e2d\u8fdb\u884c\u67e5\u770b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.access(conf, ctx)\n    core.log.warn(core.json.encode(conf))\n    ......\nend\n")),(0,l.kt)("p",null,"conf:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rejected_code": 503,\n  "burst": 0,\n  "default_conn_delay": 0.1,\n  "conn": 1,\n  "key": "remote_addr"\n}\n')),(0,l.kt)("h3",{id:"ctx-\u53c2\u6570"},"ctx \u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ctx")," \u53c2\u6570\u7f13\u5b58\u4e86\u8bf7\u6c42\u76f8\u5173\u7684\u6570\u636e\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"core.log.warn(core.json.encode(ctx, true))")," \u5c06\u5176\u8f93\u51fa\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"error.log")," \u4e2d\u8fdb\u884c\u67e5\u770b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.access(conf, ctx)\n    core.log.warn(core.json.encode(ctx, true))\n    ......\nend\n")),(0,l.kt)("h2",{id:"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b"},"\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b"),(0,l.kt)("p",null,"\u9488\u5bf9\u529f\u80fd\uff0c\u5b8c\u5584\u5404\u79cd\u7ef4\u5ea6\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u5bf9\u63d2\u4ef6\u505a\u4e2a\u5168\u65b9\u4f4d\u7684\u6d4b\u8bd5\u5427\uff01\u63d2\u4ef6\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u90fd\u5728 ",(0,l.kt)("strong",{parentName:"p"},"t/plugin")," \u76ee\u5f55\u4e0b\uff0c\u53ef\u4ee5\u524d\u53bb\u4e86\u89e3\u3002\n\u9879\u76ee\u6d4b\u8bd5\u6846\u67b6\u91c7\u7528\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openresty/test-nginx"},"*",(0,l.kt)("strong",{parentName:"a"},"*test-nginx**"))," \u3002\n\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b ",(0,l.kt)("strong",{parentName:"p"},".t")," \u6587\u4ef6\uff0c\u901a\u5e38\u7528 ","_","_DATA","_","_ \u5206\u5272\u6210 \u5e8f\u8a00\u90e8\u5206 \u548c \u6570\u636e\u90e8\u5206\u3002\u8fd9\u91cc\u6211\u4eec\u7b80\u5355\u4ecb\u7ecd\u4e0b\u6570\u636e\u90e8\u5206\uff0c\n\u4e5f\u5c31\u662f\u771f\u6b63\u6d4b\u8bd5\u7528\u4f8b\u7684\u90e8\u5206\uff0c\u4ecd\u7136\u4ee5 key-auth \u63d2\u4ef6\u4e3a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-perl"},'=== TEST 1: sanity\n--- config\n    location /t {\n        content_by_lua_block {\n            local plugin = require("apisix.plugins.key-auth")\n            local ok, err = plugin.check_schema({key = \'test-key\'}, core.schema.TYPE_CONSUMER)\n            if not ok then\n                ngx.say(err)\n            end\n\n            ngx.say("done")\n        }\n    }\n--- request\nGET /t\n--- response_body\ndone\n--- no_error_log\n[error]\n')),(0,l.kt)("p",null,"\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u4e3b\u8981\u6709\u4e09\u90e8\u5206\u5185\u5bb9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7a0b\u5e8f\u4ee3\u7801\uff1a Nginx location \u7684\u914d\u7f6e\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\uff1a http \u7684 request \u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u68c0\u67e5\uff1a status \uff0cheader \uff0cbody \uff0cerror_log \u68c0\u67e5")),(0,l.kt)("p",null,"\u8fd9\u91cc\u8bf7\u6c42 ",(0,l.kt)("strong",{parentName:"p"},"/t")," \uff0c\u7ecf\u8fc7\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("strong",{parentName:"p"},"location")," \uff0c\u8c03\u7528 ",(0,l.kt)("strong",{parentName:"p"},"content_by_lua_block"),' \u6307\u4ee4\u5b8c\u6210 lua \u7684\u811a\u672c\uff0c\u6700\u7ec8\u8fd4\u56de\u3002\n\u7528\u4f8b\u7684\u65ad\u8a00\u662f response_body \u8fd4\u56de "done"\uff0c',(0,l.kt)("strong",{parentName:"p"},"no_error_log")," \u8868\u793a\u4f1a\u5bf9 Nginx \u7684 error.log \u68c0\u67e5\uff0c\n\u5fc5\u987b\u6ca1\u6709 ERROR \u7ea7\u522b\u7684\u8bb0\u5f55\u3002"),(0,l.kt)("h3",{id:"\u9644\u4e0a-test-nginx-\u6267\u884c\u6d41\u7a0b"},"\u9644\u4e0a test-nginx \u6267\u884c\u6d41\u7a0b"),(0,l.kt)("p",null,"\u6839\u636e\u6211\u4eec\u5728 Makefile \u91cc\u914d\u7f6e\u7684 PATH\uff0c\u548c\u6bcf\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},".t")," \u6587\u4ef6\u6700\u524d\u9762\u7684\u4e00\u4e9b\u914d\u7f6e\u9879\uff0c\u6846\u67b6\u4f1a\u7ec4\u88c5\u6210\u4e00\u4e2a\u5b8c\u6574\u7684 nginx.conf \u6587\u4ef6\uff0c\n",(0,l.kt)("strong",{parentName:"p"},"t/servroot")," \u4f1a\u88ab\u5f53\u6210 Nginx \u7684\u5de5\u4f5c\u76ee\u5f55\uff0c\u542f\u52a8 Nginx \u5b9e\u4f8b\u3002\u6839\u636e\u6d4b\u8bd5\u7528\u4f8b\u63d0\u4f9b\u7684\u4fe1\u606f\uff0c\u53d1\u8d77 http \u8bf7\u6c42\u5e76\u68c0\u67e5 http \u7684\u8fd4\u56de\u9879\uff0c\n\u5305\u62ec http status\uff0chttp response header\uff0c http response body \u7b49\u3002"),(0,l.kt)("h3",{id:"\u6ce8\u518c\u516c\u5171\u63a5\u53e3"},"\u6ce8\u518c\u516c\u5171\u63a5\u53e3"),(0,l.kt)("p",null,"\u63d2\u4ef6\u53ef\u4ee5\u6ce8\u518c\u66b4\u9732\u7ed9\u516c\u7f51\u7684\u63a5\u53e3\u3002\u4ee5 jwt-auth \u63d2\u4ef6\u4e3a\u4f8b\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u4e3a\u4e86\u8ba9\u5ba2\u6237\u7aef\u80fd\u591f\u7b7e\u540d\uff0c\u6ce8\u518c\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /apisix/plugin/jwt/sign")," \u8fd9\u4e2a\u63a5\u53e3:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local function gen_token()\n    -- ...\nend\n\nfunction _M.api()\n    return {\n        {\n            methods = {"GET"},\n            uri = "/apisix/plugin/jwt/sign",\n            handler = gen_token,\n        }\n    }\nend\n')),(0,l.kt)("p",null,"\u6ce8\u610f\u6ce8\u518c\u7684\u63a5\u53e3\u4f1a\u66b4\u9732\u5230\u5916\u7f51\u3002\n\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/plugin-interceptors"},"interceptors")," \u6765\u4fdd\u62a4\u5b83\u3002"),(0,l.kt)("h3",{id:"\u6ce8\u518c\u63a7\u5236\u63a5\u53e3"},"\u6ce8\u518c\u63a7\u5236\u63a5\u53e3"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u66b4\u9732 API \u5230 localhost \u6216\u5185\u7f51\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/control-api"},"Control API")," \u6765\u66b4\u9732\u5b83\u3002"),(0,l.kt)("p",null,"Take a look at example-plugin plugin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local function hello()\n    local args = ngx.req.get_uri_args()\n    if args["json"] then\n        return 200, {msg = "world"}\n    else\n        return 200, "world\\n"\n    end\nend\n\n\nfunction _M.control_api()\n    return {\n        {\n            methods = {"GET"},\n            uris = {"/v1/plugin/example-plugin/hello"},\n            handler = hello,\n        }\n    }\nend\n')),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u6539\u8fc7\u9ed8\u8ba4\u7684 control API \u914d\u7f6e\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u66b4\u9732\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"GET /v1/plugin/example-plugin/hello")," API \u53ea\u6709\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," \u624d\u80fd\u8bbf\u95ee\u5b83\u3002"))}u.isMDXComponent=!0}}]);