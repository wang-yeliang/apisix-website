(self.webpackChunk=self.webpackChunk||[]).push([[557],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6082:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={title:"Release Apache APISIX Dashboard 2.4"},c={permalink:"/events/2021/02/12/release-apache-apisix-dashboard-2.4",source:"@site/events/2021-02-12-release-apache-apisix-dashboard-2.4.md",title:"Release Apache APISIX Dashboard 2.4",description:"This release mainly improves basic features, bugfix and adds test cases.",date:"2021-02-12T00:00:00.000Z",formattedDate:"February 12, 2021",tags:[],readingTime:1.44,truncated:!0,prevItem:{title:"Release Apache APISIX 2.4",permalink:"/events/2021/03/05/release-apache-apisix-2.4"},nextItem:{title:"Release Apache APISIX Ingress Controller 0.3.0",permalink:"/events/2021/02/11/release-apache-apisix-ingress-controller-0.3.0"}},s=[],p={toc:s};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release mainly improves basic features, bugfix and adds test cases."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Manager API")," 2.4 should be used with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.3"},"Apache APISIX 2.3"),". It is not recommended to use with other Apache APISIX versions."))}l.isMDXComponent=!0}}]);