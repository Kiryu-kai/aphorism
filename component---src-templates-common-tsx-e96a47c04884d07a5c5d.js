(self.webpackChunkaphorism=self.webpackChunkaphorism||[]).push([[548],{9100:function(e,t,r){var n=r(9489),o=r(7067);function c(t,r,u){return o()?(e.exports=c=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},e.exports.default=e.exports,e.exports.__esModule=!0),c.apply(null,arguments)}e.exports=c,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},413:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(7294),o=r(5414),c=r(4983),u=r(1274),l=r(5444),a={Link:l.rU,YouTube:function(e){var t=e.src,r=e.width,o=e.height,c=t.replace("https://youtu.be/","https://www.youtube.com/embed/").replace("?t=","?start=");return n.createElement("iframe",{width:null!=r?r:560,height:null!=o?o:315,src:c,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}};function p(e){var t,r=e.data.mdx;return n.createElement("div",null,n.createElement(o.q,null,n.createElement("title",null,r.frontmatter.words," | #桐生ココの格言 | 桐生会")),n.createElement("h1",null,null===(t=r.frontmatter)||void 0===t?void 0:t.words),n.createElement(c.MDXProvider,{components:a},n.createElement(u.MDXRenderer,{frontmatter:r.frontmatter},r.body)),n.createElement("a",{className:"twitter-share-button",href:"https://twitter.com/intent/tweet?text=Hello%20world","data-size":"large"},"Tweet"),n.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),n.createElement("p",null,n.createElement(l.rU,{to:"/aphorism/"},"戻る")))}},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(9100),o=r(319),c=r(9713),u=r(7316),l=["scope","children"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),s=r(4983).mdx,f=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=u(e,l),a=f(t),d=i.useMemo((function(){if(!r)return null;var e=p({React:i,mdx:s},a),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return i.createElement(d,p({},c))}}}]);
//# sourceMappingURL=component---src-templates-common-tsx-e96a47c04884d07a5c5d.js.map