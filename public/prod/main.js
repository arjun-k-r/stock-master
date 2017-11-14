!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,o){"use strict";t.a=function(e){Highcharts.stockChart("graph",{rangeSelector:{selected:4},yAxis:{labels:{formatter:function(){return(this.value>0?" + ":"")+this.value+"%"}},plotLines:[{value:0,width:2,color:"silver"}]},title:{text:"Stock Master"},subtitle:{text:"Stay updated"},plotOptions:{series:{compare:"percent"}},tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',valueDecimals:2},chart:{height:400},series:e})}},function(e,t,o){"use strict";function r(e){var t=function(){const e=new Date,t=e.getFullYear(),o=e.getMonth()+1,r=e.getDate();return[`${t-1}-${o}-${r}`,`${t}-${o}-${r}`]}(),o=s(t,2);const r=o[0],n=o[1];return c+`https://www.quandl.com/api/v3/datasets/wiki/${e}.json?start_date=${r}&end_date=${n}&order=asc&column_index=4&api_key=PSk62mMsvFBdWw3Fc7y2`}function n(e){return e.dataset.data.map(e=>{return[new Date(e[0]).getTime(),e[1]]})}function i(e){return l.a.sanitize(e)}o.d(t,"b",function(){return r}),o.d(t,"a",function(){return n}),o.d(t,"c",function(){return i});var a=o(6),l=o.n(a),s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],r=!0,n=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(o.push(a.value),!t||o.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(n)throw i}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();const c="https://stock-cors.herokuapp.com/"},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(3),n=(o.n(r),o(4)),i=o(5),a=o(7);Object(n.a)(),Object(i.a)(),Object(a.a)()},function(e,t){},function(e,t,o){"use strict";t.a=function(){Highcharts.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans",rel:"stylesheet",type:"text/css"},null,document.getElementsByTagName("head")[0]),Highcharts.theme={colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},style:{fontFamily:"'Open Sans', sans-serif"},plotBorderColor:"#606063"},title:{style:{color:"#E0E0E3",textTransform:"uppercase",fontSize:"20px"}},subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase"}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:"#A0A0A3"}}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},plotOptions:{series:{dataLabels:{color:"#B0B0B3"},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legend:{itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"}},credits:{style:{color:"#666"}},labels:{style:{color:"#707073"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#CCC"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white"}},select:{fill:"#000003",stroke:"#000000",style:{color:"white"}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"},legendBackgroundColor:"rgba(0, 0, 0, 0.5)",background2:"#505053",dataLabelsColor:"#B0B0B3",textColor:"#C0C0C0",contrastTextColor:"#F0F0F3",maskColor:"rgba(255,255,255,0.3)"},Highcharts.setOptions(Highcharts.theme)}},function(e,t,o){"use strict";var r=o(0),n=o(1);t.a=function(){companyArray.forEach(e=>{const t=Object(n.b)(e);$.getJSON(t,t=>{stockOptions.push({name:`${e}`,data:Object(n.a)(t)}),stockOptions.length===companyArray.length&&(console.log("creating chart"),Object(r.a)(stockOptions))})})}},function(e,t,o){!function(t,o){e.exports=o()}(0,function(){"use strict";function e(e,t){for(var o=t.length;o--;)"string"==typeof t[o]&&(t[o]=t[o].toLowerCase()),e[t[o]]=!0;return e}function t(e){var t={},o=void 0;for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}function o(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}function r(){var h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f(),y=function(e){return r(e)};if(y.version="1.0.2",y.removed=[],!h||!h.document||9!==h.document.nodeType)return y.isSupported=!1,y;var g=h.document,v=!1,b=!1,k=h.document,x=h.DocumentFragment,A=h.HTMLTemplateElement,C=h.Node,T=h.NodeFilter,O=h.NamedNodeMap,S=void 0===O?h.NamedNodeMap||h.MozNamedAttrMap:O,w=h.Text,E=h.Comment,F=h.DOMParser,D=h.XMLHttpRequest,L=void 0===D?h.XMLHttpRequest:D,N=h.encodeURI,_=void 0===N?h.encodeURI:N;if("function"==typeof A){var M=k.createElement("template");M.content&&M.content.ownerDocument&&(k=M.content.ownerDocument)}var R=k,B=R.implementation,H=R.createNodeIterator,j=R.getElementsByTagName,z=R.createDocumentFragment,$=g.importNode,I={};y.isSupported=B&&void 0!==B.createHTMLDocument&&9!==k.documentMode;var G=null,P=e({},[].concat(o(n),o(i),o(a),o(l),o(s))),W=null,q=e({},[].concat(o(c),o(u),o(d),o(p))),U=null,Y=null,J=!0,V=!0,X=!1,K=!1,Q=!1,Z=/\{\{[\s\S]*|[\s\S]*\}\}/gm,ee=/<%[\s\S]*|[\s\S]*%>/gm,te=!1,oe=!1,re=!1,ne=!1,ie=!1,ae=!1,le=!0,se=!0,ce={},ue=e({},["audio","head","math","script","style","template","svg","video"]),de=e({},["audio","video","img","source","image"]),pe=e({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),me=null,fe=k.createElement("form"),he=function(r){"object"!==(void 0===r?"undefined":m(r))&&(r={}),G="ALLOWED_TAGS"in r?e({},r.ALLOWED_TAGS):P,W="ALLOWED_ATTR"in r?e({},r.ALLOWED_ATTR):q,U="FORBID_TAGS"in r?e({},r.FORBID_TAGS):{},Y="FORBID_ATTR"in r?e({},r.FORBID_ATTR):{},ce="USE_PROFILES"in r&&r.USE_PROFILES,J=!1!==r.ALLOW_ARIA_ATTR,V=!1!==r.ALLOW_DATA_ATTR,X=r.ALLOW_UNKNOWN_PROTOCOLS||!1,K=r.SAFE_FOR_JQUERY||!1,Q=r.SAFE_FOR_TEMPLATES||!1,te=r.WHOLE_DOCUMENT||!1,ne=r.RETURN_DOM||!1,ie=r.RETURN_DOM_FRAGMENT||!1,ae=r.RETURN_DOM_IMPORT||!1,re=r.FORCE_BODY||!1,le=!1!==r.SANITIZE_DOM,se=!1!==r.KEEP_CONTENT,Q&&(V=!1),ie&&(ne=!0),ce&&(G=e({},[].concat(o(s))),W=[],!0===ce.html&&(e(G,n),e(W,c)),!0===ce.svg&&(e(G,i),e(W,u),e(W,p)),!0===ce.svgFilters&&(e(G,a),e(W,u),e(W,p)),!0===ce.mathMl&&(e(G,l),e(W,d),e(W,p))),r.ADD_TAGS&&(G===P&&(G=t(G)),e(G,r.ADD_TAGS)),r.ADD_ATTR&&(W===q&&(W=t(W)),e(W,r.ADD_ATTR)),r.ADD_URI_SAFE_ATTR&&e(pe,r.ADD_URI_SAFE_ATTR),se&&(G["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(r),me=r},ye=function(e){y.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},ge=function(e,t){y.removed.push({attribute:t.getAttributeNode(e),from:t}),t.removeAttribute(e)},ve=function(e){var t=void 0,o=void 0;if(re&&(e="<remove></remove>"+e),b){try{e=_(e)}catch(e){}var r=new L;r.responseType="document",r.open("GET","data:text/html;charset=utf-8,"+e,!1),r.send(null),t=r.response}if(v)try{t=(new F).parseFromString(e,"text/html")}catch(e){}return t&&t.documentElement||((o=(t=B.createHTMLDocument("")).body).parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=e),j.call(t,te?"html":"body")[0]};y.isSupported&&function(){var e=ve('<svg><g onload="this.parentNode.remove()"></g></svg>');e.querySelector("svg")||(b=!0);try{(e=ve('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">')).querySelector("svg img")&&(v=!0)}catch(e){}}();var be=function(e){return H.call(e.ownerDocument||e,e,T.SHOW_ELEMENT|T.SHOW_COMMENT|T.SHOW_TEXT,function(){return T.FILTER_ACCEPT},!1)},ke=function(e){return"object"===(void 0===C?"undefined":m(C))?e instanceof C:e&&"object"===(void 0===e?"undefined":m(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},xe=function(e,t,o){I[e]&&I[e].forEach(function(e){e.call(y,t,o,me)})},Ae=function(e){var t=void 0;if(xe("beforeSanitizeElements",e,null),function(e){return!(e instanceof w||e instanceof E||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof S&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)}(e))return ye(e),!0;var o=e.nodeName.toLowerCase();if(xe("uponSanitizeElement",e,{tagName:o,allowedTags:G}),!G[o]||U[o]){if(se&&!ue[o]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return ye(e),!0}return!K||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(y.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),Q&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(Z," ")).replace(ee," "),e.textContent!==t&&(y.removed.push({element:e.cloneNode()}),e.textContent=t)),xe("afterSanitizeElements",e,null),!1},Ce=/^data-[\-\w.\u00B7-\uFFFF]/,Te=/^aria-[\-\w]+$/,Oe=/^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,Se=/^(?:\w+script|data):/i,we=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Ee=function(e){var t=void 0,o=void 0,r=void 0,n=void 0,i=void 0,a=void 0,l=void 0;if(xe("beforeSanitizeAttributes",e,null),a=e.attributes){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W};for(l=a.length;l--;){if(t=a[l],o=t.name,r=t.value.trim(),n=o.toLowerCase(),s.attrName=n,s.attrValue=r,s.keepAttr=!0,xe("uponSanitizeAttribute",e,s),r=s.attrValue,"name"===n&&"IMG"===e.nodeName&&a.id)i=a.id,a=Array.prototype.slice.apply(a),ge("id",e),ge(o,e),a.indexOf(i)>l&&e.setAttribute("id",i.value);else{if("INPUT"===e.nodeName&&"type"===n&&"file"===r&&(W[n]||!Y[n]))continue;"id"===o&&e.setAttribute(o,""),ge(o,e)}if(s.keepAttr&&(!le||"id"!==n&&"name"!==n||!(r in h||r in k||r in fe))){if(Q&&(r=(r=r.replace(Z," ")).replace(ee," ")),V&&Ce.test(n));else if(J&&Te.test(n));else{if(!W[n]||Y[n])continue;if(pe[n]);else if(Oe.test(r.replace(we,"")));else if("src"!==n&&"xlink:href"!==n||0!==r.indexOf("data:")||!de[e.nodeName.toLowerCase()]){if(X&&!Se.test(r.replace(we,"")));else if(r)continue}else;}try{e.setAttribute(o,r),y.removed.pop()}catch(e){}}}xe("afterSanitizeAttributes",e,null)}},Fe=function e(t){var o=void 0,r=be(t);for(xe("beforeSanitizeShadowDOM",t,null);o=r.nextNode();)xe("uponSanitizeShadowNode",o,null),Ae(o)||(o.content instanceof x&&e(o.content),Ee(o));xe("afterSanitizeShadowDOM",t,null)};return y.sanitize=function(e,t){var o=void 0,r=void 0,n=void 0,i=void 0,a=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!ke(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");e=e.toString()}if(!y.isSupported){if("object"===m(h.toStaticHTML)||"function"==typeof h.toStaticHTML){if("string"==typeof e)return h.toStaticHTML(e);if(ke(e))return h.toStaticHTML(e.outerHTML)}return e}if(oe||he(t),y.removed=[],e instanceof C)1===(r=(o=ve("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName?o=r:o.appendChild(r);else{if(!ne&&!te&&-1===e.indexOf("<"))return e;if(!(o=ve(e)))return ne?null:""}re&&ye(o.firstChild);for(var l=be(o);n=l.nextNode();)3===n.nodeType&&n===i||Ae(n)||(n.content instanceof x&&Fe(n.content),Ee(n),i=n);if(ne){if(ie)for(a=z.call(o.ownerDocument);o.firstChild;)a.appendChild(o.firstChild);else a=o;return ae&&(a=$.call(g,a,!0)),a}return te?o.outerHTML:o.innerHTML},y.setConfig=function(e){he(e),oe=!0},y.clearConfig=function(){me=null,oe=!1},y.addHook=function(e,t){"function"==typeof t&&(I[e]=I[e]||[],I[e].push(t))},y.removeHook=function(e){I[e]&&I[e].pop()},y.removeHooks=function(e){I[e]&&(I[e]=[])},y.removeAllHooks=function(){I={}},y}var n=["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"],i=["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"],a=["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence"],l=["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"],s=["#text"],c=["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"],u=["accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"],d=["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"],p=["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"],m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){return"undefined"==typeof window?null:window};return r()})},function(e,t,o){"use strict";function r(){function e(e,t){$(`#${e}`).parent().remove(),stockOptions=stockOptions.filter(t=>t.name!==String(e)),companyArray=companyArray.filter(t=>t!==String(e)),Object(n.a)(stockOptions),t&&o.emit("remove stock",e)}function t(t,r){const a=Object(i.b)(t);$.getJSON(a,a=>{let l=0;stockOptions.length&&(l=stockOptions[stockOptions.length-1]._colorIndex+1),stockOptions.push({name:t,data:Object(i.a)(a),_colorIndex:l}),companyArray.push(t),Object(n.a)(stockOptions),function(t){const o=`\n      <div class="stock-details">\n        <h2>${t}</h2>\n        <button class="danger" id="${t}">Remove</button>\n      </div>\n    `;$("#allStocks").append(o),$("#stockName").val(""),$(`#${t}`).click(function(){e(Object(i.c)(this.id),!0)})}(t),r&&o.emit("add stock",t)}).catch(()=>{alert("incorrect code"),$("#stockName").val("")})}const o=io();$(()=>{$(".addStockForm").submit(e=>{e.preventDefault();const o=Object(i.c)($("#stockName").val().toLowerCase());if(companyArray.includes(o))return alert("code exists"),void $("#stockName").val("");t(o,!0)}),o.on("add stock",e=>{t(e,!1)}),$("button").click(function(){e(Object(i.c)(this.id),!0)}),o.on("remove stock",t=>{e(t,!1)})})}var n=o(0),i=o(1);t.a=r}]);
//# sourceMappingURL=main.js.map