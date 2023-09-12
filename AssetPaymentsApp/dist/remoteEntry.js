var AssetPaymentsApp;(()=>{"use strict";var e,r,t,n,a,o,i,l,s,u,f,d,p,h,c,m,v,g={5589:(e,r,t)=>{var n={"./LeftNav":()=>Promise.all([t.e(416),t.e(491),t.e(187)]).then((()=>()=>t(8187)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},y={};function b(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,exports:{}};return g[e](t,t.exports,b),t.exports}b.m=g,b.c=y,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>e+".main.js",b.miniCssF=e=>e+".css",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="wp5-left-nav:",b.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,b.nc&&i.setAttribute("nonce",b.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];b.o(b.S,t)||(b.S[t]={});var o=b.S[t],i="wp5-left-nav",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(l("@mui/icons-material","5.14.8",(()=>Promise.all([b.e(66),b.e(134),b.e(416)]).then((()=>()=>b(1134))))),l("@mui/material","5.10.2",(()=>Promise.all([b.e(66),b.e(212),b.e(416),b.e(51)]).then((()=>()=>b(8212))))),l("react-dom","18.2.0",(()=>Promise.all([b.e(935),b.e(416)]).then((()=>()=>b(3935))))),l("react","18.2.0",(()=>b.e(294).then((()=>()=>b(7294)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var r=b.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?i.pop()+" "+i.pop():a(l))}return s();function s(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,s=!0;;l++,i++){var u,f,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(u=r[i]))[0]))return!s||("u"==d?l>n&&!a:""==d!=a);if("u"==f){if(!s||"u"!=d)return!1}else if(s)if(d==f)if(l<=n){if(u!=e[l])return!1}else{if(a?u>e[l]:u<e[l])return!1;u!=e[l]&&(s=!1)}else if("s"!=d&&"n"!=d){if(a||l<=n)return!1;s=!1,l--}else{if(l<=n||f<d!=a)return!1;s=!1}else"s"!=d&&"n"!=d&&(s=!1,l--)}}var p=[],h=p.pop.bind(p);for(i=1;i<e.length;i++){var c=e[i];p.push(1==c?h()|h():2==c?h()&h():c?o(c,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",s=(e,r,t,n)=>{var a=i(e,t);return o(n,a)||u(l(e,t,a,n)),f(e[t][a])},u=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),d=(e=>function(r,t,n,a){var o=b.I(r);return o&&o.then?o.then(e.bind(e,r,b.S[r],t,n,a)):e(0,b.S[r],t,n,a)})(((e,r,t,n,a)=>r&&b.o(r,t)?s(r,0,t,n):a())),p={},h={8416:()=>d("default","react",[1,18,2,0],(()=>b.e(294).then((()=>()=>b(7294))))),1051:()=>d("default","react-dom",[1,18,2,0],(()=>b.e(935).then((()=>()=>b(3935))))),1370:()=>d("default","@mui/icons-material",[1,5,10,2],(()=>Promise.all([b.e(66),b.e(134)]).then((()=>()=>b(1134))))),4992:()=>d("default","@mui/material",[1,5,10,2],(()=>Promise.all([b.e(66),b.e(212),b.e(51)]).then((()=>()=>b(8212)))))},c={51:[1051],416:[8416],491:[1370,4992]},b.f.consumes=(e,r)=>{b.o(c,e)&&c[e].forEach((e=>{if(b.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},n=r=>{delete p[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var a=h[e]();a.then?r.push(p[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},m=e=>new Promise(((r,t)=>{var n=b.miniCssF(e),a=b.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===r)return i}})(n,a))return r();((e,r,t,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),n(s)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),v={831:0},b.f.miniCss=(e,r)=>{v[e]?r.push(v[e]):0!==v[e]&&{187:1}[e]&&r.push(v[e]=m(e).then((()=>{v[e]=0}),(r=>{throw delete v[e],r})))},(()=>{b.b=document.baseURI||self.location.href;var e={831:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(416|491|51)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=b.p+b.u(r),i=new Error;b.l(o,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,s=0;if(o.some((r=>0!==e[r]))){for(n in i)b.o(i,n)&&(b.m[n]=i[n]);l&&l(b)}for(r&&r(t);s<o.length;s++)a=o[s],b.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkwp5_left_nav=self.webpackChunkwp5_left_nav||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),b.nc=void 0;var w=b(5589);AssetPaymentsApp=w})();