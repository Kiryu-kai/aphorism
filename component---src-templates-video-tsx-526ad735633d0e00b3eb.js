(self.webpackChunkaphorism=self.webpackChunkaphorism||[]).push([[935],{7246:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var a={};r.r(a),r.d(a,{V:function(){return s},BL:function(){return l},QG:function(){return i},Rk:function(){return c}});var n=r(7294),o=r(5414),l="YouTube-module--start--1vb46",i="YouTube-module--start__inner--XCifR",c="YouTube-module--video--Rkmme",s="YouTube-module--iframe--2Yfjg",m=function(e){var t=e.src,r=e.width,o=e.height,m=null==t?void 0:t.replace("https://youtu.be/","https://www.youtube.com/embed/").replace("?t=","?start="),u=Number((m.match(/\?start=([0-9]+)/)||[null,"0"])[1]),d=Math.floor(u/60/60),p=Math.floor(u%3600/60),h=String(Math.floor(u%60/60*60)).padStart(2,"0");return n.createElement("div",{className:a.wrap},n.createElement("p",{className:l},n.createElement("span",{className:i},(d?String(d).padStart(2,"0")+"：":"")+(p?String(p).padStart(2,"0")+"：":"")+h,"〜")),n.createElement("div",{className:c},n.createElement("iframe",{width:null!=r?r:560,height:null!=o?o:315,src:m,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:s})))},u=r(5444),d=function(e){e.src;var t=e.children;return n.createElement(u.rU,{to:"/",className:"Button-module--button--101Ou"},t)},p="Footer-module--inspired__p--28N8x",h="Footer-module--inspired__li--2QYAJ";function f(){var e=(0,n.useState)(!1),t=e[0],r=e[1];return(0,n.useEffect)((function(){window.addEventListener("click",(function(){t&&r(!t)}))})),n.createElement("footer",{className:"Footer-module--wrap--2pSLR"},n.createElement("p",{className:"Footer-module--copyright--2Iyp5"},n.createElement("small",null,"©︎ 2019 Coco Kiryu - ",n.createElement("button",{type:"button",className:"Footer-module--btn--1lvld",onClick:function(e){e.stopPropagation(),r(!t)},"aria-expanded":t},"Inspired")," - ",n.createElement("a",{href:"https://github.com/Kiryu-kai/aphorism"},"Repository"))),n.createElement("div",{className:"Footer-module--inspired--1WZpw",hidden:!t},n.createElement("div",{className:"Footer-module--inspired__inner--gXPPX",onClick:function(e){return e.stopPropagation()}},n.createElement("h2",{className:"Footer-module--inspired__hdg--2N9NQ"},"Inspired by"),n.createElement("p",{className:p},"The collaborators are different for each directory."),n.createElement("p",{className:p},"This /aphorism directory is inspired by the following fans."),n.createElement("ul",{className:"Footer-module--inspired__ul--2ez4L"},n.createElement("li",{className:h},n.createElement("a",{href:"https://twitter.com/ragnaSUS"},"UNこの悪魔ラグナ🐉［雪民］(レ)(@ragnaSUS) - Twitter")),n.createElement("li",{className:h},n.createElement("a",{href:"https://twitter.com/rome0504/status/1407185429242122244"},"ローマ・アビュース🐉(@rome0504) - Twitter"))))))}function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function w(e){var t=e.data,r=e.pageContext,a=t.site.siteMetadata.title,l=t.markdownRemark,i=l.frontmatter,c=(r.previous,r.next,i.tags.length&&function(){for(var e,t=[],r=v(i.tags);!(e=r()).done;){var a=e.value;t.push(n.createElement("li",{className:"video-module--tags__item--1p-4a"},n.createElement("span",{className:"video-module--tags__txt--3e8qG"},a)))}return n.createElement("ul",{className:"video-module--tags--3oYQd"},t)}());return n.createElement(n.Fragment,null,n.createElement("main",{className:"video-module--wrap--3aaqn"},n.createElement(o.q,null,n.createElement("title",null,i.words," | ",a),n.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"})),n.createElement("div",{className:"video-module--videoContainer--FB-4E"},n.createElement("div",{className:"video-module--videoContainer__title--C8oaK"},n.createElement("h1",{className:"video-module--h1--5NOk7"},i.words)),n.createElement("div",{className:"video-module--videoContainer__tag--1YTcb"},c),n.createElement("div",{className:"video-module--videoContainer__video--2dxEV"},n.createElement(m,{src:i.src,width:i.width,height:i.height}))),n.createElement("div",{className:"video-module--sns--WC-S_"},n.createElement("a",{className:"twitter-share-button",href:"https://twitter.com/intent/tweet?text=「"+(i.words.length<20?i.words:i.words.slice(0,19)+"…")+"」 #桐生ココの格言","data-size":"large"},"Tweet #桐生ココの格言")),n.createElement("div",{className:"video-module--markdown--xC-lo"},n.createElement("div",{dangerouslySetInnerHTML:{__html:l.html}})),n.createElement("p",null,n.createElement(d,{src:"/"},"戻る"))),n.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-templates-video-tsx-526ad735633d0e00b3eb.js.map