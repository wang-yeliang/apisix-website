(self.webpackChunk=self.webpackChunk||[]).push([[3089],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,g=d["".concat(c,".").concat(p)]||d[p]||u[p]||l;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4428:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),n=a(2263),l=a(5888),i=a(3146),o=a(6742),c=a(4973);var s=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(o.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(o.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(5601),u=a(6700);var d=function(e){var t=e.metadata,a=e.items,o=e.sidebar,c=(0,n.default)().siteConfig.title,d=t.blogDescription,p=t.blogTitle,g="/"===t.permalink?c:p;return r.createElement(l.Z,{title:g,description:d,wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(m.Z,{sidebar:o})),r.createElement("main",{className:"col col--7"},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(s,{metadata:t})))))}},3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(7294),n=a(6010),l=a(3905),i=a(4973),o=a(6742),c=a(3009),s=a(1217),m="blogPostTitle_GeHD",u="blogPostDate_fNvV",d=a(6700);var p=function(e){var t,a,p=(t=(0,d.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),g=e.children,h=e.frontMatter,v=e.metadata,f=e.truncated,E=e.isBlogPostPage,b=void 0!==E&&E,y=v.date,N=v.formattedDate,_=v.permalink,k=v.tags,O=v.readingTime,Z=h.author,w=h.title,T=h.image,P=h.keywords,x=h.author_url||h.authorURL,j=h.author_title||h.authorTitle,L=h.author_image_url||h.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(s.Z,{keywords:P,image:T}),r.createElement("article",{className:b?void 0:"margin-bottom--xl"},(a=b?"h1":"h2",r.createElement("header",null,r.createElement(a,{className:(0,n.Z)("margin-bottom--sm",m)},b?w:r.createElement(o.Z,{to:_},w)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:y,className:u},N,O&&r.createElement(r.Fragment,null," \xb7 ",p(O)))),r.createElement("div",{className:"avatar margin-vert--md"},L&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:x},r.createElement("img",{src:L,alt:Z})),r.createElement("div",{className:"avatar__intro"},Z&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(o.Z,{href:x},Z)),r.createElement("small",{className:"avatar__subtitle"},j)))))),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:c.Z},g)),(k.length>0||f)&&r.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var t=e.label,a=e.permalink;return r.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),f&&r.createElement("div",{className:"col text--right"},r.createElement(o.Z,{to:v.permalink,"aria-label":"Read more about "+w},r.createElement("strong",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(7294),n=a(6010),l=a(6742),i="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",s="sidebarItem_2UVv",m="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM";function d(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,n.Z)(i,"thin-scrollbar")},r.createElement("h3",{className:o},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:u},e.title))}))))}},3009:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var r=a(7294),n=a(6742),l=a(210),i=a(9756),o=a(6010),c=a(4973),s=a(6700),m="enhancedAnchor_2LWZ",u=function(e){return function(t){var a,n=t.id,l=(0,i.Z)(t,["id"]),u=(0,s.LU)().navbar.hideOnScroll;return n?r.createElement(e,l,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",(a={},a[m]=!u,a)),id:n}),l.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,l)}},d={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(l.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(n.Z,e)},pre:function(e){var t,a=e.children;return(0,r.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:r.createElement(l.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:u("h1"),h2:u("h2"),h3:u("h3"),h4:u("h4"),h5:u("h5"),h6:u("h6")}}}]);