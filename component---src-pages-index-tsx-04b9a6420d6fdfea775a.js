(self.webpackChunkaphorism=self.webpackChunkaphorism||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},3354:function(e,t,r){"use strict";var n=r(319);e.exports=function(e){if(!Array.isArray(e))throw new TypeError("Expected an array, got ".concat(typeof e));for(var t=(e=n(e)).length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),o=[e[r],e[t]];e[t]=o[0],e[r]=o[1]}return e}},102:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),p=o,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));d.displayName="MDXCreateElement";var p=r(5444),f={Link:p.rU},y=function(e){var t=e.children;return n.createElement(s,{components:f},t)},v=r(5414),b=r(3354),h=r.n(b);function g(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=function(e){for(var t,r=e.max,o=(0,p.K2)("1373712219").allMarkdownRemark.edges,a=[],l=g(h()(o).slice(0,null!=r?r:o.length));!(t=l()).done;){var c=t.value.node,i=c.frontmatter,u=c.fields;a.push(n.createElement("li",{key:u.slug,className:"AllMd-module--li--1oIVq"},n.createElement(p.rU,{to:u.slug,className:"AllMd-module--a--2dCOz"},n.createElement("span",{className:"AllMd-module--a__inner--3IhCI"},n.createElement("span",{className:"AllMd-module--txt--3069Q"},i.words),n.createElement("span",{className:"AllMd-module--more--20IKO"},n.createElement("span",{className:"AllMd-module--more__inner--2r4FK"},"詳しく見る"))))))}return n.createElement("div",{className:"AllMd-module--wrap--13P3T"},n.createElement("ul",{className:"AllMd-module--ul--iqryu"},a))},O=r(1349),w=function(){return(w=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},j=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},N=!1,_=(0,n.forwardRef)((function(e,t){var r=e.style,o=j(e,["style"]),a=A();!N&&(null==r?void 0:r.height)&&(N=!0,console.warn("<ReactDiv100vh /> overrides the height property of the style prop"));var l=w(w({},r),{height:a?a+"px":"100vh"});return n.createElement("div",w({ref:t,style:l},o))}));_.displayName="Div100vh";function A(){var e=(0,n.useState)(M),t=e[0],r=e[1],o=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1];return(0,n.useEffect)((function(){S()&&r(!0)}),[]),t}();return(0,n.useEffect)((function(){if(o)return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)};function e(){var e=M();r(e)}}),[o]),o?t:null}function M(){var e;return S()?(null===(e=document.documentElement)||void 0===e?void 0:e.clientHeight)||window.innerHeight:null}function S(){return"undefined"!=typeof window&&"undefined"!=typeof document}var P=r.p+"static/index-coco-8ab9055725b42882b51e9b785d7b0963.png",I=r.p+"static/index-bg-185cc49c2e26b9227383afb36e8d6916.jpg",C="index-module--description__row--370S0",k=function(){var e=(0,p.K2)("3159585216").site,t=A();return n.createElement(y,null,n.createElement(v.q,null,n.createElement("title",null,e.siteMetadata.title)),n.createElement("div",{className:"index-module--primary--ayFQK",style:{backgroundImage:"url("+I+")"}},n.createElement("div",{className:"index-module--mv--2EBXj",style:{minHeight:t}},n.createElement("h1",{className:"index-module--h1--vaVG6"},e.siteMetadata.title),n.createElement("div",{className:"index-module--description--3T8O3"},n.createElement("p",{className:"index-module--description__txt--29xgU"},n.createElement("span",{className:C},"心に残った一言。大切にしている言葉。"),n.createElement("span",{className:C},"人生観を変えた一瞬。"),n.createElement("span",{className:C},"たつのこたちの心に染み渡る、"),n.createElement("span",{className:C},"そんな数々の名シーンを紹介します。"))),n.createElement("div",{className:"index-module--coco--fHNIw"},n.createElement("img",{src:P,alt:"",className:"index-module--coco__img--liO0H",draggable:!1}))),n.createElement("div",{className:"index-module--youtube--lrDUj"},n.createElement(p.rU,{to:"https://www.youtube.com/channel/UCS9uQI-jC3DE0L4IpXyvr6w",className:"index-module--youtube__link--1GCRP"},"Coco Ch."))),n.createElement("div",{className:"index-module--secondary--2myLU"},n.createElement(E,null)),n.createElement(O.$,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-04b9a6420d6fdfea775a.js.map