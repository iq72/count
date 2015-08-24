require=(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}throw new Error("Cannot find module '"+a+"'")
}var b=j[a]={exports:{}};h[a][0].call(b.exports,function(g){var f=h[a][1][g];return m(f?f:g)
},b,b.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(g,k,h){g("ac-polyfills/Array/prototype.slice");
g("ac-polyfills/Element/prototype.classList");var j=g("./className/add");k.exports=function i(){var a=Array.prototype.slice.call(arguments);
var b=a.shift(a);var c;if(b.classList&&b.classList.add){b.classList.add.apply(b.classList,a);
return}for(c=0;c<a.length;c++){j(b,a[c])}}},{"./className/add":3,"ac-polyfills/Array/prototype.slice":45,"ac-polyfills/Element/prototype.classList":47}],2:[function(d,g,f){g.exports={add:d("./className/add"),contains:d("./className/contains"),remove:d("./className/remove")}
},{"./className/add":3,"./className/contains":4,"./className/remove":6}],3:[function(g,k,h){var j=g("./contains");
k.exports=function i(a,b){if(!j(a,b)){a.className+=" "+b}}},{"./contains":4}],4:[function(g,k,h){var i=g("./getTokenRegExp");
k.exports=function j(a,b){return i(b).test(a.className)}},{"./getTokenRegExp":5}],5:[function(f,i,g){i.exports=function h(a){return new RegExp("(\\s|^)"+a+"(\\s|$)")
}},{}],6:[function(m,l,h){var k=m("./contains");var j=m("./getTokenRegExp");l.exports=function i(a,b){if(k(a,b)){a.className=a.className.replace(j(b),"$1").trim()
}}},{"./contains":4,"./getTokenRegExp":5}],7:[function(g,j,h){g("ac-polyfills/Element/prototype.classList");
var i=g("./className/contains");j.exports=function k(a,b){if(a.classList&&a.classList.contains){return a.classList.contains(b)
}return i(a,b)}},{"./className/contains":4,"ac-polyfills/Element/prototype.classList":47}],8:[function(d,g,f){g.exports={add:d("./add"),contains:d("./contains"),remove:d("./remove"),toggle:d("./toggle")}
},{"./add":1,"./contains":7,"./remove":9,"./toggle":10}],9:[function(j,i,k){j("ac-polyfills/Array/prototype.slice");
j("ac-polyfills/Element/prototype.classList");var g=j("./className/remove");i.exports=function h(){var a=Array.prototype.slice.call(arguments);
var b=a.shift(a);var c;if(b.classList&&b.classList.remove){b.classList.remove.apply(b.classList,a);
return}for(c=0;c<a.length;c++){g(b,a[c])}}},{"./className/remove":6,"ac-polyfills/Array/prototype.slice":45,"ac-polyfills/Element/prototype.classList":47}],10:[function(k,j,g){k("ac-polyfills/Element/prototype.classList");
var i=k("./className");j.exports=function h(b,c,a){var d=(typeof a!=="undefined");
var f;if(b.classList&&b.classList.toggle){if(d){return b.classList.toggle(c,a)}return b.classList.toggle(c)
}if(d){f=!!a}else{f=!i.contains(b,c)}if(f){i.add(b,c)}else{i.remove(b,c)}return f
}},{"./className":2,"ac-polyfills/Element/prototype.classList":47}],11:[function(m,l,h){var j=m("./utils/addEventListener");
var i=m("./shared/getEventType");l.exports=function k(a,c,b,d){c=i(a,c);return j(a,c,b,d)
}},{"./shared/getEventType":17,"./utils/addEventListener":18}],12:[function(n,l,p){var m=n("./utils/eventTypeAvailable");
var j=n("./shared/camelCasedEventTypes");var o=n("./shared/prefixHelper");var q={};
l.exports=function k(b,c){var a;var f;var d;c=c||"div";b=b.toLowerCase();if(!(c in q)){q[c]={}
}f=q[c];if(b in f){return f[b]}if(m(b,c)){return f[b]=b}if(b in j){for(d=0;d<j[b].length;
d++){a=j[b][d];if(m(a.toLowerCase(),c)){return f[b]=a}}}for(d=0;d<o.evt.length;
d++){a=o.evt[d]+b;if(m(a,c)){o.reduce(d);return f[b]=a}}return f[b]=false}},{"./shared/camelCasedEventTypes":13,"./shared/prefixHelper":14,"./utils/eventTypeAvailable":15}],13:[function(d,g,f){g.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],14:[function(j,p,k){var l=["-webkit-","-moz-","-ms-"];var o=["Webkit","Moz","ms"];
var m=["webkit","moz","ms"];var q=function(){this.initialize()};var n=q.prototype;
n.initialize=function(){this.reduced=false;this.css=l;this.dom=o;this.evt=m};n.reduce=function(a){if(!this.reduced){this.reduced=true;
this.css=[this.css[a]];this.dom=[this.dom[a]];this.evt=[this.evt[a]]}};p.exports=new q()
},{}],15:[function(k,i,g){var h={window:window,document:document};i.exports=function j(a,c){var b;
a="on"+a;if(!(c in h)){h[c]=document.createElement(c)}b=h[c];if(a in b){return true
}if("setAttribute" in b){b.setAttribute(a,"return;");return(typeof b[a]==="function")
}return false}},{}],16:[function(i,h,g){h.exports=function f(a){a=a||window.event;
if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}}},{}],17:[function(k,i,g){var j=k("ac-prefixer/getEventType");
i.exports=function h(a,b){var c;var d;if("tagName" in a){c=a.tagName}else{if(a===window){c="window"
}else{c="document"}}d=j(b,c);if(d){return d}return b}},{"ac-prefixer/getEventType":12}],18:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.addEventListener){a.addEventListener(c,b,!!d)
}else{a.attachEvent("on"+c,b)}return a}},{}],19:[function(d,g,f){g.exports=8},{}],20:[function(d,g,f){g.exports=11
},{}],21:[function(d,g,f){g.exports=1},{}],22:[function(d,g,f){g.exports=3},{}],23:[function(i,h,g){h.exports=function f(a,b){if("hasAttribute" in a){return a.hasAttribute(b)
}return(a.attributes.getNamedItem(b)!==null)}},{}],24:[function(g,k,h){var i=g("./internal/validate");
k.exports=function j(b,a){i.insertNode(b,true,"insertAfter");i.childNode(a,true,"insertAfter");
i.hasParentNode(a,"insertAfter");if(!a.nextSibling){return a.parentNode.appendChild(b)
}return a.parentNode.insertBefore(b,a.nextSibling)}},{"./internal/validate":27}],25:[function(k,j,h){var i=k("./internal/validate");
j.exports=function g(b,a){i.insertNode(b,true,"insertBefore");i.childNode(a,true,"insertBefore");
i.hasParentNode(a,"insertBefore");return a.parentNode.insertBefore(b,a)}},{"./internal/validate":27}],26:[function(g,k,h){var j=g("../isNode");
k.exports=function i(a,b){if(!j(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)}},{"../isNode":28}],27:[function(z,B,w){var D=z("./isNodeType");
var C=z("../COMMENT_NODE");var v=z("../DOCUMENT_FRAGMENT_NODE");var x=z("../ELEMENT_NODE");
var y=z("../TEXT_NODE");var t=[x,y,C,v];var A=" must be an Element, TextNode, Comment, or Document Fragment";
var q=[x,y,C];var u=" must be an Element, TextNode, or Comment";var s=[x,v];var r=" must be an Element, or Document Fragment";
var E=" must have a parentNode";B.exports={parentNode:function(d,a,b,c){c=c||"target";
if((d||a)&&!D(d,s)){throw new TypeError(b+": "+c+r)}},childNode:function(d,a,b,c){c=c||"target";
if(!d&&!a){return}if(!D(d,q)){throw new TypeError(b+": "+c+u)}},insertNode:function(d,a,b,c){c=c||"node";
if(!d&&!a){return}if(!D(d,t)){throw new TypeError(b+": "+c+A)}},hasParentNode:function(c,a,b){b=b||"target";
if(!c.parentNode){throw new TypeError(a+": "+b+E)}}}},{"../COMMENT_NODE":19,"../DOCUMENT_FRAGMENT_NODE":20,"../ELEMENT_NODE":21,"../TEXT_NODE":22,"./isNodeType":26}],28:[function(f,i,g){i.exports=function h(a){return !!(a&&a.nodeType)
}},{}],29:[function(j,p,k){var n=j("ac-classlist/add");var m=j("ac-classlist/remove");
var l=j("ac-object/extend");var q=function(b,a){this._target=b;this._tests={};this.addTests(a)
};var o=q.prototype;o.addTests=function(a){this._tests=l(this._tests,a||{})};o._supports=function(a){if(typeof this._tests[a]==="undefined"){return false
}if(typeof this._tests[a]==="function"){this._tests[a]=this._tests[a]()}return this._tests[a]
};o._addClass=function(a,b){b=b||"no-";if(this._supports(a)){n(this._target,a)}else{n(this._target,b+a)
}};o.htmlClass=function(){var a;m(this._target,"no-js");n(this._target,"js");for(a in this._tests){if(this._tests.hasOwnProperty(a)){this._addClass(a)
}}};p.exports=q},{"ac-classlist/add":1,"ac-classlist/remove":9,"ac-object/extend":39}],30:[function(p,m,q){var l=p("ac-browser");
var k=p("ac-feature/touchAvailable");var j=p("ac-feature/svgAvailable");var n=function(){return(l.IE&&l.IE.documentMode<9)
};var o=function(){return(l.IE&&l.IE.documentMode>=9)};m.exports={touch:k,svg:j,oldie:n,ie:o}
},{"ac-browser":31,"ac-feature/svgAvailable":37,"ac-feature/touchAvailable":38}],31:[function(n,m,i){var l=n("./ac-browser/BrowserData");
var j=/applewebkit/i;var k=n("./ac-browser/IE");var o=l.create();o.isWebKit=function(b){var a=b||window.navigator.userAgent;
return a?!!j.test(a):false};o.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(o.name==="IE"){o.IE={documentMode:k.getDocumentMode()}}m.exports=o},{"./ac-browser/BrowserData":32,"./ac-browser/IE":33}],32:[function(g,k,h){var j=g("./data");
function i(){}i.prototype={__getBrowserVersion:function(c,b){var d;if(!c||!b){return
}var a=j.browser.filter(function(f){return f.identity===b});a.some(function(f){var o=f.versionSearch||b;
var n=c.indexOf(o);if(n>-1){d=parseFloat(c.substring(n+o.length+1));return true
}});return d},__getName:function(a){return this.__getIdentityStringFromArray(a)
},__getIdentity:function(a){if(a.string){return this.__matchSubString(a)}else{if(a.prop){return a.identity
}}},__getIdentityStringFromArray:function(d){for(var a=0,c=d.length,b;a<c;a++){b=this.__getIdentity(d[a]);
if(b){return b}}},__getOS:function(a){return this.__getIdentityStringFromArray(a)
},__getOSVersion:function(d,a){if(!d||!a){return}var b=j.os.filter(function(l){return l.identity===a
})[0];var m=b.versionSearch||a;var c=new RegExp(m+" ([\\d_\\.]+)","i");var f=d.match(c);
if(f!==null){return f[1].replace(/_/g,".")}},__matchSubString:function(b){var c=b.subString;
if(c){var a=c.test?!!c.test(b.string):b.string.indexOf(c)>-1;if(a){return b.identity
}}}};i.create=function(){var b=new i();var a={};a.name=b.__getName(j.browser);a.version=b.__getBrowserVersion(j.versionString,a.name);
a.os=b.__getOS(j.os);a.osVersion=b.__getOSVersion(j.versionString,a.os);return a
};k.exports=i},{"./data":34}],33:[function(d,g,f){g.exports={getDocumentMode:function(){var a;
if(document.documentMode){a=parseInt(document.documentMode,10)}else{a=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){a=7
}}}return a}}},{}],34:[function(d,g,f){g.exports={browser:[{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],35:[function(d,g,f){g.exports={getWindow:function(){return window},getDocument:function(){return document
},getNavigator:function(){return navigator}}},{}],36:[function(f,i,g){i.exports=function h(a){var b;
return function(){if(typeof b==="undefined"){b=a.apply(this,arguments)}return b
}}},{}],37:[function(m,l,h){var j=m("./helpers/globals");var k=m("ac-function/once");
function i(){var a=j.getDocument();return !!a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":35,"ac-function/once":36}],38:[function(m,l,h){var j=m("./helpers/globals");
var k=m("ac-function/once");function i(){var a=j.getWindow();var c=j.getDocument();
var b=j.getNavigator();return !!(("ontouchstart" in a)||(a.DocumentTouch&&c instanceof a.DocumentTouch)||(b.maxTouchPoints>0)||(b.msMaxTouchPoints>0))
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":35,"ac-function/once":36}],39:[function(k,j,g){k("ac-polyfills/Array/prototype.forEach");
var h=Object.prototype.hasOwnProperty;j.exports=function i(){var a;var b;if(arguments.length<2){a=[{},arguments[0]]
}else{a=[].slice.call(arguments)}b=a.shift();a.forEach(function(c){if(c!=null){for(var d in c){if(h.call(c,d)){b[d]=c[d]
}}}});return b}},{"ac-polyfills/Array/prototype.forEach":42}],40:[function(d,g,f){if(!Array.isArray){Array.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"
}}},{}],41:[function(f,i,g){if(!Array.prototype.filter){Array.prototype.filter=function h(a,b){var c=Object(this);
var n=c.length>>>0;var d;var m=[];if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}for(d=0;d<n;d+=1){if(d in c&&a.call(b,c[d],d,c)){m.push(c[d])}}return m}}},{}],42:[function(f,i,g){if(!Array.prototype.forEach){Array.prototype.forEach=function h(a,b){var c=Object(this);
var l;var d;if(typeof a!=="function"){throw new TypeError("No function object passed to forEach.")
}for(l=0;l<this.length;l+=1){d=c[l];a.call(b,d,l,c)}}}},{}],43:[function(f,i,g){if(!Array.prototype.indexOf){Array.prototype.indexOf=function h(c,b){var a=b||0;
var d=0;if(a<0){a=this.length+b-1;if(a<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(d=0;d<this.length;d++){if(this[d]===c){return d}}return(-1)}}},{}],44:[function(f,i,g){if(!Array.prototype.map){Array.prototype.map=function h(a,b){var d=Object(this);
var m=d.length>>>0;var c;var n=new Array(m);if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}for(c=0;c<m;c+=1){if(c in d){n[c]=a.call(b,d[c],c,d)}}return n}}},{}],45:[function(d,g,f){(function(){var b=Array.prototype.slice;
try{b.call(document.documentElement)}catch(a){Array.prototype.slice=function(u,q){q=(typeof q!=="undefined")?q:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return b.call(this,u,q)
}var i,r=[],p,s=this.length;var t=u||0;t=(t>=0)?t:s+t;var c=(q)?q:s;if(q<0){c=s+q
}p=c-t;if(p>0){r=new Array(p);if(this.charAt){for(i=0;i<p;i++){r[i]=this.charAt(t+i)
}}else{for(i=0;i<p;i++){r[i]=this[t+i]}}}return r}}}())},{}],46:[function(f,i,g){if(!Array.prototype.some){Array.prototype.some=function h(a,b){var d=Object(this);
var l=d.length>>>0;var c;if(typeof a!=="function"){throw new TypeError(a+" is not a function")
}for(c=0;c<l;c+=1){if(c in d&&a.call(b,d[c],c,d)===true){return true}}return false
}}},{}],47:[function(d,g,f){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
if("document" in self){if(!("classList" in document.createElement("_"))){(function(t){if(!("Element" in t)){return
}var C="classList",x="prototype",b=t.Element[x],B=Object,s=String[x].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},A=Array[x].indexOf||function(h){var i=0,j=this.length;for(;i<j;i++){if(i in this&&this[i]===h){return i
}}return -1},a=function(i,h){this.name=i;this.code=DOMException[i];this.message=h
},w=function(h,i){if(i===""){throw new a("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(i)){throw new a("INVALID_CHARACTER_ERR","String contains an invalid character")
}return A.call(h,i)},z=function(h){var i=s.call(h.getAttribute("class")||""),j=i?i.split(/\s+/):[],k=0,l=j.length;
for(;k<l;k++){this.push(j[k])}this._updateClassName=function(){h.setAttribute("class",this.toString())
}},y=z[x]=[],u=function(){return new z(this)};a[x]=Error[x];y.item=function(h){return this[h]||null
};y.contains=function(h){h+="";return w(this,h)!==-1};y.add=function(){var h=arguments,i=0,k=h.length,j,l=false;
do{j=h[i]+"";if(w(this,j)===-1){this.push(j);l=true}}while(++i<k);if(l){this._updateClassName()
}};y.remove=function(){var h=arguments,i=0,l=h.length,j,m=false,k;do{j=h[i]+"";
k=w(this,j);while(k!==-1){this.splice(k,1);m=true;k=w(this,j)}}while(++i<l);if(m){this._updateClassName()
}};y.toggle=function(j,i){j+="";var k=this.contains(j),h=k?i!==true&&"remove":i!==false&&"add";
if(h){this[h](j)}if(i===true||i===false){return i}else{return !k}};y.toString=function(){return this.join(" ")
};if(B.defineProperty){var c={get:u,enumerable:true,configurable:true};try{B.defineProperty(b,C,c)
}catch(v){if(v.number===-2146823252){c.enumerable=false;B.defineProperty(b,C,c)
}}}else{if(B[x].__defineGetter__){b.__defineGetter__(C,u)}}}(self))}else{(function(){var b=document.createElement("_");
b.classList.add("c1","c2");if(!b.classList.contains("c2")){var a=function(j){var k=DOMTokenList.prototype[j];
DOMTokenList.prototype[j]=function(h){var i,m=arguments.length;for(i=0;i<m;i++){h=arguments[i];
k.call(this,h)}}};a("add");a("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var c=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(k,j){if(1 in arguments&&!this.contains(k)===!j){return j
}else{return c.call(this,k)}}}b=null}())}}},{}],48:[function(d,g,f){if(!Function.prototype.bind){Function.prototype.bind=function(k){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var a=Array.prototype.slice.call(arguments,1);var b=this;var j=function(){};var c=function(){return b.apply((this instanceof j&&k)?this:k,a.concat(Array.prototype.slice.call(arguments)))
};j.prototype=this.prototype;c.prototype=new j();return c}}},{}],49:[function(o,n,i){var l=navigator.userAgent.toLowerCase();
var k=(l.indexOf("msie")>-1)?parseInt(l.split("msie")[1]):false;var j=k<9;if(!Object.assign){if(!Object.keys){Object.keys=function m(b){var c=[];
var a;if((!b)||(typeof b.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(a in b){if(b.hasOwnProperty(a)){c.push(a)}}return c}}if(!j&&Object.defineProperty){if(!Object.assign){Object.defineProperty(Object,"assign",{enumerable:false,configurable:true,writable:true,value:function(A,x){if(A===undefined||A===null){throw new TypeError("Cannot convert first argument to object")
}var y=Object(A);var a=false;var w;for(var h=1;h<arguments.length;h++){var d=arguments[h];
if(d===undefined||d===null){continue}var f=Object.keys(Object(d));for(var g=0,b=f.length;
g<b;g++){var z=f[g];try{var c=Object.getOwnPropertyDescriptor(d,z);if(c!==undefined&&c.enumerable){y[z]=d[z]
}}catch(B){if(!a){a=true;w=B}}}if(a){throw w}}return y}})}}else{Object.assign=function(){for(var a=1;
a<arguments.length;a++){for(var b in arguments[a]){if(arguments[a].hasOwnProperty(b)){arguments[0][b]=arguments[a][b]
}}}return arguments[0]}}}},{}],50:[function(i,h,f){if(!String.prototype.trim){String.prototype.trim=function g(){return this.replace(/^\s+|\s+$/g,"")
}}},{}],51:[function(l,k,m){if(!window.getComputedStyle){function j(d,a,b){d.document;
var c=d.currentStyle[a].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],f=c[1],o=c[2],g;
b=!b?b:/%|em/.test(o)&&d.parentElement?j(d.parentElement,"fontSize",null):16;g=a=="fontSize"?b:/width/i.test(a)?d.clientWidth:d.clientHeight;
return o=="%"?f/100*g:o=="cm"?f*0.3937*96:o=="em"?f*b:o=="in"?f*96:o=="mm"?f*0.3937*96/10:o=="pc"?f*12*96/72:o=="pt"?f*96/72:f
}function h(b,p){var g=p=="border"?"Width":"",c=p+"Top"+g,a=p+"Right"+g,f=p+"Bottom"+g,d=p+"Left"+g;
b[p]=(b[c]==b[a]&&b[c]==b[f]&&b[c]==b[d]?[b[c]]:b[c]==b[f]&&b[d]==b[a]?[b[c],b[a]]:b[d]==b[a]?[b[c],b[a],b[f]]:[b[c],b[a],b[f],b[d]]).join(" ")
}function i(c){var b=this,d=c.currentStyle,o=j(c,"fontSize"),g=function(n){return"-"+n.toLowerCase()
},a;for(a in d){Array.prototype.push.call(b,a=="styleFloat"?"float":a.replace(/[A-Z]/,g));
if(a=="width"){b[a]=c.offsetWidth+"px"}else{if(a=="height"){b[a]=c.offsetHeight+"px"
}else{if(a=="styleFloat"){b["float"]=d[a];b.cssFloat=d[a]}else{if(/margin.|padding.|border.+W/.test(a)&&b[a]!="auto"){b[a]=Math.round(j(c,a,o))+"px"
}else{if(/^outline/.test(a)){try{b[a]=d[a]}catch(f){b.outlineColor=d.color;b.outlineStyle=b.outlineStyle||"none";
b.outlineWidth=b.outlineWidth||"0px";b.outline=[b.outlineColor,b.outlineWidth,b.outlineStyle].join(" ")
}}else{b[a]=d[a]}}}}}}h(b,"margin");h(b,"padding");h(b,"border");b.fontSize=Math.round(o)+"px"
}i.prototype={constructor:i,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")
},getPropertyValue:function(a){return this[a.replace(/-\w/g,function(b){return b[1].toUpperCase()
})]},item:function(a){return this[a]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")
},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")
}};window.getComputedStyle=function(a){return new i(a)}}},{}],52:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b;if(a){b=g(c);return{width:b.width,height:b.height}
}return{width:c.offsetWidth,height:c.offsetHeight}}},{"./utils/getBoundingClientRect":56}],53:[function(n,m,o){var q=n("./getDimensions");
var p=n("./utils/getBoundingClientRect");var j=n("./getScrollX");var k=n("./getScrollY");
m.exports=function l(d,f){var b;var g;var a;var c;var h;if(f){b=p(d);g=j();a=k();
return{top:b.top+a,right:b.right+g,bottom:b.bottom+a,left:b.left+g}}c=q(d,f);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height};
while(d=d.offsetParent){b.top+=d.offsetTop;b.left+=d.offsetLeft}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}
}},{"./getDimensions":52,"./getScrollX":54,"./getScrollY":55,"./utils/getBoundingClientRect":56}],54:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageXOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollLeft}},{}],55:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageYOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollTop}},{}],56:[function(i,h,f){h.exports=function g(b){var a=b.getBoundingClientRect();
return{top:a.top,right:a.right,bottom:a.bottom,left:a.left,width:a.width||a.right-a.left,height:a.height||a.bottom-a.top}
}},{}],57:[function(m,l,h){var k=m("ac-prefixer/getStyleProperty");var j=m("ac-prefixer/stripPrefixes");
l.exports=function i(){var c=Array.prototype.slice.call(arguments);var g=c.shift(c);
var a=window.getComputedStyle(g);var b={};var q;var f;var r;var d;if(typeof c[0]!=="string"){c=c[0]
}for(d=0;d<c.length;d++){q=c[d];f=k(q);if(f){q=j(f);r=a[f];if(!r||r==="auto"){r=null
}if(r){r=j(r)}}else{r=null}b[q]=r}return b}},{"ac-prefixer/getStyleProperty":60,"ac-prefixer/stripPrefixes":66}],58:[function(i,h,f){h.exports=function g(a){var b;
var c;var d;if(!a&&a!==0){return""}if(Array.isArray(a)){return a+""}if(typeof a==="object"){b="";
c=Object.keys(a);for(d=0;d<c.length;d++){b+=c[d]+"("+a[c[d]]+") "}return b.trim()
}return a}},{}],59:[function(n,m,o){var i=n("./shared/stylePropertyCache");var k=n("./getStyleProperty");
var l=n("./getStyleValue");m.exports=function j(a,b){var c;a=k(a);if(!a){return false
}c=i[a].css;if(typeof b!=="undefined"){b=l(a,b);if(b===false){return false}c+=":"+b+";"
}return c}},{"./getStyleProperty":60,"./getStyleValue":61,"./shared/stylePropertyCache":64}],60:[function(q,r,o){var u=q("./shared/stylePropertyCache");
var n=q("./shared/getStyleTestElement");var t=q("./utils/toCSS");var l=q("./utils/toDOM");
var m=q("./shared/prefixHelper");var s=function(c,b){var a=t(c);var d=(b===false)?false:t(b);
u[c]=u[b]=u[a]=u[d]={dom:b,css:d};return b};r.exports=function p(c){var f;var b;
var d;var a;c+="";if(c in u){return u[c].dom}d=n();c=l(c);b=c.charAt(0).toUpperCase()+c.substring(1);
if(c==="filter"){f=["WebkitFilter","filter"]}else{f=(c+" "+m.dom.join(b+" ")+b).split(" ")
}for(a=0;a<f.length;a++){if(typeof d.style[f[a]]!=="undefined"){if(a!==0){m.reduce(a-1)
}return s(c,f[a])}}return s(c,false)}},{"./shared/getStyleTestElement":62,"./shared/prefixHelper":63,"./shared/stylePropertyCache":64,"./utils/toCSS":67,"./utils/toDOM":68}],61:[function(t,v,q){var s=t("./getStyleProperty");
var n=t("./shared/styleValueAvailable");var o=t("./shared/prefixHelper");var w=t("./shared/stylePropertyCache");
var p={};var m=/(\([^\)]+\))/gi;var r=/([^ ,;\(]+(\([^\)]+\))?)/gi;v.exports=function u(b,c){var a;
c+="";b=s(b);if(!b){return false}if(n(b,c)){return c}a=w[b].css;c=c.replace(r,function(h){var i;
var d;var f;var g;if(h[0]==="#"||!isNaN(h[0])){return h}d=h.replace(m,"");f=a+":"+d;
if(f in p){if(p[f]===false){return""}return h.replace(d,p[f])}i=o.css.map(function(j){return j+h
});i=[h].concat(i);for(g=0;g<i.length;g++){if(n(b,i[g])){if(g!==0){o.reduce(g-1)
}p[f]=i[g].replace(m,"");return i[g]}}p[f]=false;return""});c=c.trim();return(c==="")?false:c
}},{"./getStyleProperty":60,"./shared/prefixHelper":63,"./shared/stylePropertyCache":64,"./shared/styleValueAvailable":65}],62:[function(k,j,g){var i;
j.exports=function h(){if(!i){i=document.createElement("_")}else{i.style.cssText="";
i.removeAttribute("style")}return i};j.exports.resetElement=function(){i=null}},{}],63:[function(d,g,f){g.exports=d(14)
},{}],64:[function(d,g,f){g.exports={}},{}],65:[function(s,t,r){var u=s("./stylePropertyCache");
var q=s("./getStyleTestElement");var n=false;var l;var m;var p=function(){var b;
if(!n){n=true;l=("CSS" in window&&"supports" in window.CSS);m=false;b=q();try{b.style.width="invalid"
}catch(a){m=true}}};t.exports=function o(d,f){var a;var b;p();if(l){d=u[d].css;
return CSS.supports(d,f)}b=q();a=b.style[d];if(m){try{b.style[d]=f}catch(c){return false
}}else{b.style[d]=f}return(b.style[d]&&b.style[d]!==a)};t.exports.resetFlags=function(){n=false
}},{"./getStyleTestElement":62,"./stylePropertyCache":64}],66:[function(k,j,h){var g=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
j.exports=function i(a){a=String.prototype.replace.call(a,g,"");return a.charAt(0).toLowerCase()+a.substring(1)
}},{}],67:[function(k,j,g){var i=/^(webkit|moz|ms)/gi;j.exports=function h(a){var b;
if(a.toLowerCase()==="cssfloat"){return"float"}if(i.test(a)){a="-"+a}return a.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],68:[function(g,k,h){var i=/-([a-z])/g;k.exports=function j(a){var b;if(a.toLowerCase()==="float"){return"cssFloat"
}a=a.replace(i,function(c,d){return d.toUpperCase()});if(a.substr(0,2)==="Ms"){a="ms"+a.substring(2)
}return a}},{}],69:[function(n,m,o){var j=n("ac-prefixer/getStyleCSS");var l=n("ac-prefixer/getStyleProperty");
var i=n("./internal/normalizeValue");m.exports=function k(h,b){var c="";var d;var q;
var f;var a;var g;if(typeof b!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(q in b){a=i(b[q]);if(!a&&a!==0){f=l(q);if("removeAttribute" in h.style){h.style.removeAttribute(f)
}else{h.style[f]=""}}else{d=j(q,a);if(d!==false){c+=" "+d}}}if(c.length){g=h.style.cssText;
if(g.charAt(g.length-1)!==";"){g+=";"}g+=c;h.style.cssText=g}return h}},{"./internal/normalizeValue":58,"ac-prefixer/getStyleCSS":59,"ac-prefixer/getStyleProperty":60}],70:[function(d,g,f){g.exports={EventEmitter:d("./ac-event-emitter/EventEmitter")}
},{"./ac-event-emitter/EventEmitter":71}],71:[function(t,u,s){var q="EventEmitter:propagation";
var m=function(a){if(a){this.context=a}};var r=m.prototype;var p=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var o=function(a){if(typeof Array.isArray==="function"){return Array.isArray(a)
}return Object.prototype.toString.call(a)==="[object Array]"};var w=function(i,d){var f=i[0];
var b=i[1];var g=i[2];var a;var c;var h;if((typeof f!=="string"&&typeof f!=="object")||f===null||o(f)){throw new TypeError("Expecting event name to be a string or object.")
}if((typeof f==="string")&&!b){throw new Error("Expecting a callback function to be provided.")
}if(b&&(typeof b!=="function")){if(typeof f==="object"&&typeof b==="object"){g=b
}else{throw new TypeError("Expecting callback to be a function.")}}d.call(this,f,b,g)
};var n=function(c,b,f){var a;var g;var d;a=p.call(this)[c];if(!a||a.length===0){return
}a=a.slice();this._stoppedImmediatePropagation=false;for(g=0,d=a.length;g<d;g+=1){if(this._stoppedImmediatePropagation||b.call(f,a[g],g)){break
}}};var v=function(d,c,b){var a=-1;n.call(this,c,function(f,g){if(f.callback===b){a=g;
return true}});if(a===-1){return}d[c].splice(a,1)};r.on=function(){var a=p.call(this);
w.call(this,arguments,function(c,b,d){a[c]=a[c]||(a[c]=[]);a[c].push({callback:b,context:d})
});return this};r.once=function(){w.call(this,arguments,function(d,b,a){var c=function(f){b.call(a||this,f);
this.off(d,c)};this.on(d,c,this)});return this};r.off=function(c,b){var f=p.call(this);
var a;var g;var d;var h;if(arguments.length===0){this._events={}}else{if(!c||(typeof c!=="string"&&typeof c!=="object")||Array.isArray(c)){throw new TypeError("Expecting event name to be a string or object.")
}}if(typeof c==="object"){for(a in c){if(c.hasOwnProperty(a)){v.call(this,f,a,c[a])
}}}if(typeof c==="string"){g=c.split(" ");if(g.length===1){if(b){v.call(this,f,c,b)
}else{f[c]=[]}}else{for(h=0,d=g.length;h<d;h+=1){f[g[h]]=[]}}}return this};r.trigger=function(c,b,h){var g;
var d;var a;var f;if(!c){throw new Error("trigger method requires an event name")
}if(typeof c!=="string"){throw new TypeError("Expecting event names to be a string.")
}if(h&&typeof h!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
}c=c.split(" ");for(f=0,d=c.length;f<d;f+=1){a=c[f];n.call(this,a,function(i){i.callback.call(i.context||this.context||this,b)
},this);if(!h){g=a;n.call(this,q,function(i){if(i.prefix){g=i.prefix+g}i.emitter.trigger(g,b)
})}}return this};r.propagateTo=function(c,b){var a=p.call(this);if(!a[q]){this._events[q]=[]
}a[q].push({emitter:c,prefix:b})};r.stopPropagatingTo=function(c){var f=p.call(this);
if(!c){f[q]=[];return}var b=f[q];var d=b.length;var a;for(a=0;a<d;a+=1){if(b[a].emitter===c){b.splice(a,1);
break}}};r.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
};r.has=function(j,i,g){var h=p.call(this);var b=h[j];var a;var c;var f;var d;var k;
if(arguments.length===0){d=[];for(k in h){if(h.hasOwnProperty(k)){d.push(k)}}return d
}if(!b){return false}if(!i){return(b.length>0)?true:false}for(c=0,f=b.length;c<f;
c+=1){a=b[c];if((g&&i&&a.context===g&&a.callback===i)||(i&&!g&&a.callback===i)){return true
}}return false};u.exports=m},{}],72:[function(o,n,i){var l=o("ac-prefixer/getStyleValue");
var m=o("ac-prefixer/getStyleProperty");var k=o("ac-function/memoize");function j(a,b){if(typeof b!=="undefined"){return !!l(a,b)
}else{return !!m(a)}}n.exports=k(j);n.exports.original=j},{"ac-function/memoize":73,"ac-prefixer/getStyleProperty":74,"ac-prefixer/getStyleValue":75}],73:[function(k,j,g){var h=function(){var a="";
var b;for(b=0;b<arguments.length;b++){if(b>0){a+=","}a+=arguments[b]}return a};
j.exports=function i(a,b){b=b||h;var c=function(){var f=arguments;var d=b.apply(this,f);
if(!(d in c.cache)){c.cache[d]=a.apply(this,f)}return c.cache[d]};c.cache={};return c
}},{}],74:[function(d,g,f){g.exports=d(60)},{"./shared/getStyleTestElement":76,"./shared/prefixHelper":77,"./shared/stylePropertyCache":78,"./utils/toCSS":80,"./utils/toDOM":81}],75:[function(d,g,f){g.exports=d(61)
},{"./getStyleProperty":74,"./shared/prefixHelper":77,"./shared/stylePropertyCache":78,"./shared/styleValueAvailable":79}],76:[function(d,g,f){g.exports=d(62)
},{}],77:[function(d,g,f){g.exports=d(14)},{}],78:[function(d,g,f){g.exports=d(64)
},{}],79:[function(d,g,f){g.exports=d(65)},{"./getStyleTestElement":76,"./stylePropertyCache":78}],80:[function(d,g,f){g.exports=d(67)
},{}],81:[function(d,g,f){g.exports=d(68)},{}],82:[function(G,U,y){G("ac-polyfills/Object/assign");
var S=G("ac-feature/cssPropertyAvailable");var T=G("ac-classlist");var B=G("ac-dom-nodes/insertAfter");
var R=G("ac-dom-nodes/insertBefore");var D=G("ac-dom-metrics/getPagePosition");
var I=G("ac-dom-metrics/getScrollY");var O=G("ac-dom-styles/getStyle");var P=G("ac-dom-styles/setStyle");
var L=G("ac-dom-events/addEventListener");var J=G("ac-event-emitter").EventEmitter;
var Q=S("position","sticky");var E=100;var C="b-placeholder-container";var M="b-sticky-placeholder";
var K=Q?"native-sticky":"shimmed-sticky";var H="is-sticking";var N="is-stuck";var A="is-holding-place";
var F="b-sticky";var z=function(a,b){this.el=a;this.options=Object.assign({},b)
};z.addEventListeners=function(){if(!z.isListeningToScroll){z.isListeningToScroll=true;
L(window,"scroll",z.scrollEventListener);L(window,"resize",z.orientationResizeListener);
L(window,"orientationchange",z.orientationResizeListener);L(document,"touchmove",z.touchmoveEventListener)
}};z.stickies=[];z.create=function(a,b){var c=new z(a,b);c.initialize();z.stickies.push(c);
z.addEventListeners();z.scrollEventListener();return c};z.getScrollY=function(){return I()
};z.hasStickies=function(){return z.stickies.length};z.isStickingTop=function(a){var b=z.getScrollY();
return b>=a.getOriginTop()&&b<=a.getEndTop()};z.isStuckTop=function(a){return z.getScrollY()>=a.getEndTop()
};z.isStickingBottom=function(a){var b=z._getScrollPlusViewport();return b<=a.getOriginBottom()&&b>=a.getEndBottom()
};z.isStuckBottom=function(a){var b=z._getScrollPlusViewport();return b<=a.getEndBottom()
};z.orientationResizeListener=function(){if(z.hasStickies()){if(z.orientationResizeDebounce){z._clearOrientationChangeDebounce()
}z.orientationResizeDebounce=z._getOrientationChangeDebounce()}};z.scrollEventListener=function(){if(z.hasStickies()){for(var b=0,c=z.hasStickies(),a;
b<c;b++){a=z.stickies[b];z.update(a)}}};z.touchmoveEventListener=function(){if(z.hasStickies()){for(var b=0,c=z.hasStickies(),a;
b<c;b++){a=z.stickies[b];if(a.options.touchmove){z.update(a)}}}};z.update=function(a){var b=a.type;
if(b==="top"){z.updateTop(a)}if(b==="bottom"){z.updateBottom(a)}};z.updateBottom=function(a){if(z.isStickingBottom(a)){if(!a.isSticking()||a.isStuck()){a.stickBottom()
}}else{if(z.isStuckBottom(a)){if(!a.isStuck()){a.stuckBottom()}}else{if(a.isNotDefaultState()){a.unstickBottom()
}}}};z.updateTop=function(a){if(z.isStickingTop(a)){if(!a.isSticking()||a.isStuck()){a.stickTop()
}}else{if(z.isStuckTop(a)){if(!a.isStuck()){a.stuckTop()}}else{if(a.isNotDefaultState()){a.unstickTop()
}}}};z._clearOrientationChangeDebounce=function(){clearTimeout(z.orientationResizeDebounce);
z.orientationResizeDebounce=false};z._getOrientationChangeDebounce=function(){var a=setTimeout(z._resetStickies,E);
return a};z._getScrollPlusViewport=function(){var a=z.getScrollY();var b=z._getViewportHeight();
return a+b};z._getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight
};z._resetStickies=function(){var a;for(var b=0,c=z.hasStickies();b<c;b++){a=z.stickies[b];
if(a.type==="bottom"){a.unstickBottom();a.updatePlaceholderHeight();z.updateBottom(a)
}else{a.unstickTop();a.updatePlaceholderHeight();z.updateTop(a)}}};z.prototype=Object.assign({createPlaceHolder:function(){var c=document.createElement("div");
var b=document.createElement("div");var a=document.createElement("div");c.className=C;
T.add(c,C);T.add(b,M,K);c.appendChild(b);B(c,this.el);R(a,this.el);this.placeHolder=b;
this.positionHolder=a;this.updatePlaceholderHeight();return this.placeHolder},updatePlaceholderHeight:function(){var a=O(this.el,"marginTop","marginBottom");
P(this.placeHolder,{height:this._getElHeight()+"px",marginTop:a.marginTop,marginBottom:a.marginBottom})
},getPositionValue:function(){if(typeof this.positionValue!=="number"){this.positionValue=this._getPositionValue()
}return this.positionValue},getOriginTop:function(){return this._getPositionHolderOffsetY()-this.getPositionValue()
},getOriginBottom:function(){var a=this.getPositionValue();return this._getPositionHolderOffsetY()+this.placeHolder.offsetHeight+a
},getParentEndTop:function(){var b=this._getParentPadding();var a=this._getBottomOfParent();
return a-b},getParentEndBottom:function(){return this._getParentOffsetY()},getEndTop:function(){var a=this.getParentEndTop();
return a-(this.el.offsetHeight+this.getPositionValue())},getEndBottom:function(){return this._getParentOffsetY()+this.el.offsetHeight+this.getPositionValue()
},getStuckPositionTop:function(){var a=this._getParentPaddingBottom();return this.el.parentNode.offsetHeight-this.el.offsetHeight-a
},isNotDefaultState:function(){return this.isSticking()||this.isStuck()},initialize:function(){this._setStickySupportTypeClass();
this._setBStickyClass();this.type=this._getType();this.createPlaceHolder();this.origin=this.getOriginTop()
},isSticking:function(){return T.contains(this.el,H)},isStuck:function(){return T.contains(this.el,N)
},stickTop:function(){this._triggerStickyStateEvent();this._addStickingClasses();
this._removeStuckClasses();this._setUnstickStyles()},stuckTop:function(){this._triggerStuckStateEvent();
this._addStuckClasses();this._addStickingClasses();this._addStuckStylesTop(Q)},stickBottom:function(){this._triggerStickyStateEvent();
this._addStickingClasses();this._removeStuckClasses();this._setStickStylesBottom(Q)
},stuckBottom:function(){this._triggerStuckStateEvent();this._addStuckClasses();
this._setStuckStylesBottom(Q)},unstickTop:function(){this._triggerDefaultStateEvent();
this._removeStuckAndStickingClasses();this._setUnstickStyles(Q)},unstickBottom:function(){this._triggerDefaultStateEvent();
this._removeStuckAndStickingClasses();this._setUnstickStyles(Q)},_addStuckStylesTop:function(a){if(!a){P(this.el,{top:this.getStuckPositionTop()+"px"})
}},_addStuckClasses:function(){T.add(this.el,N);T.add(this.placeHolder,N)},_addStickingClasses:function(){T.add(this.el,H);
T.add(this.placeHolder,A)},_getType:function(){var b="top";var a=O(this.el,"top","bottom");
if(a.top===null&&a.bottom!==null){b="bottom"}return b},_getParentOffsetY:function(){return D(this.el.parentNode,true).top
},_getBottomOfParent:function(){return this._getParentOffsetY()+this.el.parentNode.offsetHeight
},_getParentPaddingBottom:function(){var b=O(this.el.parentNode,"paddingBottom");
var a=parseInt(b.paddingBottom,10);return isNaN(a)?0:a},_getParentPadding:function(){var a=O(this.el.parentNode,"paddingBottom","paddingTop");
var c;for(var b in a){c=parseInt(a[b],10);a[b]=isNaN(c)?0:c}return a.paddingTop+a.paddingBottom
},_getPositionHolderOffsetY:function(){return D(this.positionHolder,true).top},_getPositionValue:function(){return parseInt(O(this.el,this.type)[this.type],10)||0
},_getElHeight:function(){return this.el.offsetHeight},_getElWidth:function(){return this.el.offsetWidth
},_getStuckPositionBottom:function(){return this.el.parentNode.offsetHeight-this.el.offsetHeight
},_removeStickingClasses:function(){T.remove(this.el,H);T.remove(this.placeHolder,A)
},_removeStuckClasses:function(){T.remove(this.el,N);T.remove(this.placeHolder,N)
},_removeStuckAndStickingClasses:function(){this._removeStuckClasses();this._removeStickingClasses()
},_setBStickyClass:function(){T.add(this.el,F)},_setStickySupportTypeClass:function(){T.add(this.el,K)
},_setStuckStylesBottom:function(b){if(!b){var a=this._getStuckPositionBottom();
P(this.el,{bottom:a+"px"})}},_setUnstickStyles:function(a){if(!a){P(this.el,{position:"",top:"",bottom:""})
}},_setStickStylesBottom:function(b){if(!b){var a=this.getPositionValue();P(this.el,{bottom:a+"px"})
}},_triggerDefaultStateEvent:function(){this.trigger("became-unsticky")},_triggerStickyStateEvent:function(){this.trigger("became-sticky")
},_triggerStuckStateEvent:function(){this.trigger("became-stuck")}},J.prototype);
U.exports=z},{"ac-classlist":8,"ac-dom-events/addEventListener":11,"ac-dom-metrics/getPagePosition":53,"ac-dom-metrics/getScrollY":55,"ac-dom-nodes/insertAfter":24,"ac-dom-nodes/insertBefore":25,"ac-dom-styles/getStyle":57,"ac-dom-styles/setStyle":69,"ac-event-emitter":70,"ac-feature/cssPropertyAvailable":72,"ac-polyfills/Object/assign":49}],mqrQaH:[function(k,j,h){k("ac-polyfills/Array/isArray");
k("ac-polyfills/Array/prototype.filter");k("ac-polyfills/Array/prototype.forEach");
k("ac-polyfills/Array/prototype.indexOf");k("ac-polyfills/Array/prototype.map");
k("ac-polyfills/Array/prototype.some");k("ac-polyfills/getComputedStyle");k("ac-polyfills/String/prototype.trim");
var g=k("./ac-localnav/Localnav");var i=document.getElementById("ac-localnav");
if(i){g.create()}},{"./ac-localnav/Localnav":86,"ac-polyfills/Array/isArray":40,"ac-polyfills/Array/prototype.filter":41,"ac-polyfills/Array/prototype.forEach":42,"ac-polyfills/Array/prototype.indexOf":43,"ac-polyfills/Array/prototype.map":44,"ac-polyfills/Array/prototype.some":46,"ac-polyfills/String/prototype.trim":50,"ac-polyfills/getComputedStyle":51}],"ac-localnav":[function(d,g,f){g.exports=d("mqrQaH")
},{}],85:[function(n,m,i){var j=n("ac-dom-events/utils/addEventListener");var o=n("ac-dom-events/preventDefault");
function k(b,c,a){this.el=b;this.anchorOpen=c;this.anchorClose=a;this._lastOpen=this.el.checked;
j(this.el,"change",this.update.bind(this));j(this.anchorOpen,"click",this._anchorOpenClick.bind(this));
j(this.anchorClose,"click",this._anchorCloseClick.bind(this));if(window.location.hash==="#"+b.id){window.location.hash=""
}}k.create=function(b,c,a){return new k(b,c,a)};var l=k.prototype;l.update=function(){var a=this.isOpen();
if(a!==this._lastOpen){this._lastOpen=a}};l.isOpen=function(){return this.el.checked
};l.toggle=function(){if(this.isOpen()){this.close()}else{this.open()}};l.open=function(){if(!this.el.checked){this.el.checked=true;
this.update()}};l.close=function(){if(this.el.checked){this.el.checked=false;this.update()
}};l._anchorOpenClick=function(a){o(a);this.open();this.anchorClose.focus()};l._anchorCloseClick=function(a){o(a);
this.close();this.anchorOpen.focus()};m.exports=k},{"ac-dom-events/preventDefault":16,"ac-dom-events/utils/addEventListener":18}],86:[function(q,t,p){q("ac-polyfills/Function/prototype.bind");
var s=q("ac-classlist/contains");var u=q("ac-dom-nodes/hasAttribute");var v=q("ac-sticky");
var m=q("ac-headjs/FeatureDetect");var w=q("ac-headjs/defaultTests");var n=q("./CheckboxMenu");
var r=function(){var a;this.el=document.getElementById("ac-localnav");this.stickyEnabled=this._getStickyEnabled();
a=new m(this.el,w);a.htmlClass();if(this.stickyEnabled){v.create(this.el,{touchmove:true})
}this._initializeMenu()};r.create=function(){return new r()};var o=r.prototype;
o._getStickyEnabled=function(){if(!u(this.el,"data-sticky")){return false}if(s(document.body,"ac-platter-content")){return false
}if(s(document.body,"ac-platter-page")){return false}return true};o._initializeMenu=function(){var b=document.getElementById("ac-ln-menustate");
var a=document.getElementById("ac-ln-menustate-open");var c=document.getElementById("ac-ln-menustate-close");
if(b&&a&&c){this.menu=new n(b,a,c)}};t.exports=r},{"./CheckboxMenu":85,"ac-classlist/contains":7,"ac-dom-nodes/hasAttribute":23,"ac-headjs/FeatureDetect":29,"ac-headjs/defaultTests":30,"ac-polyfills/Function/prototype.bind":48,"ac-sticky":82}]},{},["mqrQaH"]);