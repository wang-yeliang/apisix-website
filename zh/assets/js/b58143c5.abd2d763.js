(self.webpackChunk=self.webpackChunk||[]).push([[8241],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||s;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5329:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return l},default:function(){return c}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),i={title:"Install Ingress APISIX on KubeSphere"},o={unversionedId:"deployments/kubesphere",id:"deployments/kubesphere",isDocsHomePage:!1,title:"Install Ingress APISIX on KubeSphere",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/deployments/kubesphere.md",sourceDirName:"deployments",slug:"/deployments/kubesphere",permalink:"/zh/docs/ingress-controller/deployments/kubesphere",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/deployments/kubesphere.md",version:"current",frontMatter:{title:"Install Ingress APISIX on KubeSphere"},sidebar:"docs",previous:{title:"Install Ingress APISIX on K3S and Rancher RKE",permalink:"/zh/docs/ingress-controller/deployments/k3s-rke"},next:{title:"Install Ingress APISIX on Minikube",permalink:"/zh/docs/ingress-controller/deployments/minikube"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX",id:"install-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,s.kt)("a",{parentName:"p",href:"https://kubesphere.io/"},"KubeSphere"),"."),(0,s.kt)("p",null,"KubeSphere is a distributed operating system managing cloud native applications with Kubernetes as its kernel, and provides plug-and-play architecture for the seamless integration of third-party applications to boost its ecosystem."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://kubesphere.io/docs/quick-start/"},"KubeSphere"),", you can choose ",(0,s.kt)("a",{parentName:"li",href:"https://kubesphere.io/docs/quick-start/all-in-one-on-linux/"},"All-in-one Installation on Linux")," or ",(0,s.kt)("a",{parentName:"li",href:"https://kubesphere.io/docs/quick-start/minimal-kubesphere-on-k8s/"},"Minimal KubeSphere on Kubernetes"),"."),(0,s.kt)("li",{parentName:"ul"},"Install ",(0,s.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,s.kt)("li",{parentName:"ul"},"Clone ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,s.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations of this document will be executed in namespace ",(0,s.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,s.kt)("h2",{id:"install-apisix"},"Install APISIX"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," as the proxy plane of apisix-ingress-controller, should be deployed in advance."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo add apisix https://charts.apiseven.com\n# Use `helm search repo apisix` to search charts about apisix\nhelm repo update\nhelm install apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set allow.ipList="{0.0.0.0/0}" \\\n  --namespace ingress-apisix \\\nkubectl get service --namespace ingress-apisix\n')),(0,s.kt)("p",null,"Two Service resources were created, one is ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,s.kt)("p",null,"The gateway service type is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"NodePort"),", so that clients can access Apache APISIX through the Node IPs and the assigned port.\nIf you want to expose a ",(0,s.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service, try to use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubesphere/porter"},"Porter"),"."),(0,s.kt)("p",null,"Another thing that should be concerned that the ",(0,s.kt)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the Pod CIDR settings, so that the apisix-ingress-controller instances can access the APISIX instances (resources pushing)."),(0,s.kt)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),(0,s.kt)("p",null,"You can also install apisix-ingress-controller by Helm Charts. It's recommended to install it in the same namespace with Apache APISIX."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\n# install apisix-ingress-controller\nhelm install apisix-ingress-controller apisix/apisix-ingress-controller \\\n  --set image.tag=dev \\\n  --set config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set config.apisix.adminKey=edd1c9f034335f136f87ad84b625c8f1 \\\n  --namespace ingress-apisix\n")),(0,s.kt)("p",null,"The admin key used above is the default one. If you change the admin key configuration when you deployed APISIX, please remember to change it here."),(0,s.kt)("p",null,"Change the ",(0,s.kt)("inlineCode",{parentName:"p"},"image.tag")," to the apisix-ingress-controller version that you desire. Wait for the corresponding pods are running."),(0,s.kt)("p",null,"Now try to create some ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,s.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}c.isMDXComponent=!0}}]);