"use strict";(self.webpackChunkaphorism=self.webpackChunkaphorism||[]).push([[179],{6771:function(e,t,a){a.d(t,{h:function(){return s}});var r=a(7294),l=a(5444),n=a.p+"static/header-25f1f524702a0fe6048f501c6a52ff2d.jpeg";function s(){return r.createElement("header",{className:"Header-module--header--3ERvK"},r.createElement("div",{className:"Header-module--inner--QVG87"},r.createElement("h1",{className:"Header-module--h1--4rVR7"},r.createElement(l.rU,{to:"/",className:"Header-module--h1__link--Ki3-t"},"#桐生ココの格言")),r.createElement("p",{className:"Header-module--youtube--Ym6SC"},r.createElement("a",{href:"https://www.youtube.com/channel/UCS9uQI-jC3DE0L4IpXyvr6w",className:"Header-module--youtube__link--15bey"},r.createElement("img",{src:n,alt:"Coco Ch. 桐生ココ",className:"Header-module--youtube__img--kOm++"})))))}},84:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var r=a(7294),l=a(5414),n=a(477),s=function(e){var t=e.src,a=e.width,l=e.height,n=null==t?void 0:t.replace("https://youtu.be/","https://www.youtube.com/embed/").replace("?t=","?start="),s=Number((n.match(/\?start=([0-9]+)/)||[null,"0"])[1]),o=Math.floor(s/60/60),m=Math.floor(s%3600/60),i=String(Math.floor(s%60/60*60)).padStart(2,"0");return r.createElement("div",{className:"YouTube-module--wrap--7uolJ"},r.createElement("p",{className:"YouTube-module--start--BjBjy"},r.createElement("span",{className:"YouTube-module--start__inner--FYX-U"},(o?String(o).padStart(2,"0")+"：":"")+(m?String(m).padStart(2,"0")+"：":"")+i,"〜")),r.createElement("div",{className:"YouTube-module--video--IPVJQ"},r.createElement("iframe",{width:null!=a?a:560,height:null!=l?l:315,src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"YouTube-module--iframe--ceQ2V"})),r.createElement("div",{className:"YouTube-module--btn--QkUVS"},r.createElement("a",{href:t,className:"YouTube-module--btn__link--XlZSk"},"YouTubeで見る")))},o=a(5444),m=function(e){var t=e.src,a=e.children;return r.createElement(o.rU,{to:t,className:"ReturnBtn-module--button--uZZcW",onClick:function(e){document.referrer.startsWith(window.location.origin)&&(e.preventDefault(),history.back())}},a)},i=a(6771),c=a(1349),u="PrevNextLink-module--link--9PfSQ",d=function(e){var t=e.previous,a=e.next;return r.createElement("div",{className:"PrevNextLink-module--wrap--let7f"},t?r.createElement("p",{className:"PrevNextLink-module--previous--g-g7g"},r.createElement(o.rU,{to:t.fields.slug,className:u},t.frontmatter.words)):"",a?r.createElement("p",{className:"PrevNextLink-module--next--T3ga+"},r.createElement(o.rU,{to:a.fields.slug,className:u},a.frontmatter.words)):"")},h=a(5900),p="details-module--sns__item--cKuQe",f="details-module--sns__title--7j3gQ",g="details-module--sns__btn--Y6QEz";function E(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function w(e){var t=e.data,a=e.pageContext,o=t.site.siteMetadata.title,u=t.markdownRemark,v=u.frontmatter,w=u.fields,N=w.slug.replace(/\//g,"").split("."),b=N[0],y=N[1],k="https://youtu.be/"+b+"?t="+y,_=a.previous,S=a.next,x=v.tags.length&&function(){for(var e,t=[],a=E(v.tags);!(e=a()).done;){var l=e.value;t.push(r.createElement("li",{className:"details-module--tags__item--8u-m5",key:l},r.createElement("span",{className:"details-module--tags__txt--bdoD5"},l)))}return r.createElement("ul",{className:"details-module--tags--6ZeFf"},t)}(),C={hash:b.replace(/[^a-zA-Z0-9_]/g,"")+"_"+y,text:"桐生ココ「"+(v.words.length<20?v.words:v.words.slice(0,19)+"…")+" 」"};return(0,r.useEffect)((function(){var e,t;null===(e=window)||void 0===e||null===(t=e.twttr)||void 0===t||t.widgets.load()})),r.createElement(n.A,null,r.createElement(l.q,null,r.createElement("title",null,"「",v.words,"」 | ",o),r.createElement("meta",{property:"og:url",content:"https://kiryu-kai.github.io/aphorism"+w.slug}),r.createElement("meta",{property:"og:title",content:"「"+v.words+"」 | "+o}),r.createElement("meta",{property:"og:description",content:"心に残った一言。大切にしている言葉。人生観を変えた一瞬。たつのこたちの心に染み渡る、そんな数々の名シーンを紹介します。"}),r.createElement("meta",{property:"og:image",content:"https://kiryu-kai.github.io"+h.Z}),r.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"})),r.createElement(i.h,null),r.createElement("main",{className:"details-module--container--svu8N"},r.createElement("div",{className:"details-module--inner--cj5HP"},r.createElement("div",{className:"details-module--videoContainer--fFy6H"},r.createElement("div",{className:"details-module--videoContainer__title--DbX73"},r.createElement("h1",{className:"details-module--h1--OPFmi"},v.words)),r.createElement("div",{className:"details-module--videoContainer__tag--QlxzY"},x),r.createElement("div",{className:"details-module--videoContainer__video--cSf64"},r.createElement(s,{src:k,width:v.width,height:v.height}))),r.createElement("dl",{className:"details-module--sns--hg6fN"},r.createElement("div",{className:p},r.createElement("dt",{className:f},"元動画をシェアする"),r.createElement("dd",{className:g},r.createElement("span",null,r.createElement("a",{className:"twitter-share-button",href:"https://twitter.com/intent/tweet?url="+k.replace("?","%3F")+"&hashtags=桐生ココの格言,"+C.hash,"data-url":k,"data-hashtags":"桐生ココの格言,"+C.hash,"data-text":C.text,"data-size":"large"},"Twitter #桐生ココの格言")))),r.createElement("div",{className:p},r.createElement("dt",{className:f},"このページをシェアする"),r.createElement("dd",{className:g},r.createElement("span",null,r.createElement("a",{className:"twitter-share-button",href:"https://twitter.com/intent/tweet?url=https://kiryu-kai.github.io/aphorism"+w.slug+"&hashtags=桐生ココの格言,"+C.hash,"data-url":"https://kiryu-kai.github.io/aphorism"+w.slug,"data-hashtags":"桐生ココの格言,"+C.hash,"data-text":C.text,"data-size":"large"},"Twitter #桐生ココの格言"))))),u.html?r.createElement("div",{className:"details-module--markdown--ut7wk",dangerouslySetInnerHTML:{__html:u.html}}):"",r.createElement(d,{previous:_,next:S}),r.createElement("p",{className:"details-module--returnBtn--g1qoP"},r.createElement(m,{src:"/"},"戻る")))),r.createElement(c.$,null))}}}]);
//# sourceMappingURL=component---src-templates-details-tsx-113e4c9eedd6157e1ba6.js.map