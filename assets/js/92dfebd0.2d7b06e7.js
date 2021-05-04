(self.webpackChunk=self.webpackChunk||[]).push([[2731],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=l,m=d["".concat(o,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1203:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var a=n(2122),l=n(9756),i=(n(7294),n(3905)),r={title:"Apache APISIX Helm Chart"},s={unversionedId:"apisix",id:"apisix",isDocsHomePage:!1,title:"Apache APISIX Helm Chart",description:"\x3c!--",source:"@site/docs/apisix-helm-chart/apisix.md",sourceDirName:".",slug:"/apisix",permalink:"/docs/helm-chart/apisix",editUrl:"https://github.com/apache/apisix-helm-chart/edit/master/docs/en/latest/apisix.md",version:"current",frontMatter:{title:"Apache APISIX Helm Chart"},sidebar:"docs",next:{title:"Apache APISIX Dashboard Helm Chart",permalink:"/docs/helm-chart/apisix-dashboard"}},o=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Install",id:"install",children:[]},{value:"Uninstall",id:"uninstall",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"Seeking help",id:"seeking-help",children:[]}],p={toc:o};function c(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Update the dependency chart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm repo add bitnami https://charts.bitnami.com/bitnami\n$ helm dependency update .\n")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"To install the chart with release name ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm install apisix . -n default\n")),(0,i.kt)("h2",{id:"uninstall"},"Uninstall"),(0,i.kt)("p",null,"To uninstall/delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix")," release:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall apisix . -n default\n")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How to install APISIX only?")),(0,i.kt)("p",null,"The Charts will install etcd 3.4.14 by default. If you want to install Apache APISIX only, please set ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd.enabled=false")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd.host={http://your_etcd_address:2379}"),"."),(0,i.kt)("p",null,"Please use the FQDN address or the IP of the etcd."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# if etcd export by kubernetes service need spell fully qualified name\n$ helm install apisix . -n default \\\n    --set etcd.enabled=false \\\n    --set etcd.host={http://etcd_node_1:2379\\,http://etcd_node_2:2379}\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Why get 403 when I access Apache APISIX admin api?")),(0,i.kt)("p",null,"We can define ",(0,i.kt)("inlineCode",{parentName:"p"},"allow.ipList")," in CIDR."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ helm install apisix . -n default \\\n    --set allow.ipList="10.22.100.12/8" \\\n    --set allow.ipList="172.0.0.0/24"\n')),(0,i.kt)("p",null,"If you want to allow all IPs for a quick test, just set ",(0,i.kt)("inlineCode",{parentName:"p"},'allow.ipList=""')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ helm install apisix . -n default \\\n    --set allow.ipList=""\n')),(0,i.kt)("h2",{id:"seeking-help"},"Seeking help"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mailing List: Mail to ",(0,i.kt)("a",{parentName:"li",href:"mailto:dev-subscribe@apisix.apache.org"},"dev-subscribe@apisix.apache.org"),", follow the reply to subscribe the mailing list."),(0,i.kt)("li",{parentName:"ul"},"QQ Group - 578997126, 552030619"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://s.apache.org/slack-invite"},"Slack Workspace")," - join ",(0,i.kt)("inlineCode",{parentName:"li"},"#apisix")," on our Slack to meet the team and ask questions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{parentName:"li",src:"https://img.shields.io/twitter/follow/ApacheAPISIX?style=social",alt:"Twitter Follow"})," - follow and interact with us using hashtag ",(0,i.kt)("inlineCode",{parentName:"li"},"#ApacheAPISIX")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://space.bilibili.com/551921247"},"bilibili video"))))}c.isMDXComponent=!0}}]);