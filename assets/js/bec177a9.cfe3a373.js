(self.webpackChunk=self.webpackChunk||[]).push([[8714],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9773:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),l={title:"Apache APISIX Dashboard Helm Chart"},o={unversionedId:"apisix-dashboard",id:"apisix-dashboard",isDocsHomePage:!1,title:"Apache APISIX Dashboard Helm Chart",description:"\x3c!--",source:"@site/docs/apisix-helm-chart/apisix-dashboard.md",sourceDirName:".",slug:"/apisix-dashboard",permalink:"/docs/helm-chart/apisix-dashboard",editUrl:"https://github.com/apache/apisix-helm-chart/edit/master/docs/en/latest/apisix-dashboard.md",version:"current",frontMatter:{title:"Apache APISIX Dashboard Helm Chart"},sidebar:"docs",previous:{title:"Apache APISIX Helm Chart",permalink:"/docs/helm-chart/apisix"},next:{title:"Apache APISIX Ingress Controller Helm Chart",permalink:"/docs/helm-chart/apisix-ingress-controller"}},c=[{value:"Install",id:"install",children:[]},{value:"Uninstall",id:"uninstall",children:[]}],s={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"To install the chart with release name ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-dashboard"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm install apisix-dashboard . -n default\n")),(0,i.kt)("h2",{id:"uninstall"},"Uninstall"),(0,i.kt)("p",null,"To uninstall/delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix-dashboard")," release:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm uninstall apisix-dashboard . -n default\n")))}p.isMDXComponent=!0}}]);