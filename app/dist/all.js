/*
 AngularJS v1.3.8
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(M,Y,t){'use strict';function T(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.8/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ta(b){if(null==b||Ua(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:F(b)||x(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function s(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(x(b)||Ta(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==s)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Fd(){return++nb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function z(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}lc(b,a);return b}function ba(b){return parseInt(b,10)}function C(){}function oa(b){return b}function da(b){return function(){return b}}function D(b){return"undefined"===typeof b}function y(b){return"undefined"!==
typeof b}function H(b){return null!==b&&"object"===typeof b}function F(b){return"string"===typeof b}function V(b){return"number"===typeof b}function pa(b){return"[object Date]"===Da.call(b)}function G(b){return"function"===typeof b}function ob(b){return"[object RegExp]"===Da.call(b)}function Ua(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Gd(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return Q(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Ea(b,a,c,d){if(Ua(b)||Va(b))throw Ka("cpws");if(a){if(b===a)throw Ka("cpi");c=c||[];d=d||[];if(H(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(x(b))for(var f=a.length=0;f<b.length;f++)e=Ea(b[f],null,c,d),H(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;x(a)?a.length=
0:s(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Ea(b[f],null,c,d),H(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)x(b)?a=Ea(b,[],c,d):pa(b)?a=new Date(b.getTime()):ob(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):H(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Ea(b,e,c,d));return a}function qa(b,a){if(x(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(H(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function fa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(x(b)){if(!x(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!fa(b[d],a[d]))return!1;return!0}}else{if(pa(b))return pa(a)?fa(b.getTime(),a.getTime()):!1;if(ob(b)&&ob(a))return b.toString()==a.toString();if(Va(b)||Va(a)||Ua(b)||Ua(a)||x(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!G(b[d])){if(!fa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function nc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ua(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Va(a)&&
(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function oc(b){return F(b)?JSON.parse(b):b}function va(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===pb?Q(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(d){return Q(c)}}function pc(b){try{return decodeURIComponent(b)}catch(a){}}function qc(b){var a={},c,d;s((b||"").split("&"),function(b){b&&
(c=b.replace(/\+/g,"%20").split("="),d=pc(c[0]),y(d)&&(b=y(c[1])?pc(c[1]):!0,rc.call(a,d)?x(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];s(b,function(b,d){x(b)?s(b,function(b){a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))}):a.push(Fa(d,!0)+(!0===b?"":"="+Fa(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Fa(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Fa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=B(b);for(d=0;d<e;++d)if(c=rb[d]+a,F(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};s(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});s(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),a(c,d?[d]:[],e))}function sc(b,
a,c){H(c)||(c={});c=z({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===Y?"document":va(b);throw Ka("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Ob(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},
e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;M&&e.test(M.name)&&(c.debugInfoEnabled=!0,M.name=M.name.replace(e,""));if(M&&!f.test(M.name))return d();M.name=M.name.replace(f,"");ga.resumeBootstrap=function(b){s(b,function(b){a.push(b)});d()}}function Kd(){M.name="NG_ENABLE_DEBUG_INFO!"+M.name;M.location.reload()}function Ld(b){b=ga.element(b).injector();if(!b)throw Ka("test");return b.get("$$testability")}function tc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}
function Nd(){var b;uc||((ra=M.jQuery)&&ra.fn.on?(B=ra,z(ra.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),b=ra.cleanData,ra.cleanData=function(a){var c;if(Pb)Pb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ra._data(e,"events"))&&c.$destroy&&ra(e).triggerHandler("$destroy");b(a)}):B=R,ga.element=B,uc=!0)}function Qb(b,a,c){if(!b)throw Ka("areq",a||"?",c||"required");return b}function sb(b,a,c){c&&x(b)&&(b=b[b.length-1]);
Qb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ka("badname",a);}function vc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?nc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function ha(){return Object.create(null)}function Od(b){function a(a,b,c){return a[b]||
(a[b]=c())}var c=T("$injector"),d=T("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||T;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
"provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){z(b,{bootstrap:sc,copy:Ea,extend:z,equals:fa,element:B,forEach:s,injector:Ob,noop:C,bind:nc,toJson:$a,
fromJson:oc,identity:oa,isUndefined:D,isDefined:y,isString:F,isFunction:G,isObject:H,isNumber:V,isElement:mc,isArray:x,version:Qd,isDate:pa,lowercase:Q,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:T,$$csp:ab,reloadWithDebugInfo:Kd});bb=Od(M);try{bb("ngLocale")}catch(a){bb("ngLocale",[]).provider("$locale",Rd)}bb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",wc).directive({a:Td,input:xc,textarea:xc,form:Ud,script:Vd,select:Wd,style:Xd,
option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:yc,ngPattern:yc,required:zc,ngRequired:zc,minlength:Ac,ngMinlength:Ac,maxlength:Bc,ngMaxlength:Bc,ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Cc);
a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Dc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function cb(b){return b.replace(cf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}
function Ec(b){b=b.nodeType;return b===na||!b||9===b}function Fc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Rb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ia[d]||ia._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";s(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof
R)return b;var a;F(b)&&(b=U(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Sb("nosel");return new R(b)}if(a){a=Y;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Fc(b,a))?c.childNodes:[]}Gc(this,b)}function Tb(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Hc(b,a,c,d){if(y(d))throw Sb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)s(a.split(" "),function(a){if(y(c)){var d=
e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Hc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Ub(b,a,c){if(Ec(b)){var d=y(c),e=!d&&a&&!H(a),f=!a;b=(b=yb(b,!e))&&b.data;
if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];z(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&s(a.split(" "),function(a){b.setAttribute("class",U((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");s(a.split(" "),function(a){a=
U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",U(c))}}function Gc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Ic(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=x(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}
function Jc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Kc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||M;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Lc(b,a){var c=Eb[a.toLowerCase()];return c&&Mc[ua(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Nc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:
0;if(g){if(D(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=qa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return z(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return Ab(b,a)},addClass:function(b,
a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function db(b,a){if(a){var c=0;this.nextUid=function(){return++c}}s(b,this.put,this)}function mf(b){return(b=b.toString().replace(Oc,"").match(Pc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Vb(b,
a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw F(c)&&c||(c=b.name||mf(b)),Ga("strictdi",c);a=b.toString().replace(Oc,"");a=a.match(Pc);s(a[1].split(nf),function(a){a.replace(of,function(a,b,c){d.push(c)})})}b.$inject=d}}else x(b)?(a=b.length-1,sb(b[a],"fn"),d=b.slice(0,a)):sb(b,"fn",!0);return d}function Ob(b,a){function c(a){return function(b,c){if(H(b))s(b,kc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(G(b)||x(b))b=q.instantiate(b);if(!b.$get)throw Ga("pget",
a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=r.invoke(b,this);if(D(c))throw Ga("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;s(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=bb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):x(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw x(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=Vb(b,a,g),l,q,p;q=0;for(l=k.length;q<l;q++){p=k[q];if("string"!==
typeof p)throw Ga("itkn",p);h.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}x(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((x(a)?a[a.length-1]:a).prototype);a=e(a,d,b,c);return H(a)||G(a)?a:d},get:d,annotate:Vb,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new db([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){Ma(a,"constant");p[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ga.isString(b)&&k.push(b);throw Ga("unpr",k.join(" <- "));}),u={},r=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return r.invoke(c.$get,c,t,a)});s(g(b),function(a){r.invoke(a||C)});return r}function Be(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function pf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(v--,0===v)for(;w.length;)try{w.pop()()}catch(b){c.error(b)}}}function f(a,b){(function N(){s(L,function(a){a()});J=b(N,
a)})()}function g(){h();l()}function h(){A=b.history.state;A=D(A)?null:A;fa(A,I)&&(A=I);I=A}function l(){if(E!==m.url()||P!==A)E=m.url(),P=A,s(W,function(a){a(m.url(),A)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,p=a[0],q=b.location,u=b.history,r=b.setTimeout,O=b.clearTimeout,n={};m.isMock=!1;var v=0,w=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){v++};m.notifyWhenNoOutstandingRequests=function(a){s(L,function(a){a()});0===v?a():
w.push(a)};var L=[],J;m.addPollFn=function(a){D(J)&&f(100,r);L.push(a);return a};var A,P,E=q.href,S=a.find("base"),X=null;h();P=A;m.url=function(a,c,e){D(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=P===e;if(E===a&&(!d.history||f))return m;var g=E&&Ha(E)===Ha(a);E=a;P=e;!d.history||g&&f?(g||(X=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),P=A);return m}return X||q.href.replace(/%27/g,
"'")};m.state=function(){return A};var W=[],wa=!1,I=null;m.onUrlChange=function(a){if(!wa){if(d.history)B(b).on("popstate",g);B(b).on("hashchange",g);wa=!0}W.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=S.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var ea={},y="",ca=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===t?p.cookie=encodeURIComponent(a)+"=;path="+ca+";expires=Thu, 01 Jan 1970 00:00:00 GMT":F(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+
";path="+ca).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),ea={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),ea[a]===t&&(ea[a]=k(e.substring(g+1))));return ea}};m.defer=function(a,b){var c;v++;c=r(function(){delete n[c];e(a)},b||0);n[c]=!0;return c};m.defer.cancel=function(a){return n[a]?(delete n[a],O(a),e(C),!0):!1}}function De(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new pf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw T("$cacheFactory")("iid",b);var g=0,h=z({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}if(!D(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),
b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};p=q=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return z({},h,{size:g})}}}var a={};b.info=function(){var b={};s(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",
function(b){return b("templates")}]}function wc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};s(a,function(a,e){var f=a.match(c);if(!f)throw ja("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){Ma(a,"directive");F(a)?(Qb(e,
"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];s(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";H(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):s(a,kc(p));return this};this.aHrefSanitizationWhitelist=
function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,r,O,n,v,w,L,J,A){function P(a,b){try{a.addClass(b)}catch(c){}}
function E(a,b,c,d,e){a instanceof B||(a=B(a));s(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);E.$$addScopeClass(a);var g=null;return function(b,c,d){Qb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Wb(g,B("<div>").append(a).html())):
c?La.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);E.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,q,p,n,w;if(r)for(w=Array(c.length),q=0;q<h.length;q+=3)f=h[q],w[f]=c[f];else w=c;q=0;for(p=h.length;q<p;)l=w[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),E.$$addScopeInfo(B(l),k)):k=a,n=c.transcludeOnThisElement?X(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?X(a,
b):null,c(f,k,l,d,n)):f&&f(a,l.childNodes,t,e)}for(var h=[],l,k,q,p,r,n=0;n<a.length;n++){l=new Xb;k=W(a[n],[],l,0===n?d:t,e);(f=k.length?ea(k,a[n],l,b,c,null,[],[],f):null)&&f.scope&&E.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[n].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(n,f,l),p=!0,r=r||f;f=null}return p?g:null}function X(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,
{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function W(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case na:ca(b,ya(ua(a)),"E",d,g);for(var k,q,p,r=a.attributes,n=0,w=r&&r.length;n<w;n++){var O=!1,L=!1;k=r[n];l=k.name;q=U(k.value);k=ya(l);if(p=fb.test(k))l=l.replace(Rc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var u=k.replace(/(Start|End)$/,"");D(u)&&k===u+"Start"&&(O=l,L=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());
h[k]=l;if(p||!c.hasOwnProperty(k))c[k]=q,Lc(a,k)&&(c[k]=!0);Pa(a,b,q,k,p);ca(b,k,"A",d,g,O,L)}a=a.className;if(F(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),ca(b,k,"C",d,g)&&(c[k]=U(l[3])),a=a.substr(l.index+l[0].length);break;case pb:M(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),ca(b,k,"M",d,g)&&(c[k]=U(l[2]))}catch(v){}}b.sort(N);return b}function wa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function I(a,b,c){return function(d,e,f,g,h){e=wa(e[0],b,c);return a(d,e,f,g,h)}}function ea(a,d,e,f,g,l,k,p,r){function w(a,b,c,d){if(a){c&&(a=I(a,c,d));a.require=K.require;a.directiveName=z;if(S===K||K.$$isolateScope)a=Z(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=I(b,c,d));b.require=K.require;b.directiveName=z;if(S===K||K.$$isolateScope)b=Z(b,{isolateScope:!0});p.push(b)}}function L(a,b,c,d){var e,f="data",
g=!1,l=c,k;if(F(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",l=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);return e||null}x(b)&&(e=[],s(b,function(b){e.push(L(a,b,c,d))}));return e}function v(a,c,f,g,h){function l(a,b,c){var d;Va(a)||(c=b,b=a,a=t);C&&(d=P);c||(c=C?W.parent():W);return h(a,b,d,c,wa)}var r,w,u,A,
P,eb,W,I;d===f?(I=e,W=e.$$element):(W=B(f),I=new Xb(W,e));S&&(A=c.$new(!0));h&&(eb=l,eb.$$boundTransclude=h);J&&(X={},P={},s(J,function(a){var b={$scope:a===S||a.$$isolateScope?A:c,$element:W,$attrs:I,$transclude:eb};u=a.controller;"@"==u&&(u=I[a.name]);b=n(u,b,!0,a.controllerAs);P[a.name]=b;C||W.data("$"+a.name+"Controller",b.instance);X[a.name]=b}));if(S){E.$$addScopeInfo(W,A,!0,!(ka&&(ka===S||ka===S.$$originalDirective)));E.$$addScopeClass(W,!0);g=X&&X[S.name];var xa=A;g&&g.identifier&&!0===S.bindToController&&
(xa=g.instance);s(A.$$isolateBindings=S.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,l,k;switch(a.mode){case "@":I.$observe(e,function(a){xa[d]=a});I.$$observers[e].$$scope=c;I[e]&&(xa[d]=b(I[e])(c));break;case "=":if(f&&!I[e])break;h=O(I[e]);k=h.literal?fa:function(a,b){return a===b||a!==a&&b!==b};l=h.assign||function(){g=xa[d]=h(c);throw ja("nonassign",I[e],S.name);};g=xa[d]=h(c);f=function(a){k(a,xa[d])||(k(a,g)?l(c,a=xa[d]):xa[d]=a);return g=a};f.$stateful=!0;f=a.collection?
c.$watchCollection(I[e],f):c.$watch(O(I[e],f),null,h.literal);A.$on("$destroy",f);break;case "&":h=O(I[e]),xa[d]=function(a){return h(c,a)}}})}X&&(s(X,function(a){a()}),X=null);g=0;for(r=k.length;g<r;g++)w=k[g],$(w,w.isolateScope?A:c,W,I,w.require&&L(w.directiveName,w.require,W,P),eb);var wa=c;S&&(S.template||null===S.templateUrl)&&(wa=A);a&&a(wa,f.childNodes,t,h);for(g=p.length-1;0<=g;g--)w=p[g],$(w,w.isolateScope?A:c,W,I,w.require&&L(w.directiveName,w.require,W,P),eb)}r=r||{};for(var A=-Number.MAX_VALUE,
P,J=r.controllerDirectives,X,S=r.newIsolateScopeDirective,ka=r.templateDirective,ea=r.nonTlbTranscludeDirective,ca=!1,D=!1,C=r.hasElementTranscludeDirective,aa=e.$$element=B(d),K,z,N,Aa=f,Q,M=0,R=a.length;M<R;M++){K=a[M];var Pa=K.$$start,fb=K.$$end;Pa&&(aa=wa(d,Pa,fb));N=t;if(A>K.priority)break;if(N=K.scope)K.templateUrl||(H(N)?(Oa("new/isolated scope",S||P,K,aa),S=K):Oa("new/isolated scope",S,K,aa)),P=P||K;z=K.name;!K.templateUrl&&K.controller&&(N=K.controller,J=J||{},Oa("'"+z+"' controller",J[z],
K,aa),J[z]=K);if(N=K.transclude)ca=!0,K.$$tlb||(Oa("transclusion",ea,K,aa),ea=K),"element"==N?(C=!0,A=K.priority,N=aa,aa=e.$$element=B(Y.createComment(" "+z+": "+e[z]+" ")),d=aa[0],V(g,Za.call(N,0),d),Aa=E(N,f,A,l&&l.name,{nonTlbTranscludeDirective:ea})):(N=B(Tb(d)).contents(),aa.empty(),Aa=E(N,f));if(K.template)if(D=!0,Oa("template",ka,K,aa),ka=K,N=G(K.template)?K.template(aa,e):K.template,N=Sc(N),K.replace){l=K;N=Rb.test(N)?Tc(Wb(K.templateNamespace,U(N))):[];d=N[0];if(1!=N.length||d.nodeType!==
na)throw ja("tplrt",z,"");V(g,aa,d);R={$attr:{}};N=W(d,[],R);var ba=a.splice(M+1,a.length-(M+1));S&&y(N);a=a.concat(N).concat(ba);Qc(e,R);R=a.length}else aa.html(N);if(K.templateUrl)D=!0,Oa("template",ka,K,aa),ka=K,K.replace&&(l=K),v=T(a.splice(M,a.length-M),aa,e,g,ca&&Aa,k,p,{controllerDirectives:J,newIsolateScopeDirective:S,templateDirective:ka,nonTlbTranscludeDirective:ea}),R=a.length;else if(K.compile)try{Q=K.compile(aa,e,Aa),G(Q)?w(null,Q,Pa,fb):Q&&w(Q.pre,Q.post,Pa,fb)}catch(qf){c(qf,va(aa))}K.terminal&&
(v.terminal=!0,A=Math.max(A,K.priority))}v.scope=P&&!0===P.scope;v.transcludeOnThisElement=ca;v.elementTranscludeOnThisElement=C;v.templateOnThisElement=D;v.transclude=Aa;r.hasElementTranscludeDirective=C;return v}function y(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=z(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function ca(b,e,f,g,h,l,k){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var r=0,n=e.length;r<n;r++)try{if(q=e[r],(g===t||g>q.priority)&&-1!=
q.restrict.indexOf(f)){if(l){var w={$$start:l,$$end:k};q=z(Object.create(q),w)}b.push(q);h=q}}catch(O){c(O)}}return h}function D(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;return!1}function Qc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;s(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});s(b,function(b,f){"class"==f?(P(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==
f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function T(a,b,c,d,e,f,g,h){var l=[],k,q,p=b[0],n=a.shift(),w=z({},n,{templateUrl:null,transclude:null,replace:null,$$originalDirective:n}),O=G(n.templateUrl)?n.templateUrl(b,c):n.templateUrl,u=n.templateNamespace;b.empty();r(L.getTrustedResourceUrl(O)).then(function(r){var L,v;r=Sc(r);if(n.replace){r=Rb.test(r)?Tc(Wb(u,U(r))):[];L=r[0];if(1!=r.length||L.nodeType!==
na)throw ja("tplrt",n.name,O);r={$attr:{}};V(d,b,L);var A=W(L,[],r);H(n.scope)&&y(A);a=A.concat(a);Qc(c,r)}else L=p,b.html(r);a.unshift(w);k=ea(a,L,c,e,b,n,f,g,h);s(d,function(a,c){a==L&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);l.length;){r=l.shift();v=l.shift();var J=l.shift(),E=l.shift(),A=b[0];if(!r.$$destroyed){if(v!==p){var I=v.className;h.hasElementTranscludeDirective&&n.replace||(A=Tb(L));V(J,B(v),A);P(B(A),I)}v=k.transcludeOnThisElement?X(r,k.transclude,E):E;k(q,r,A,d,v)}}l=null});return function(a,
b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(k.transcludeOnThisElement&&(a=X(b,k.transclude,e)),k(q,b,c,d,a)))}}function N(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,va(d));}function M(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&E.$$addBindingClass(a);return function(a,c){var e=c.parent();b||E.$$addBindingClass(e);E.$$addBindingInfo(e,
d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Wb(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function Pa(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===ua(a))throw ja("selmulti",
va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ja("nodomevents");var p=g[e];p!==d&&(k=p&&b(p,!0,h,f),d=p);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function V(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,
h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());ra?(Pb=!0,ra.cleanData([d])):delete B.cache[d[B.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return z(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}var Xb=function(a,b){if(b){var c=Object.keys(b),
d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Xb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Uc(a,b);c&&c.length&&J.addClass(this.$$element,c);(c=Uc(b,a))&&c.length&&J.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Lc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):
h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=tc(a,"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=A(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=U(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var q=2*k,g=g+A(U(h[q]),!0),g=g+(" "+U(h[q+1]));h=U(h[2*k]).split(/\s/);g+=A(U(h[0]),!0);2===h.length&&(g+=" "+U(h[1]));this[a]=b=g}!1!==d&&(null===b||
b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&s(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ha()),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var Aa=b.startSymbol(),ka=b.endSymbol(),Sc="{{"==Aa||"}}"==ka?oa:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,ka)},fb=/^ngAttr[A-Z]/;E.$$addBindingInfo=k?function(a,b){var c=
a.data("$binding")||[];x(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;E.$$addBindingClass=k?function(a){P(a,"ng-binding")}:C;E.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;E.$$addScopeClass=k?function(a,b){P(a,b?"ng-isolate-scope":"ng-scope")}:C;return E}]}function ya(b){return cb(b.replace(Rc,""))}function Uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;
c+=(0<c.length?" ":"")+g}return c}function Tc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&rf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");H(a)?z(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!H(a.$scope))throw T("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var m,p,q;l=!0===l;k&&F(k)&&(q=k);F(g)&&
(k=g.match(c),p=k[1],q=q||k[3],g=b.hasOwnProperty(p)?b[p]:vc(h.$scope,p,!0)||(a?vc(e,p,!0):t),sb(g,p,!0));if(l)return l=(x(g)?g[g.length-1]:g).prototype,m=Object.create(l),q&&f(h,q,m,p||g.name),z(function(){d.invoke(g,m,h,p);return m},{instance:m,identifier:q});m=d.instantiate(g,h,p);q&&f(h,q,m,p||g.name);return m}}]}function Ge(){this.$get=["$window",function(b){return B(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b,a){if(F(b)){var c=
b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Vc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=oc(c))}}return b}function Wc(b){var a=ha(),c,d,e;if(!b)return a;s(b.split("\n"),function(b){e=b.indexOf(":");c=Q(U(b.substr(0,e)));d=U(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Xc(b){var a=H(b)?b:t;return function(c){a||(a=Wc(b));return c?(c=a[Q(c)],void 0===c&&(c=null),c):a}}function Yc(b,a,c,d){if(G(d))return d(b,a,c);s(d,function(d){b=d(b,a,c)});return b}
function Ke(){var b=this.defaults={transformResponse:[Yb],transformRequest:[function(a){return H(a)&&"[object File]"!==Da.call(a)&&"[object Blob]"!==Da.call(a)&&"[object FormData]"!==Da.call(a)?$a(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(Zb),put:qa(Zb),patch:qa(Zb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory",
"$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=z({},a);b.data=a.data?Yc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};s(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ga.isObject(a))throw T("$http")("badreq",a);var e=z({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=z({},a.headers),
f,g,c=z({},c.common,c[Q(a.method)]);a:for(f in c){a=Q(f);for(g in e)if(Q(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Yc(a.data,Xc(d),t,a.transformRequest);D(e)&&s(d,function(a,b){"content-type"===Q(b)&&delete d[b]});D(a.withCredentials)&&!D(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},t],g=h.when(e);for(s(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&
f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}P&&(200<=b&&300>b?P.put(X,[b,c,Wc(d),e]):P.remove(X));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?J.resolve:J.reject)({data:a,
status:b,headers:Xc(d),config:c,statusText:e})}function w(a){m(a.data,a.status,qa(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var J=h.defer(),A=J.promise,P,E,s=c.headers,X=p(c.url,c.params);k.pendingRequests.push(c);A.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(P=H(c.cache)?c.cache:H(b.cache)?b.cache:q);P&&(E=P.get(X),y(E)?E&&G(E.then)?E.then(w,w):x(E)?m(E[1],E[0],qa(E[2]),E[3]):m(E,200,{},
"OK"):P.put(X,A));D(E)&&((E=Zc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(s[c.xsrfHeaderName||b.xsrfHeaderName]=E),d(c.method,X,f,l,s,c.timeout,c.withCredentials,c.responseType));return A}function p(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||D(a)||(x(a)||(a=[a]),s(a,function(a){H(a)&&(a=pa(a)?a.toISOString():$a(a));c.push(Fa(b)+"="+Fa(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),u=[];s(c,function(a){u.unshift(F(a)?l.get(a):
l.invoke(a))});k.pendingRequests=[];(function(a){s(arguments,function(a){k[a]=function(b,c){return k(z(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){s(arguments,function(a){k[a]=function(b,c,d){return k(z(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new M.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,
d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,p,q,u){function r(){v&&v();w&&w.abort()}
function O(a,d,e,f,g){J!==t&&c.cancel(J);v=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(C)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==Q(e)){var n="_"+(d.counter++).toString(36);d[n]=function(a){d[n].data=a;d[n].called=!0};var v=f(h.replace("JSON_CALLBACK","angular.callbacks."+n),n,function(a,b){O(k,a,d[n].data,"",b);d[n]=C})}else{var w=a();w.open(e,h,!0);s(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,
c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);O(k,c,b,w.getAllResponseHeaders(),a)};e=function(){O(k,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=!0);if(u)try{w.responseType=u}catch(L){if("json"!==u)throw L;}w.send(l||null)}if(0<p)var J=c(r,p);else p&&G(p.then)&&p.then(r)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",
function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,r){function O(c){return c.replace(k,b).replace(m,a)}function n(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(r&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=$b("interr",f,g.toString()),d(c)}}r=!!r;for(var v,w,L=0,J=[],A=[],P=f.length,E=[],s=[];L<P;)if(-1!=(v=f.indexOf(b,L))&&-1!=(w=f.indexOf(a,v+h)))L!==v&&E.push(O(f.substring(L,
v))),L=f.substring(v+h,w),J.push(L),A.push(c(L,n)),L=w+l,s.push(E.length),E.push("");else{L!==P&&E.push(O(f.substring(L)));break}if(u&&1<E.length)throw $b("noconcat",f);if(!g||J.length){var X=function(a){for(var b=0,c=J.length;b<c;b++){if(r&&D(a[b]))return;E[s[b]]=a[b]}return E.join("")};return z(function(a){var b=0,c=J.length,e=Array(c);try{for(;b<c;b++)e[b]=A[b](a);return X(e)}catch(g){a=$b("interr",f,g.toString()),d(a)}},{exp:f,expressions:J,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(A,
function(c,e){var f=X(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,p=a.clearInterval,q=0,u=y(k)&&!k,r=(u?d:c).defer(),O=r.promise;l=y(l)?l:0;O.then(null,null,e);O.$$intervalId=m(function(){r.notify(q++);0<
l&&q>=l&&(r.resolve(q),p(O.$$intervalId),delete f[O.$$intervalId]);u||b.$apply()},h);f[O.$$intervalId]=r;return O}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,
maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",
longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);return b.join("/")}function $c(b,a){var c=Ba(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=ba(c.port)||xf[c.protocol]||null}function ad(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):
d.pathname);a.$$search=qc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function za(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ha(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function bd(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b){return b.substr(0,Ha(b).lastIndexOf("/")+1)}function cc(b,a){this.$$html5=!0;a=a||"";var c=bc(b);$c(b,this);this.$$parse=function(a){var b=za(c,a);if(!F(b))throw Fb("ipthprfx",a,c);
ad(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=za(b,d))!==t?(g=f,g=(f=za(a,f))!==t?c+(za("/",f)||f):b+g):(f=za(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function dc(b,a){var c=bc(b);$c(b,this);this.$$parse=function(d){d=
za(b,d)||za(c,d);var e;"#"===d.charAt(0)?(e=za(a,d),D(e)&&(e=d)):e=this.$$html5?d:"";ad(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ha(b)==Ha(a)?(this.$$parse(a),!0):!1}}function cd(b,
a){this.$$html5=!0;dc.apply(this,arguments);var c=bc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ha(d)?f=d:(g=za(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=ac(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Gb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(D(c))return this[b];this[b]=
a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):H(b)?(Wa(b.enabled)&&(a.enabled=b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;
try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var p=d.url(),q;if(a.enabled){if(!m&&a.requireBase)throw Fb("nobase");q=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(m||"/");m=e.history?cc:cd}else q=Ha(p),m=dc;k=new m(q,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&
2!=b.which){for(var e=B(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ba(h.animVal).href);u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=p&&d.url(k.absUrl(),!0);var r=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=
k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(r=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=bd(d.url()),b=bd(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(r||q)r=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=
f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=
[];s(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function sa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ta(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.window===b)throw la("isecwindow",
a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ec(b){return b.constant}function gb(b,a,c,d){ta(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=sa(a.shift(),d);var g=ta(b[e],d);g||(g={},b[e]=g);b=g}e=sa(a.shift(),d);ta(b[e],d);return b[e]=c}function Qa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){sa(b,f);sa(a,f);sa(c,f);sa(d,f);sa(e,f);var h=function(a){return ta(a,f)},l=g||Qa(b)?h:oa,k=g||Qa(a)?h:oa,m=
g||Qa(c)?h:oa,p=g||Qa(d)?h:oa,q=g||Qa(e)?h:oa;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==h)return t;h=m(h[c]);if(!d)return h;if(null==h)return t;h=p(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,ta,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],
c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;s(g,function(a,b){sa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Qa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=da(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return gb(a,b,c,b)};return e[b]=
f}function fc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ha(),a=ha();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?
!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&fc(b));return h},b,c)}for(var k=[],q=0,p=e.length;q<p;q++)k[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&fc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);
y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;s(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,
c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var v,w,L;switch(typeof d){case "string":L=d=d.trim();var J=g?a:b;v=J[L];v||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),g=g?u:q,v=new gc(g),v=(new hb(v,c,g)).parse(d),v.constant?v.$$watchDelegate=
m:w?(v=e(v),v.$$watchDelegate=v.literal?k:l):v.inputs&&(v.$$watchDelegate=h),J[L]=v);return p(v,f);case "function":return p(d,f);default:return p(C,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state=
{status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=
T("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,
e;e=c(this,this.$$resolve,this.$$reject);try{if(H(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&
d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof
u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=m;p.all=function(a){var b=new g,c=0,d=x(a)?[]:{};s(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,
a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){var b=10,a=T("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function l(){this.$id=
++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function k(b){if(r.$$phase)throw a("inprog",r.$$phase);r.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function q(){for(;v.length;)try{v.shift()()}catch(a){f(a)}d=null}function u(){null===
d&&(d=h.defer(function(){r.$apply(q)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++nb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?(b.$$childTail.$$nextSibling=
d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;G(b)||(h.fn=C);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Xa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&
b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});s(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!D(e)){if(H(e))if(Ta(e))for(f!==q&&(f=q,u=f.length=0,k++),a=e.length,u!==a&&(k++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==
m&&(f=m={},u=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(u++,f[b]=g,k++));if(u>a)for(b in k++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,p=g(a,c),q=[],m={},n=!0,u=0;return this.$watch(p,function(){n?(n=!1,b(e,e,d)):b(e,h,d);if(l)if(H(e))if(Ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)rc.call(e,a)&&(h[a]=e[a]);else h=
e})},$digest:function(){var e,g,l,m,u,v,s=b,t,W=[],y,I;k("$digest");h.$$checkUrlChange();this===r&&null!==d&&(h.defer.cancel(d),q());c=null;do{v=!1;for(t=this;O.length;){try{I=O.shift(),I.scope.$eval(I.expression,I.locals)}catch(B){f(B)}c=null}a:do{if(m=t.$$watchers)for(u=m.length;u--;)try{if(e=m[u])if((g=e.get(t))!==(l=e.last)&&!(e.eq?fa(g,l):"number"===typeof g&&"number"===typeof l&&isNaN(g)&&isNaN(l)))v=!0,c=e,e.last=e.eq?Ea(g,null):g,e.fn(g,l===p?g:l,t),5>s&&(y=4-s,W[y]||(W[y]=[]),W[y].push({msg:G(e.exp)?
"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:l}));else if(e===c){v=!1;break a}}catch(D){f(D)}if(!(m=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(m=t.$$nextSibling);)t=t.$parent}while(t=m);if((v||O.length)&&!s--)throw r.$$phase=null,a("infdig",b,W);}while(v||O.length);for(r.$$phase=null;n.length;)try{n.shift()()}catch(ca){f(ca)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==r){for(var b in this.$$listenerCount)m(this,
this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=function(){return C};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=
this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){r.$$phase||O.length||h.defer(function(){O.length&&r.$digest()});O.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){n.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{r.$$phase=null;try{r.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&v.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=Ya([h],arguments,1),k,p;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(p=d.length;k<p;k++)if(d[k])try{d[k].apply(null,
l)}catch(m){f(m)}else d.splice(k,1),k--,p--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,g)}catch(k){f(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&
c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new l,O=r.$$asyncQueue=[],n=r.$$postDigestQueue=[],v=r.$$applyAsyncQueue=[];return r}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=
d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Df(b){if("self"===b)return b;if(F(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(ob(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function hd(b){var a=[];y(b)&&s(b,function(b){a.push(Df(b))});return a}function Te(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};
this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Zc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));
var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=Ba(e.toString()),p,q,u=
!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){u=!0;break}if(u)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ra)throw Ca("iequirks");var d=qa(ma);d.isEnabled=function(){return b};d.trustAs=
c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=oa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;s(ma,function(a,b){var c=Q(b);d[cb("parse_as_"+c)]=function(b){return e(a,b)};d[cb("get_trusted_"+c)]=function(b){return f(a,b)};d[cb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",
function(b,a){var c={},d=ba((/android (\d+)/.exec(Q((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=F(f.body.style.webkitTransition),m=F(f.body.style.webkitAnimation))}return{history:!(!b.history||
!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ra)return!1;if(D(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:ab(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;x(g)?g=g.filter(function(a){return a!==Yb}):g===Yb&&(g=null);return a.get(e,{cache:b,transformResponse:g}).then(function(a){d.totalPendingRequests--;
return a.data},function(a){d.totalPendingRequests--;if(!f)throw ja("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];s(a,function(a){var d=ga.element(a).data("$binding");d&&s(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,
c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var m=y(k)&&!k,p=(m?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),
e(a)}finally{delete g[q.$$timeoutId]}m||b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ra&&(Z.setAttribute("href",b),b=Z.href);Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,
port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Zc(b){b=F(b)?Ba(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=da(M)}function Dc(b){function a(c,d){if(H(c)){var e={};s(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",
ld);a("orderBy",md);a("uppercase",If)}function Ef(){return function(b,a,c){if(!x(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){var d=H(b)&&"$"in b;!0===a?a=fa:G(a)||(a=function(a,b){if(H(a)||H(b))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!H(e)?Ia(e,b.$,a,!1):Ia(e,b,a,c)}}function Ia(b,a,c,d,e){var f=typeof b,g=
typeof a;if("string"===g&&"!"===a.charAt(0))return!Ia(b,a.substring(1),c,d);if("array"===f)return b.some(function(b){return Ia(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ia(b[h],a,c,!0))return!0;return e?!1:Ia(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&(f="$"===h,!Ia(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){D(d)&&(d=a.CURRENCY_SYM);
D(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||H(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var m=g.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=
(g.split(od)[1]||"").length;D(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(p=k.length-q,m=0;m<p;m++)0===(p-m)%u&&0!==m&&(h+=c),h+=k.charAt(m);for(m=p;m<k.length;m++)0===(k.length-m)%q&&0!==m&&(h+=c),h+=k.charAt(m);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}
function Hb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Hb(e,a,d)}}function Ib(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),
a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Hb(a,b)}}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));h.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;h=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;F(c)&&(c=Kf.test(c)?ba(c):a(c));V(c)&&(c=new Date(c));if(!pa(c))return c;for(;e;)(k=Lf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));s(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){D(a)&&(a=2);return $a(b,a)}}function Gf(){return function(b,
a){V(b)&&(b=b.toString());if(!x(b)&&!F(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):ba(a);if(F(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c,d;a>b.length?a=b.length:a<-b.length&&(a=-b.length);if(0<a)c=0,d=a;else{if(!a)return[];c=b.length+a;d=b.length}return b.slice(c,d)}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===
a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ta(a))return a;c=x(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||oa;if(F(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=
d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ja(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Jb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=
!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){s(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){s(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];s(f.$pending,function(b,c){f.$setValidity(c,null,a)});s(f.$error,function(b,c){f.$setValidity(c,
null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Kb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Kb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;s(g,function(a){a.$setPristine()})};f.$setUntouched=function(){s(g,function(a){a.$setUntouched()})};
f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function ib(b,a,c,d,e,f){var g=Q(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=U(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&
d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Lb(b,a){return function(c,d){var e,f;if(pa(c))return c;if(F(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,
c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},s(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function jb(b,a,c,d){return function(e,f,g,h,l,k,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}
function q(a){return y(a)?pa(a)?a:c(a):t}td(e,f,g,h);ib(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,r;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,r),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!pa(a))throw Mb("datefmt",a);if(p(a)){if((r=a)&&"UTC"===u){var b=6E4*r.getTimezoneOffset();r=new Date(r.getTime()+b)}return m("date")(a,d,u)}r=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=
function(a){return!p(a)||D(s)||c(a)>=s};g.$observe("min",function(a){s=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var n;h.$validators.max=function(a){return!p(a)||D(n)||c(a)<=n};g.$observe("max",function(a){n=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=H(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw T("ngModel")("constexpr",c,d);return b(a)}return e}
function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+tc(b,"-"):"";a(kb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[kb]=e.hasClass(kb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,
b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}function ic(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}
function e(a){if(!x(a)){if(F(a))return a.split(" ");if(H(a)){var b=[];s(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];s(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var u=l(k,1);h.$addClass(u)}else if(!fa(b,m)){var r=e(m),u=d(k,r),k=d(r,k),u=l(u,1),k=
l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}m=qa(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}var Of=/^\/(.+)\/([a-z]*)$/,Q=function(b){return F(b)?b.toLowerCase():b},rc=Object.prototype.hasOwnProperty,ub=function(b){return F(b)?b.toUpperCase():b},Ra,B,ra,Za=[].slice,rf=[].splice,
Pf=[].push,Da=Object.prototype.toString,Ka=T("ng"),ga=M.angular||(M.angular={}),bb,nb=0;Ra=Y.documentMode;C.$inject=[];oa.$inject=[];var x=Array.isArray,U=function(b){return F(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ab=function(){if(y(ab.isActive_))return ab.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return ab.isActive_=b},rb=["ng-","data-ng-","ng:",
"x-ng-"],Md=/[A-Z]/g,uc=!1,Pb,na=1,pb=3,Qd={full:"1.3.8",major:1,minor:3,dot:8,codeName:"prophetic-narwhal"};R.expando="ng339";var zb=R.cache={},hf=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Sb=T("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Rb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ia={option:[1,'<select multiple="multiple">',
"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var La=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(M).on("load",a))},toString:function(){var b=[];s(this,function(a){b.push(""+
a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};s("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[Q(b)]=b});var Mc={};s("input select option textarea button form details".split(" "),function(b){Mc[b]=!0});var Nc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};s({data:Ub,removeData:xb},function(b,a){R[a]=b});s({data:Ub,
inheritedData:Db,scope:function(b){return B.data(b,"$scope")||Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,"$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Ic,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=cb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=Q(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(D(b)){var d=a.nodeType;return d===na||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(D(a)){if(b.multiple&&"select"===ua(b)){var c=[];s(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?
null:c}return b.value}b.value=a},html:function(b,a){if(D(a))return b.innerHTML;wb(b,!0);b.innerHTML=a},empty:Jc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Jc&&(2==b.length&&b!==Ab&&b!==Ic?a:d)===t){if(H(a)){for(e=0;e<g;e++)if(b===Ub)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});s({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Sb("onargs");
if(Ec(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Hc,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);s(new R(c),
function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];s(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;s(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];
var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Kc,detach:function(a){Kc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&s(c.split(" "),function(c){var f=d;D(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Tb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:g,target:a},c.type&&(e=z(e,c)),c=qa(h),f=d?[e].concat(d):[e],s(c,function(c){e.isImmediatePropagationStopped()||
c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)D(g)?(g=a(this[h],c,e,f),y(g)&&(g=B(g))):Gc(g,a(this[h],c,e,f));return y(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});db.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var Pc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,nf=/,/,of=/^\s*(_?)(\S+?)\1\s*$/,
Oc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=T("$injector");Ob.$$annotate=Vb;var Rf=T("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Rf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,
g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ha();s((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});s(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,
c){if(ga.isObject(c)){var d=z(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=B(a);c=F(c)?c:x(c)?c.join(" "):"";s(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,
[],c,d)},$$removeClassImmediately:function(a,c,d){a=B(a);c=F(c)?c:x(c)?c.join(" "):"";s(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=B(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ga.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=x(c)?c:c.split(" ");d=x(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&
k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:C,cancel:C}}]}],ja=T("$compile");wc.$inject=["$provide","$$sanitizeUriProvider"];var Rc=/^((?:x|data)[\:\-_])/i,Vc="application/json",Zb={"Content-Type":Vc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,$b=T("$interpolate"),Sf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
xf={http:80,https:443,ftp:21},Fb=T("$location"),Tf={$$html5:!1,$$replace:!1,absUrl:Gb("$$absUrl"),url:function(a){if(D(a))return this.$$url;var c=Sf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Gb("$$protocol"),host:Gb("$$host"),port:Gb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(F(a)||V(a))a=a.toString(),this.$$search=qc(a);else if(H(a))a=Ea(a,{}),s(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Fb("isrcharg");break;default:D(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};s([cd,dc,cc],function(a){a.prototype=Object.create(Tf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;
if(a!==cc||!this.$$html5)throw Fb("nostate");this.$$state=D(c)?null:c;return this}});var la=T("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,lb=ha();s({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;lb[c]=a});lb["this"]=function(a){return a};lb["this"].sharedGetter=!0;var mb=z(ha(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?
d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Xf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=mb[c],f=mb[d];mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==
c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,
d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Xf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var hb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};hb.ZERO=z(function(){return 0},{sharedGetter:!0,constant:!0});hb.prototype={constructor:hb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in lb?a=lb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",
this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,
c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw la("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=mb[a];return z(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,
c,d,e){var f=mb[c];return z(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return z(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",
";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return z(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,
e)}return c(l)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),z(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=
this.assignment();return z(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());
return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(hb.ZERO,
a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();return z(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){(f=a(d,f))||a.assign(d,f={});return c.assign(f,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return z(function(e,f){var g=a(e,f),h=d(e,f);sa(h,c);return g?ta(g[h],c):t},{assign:function(e,f,g){var h=sa(d(e,g),c);(g=ta(a(e,g),c))||a.assign(e,
g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||C;if(f)for(var m=d.length;m--;)f[m]=ta(d[m](g,h),e);ta(l,e);if(k){if(k.constructor===k)throw la("isecfn",e);if(k===Uf||k===Vf||k===Wf)throw la("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);return ta(l,e)}},arrayDeclaration:function(){var a=
[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return z(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))
}this.consume("}");return z(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Bf=ha(),Af=ha(),Cf=Object.prototype.valueOf,Ca=T("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ja=T("$compile"),Z=Y.createElement("a"),id=Ba(M.location.href);Dc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Ib("Month"),
MMM:Ib("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Ib("Day"),EEE:Ib("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Hb(Math[0<a?"floor":"ceil"](a/60),2)+Hb(Math.abs(a%60),2))},ww:qd(2),w:qd(1)},Lf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=da(Q),If=da(ub);md.$inject=["$parse"];var Td=da({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Da.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),vb={};s(Eb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});
s(Nc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});s(["src","srcset","href"],function(a){var c=ya("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Da.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?
(f.$set(h,c),Ra&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Jb={$addControl:C,$$renameControl:function(a,c){a.$name=c},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(a){a.addClass(Sa).addClass(kb);return{pre:function(a,d,g,h){if(!("action"in g)){var l=function(c){a.$apply(function(){h.$commitViewValue();
h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",l,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",l,!1)},0,!1)})}var k=h.$$parentForm,m=h.$name;m&&(gb(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&(gb(a,m,t,m),m=c,gb(a,m,h,m),k.$$renameControl(h,m))}));d.on("$destroy",function(){k.$removeControl(h);m&&gb(a,m,t,m);z(h,Jb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Yf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Zf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,$f=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ag=/(\s+|^)default(\s+|$)/,Mb=new T("ngModel"),Dd={text:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e)},date:jb("date",zd,Lb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":jb("datetimelocal",
Ad,Lb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:jb("time",Cd,Lb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:jb("week",jc,function(a,c){if(pa(a))return a;if(F(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:jb("month",Bd,Lb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,
c,d,e,f,g){td(a,c,d,e);ib(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:$f.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Mb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||D(h)||a>=h};d.$observe("min",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(d.max||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||
D(l)||a<=l};d.$observe("max",function(a){y(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Yf.test(d)}},email:function(a,c,d,e,f,g){ib(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Zf.test(d)}},radio:function(a,c,d,e){D(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&
e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),m=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return fa(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:C,
button:C,submit:C,reset:C,file:C},xc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[Q(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],kb="ng-valid",vd="ng-invalid",Sa="ng-pristine",Kb="ng-dirty",xd="ng-pending",bg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=
t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=m(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,u=p,r=q,O=null,n=this;this.$$setOptions=function(a){if((n.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=p(a);G(d)&&(d=c(a));return d};
r=function(a,c){G(p(a))?g(a,{$$$p:n.$modelValue}):q(a,n.$modelValue)}}else if(!p.assign)throw Mb("nonassign",d.ngModel,va(e));};this.$render=C;this.$isEmpty=function(a){return D(a)||""===a||null===a||a!==a};var v=e.inheritedData("$formController")||Jb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:v,$animate:g});this.$setPristine=function(){n.$dirty=!1;n.$pristine=!0;g.removeClass(e,Kb);g.addClass(e,Sa)};this.$setDirty=function(){n.$dirty=!0;n.$pristine=
!1;g.removeClass(e,Sa);g.addClass(e,Kb);v.$setDirty()};this.$setUntouched=function(){n.$touched=!1;n.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){n.$touched=!0;n.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(O);n.$viewValue=n.$$lastCommittedViewValue;n.$render()};this.$validate=function(){if(!V(n.$modelValue)||!isNaN(n.$modelValue)){var a=n.$$rawModelValue,c=n.$valid,d=n.$modelValue,e=n.$options&&n.$options.allowInvalid;
n.$$runValidators(n.$error[n.$$parserName||"parse"]?!1:t,a,n.$$lastCommittedViewValue,function(f){e||c===f||(n.$modelValue=f?a:t,n.$modelValue!==d&&n.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;s(n.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?!0:(s(n.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;s(n.$asyncValidators,function(f,g){var l=f(c,d);if(!l||!G(l.then))throw Mb("$asyncValidators",l);h(g,t);a.push(l.then(function(){h(g,
!0)},function(a){e=!1;h(g,!1)}))});a.length?k.all(a).then(function(){l(e)},C):l(!0)}function h(a,c){m===w&&n.$setValidity(a,c)}function l(a){m===w&&e(a)}w++;var m=w;(function(a){var c=n.$$parserName||"parse";if(a===t)h(c,null);else if(h(c,a),!a)return s(n.$validators,function(a,c){h(c,null)}),s(n.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():l(!1):l(!1)};this.$commitViewValue=function(){var a=n.$viewValue;h.cancel(O);if(n.$$lastCommittedViewValue!==a||""===a&&n.$$hasNativeValidators)n.$$lastCommittedViewValue=
a,n.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=n.$$lastCommittedViewValue,d=D(c)?t:!0;if(d)for(var e=0;e<n.$parsers.length;e++)if(c=n.$parsers[e](c),D(c)){d=!1;break}V(n.$modelValue)&&isNaN(n.$modelValue)&&(n.$modelValue=u(a));var f=n.$modelValue,g=n.$options&&n.$options.allowInvalid;n.$$rawModelValue=c;g&&(n.$modelValue=c,n.$modelValue!==f&&n.$$writeModelToScope());n.$$runValidators(d,c,n.$$lastCommittedViewValue,function(a){g||(n.$modelValue=
a?c:t,n.$modelValue!==f&&n.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,n.$modelValue);s(n.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){n.$viewValue=a;n.$options&&!n.$options.updateOnDefault||n.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=n.$options;e&&y(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(O);d?O=h(function(){n.$commitViewValue()},d):
l.$$phase?n.$commitViewValue():a.$apply(function(){n.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==n.$modelValue){n.$modelValue=n.$$rawModelValue=c;for(var d=n.$formatters,e=d.length,f=c;e--;)f=d[e](f);n.$viewValue!==f&&(n.$viewValue=n.$$lastCommittedViewValue=f,n.$render(),n.$$runValidators(t,c,f,C))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:bg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(kb);
return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Jb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],xe=da({restrict:"A",require:"ngModel",
link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&
!a.test)throw T("ngPattern")("noregexp",g,a,va(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||D(f)||f.test(a)}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=ba(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",
function(a){f=ba(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?U(f):f;e.$parsers.push(function(a){if(!D(a)){var c=[];a&&s(a.split(h),function(a){a&&c.push(g?U(a):a)});return c}});e.$formatters.push(function(a){return x(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},cg=/^(true|false|\d+)$/,
ye=function(){return{restrict:"A",priority:100,compile:function(a,c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(ag,function(){d.$options.updateOnDefault=
!0;return" "}))):this.$options.updateOnDefault=!0}]}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=
a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],be=ic("",!0),de=ic("Odd",0),ce=ic("Even",1),ee=Ja({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Cc={},dg={blur:!0,focus:!0};s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Cc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=Y.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:ga.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,s,r){var t=0,n,v,w,L=function(){v&&(v.remove(),v=null);n&&(n.$destroy(),n=null);w&&(d.leave(w).then(function(){v=null}),v=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!y(k)||k&&!f.$eval(k)||c()},q=++t;e?(a(e,!0).then(function(a){if(q===t){var c=f.$new();s.template=a;a=r(c,function(a){L();d.enter(a,null,g).then(h)});n=c;w=a;n.$emit("$includeContentLoaded",
e);f.$eval(l)}},function(){q===t&&(L(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(L(),s.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Fc(f.template,Y).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ja({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
le=Ja({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,m=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(m)||{},u={},m=c.startSymbol(),r=c.endSymbol(),t=m+k+"-"+p+r,n=ga.noop,v;s(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+Q(d[2]),q[d]=g.attr(h.$attr[c]))});s(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=
isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===v||d&&isNaN(v)||(n(),n=f.$watch(u[c],l),v=c)})}}}],ne=["$parse","$animate",function(a,c){var d=T("ngRepeat"),e=function(a,c,d,e,k,m,p){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",h);var m=k[1],p=k[2],q=k[3],u=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var r=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))throw d("badident",q);var n,v,w,D,z={$id:Na};u?n=a(u):(w=function(a,c){return Na(c)},D=function(a){return a});return function(a,f,g,k,m){n&&(v=function(c,d,e){y&&(z[y]=c);z[r]=d;z.$index=e;return n(a,
z)});var u=ha();a.$watchCollection(p,function(g){var k,p,n=f[0],E,z=ha(),C,S,N,G,J,x,H;q&&(a[q]=g);if(Ta(g))J=g,p=v||w;else{p=v||D;J=[];for(H in g)g.hasOwnProperty(H)&&"$"!=H.charAt(0)&&J.push(H);J.sort()}C=J.length;H=Array(C);for(k=0;k<C;k++)if(S=g===J?k:J[k],N=g[S],G=p(S,N,k),u[G])x=u[G],delete u[G],z[G]=x,H[k]=x;else{if(z[G])throw s(H,function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,G,N);H[k]={id:G,scope:t,clone:t};z[G]=!0}for(E in u){x=u[E];G=tb(x.clone);c.leave(G);if(G[0].parentNode)for(k=0,
p=G.length;k<p;k++)G[k].$$NG_REMOVED=!0;x.scope.$destroy()}for(k=0;k<C;k++)if(S=g===J?k:J[k],N=g[S],x=H[k],x.scope){E=n;do E=E.nextSibling;while(E&&E.$$NG_REMOVED);x.clone[0]!=E&&c.move(tb(x.clone),null,B(n));n=x.clone[x.clone.length-1];e(x.scope,k,r,N,y,S,C)}else m(function(a,d){x.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,B(n));n=f;x.clone=a;z[x.id]=x;e(x.scope,k,r,N,y,S,C)});u=z})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,
function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ja(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&s(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&s(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,
f.parent(),f)})})})}}}],re=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ja({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw T("ngTransclude")("orphan",
va(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],eg=T("ngOptions"),te=da({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};
return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,p;l.databound=d.ngModel;l.init=function(a,c,d){m=a;p=d};l.addOption=function(c,d){Ma(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Na(c)+" ?";
p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=C})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&n.prop("selected",!0)):D(a)&&n?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=
new db(d.$viewValue);s(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){fa(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];s(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[A]=d;H&&(T[H]=c);return a(e,T)}function k(a){var c;if(u)if(M&&x(a)){c=new db([]);for(var d=0;d<a.length;d++)c.put(h(M,null,a[d]),!0)}else c=new db(a);else M&&(a=h(M,null,
a));return function(d,e){var f;f=M?M:B?B:F;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){v||(e.$$postDigest(p),v=!0)}function m(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){v=!1;var a={"":[]},c=[""],d,l,n,r,t;n=g.$viewValue;r=P(e)||[];var B=H?Object.keys(r).sort():r,x,A,D,F,N={};t=k(n);var I=!1,U,V;Q={};for(F=0;D=B.length,F<D;F++){x=F;if(H&&(x=B[F],"$"===x.charAt(0)))continue;A=r[x];d=h(J,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=t(x,A);I=I||d;A=h(C,x,A);A=y(A)?A:"";V=M?M(e,T):H?B[F]:
F;M&&(Q[V]=x);l.push({id:V,label:A,selected:d})}u||(z||null===n?a[""].unshift({id:"",label:"",selected:!I}):I||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(n={element:G.clone().attr("label",d),label:l.label},r=[n],R.push(r),f.append(n.element)):(r=R[x],n=r[0],n.label!=d&&n.element.attr("label",n.label=d));I=null;F=0;for(D=l.length;F<D;F++)d=l[F],(t=r[F+1])?(I=t.element,t.label!==d.label&&(m(N,t.label,!1),m(N,d.label,!0),I.text(t.label=d.label),
I.prop("label",t.label)),t.id!==d.id&&I.val(t.id=d.id),I[0].selected!==d.selected&&(I.prop("selected",t.selected=d.selected),Ra&&I.prop("selected",t.selected))):(""===d.id&&z?U=z:(U=w.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),r.push(t={element:U,label:d.label,id:d.id,selected:d.selected}),m(N,d.label,!0),I?I.after(U):n.element.append(U),I=U);for(F++;r.length>F;)d=r.pop(),m(N,d.label,!1),d.element.remove()}for(;R.length>x;){l=R.pop();
for(F=1;F<l.length;++F)m(N,l[F].label,!1);l[0].element.remove()}s(N,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var n;if(!(n=r.match(d)))throw eg("iexp",r,va(f));var C=c(n[2]||n[1]),A=n[4]||n[6],D=/ as /.test(n[0])&&n[1],B=D?c(D):null,H=n[5],J=c(n[3]||""),F=c(n[2]?n[1]:A),P=c(n[7]),M=n[8]?c(n[8]):null,Q={},R=[[{element:f,label:""}]],T={};z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=P(e)||[],c;if(u)c=[],s(f.val(),function(d){d=
M?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:F,d,a[d]))});else{var d=M?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:F,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(P,l);e.$watchCollection(function(){var a=P(e),c;if(a&&x(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,r=h.ngOptions,
z=!1,n,v=!1,w=B(Y.createElement("option")),G=B(Y.createElement("optgroup")),C=w.clone();h=0;for(var A=g.children(),H=A.length;h<H;h++)if(""===A[h].value){n=z=A.eq(h);break}q.init(l,z,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});r?p(e,g,l):u?m(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(D(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),
m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound||(m=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&m.removeOption(c);m.addOption(a,d)}):m.addOption(e.value,d);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Xd=da({restrict:"E",terminal:!1});M.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ga),B(Y).ready(function(){Jd(Y,sc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.3.8
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,d,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),f=r.current;m=y(b,function(b){g.enter(b,null,m||c).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=f.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,h,g){return{restrict:"ECA",priority:-400,link:function(a,c){var b=g.current,f=b.locals;c.html(f.$template);var y=d(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));y(a)}}}p=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,c){return d.extend(Object.create(a),
c)}function h(a,d){var b=d.caseInsensitiveMatch,f={originalPath:a,regexp:a},g=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;g.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=new RegExp("^"+a+"$",b?"i":"");return f}var g={};this.when=function(a,c){var b=d.copy(c);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&h(a,b));if(a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[f]=d.extend({redirectTo:a},h(f,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,c,b,f,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&d.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?c.path(t(e.redirectTo,e.params)).search(e.params).replace():c.url(e.redirectTo(e.pathParams,c.path(),c.search())).replace()),f.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,c;d.forEach(a,function(b,e){a[e]=d.isString(b)?h.get(b):h.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(c=e.templateUrl)&&(d.isFunction(c)&&(c=c(e.params)),c=x.getTrustedResourceUrl(c),d.isDefined(c)&&(e.loadedTemplateUrl=c,b=p(c)));d.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;d.forEach(g,function(f,g){var q;if(q=!b){var h=c.path();q=f.keys;var l={};if(f.regexp)if(h=f.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(f,{params:d.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),function(c){f.current.pathParams[c]||(b[c]=a[c])});a=d.extend({},this.current.params,a);c.path(t(this.current.$$route.originalPath,a));c.search(d.extend({},c.search(),b))}else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",
m);return s}]});var B=d.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.3.8
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&e.$apply())})();k=!0;e.$watch(function(){var a,d,e;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)d=c[a],f.isString(d)||(d=""+d,c[a]=d),d!==g[a]&&(b.cookies(a,d),e=!0);if(e)for(a in d=b.cookies(),c)c[a]!==d[a]&&(m(d[a])?delete c[a]:c[a]=d[a])});return c}]).factory("$cookieStore",
["$cookies",function(e){return{get:function(b){return(b=e[b])?f.fromJson(b):b},put:function(b,c){e[b]=f.toJson(c)},remove:function(b){delete e[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

angular.module("gettext",[]),angular.module("gettext").constant("gettext",function(a){return a}),angular.module("gettext").factory("gettextCatalog",["gettextPlurals","$http","$cacheFactory","$interpolate","$rootScope",function(a,b,c,d,e){function f(){e.$broadcast("gettextLanguageChanged")}var g,h=function(a){return g.debug&&g.currentLanguage!==g.baseLanguage?g.debugPrefix+a:a},i=function(a){return g.showTranslatedMarkers?g.translatedMarkerPrefix+a+g.translatedMarkerSuffix:a};return g={debug:!1,debugPrefix:"[MISSING]: ",showTranslatedMarkers:!1,translatedMarkerPrefix:"[",translatedMarkerSuffix:"]",strings:{},baseLanguage:"en",currentLanguage:"en",cache:c("strings"),setCurrentLanguage:function(a){this.currentLanguage=a,f()},setStrings:function(a,b){this.strings[a]||(this.strings[a]={});for(var c in b){var d=b[c];this.strings[a][c]="string"==typeof d?[d]:d}f()},getStringForm:function(a,b){var c=this.strings[this.currentLanguage]||{},d=c[a]||[];return d[b]},getString:function(a,b){return a=this.getStringForm(a,0)||h(a),a=b?d(a)(b):a,i(a)},getPlural:function(b,c,e,f){var g=a(this.currentLanguage,b);return c=this.getStringForm(c,g)||h(1===b?c:e),c=f?d(c)(f):c,i(c)},loadRemote:function(a){return b({method:"GET",url:a,cache:g.cache}).success(function(a){for(var b in a)g.setStrings(b,a[b])})}}}]),angular.module("gettext").directive("translate",["gettextCatalog","$parse","$animate","$compile",function(a,b,c,d){function e(a,b,c){if(!a)throw new Error("You should add a "+b+" attribute whenever you add a "+c+" attribute.")}var f=function(){return String.prototype.trim?function(a){return"string"==typeof a?a.trim():a}:function(a){return"string"==typeof a?a.replace(/^\s*/,"").replace(/\s*$/,""):a}}();return{restrict:"A",terminal:!0,compile:function(g,h){e(!h.translatePlural||h.translateN,"translate-n","translate-plural"),e(!h.translateN||h.translatePlural,"translate-plural","translate-n");var i=f(g.html()),j=h.translatePlural;return{post:function(e,f,g){function h(){var b;j?(e=l||(l=e.$new()),e.$count=k(e),b=a.getPlural(e.$count,i,j)):b=a.getString(i);var g=angular.element("<span>"+b+"</span>");d(g.contents())(e);var h=f.contents(),m=g.contents();c.enter(m,f),c.leave(h)}var k=b(g.translateN),l=null;g.translateN&&e.$watch(g.translateN,h),e.$on("gettextLanguageChanged",h),h()}}}}}]),angular.module("gettext").filter("translate",["gettextCatalog",function(a){function b(b){return a.getString(b)}return b.$stateful=!0,b}]),angular.module("gettext").factory("gettextPlurals",function(){return function(a,b){switch(a){case"ay":case"bo":case"cgg":case"dz":case"fa":case"id":case"ja":case"jbo":case"ka":case"kk":case"km":case"ko":case"ky":case"lo":case"ms":case"my":case"sah":case"su":case"th":case"tt":case"ug":case"vi":case"wo":case"zh":return 0;case"is":return b%10!=1||b%100==11?1:0;case"jv":return 0!=b?1:0;case"mk":return 1==b||b%10==1?0:1;case"ach":case"ak":case"am":case"arn":case"br":case"fil":case"fr":case"gun":case"ln":case"mfe":case"mg":case"mi":case"oc":case"pt_BR":case"tg":case"ti":case"tr":case"uz":case"wa":case"zh":return b>1?1:0;case"lv":return b%10==1&&b%100!=11?0:0!=b?1:2;case"lt":return b%10==1&&b%100!=11?0:b%10>=2&&(10>b%100||b%100>=20)?1:2;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return b%10==1&&b%100!=11?0:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?1:2;case"mnk":return 0==b?0:1==b?1:2;case"ro":return 1==b?0:0==b||b%100>0&&20>b%100?1:2;case"pl":return 1==b?0:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?1:2;case"cs":case"sk":return 1==b?0:b>=2&&4>=b?1:2;case"sl":return b%100==1?1:b%100==2?2:b%100==3||b%100==4?3:0;case"mt":return 1==b?0:0==b||b%100>1&&11>b%100?1:b%100>10&&20>b%100?2:3;case"gd":return 1==b||11==b?0:2==b||12==b?1:b>2&&20>b?2:3;case"cy":return 1==b?0:2==b?1:8!=b&&11!=b?2:3;case"kw":return 1==b?0:2==b?1:3==b?2:3;case"ga":return 1==b?0:2==b?1:7>b?2:11>b?3:4;case"ar":return 0==b?0:1==b?1:2==b?2:b%100>=3&&10>=b%100?3:b%100>=11?4:5;default:return 1!=b?1:0}}});
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){window.Destiny=require("./index.js")},{"./index.js":3}],2:[function(require,module,exports){module.exports={DEFAULT_HOST:"https://bungie.net",DEFAULT_BASE_PATH:"/Platform/Destiny/"}},{}],3:[function(require,module,exports){module.exports=require("./lib/destiny")},{"./lib/destiny":4}],4:[function(require,module,exports){"use strict";module.exports=function(config){var _=require("lodash");var _build=require("./url-builder")(config);var _get=require("superagent-promise").get;var get=_.compose(_get,_build);var bind=function(o,fn){return Object.keys(o).reduce(function(fold,item){fold[item]=fn.bind(null,o[item]);return fold},{})};var common={search:"SearchDestinyPlayer/{type}/{name}/",account:"{type}/Account/{id}",main:"{type}/Account/{membership}/Character/{id}/"};var character=["Activities","Inventory","Progression"].reduce(function(fold,endpoint){fold[endpoint.toLowerCase()]="{type}/Account/{membership}/Character/{id}/".concat(endpoint);return fold},{});var Destiny={};_.extend(Destiny,bind(common,get));_.extend(Destiny,{character:bind(character,get)});return Destiny}},{"./url-builder":6,lodash:13,"superagent-promise":20}],5:[function(require,module,exports){"use strict";module.exports=function(str,o){return str.replace(/{([^{}]*)}/g,function(a,b){var r=o[b];return typeof r==="string"||typeof r==="number"?r:a})}},{}],6:[function(require,module,exports){"use strict";var CONFIG=require("../config.json");var template=require("./supplant");var url=require("url");var BASE=CONFIG.DEFAULT_HOST+CONFIG.DEFAULT_BASE_PATH;function prefix(url){return BASE+url}function build(path,spec){path=prefix(path);if(spec.query){path=path.concat(url.format({query:spec.query}));delete spec.query}return template(path,spec)}module.exports=function(spec){if(typeof spec!=="undefined"){var host=spec.host||CONFIG.DEFAULT_HOST;var path=spec.path||CONFIG.DEFAULT_BASE_PATH;BASE=host.concat(path)}return build}},{"../config.json":2,"./supplant":5,url:12}],7:[function(require,module,exports){var process=module.exports={};process.nextTick=function(){var canSetImmediate=typeof window!=="undefined"&&window.setImmediate;var canMutationObserver=typeof window!=="undefined"&&window.MutationObserver;var canPost=typeof window!=="undefined"&&window.postMessage&&window.addEventListener;if(canSetImmediate){return function(f){return window.setImmediate(f)}}var queue=[];if(canMutationObserver){var hiddenDiv=document.createElement("div");var observer=new MutationObserver(function(){var queueList=queue.slice();queue.length=0;queueList.forEach(function(fn){fn()})});observer.observe(hiddenDiv,{attributes:true});return function nextTick(fn){if(!queue.length){hiddenDiv.setAttribute("yes","no")}queue.push(fn)}}if(canPost){window.addEventListener("message",function(ev){var source=ev.source;if((source===window||source===null)&&ev.data==="process-tick"){ev.stopPropagation();if(queue.length>0){var fn=queue.shift();fn()}}},true);return function nextTick(fn){queue.push(fn);window.postMessage("process-tick","*")}}return function nextTick(fn){setTimeout(fn,0)}}();process.title="browser";process.browser=true;process.env={};process.argv=[];function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error("process.binding is not supported")};process.cwd=function(){return"/"};process.chdir=function(dir){throw new Error("process.chdir is not supported")}},{}],8:[function(require,module,exports){(function(global){(function(root){var freeExports=typeof exports=="object"&&exports;var freeModule=typeof module=="object"&&module&&module.exports==freeExports&&module;var freeGlobal=typeof global=="object"&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal}var punycode,maxInt=2147483647,base=36,tMin=1,tMax=26,skew=38,damp=700,initialBias=72,initialN=128,delimiter="-",regexPunycode=/^xn--/,regexNonASCII=/[^ -~]/,regexSeparators=/\x2E|\u3002|\uFF0E|\uFF61/g,errors={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},baseMinusTMin=base-tMin,floor=Math.floor,stringFromCharCode=String.fromCharCode,key;function error(type){throw RangeError(errors[type])}function map(array,fn){var length=array.length;while(length--){array[length]=fn(array[length])}return array}function mapDomain(string,fn){return map(string.split(regexSeparators),fn).join(".")}function ucs2decode(string){var output=[],counter=0,length=string.length,value,extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){extra=string.charCodeAt(counter++);if((extra&64512)==56320){output.push(((value&1023)<<10)+(extra&1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}function ucs2encode(array){return map(array,function(value){var output="";if(value>65535){value-=65536;output+=stringFromCharCode(value>>>10&1023|55296);value=56320|value&1023}output+=stringFromCharCode(value);return output}).join("")}function basicToDigit(codePoint){if(codePoint-48<10){return codePoint-22}if(codePoint-65<26){return codePoint-65}if(codePoint-97<26){return codePoint-97}return base}function digitToBasic(digit,flag){return digit+22+75*(digit<26)-((flag!=0)<<5)}function adapt(delta,numPoints,firstTime){var k=0;delta=firstTime?floor(delta/damp):delta>>1;delta+=floor(delta/numPoints);for(;delta>baseMinusTMin*tMax>>1;k+=base){delta=floor(delta/baseMinusTMin)}return floor(k+(baseMinusTMin+1)*delta/(delta+skew))}function decode(input){var output=[],inputLength=input.length,out,i=0,n=initialN,bias=initialBias,basic,j,index,oldi,w,k,digit,t,baseMinusT;basic=input.lastIndexOf(delimiter);if(basic<0){basic=0}for(j=0;j<basic;++j){if(input.charCodeAt(j)>=128){error("not-basic")}output.push(input.charCodeAt(j))}for(index=basic>0?basic+1:0;index<inputLength;){for(oldi=i,w=1,k=base;;k+=base){if(index>=inputLength){error("invalid-input")}digit=basicToDigit(input.charCodeAt(index++));if(digit>=base||digit>floor((maxInt-i)/w)){error("overflow")}i+=digit*w;t=k<=bias?tMin:k>=bias+tMax?tMax:k-bias;if(digit<t){break}baseMinusT=base-t;if(w>floor(maxInt/baseMinusT)){error("overflow")}w*=baseMinusT}out=output.length+1;bias=adapt(i-oldi,out,oldi==0);if(floor(i/out)>maxInt-n){error("overflow")}n+=floor(i/out);i%=out;output.splice(i++,0,n)}return ucs2encode(output)}function encode(input){var n,delta,handledCPCount,basicLength,bias,j,m,q,k,t,currentValue,output=[],inputLength,handledCPCountPlusOne,baseMinusT,qMinusT;input=ucs2decode(input);inputLength=input.length;n=initialN;delta=0;bias=initialBias;for(j=0;j<inputLength;++j){currentValue=input[j];if(currentValue<128){output.push(stringFromCharCode(currentValue))}}handledCPCount=basicLength=output.length;if(basicLength){output.push(delimiter)}while(handledCPCount<inputLength){for(m=maxInt,j=0;j<inputLength;++j){currentValue=input[j];if(currentValue>=n&&currentValue<m){m=currentValue}}handledCPCountPlusOne=handledCPCount+1;if(m-n>floor((maxInt-delta)/handledCPCountPlusOne)){error("overflow")}delta+=(m-n)*handledCPCountPlusOne;n=m;for(j=0;j<inputLength;++j){currentValue=input[j];if(currentValue<n&&++delta>maxInt){error("overflow")}if(currentValue==n){for(q=delta,k=base;;k+=base){t=k<=bias?tMin:k>=bias+tMax?tMax:k-bias;if(q<t){break}qMinusT=q-t;baseMinusT=base-t;output.push(stringFromCharCode(digitToBasic(t+qMinusT%baseMinusT,0)));q=floor(qMinusT/baseMinusT)}output.push(stringFromCharCode(digitToBasic(q,0)));bias=adapt(delta,handledCPCountPlusOne,handledCPCount==basicLength);delta=0;++handledCPCount}}++delta;++n}return output.join("")}function toUnicode(domain){return mapDomain(domain,function(string){return regexPunycode.test(string)?decode(string.slice(4).toLowerCase()):string})}function toASCII(domain){return mapDomain(domain,function(string){return regexNonASCII.test(string)?"xn--"+encode(string):string})}punycode={version:"1.2.4",ucs2:{decode:ucs2decode,encode:ucs2encode},decode:decode,encode:encode,toASCII:toASCII,toUnicode:toUnicode};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define("punycode",function(){return punycode})}else if(freeExports&&!freeExports.nodeType){if(freeModule){freeModule.exports=punycode}else{for(key in punycode){punycode.hasOwnProperty(key)&&(freeExports[key]=punycode[key])}}}else{root.punycode=punycode}})(this)}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],9:[function(require,module,exports){"use strict";function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&";eq=eq||"=";var obj={};if(typeof qs!=="string"||qs.length===0){return obj}var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;if(options&&typeof options.maxKeys==="number"){maxKeys=options.maxKeys}var len=qs.length;if(maxKeys>0&&len>maxKeys){len=maxKeys}for(var i=0;i<len;++i){var x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq),kstr,vstr,k,v;if(idx>=0){kstr=x.substr(0,idx);vstr=x.substr(idx+1)}else{kstr=x;vstr=""}k=decodeURIComponent(kstr);v=decodeURIComponent(vstr);if(!hasOwnProperty(obj,k)){obj[k]=v}else if(isArray(obj[k])){obj[k].push(v)}else{obj[k]=[obj[k],v]}}return obj};var isArray=Array.isArray||function(xs){return Object.prototype.toString.call(xs)==="[object Array]"}},{}],10:[function(require,module,exports){"use strict";var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){sep=sep||"&";eq=eq||"=";if(obj===null){obj=undefined}if(typeof obj==="object"){return map(objectKeys(obj),function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;if(isArray(obj[k])){return map(obj[k],function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep)}else{return ks+encodeURIComponent(stringifyPrimitive(obj[k]))}}).join(sep)}if(!name)return"";return encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj))};var isArray=Array.isArray||function(xs){return Object.prototype.toString.call(xs)==="[object Array]"};function map(xs,f){if(xs.map)return xs.map(f);var res=[];for(var i=0;i<xs.length;i++){res.push(f(xs[i],i))}return res}var objectKeys=Object.keys||function(obj){var res=[];for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))res.push(key)}return res}},{}],11:[function(require,module,exports){"use strict";exports.decode=exports.parse=require("./decode");exports.encode=exports.stringify=require("./encode")},{"./decode":9,"./encode":10}],12:[function(require,module,exports){var punycode=require("punycode");exports.parse=urlParse;exports.resolve=urlResolve;exports.resolveObject=urlResolveObject;exports.format=urlFormat;exports.Url=Url;function Url(){this.protocol=null;this.slashes=null;this.auth=null;this.host=null;this.port=null;this.hostname=null;this.hash=null;this.search=null;this.query=null;this.pathname=null;this.path=null;this.href=null}var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,delims=["<",">",'"',"`"," ","\r","\n","	"],unwise=["{","}","|","\\","^","`"].concat(delims),autoEscape=["'"].concat(unwise),nonHostChars=["%","/","?",";","#"].concat(autoEscape),hostEndingChars=["/","?","#"],hostnameMaxLen=255,hostnamePartPattern=/^[a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([a-z0-9A-Z_-]{0,63})(.*)$/,unsafeProtocol={javascript:true,"javascript:":true},hostlessProtocol={javascript:true,"javascript:":true},slashedProtocol={http:true,https:true,ftp:true,gopher:true,file:true,"http:":true,"https:":true,"ftp:":true,"gopher:":true,"file:":true},querystring=require("querystring");function urlParse(url,parseQueryString,slashesDenoteHost){if(url&&isObject(url)&&url instanceof Url)return url;var u=new Url;u.parse(url,parseQueryString,slashesDenoteHost);return u}Url.prototype.parse=function(url,parseQueryString,slashesDenoteHost){if(!isString(url)){throw new TypeError("Parameter 'url' must be a string, not "+typeof url)}var rest=url;rest=rest.trim();var proto=protocolPattern.exec(rest);if(proto){proto=proto[0];var lowerProto=proto.toLowerCase();this.protocol=lowerProto;rest=rest.substr(proto.length)}if(slashesDenoteHost||proto||rest.match(/^\/\/[^@\/]+@[^@\/]+/)){var slashes=rest.substr(0,2)==="//";if(slashes&&!(proto&&hostlessProtocol[proto])){rest=rest.substr(2);this.slashes=true}}if(!hostlessProtocol[proto]&&(slashes||proto&&!slashedProtocol[proto])){var hostEnd=-1;for(var i=0;i<hostEndingChars.length;i++){var hec=rest.indexOf(hostEndingChars[i]);if(hec!==-1&&(hostEnd===-1||hec<hostEnd))hostEnd=hec}var auth,atSign;if(hostEnd===-1){atSign=rest.lastIndexOf("@")}else{atSign=rest.lastIndexOf("@",hostEnd)}if(atSign!==-1){auth=rest.slice(0,atSign);rest=rest.slice(atSign+1);this.auth=decodeURIComponent(auth)}hostEnd=-1;for(var i=0;i<nonHostChars.length;i++){var hec=rest.indexOf(nonHostChars[i]);if(hec!==-1&&(hostEnd===-1||hec<hostEnd))hostEnd=hec}if(hostEnd===-1)hostEnd=rest.length;this.host=rest.slice(0,hostEnd);rest=rest.slice(hostEnd);this.parseHost();this.hostname=this.hostname||"";var ipv6Hostname=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!ipv6Hostname){var hostparts=this.hostname.split(/\./);for(var i=0,l=hostparts.length;i<l;i++){var part=hostparts[i];if(!part)continue;if(!part.match(hostnamePartPattern)){var newpart="";for(var j=0,k=part.length;j<k;j++){if(part.charCodeAt(j)>127){newpart+="x"}else{newpart+=part[j]}}if(!newpart.match(hostnamePartPattern)){var validParts=hostparts.slice(0,i);var notHost=hostparts.slice(i+1);var bit=part.match(hostnamePartStart);if(bit){validParts.push(bit[1]);notHost.unshift(bit[2])}if(notHost.length){rest="/"+notHost.join(".")+rest}this.hostname=validParts.join(".");break}}}}if(this.hostname.length>hostnameMaxLen){this.hostname=""}else{this.hostname=this.hostname.toLowerCase()}if(!ipv6Hostname){var domainArray=this.hostname.split(".");var newOut=[];for(var i=0;i<domainArray.length;++i){var s=domainArray[i];newOut.push(s.match(/[^A-Za-z0-9_-]/)?"xn--"+punycode.encode(s):s)}this.hostname=newOut.join(".")}var p=this.port?":"+this.port:"";var h=this.hostname||"";this.host=h+p;this.href+=this.host;if(ipv6Hostname){this.hostname=this.hostname.substr(1,this.hostname.length-2);if(rest[0]!=="/"){rest="/"+rest}}}if(!unsafeProtocol[lowerProto]){for(var i=0,l=autoEscape.length;i<l;i++){var ae=autoEscape[i];var esc=encodeURIComponent(ae);if(esc===ae){esc=escape(ae)}rest=rest.split(ae).join(esc)}}var hash=rest.indexOf("#");if(hash!==-1){this.hash=rest.substr(hash);rest=rest.slice(0,hash)}var qm=rest.indexOf("?");if(qm!==-1){this.search=rest.substr(qm);this.query=rest.substr(qm+1);if(parseQueryString){this.query=querystring.parse(this.query)}rest=rest.slice(0,qm)}else if(parseQueryString){this.search="";this.query={}}if(rest)this.pathname=rest;if(slashedProtocol[lowerProto]&&this.hostname&&!this.pathname){this.pathname="/"}if(this.pathname||this.search){var p=this.pathname||"";var s=this.search||"";this.path=p+s}this.href=this.format();return this};function urlFormat(obj){if(isString(obj))obj=urlParse(obj);if(!(obj instanceof Url))return Url.prototype.format.call(obj);return obj.format()}Url.prototype.format=function(){var auth=this.auth||"";if(auth){auth=encodeURIComponent(auth);auth=auth.replace(/%3A/i,":");auth+="@"}var protocol=this.protocol||"",pathname=this.pathname||"",hash=this.hash||"",host=false,query="";if(this.host){host=auth+this.host}else if(this.hostname){host=auth+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]");if(this.port){host+=":"+this.port}}if(this.query&&isObject(this.query)&&Object.keys(this.query).length){query=querystring.stringify(this.query)}var search=this.search||query&&"?"+query||"";if(protocol&&protocol.substr(-1)!==":")protocol+=":";if(this.slashes||(!protocol||slashedProtocol[protocol])&&host!==false){host="//"+(host||"");if(pathname&&pathname.charAt(0)!=="/")pathname="/"+pathname}else if(!host){host=""}if(hash&&hash.charAt(0)!=="#")hash="#"+hash;if(search&&search.charAt(0)!=="?")search="?"+search;pathname=pathname.replace(/[?#]/g,function(match){return encodeURIComponent(match)});search=search.replace("#","%23");return protocol+host+pathname+search+hash};function urlResolve(source,relative){return urlParse(source,false,true).resolve(relative)}Url.prototype.resolve=function(relative){return this.resolveObject(urlParse(relative,false,true)).format()};function urlResolveObject(source,relative){if(!source)return relative;return urlParse(source,false,true).resolveObject(relative)}Url.prototype.resolveObject=function(relative){if(isString(relative)){var rel=new Url;rel.parse(relative,false,true);relative=rel}var result=new Url;Object.keys(this).forEach(function(k){result[k]=this[k]},this);result.hash=relative.hash;if(relative.href===""){result.href=result.format();return result}if(relative.slashes&&!relative.protocol){Object.keys(relative).forEach(function(k){if(k!=="protocol")result[k]=relative[k]});if(slashedProtocol[result.protocol]&&result.hostname&&!result.pathname){result.path=result.pathname="/"}result.href=result.format();return result}if(relative.protocol&&relative.protocol!==result.protocol){if(!slashedProtocol[relative.protocol]){Object.keys(relative).forEach(function(k){result[k]=relative[k]});result.href=result.format();return result}result.protocol=relative.protocol;if(!relative.host&&!hostlessProtocol[relative.protocol]){var relPath=(relative.pathname||"").split("/");while(relPath.length&&!(relative.host=relPath.shift()));if(!relative.host)relative.host="";if(!relative.hostname)relative.hostname="";if(relPath[0]!=="")relPath.unshift("");if(relPath.length<2)relPath.unshift("");result.pathname=relPath.join("/")}else{result.pathname=relative.pathname}result.search=relative.search;result.query=relative.query;result.host=relative.host||"";result.auth=relative.auth;result.hostname=relative.hostname||relative.host;result.port=relative.port;if(result.pathname||result.search){var p=result.pathname||"";var s=result.search||"";result.path=p+s}result.slashes=result.slashes||relative.slashes;result.href=result.format();return result}var isSourceAbs=result.pathname&&result.pathname.charAt(0)==="/",isRelAbs=relative.host||relative.pathname&&relative.pathname.charAt(0)==="/",mustEndAbs=isRelAbs||isSourceAbs||result.host&&relative.pathname,removeAllDots=mustEndAbs,srcPath=result.pathname&&result.pathname.split("/")||[],relPath=relative.pathname&&relative.pathname.split("/")||[],psychotic=result.protocol&&!slashedProtocol[result.protocol];if(psychotic){result.hostname="";result.port=null;if(result.host){if(srcPath[0]==="")srcPath[0]=result.host;else srcPath.unshift(result.host)}result.host="";if(relative.protocol){relative.hostname=null;relative.port=null;if(relative.host){if(relPath[0]==="")relPath[0]=relative.host;else relPath.unshift(relative.host)}relative.host=null}mustEndAbs=mustEndAbs&&(relPath[0]===""||srcPath[0]==="")}if(isRelAbs){result.host=relative.host||relative.host===""?relative.host:result.host;result.hostname=relative.hostname||relative.hostname===""?relative.hostname:result.hostname;result.search=relative.search;result.query=relative.query;srcPath=relPath}else if(relPath.length){if(!srcPath)srcPath=[];srcPath.pop();srcPath=srcPath.concat(relPath);result.search=relative.search;result.query=relative.query}else if(!isNullOrUndefined(relative.search)){if(psychotic){result.hostname=result.host=srcPath.shift();var authInHost=result.host&&result.host.indexOf("@")>0?result.host.split("@"):false;if(authInHost){result.auth=authInHost.shift();result.host=result.hostname=authInHost.shift()}}result.search=relative.search;result.query=relative.query;if(!isNull(result.pathname)||!isNull(result.search)){result.path=(result.pathname?result.pathname:"")+(result.search?result.search:"")}result.href=result.format();return result}if(!srcPath.length){result.pathname=null;if(result.search){result.path="/"+result.search}else{result.path=null}result.href=result.format();return result}var last=srcPath.slice(-1)[0];var hasTrailingSlash=(result.host||relative.host)&&(last==="."||last==="..")||last==="";var up=0;for(var i=srcPath.length;i>=0;i--){last=srcPath[i];if(last=="."){srcPath.splice(i,1)}else if(last===".."){srcPath.splice(i,1);up++}else if(up){srcPath.splice(i,1);up--}}if(!mustEndAbs&&!removeAllDots){for(;up--;up){srcPath.unshift("..")}}if(mustEndAbs&&srcPath[0]!==""&&(!srcPath[0]||srcPath[0].charAt(0)!=="/")){srcPath.unshift("")}if(hasTrailingSlash&&srcPath.join("/").substr(-1)!=="/"){srcPath.push("")}var isAbsolute=srcPath[0]===""||srcPath[0]&&srcPath[0].charAt(0)==="/";if(psychotic){result.hostname=result.host=isAbsolute?"":srcPath.length?srcPath.shift():"";var authInHost=result.host&&result.host.indexOf("@")>0?result.host.split("@"):false;if(authInHost){result.auth=authInHost.shift();result.host=result.hostname=authInHost.shift()}}mustEndAbs=mustEndAbs||result.host&&srcPath.length;if(mustEndAbs&&!isAbsolute){srcPath.unshift("")}if(!srcPath.length){result.pathname=null;result.path=null}else{result.pathname=srcPath.join("/")}if(!isNull(result.pathname)||!isNull(result.search)){result.path=(result.pathname?result.pathname:"")+(result.search?result.search:"")}result.auth=relative.auth||result.auth;result.slashes=result.slashes||relative.slashes;result.href=result.format();return result};Url.prototype.parseHost=function(){var host=this.host;var port=portPattern.exec(host);if(port){port=port[0];if(port!==":"){this.port=port.substr(1)}host=host.substr(0,host.length-port.length)}if(host)this.hostname=host};function isString(arg){return typeof arg==="string"}function isObject(arg){return typeof arg==="object"&&arg!==null}function isNull(arg){return arg===null}function isNullOrUndefined(arg){return arg==null}},{punycode:8,querystring:11}],13:[function(require,module,exports){(function(global){(function(){var undefined;var arrayPool=[],objectPool=[];var idCounter=0;var keyPrefix=+new Date+"";var largeArraySize=75;var maxPoolSize=40;var whitespace=" 	\f ﻿"+"\n\r\u2028\u2029"+" ᠎             　";var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;var reFlags=/\w*$/;var reFuncName=/^\s*function[ \n\r\t]+\w/;var reInterpolate=/<%=([\s\S]+?)%>/g;var reLeadingSpacesAndZeros=RegExp("^["+whitespace+"]*0+(?=.$)");var reNoMatch=/($^)/;var reThis=/\bthis\b/;var reUnescapedString=/['\n\r\t\u2028\u2029\\]/g;var contextProps=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"];var templateCounter=0;var argsClass="[object Arguments]",arrayClass="[object Array]",boolClass="[object Boolean]",dateClass="[object Date]",funcClass="[object Function]",numberClass="[object Number]",objectClass="[object Object]",regexpClass="[object RegExp]",stringClass="[object String]";var cloneableClasses={};cloneableClasses[funcClass]=false;cloneableClasses[argsClass]=cloneableClasses[arrayClass]=cloneableClasses[boolClass]=cloneableClasses[dateClass]=cloneableClasses[numberClass]=cloneableClasses[objectClass]=cloneableClasses[regexpClass]=cloneableClasses[stringClass]=true;var debounceOptions={leading:false,maxWait:0,trailing:false};var descriptor={configurable:false,enumerable:false,value:null,writable:false};var objectTypes={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false};var stringEscapes={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"};var root=objectTypes[typeof window]&&window||this;var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;var freeModule=objectTypes[typeof module]&&module&&!module.nodeType&&module;var moduleExports=freeModule&&freeModule.exports===freeExports&&freeExports;var freeGlobal=objectTypes[typeof global]&&global;if(freeGlobal&&(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal)){root=freeGlobal}function baseIndexOf(array,value,fromIndex){var index=(fromIndex||0)-1,length=array?array.length:0;while(++index<length){if(array[index]===value){return index}}return-1}function cacheIndexOf(cache,value){var type=typeof value;cache=cache.cache;if(type=="boolean"||value==null){return cache[value]?0:-1}if(type!="number"&&type!="string"){type="object"}var key=type=="number"?value:keyPrefix+value;cache=(cache=cache[type])&&cache[key];return type=="object"?cache&&baseIndexOf(cache,value)>-1?0:-1:cache?0:-1}function cachePush(value){var cache=this.cache,type=typeof value;if(type=="boolean"||value==null){cache[value]=true}else{if(type!="number"&&type!="string"){type="object"}var key=type=="number"?value:keyPrefix+value,typeCache=cache[type]||(cache[type]={});if(type=="object"){(typeCache[key]||(typeCache[key]=[])).push(value)}else{typeCache[key]=true}}}function charAtCallback(value){return value.charCodeAt(0)}function compareAscending(a,b){var ac=a.criteria,bc=b.criteria,index=-1,length=ac.length;while(++index<length){var value=ac[index],other=bc[index];if(value!==other){if(value>other||typeof value=="undefined"){return 1}if(value<other||typeof other=="undefined"){return-1}}}return a.index-b.index}function createCache(array){var index=-1,length=array.length,first=array[0],mid=array[length/2|0],last=array[length-1];if(first&&typeof first=="object"&&mid&&typeof mid=="object"&&last&&typeof last=="object"){return false}var cache=getObject();cache["false"]=cache["null"]=cache["true"]=cache["undefined"]=false;var result=getObject();result.array=array;result.cache=cache;result.push=cachePush;while(++index<length){result.push(array[index])}return result}function escapeStringChar(match){return"\\"+stringEscapes[match]}function getArray(){return arrayPool.pop()||[]}function getObject(){return objectPool.pop()||{array:null,cache:null,criteria:null,"false":false,index:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,value:null}}function releaseArray(array){array.length=0;if(arrayPool.length<maxPoolSize){arrayPool.push(array)}}function releaseObject(object){var cache=object.cache;if(cache){releaseObject(cache)}object.array=object.cache=object.criteria=object.object=object.number=object.string=object.value=null;if(objectPool.length<maxPoolSize){objectPool.push(object)}}function slice(array,start,end){start||(start=0);if(typeof end=="undefined"){end=array?array.length:0}var index=-1,length=end-start||0,result=Array(length<0?0:length);while(++index<length){result[index]=array[start+index]}return result}function runInContext(context){context=context?_.defaults(root.Object(),context,_.pick(root,contextProps)):root;var Array=context.Array,Boolean=context.Boolean,Date=context.Date,Function=context.Function,Math=context.Math,Number=context.Number,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;var arrayRef=[];var objectProto=Object.prototype;var oldDash=context._;var toString=objectProto.toString;var reNative=RegExp("^"+String(toString).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");var ceil=Math.ceil,clearTimeout=context.clearTimeout,floor=Math.floor,fnToString=Function.prototype.toString,getPrototypeOf=isNative(getPrototypeOf=Object.getPrototypeOf)&&getPrototypeOf,hasOwnProperty=objectProto.hasOwnProperty,push=arrayRef.push,setTimeout=context.setTimeout,splice=arrayRef.splice,unshift=arrayRef.unshift;var defineProperty=function(){try{var o={},func=isNative(func=Object.defineProperty)&&func,result=func(o,o,o)&&func}catch(e){}return result}();var nativeCreate=isNative(nativeCreate=Object.create)&&nativeCreate,nativeIsArray=isNative(nativeIsArray=Array.isArray)&&nativeIsArray,nativeIsFinite=context.isFinite,nativeIsNaN=context.isNaN,nativeKeys=isNative(nativeKeys=Object.keys)&&nativeKeys,nativeMax=Math.max,nativeMin=Math.min,nativeParseInt=context.parseInt,nativeRandom=Math.random;var ctorByClass={};ctorByClass[arrayClass]=Array;ctorByClass[boolClass]=Boolean;ctorByClass[dateClass]=Date;ctorByClass[funcClass]=Function;ctorByClass[objectClass]=Object;ctorByClass[numberClass]=Number;ctorByClass[regexpClass]=RegExp;ctorByClass[stringClass]=String;function lodash(value){return value&&typeof value=="object"&&!isArray(value)&&hasOwnProperty.call(value,"__wrapped__")?value:new lodashWrapper(value)}function lodashWrapper(value,chainAll){this.__chain__=!!chainAll;this.__wrapped__=value}lodashWrapper.prototype=lodash.prototype;var support=lodash.support={};support.funcDecomp=!isNative(context.WinRTError)&&reThis.test(runInContext);support.funcNames=typeof Function.name=="string";lodash.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:reInterpolate,variable:"",imports:{_:lodash}};function baseBind(bindData){var func=bindData[0],partialArgs=bindData[2],thisArg=bindData[4];function bound(){if(partialArgs){var args=slice(partialArgs);push.apply(args,arguments)}if(this instanceof bound){var thisBinding=baseCreate(func.prototype),result=func.apply(thisBinding,args||arguments);return isObject(result)?result:thisBinding}return func.apply(thisArg,args||arguments)}setBindData(bound,bindData);return bound}function baseClone(value,isDeep,callback,stackA,stackB){if(callback){var result=callback(value);if(typeof result!="undefined"){return result}}var isObj=isObject(value);if(isObj){var className=toString.call(value);if(!cloneableClasses[className]){return value}var ctor=ctorByClass[className];switch(className){case boolClass:case dateClass:return new ctor(+value);case numberClass:case stringClass:return new ctor(value);case regexpClass:result=ctor(value.source,reFlags.exec(value));result.lastIndex=value.lastIndex;return result}}else{return value}var isArr=isArray(value);if(isDeep){var initedStack=!stackA;stackA||(stackA=getArray());stackB||(stackB=getArray());var length=stackA.length;while(length--){if(stackA[length]==value){return stackB[length]}}result=isArr?ctor(value.length):{}}else{result=isArr?slice(value):assign({},value)}if(isArr){if(hasOwnProperty.call(value,"index")){result.index=value.index}if(hasOwnProperty.call(value,"input")){result.input=value.input}}if(!isDeep){return result}stackA.push(value);stackB.push(result);(isArr?forEach:forOwn)(value,function(objValue,key){result[key]=baseClone(objValue,isDeep,callback,stackA,stackB)});if(initedStack){releaseArray(stackA);releaseArray(stackB)}return result}function baseCreate(prototype,properties){return isObject(prototype)?nativeCreate(prototype):{}}if(!nativeCreate){baseCreate=function(){function Object(){}return function(prototype){if(isObject(prototype)){Object.prototype=prototype;var result=new Object;Object.prototype=null}return result||context.Object()}}()}function baseCreateCallback(func,thisArg,argCount){if(typeof func!="function"){return identity}if(typeof thisArg=="undefined"||!("prototype"in func)){return func}var bindData=func.__bindData__;if(typeof bindData=="undefined"){if(support.funcNames){bindData=!func.name}bindData=bindData||!support.funcDecomp;if(!bindData){var source=fnToString.call(func);if(!support.funcNames){bindData=!reFuncName.test(source)}if(!bindData){bindData=reThis.test(source);setBindData(func,bindData)}}}if(bindData===false||bindData!==true&&bindData[1]&1){return func}switch(argCount){case 1:return function(value){return func.call(thisArg,value)
};case 2:return function(a,b){return func.call(thisArg,a,b)};case 3:return function(value,index,collection){return func.call(thisArg,value,index,collection)};case 4:return function(accumulator,value,index,collection){return func.call(thisArg,accumulator,value,index,collection)}}return bind(func,thisArg)}function baseCreateWrapper(bindData){var func=bindData[0],bitmask=bindData[1],partialArgs=bindData[2],partialRightArgs=bindData[3],thisArg=bindData[4],arity=bindData[5];var isBind=bitmask&1,isBindKey=bitmask&2,isCurry=bitmask&4,isCurryBound=bitmask&8,key=func;function bound(){var thisBinding=isBind?thisArg:this;if(partialArgs){var args=slice(partialArgs);push.apply(args,arguments)}if(partialRightArgs||isCurry){args||(args=slice(arguments));if(partialRightArgs){push.apply(args,partialRightArgs)}if(isCurry&&args.length<arity){bitmask|=16&~32;return baseCreateWrapper([func,isCurryBound?bitmask:bitmask&~3,args,null,thisArg,arity])}}args||(args=arguments);if(isBindKey){func=thisBinding[key]}if(this instanceof bound){thisBinding=baseCreate(func.prototype);var result=func.apply(thisBinding,args);return isObject(result)?result:thisBinding}return func.apply(thisBinding,args)}setBindData(bound,bindData);return bound}function baseDifference(array,values){var index=-1,indexOf=getIndexOf(),length=array?array.length:0,isLarge=length>=largeArraySize&&indexOf===baseIndexOf,result=[];if(isLarge){var cache=createCache(values);if(cache){indexOf=cacheIndexOf;values=cache}else{isLarge=false}}while(++index<length){var value=array[index];if(indexOf(values,value)<0){result.push(value)}}if(isLarge){releaseObject(values)}return result}function baseFlatten(array,isShallow,isStrict,fromIndex){var index=(fromIndex||0)-1,length=array?array.length:0,result=[];while(++index<length){var value=array[index];if(value&&typeof value=="object"&&typeof value.length=="number"&&(isArray(value)||isArguments(value))){if(!isShallow){value=baseFlatten(value,isShallow,isStrict)}var valIndex=-1,valLength=value.length,resIndex=result.length;result.length+=valLength;while(++valIndex<valLength){result[resIndex++]=value[valIndex]}}else if(!isStrict){result.push(value)}}return result}function baseIsEqual(a,b,callback,isWhere,stackA,stackB){if(callback){var result=callback(a,b);if(typeof result!="undefined"){return!!result}}if(a===b){return a!==0||1/a==1/b}var type=typeof a,otherType=typeof b;if(a===a&&!(a&&objectTypes[type])&&!(b&&objectTypes[otherType])){return false}if(a==null||b==null){return a===b}var className=toString.call(a),otherClass=toString.call(b);if(className==argsClass){className=objectClass}if(otherClass==argsClass){otherClass=objectClass}if(className!=otherClass){return false}switch(className){case boolClass:case dateClass:return+a==+b;case numberClass:return a!=+a?b!=+b:a==0?1/a==1/b:a==+b;case regexpClass:case stringClass:return a==String(b)}var isArr=className==arrayClass;if(!isArr){var aWrapped=hasOwnProperty.call(a,"__wrapped__"),bWrapped=hasOwnProperty.call(b,"__wrapped__");if(aWrapped||bWrapped){return baseIsEqual(aWrapped?a.__wrapped__:a,bWrapped?b.__wrapped__:b,callback,isWhere,stackA,stackB)}if(className!=objectClass){return false}var ctorA=a.constructor,ctorB=b.constructor;if(ctorA!=ctorB&&!(isFunction(ctorA)&&ctorA instanceof ctorA&&isFunction(ctorB)&&ctorB instanceof ctorB)&&("constructor"in a&&"constructor"in b)){return false}}var initedStack=!stackA;stackA||(stackA=getArray());stackB||(stackB=getArray());var length=stackA.length;while(length--){if(stackA[length]==a){return stackB[length]==b}}var size=0;result=true;stackA.push(a);stackB.push(b);if(isArr){length=a.length;size=b.length;result=size==length;if(result||isWhere){while(size--){var index=length,value=b[size];if(isWhere){while(index--){if(result=baseIsEqual(a[index],value,callback,isWhere,stackA,stackB)){break}}}else if(!(result=baseIsEqual(a[size],value,callback,isWhere,stackA,stackB))){break}}}}else{forIn(b,function(value,key,b){if(hasOwnProperty.call(b,key)){size++;return result=hasOwnProperty.call(a,key)&&baseIsEqual(a[key],value,callback,isWhere,stackA,stackB)}});if(result&&!isWhere){forIn(a,function(value,key,a){if(hasOwnProperty.call(a,key)){return result=--size>-1}})}}stackA.pop();stackB.pop();if(initedStack){releaseArray(stackA);releaseArray(stackB)}return result}function baseMerge(object,source,callback,stackA,stackB){(isArray(source)?forEach:forOwn)(source,function(source,key){var found,isArr,result=source,value=object[key];if(source&&((isArr=isArray(source))||isPlainObject(source))){var stackLength=stackA.length;while(stackLength--){if(found=stackA[stackLength]==source){value=stackB[stackLength];break}}if(!found){var isShallow;if(callback){result=callback(value,source);if(isShallow=typeof result!="undefined"){value=result}}if(!isShallow){value=isArr?isArray(value)?value:[]:isPlainObject(value)?value:{}}stackA.push(source);stackB.push(value);if(!isShallow){baseMerge(value,source,callback,stackA,stackB)}}}else{if(callback){result=callback(value,source);if(typeof result=="undefined"){result=source}}if(typeof result!="undefined"){value=result}}object[key]=value})}function baseRandom(min,max){return min+floor(nativeRandom()*(max-min+1))}function baseUniq(array,isSorted,callback){var index=-1,indexOf=getIndexOf(),length=array?array.length:0,result=[];var isLarge=!isSorted&&length>=largeArraySize&&indexOf===baseIndexOf,seen=callback||isLarge?getArray():result;if(isLarge){var cache=createCache(seen);indexOf=cacheIndexOf;seen=cache}while(++index<length){var value=array[index],computed=callback?callback(value,index,array):value;if(isSorted?!index||seen[seen.length-1]!==computed:indexOf(seen,computed)<0){if(callback||isLarge){seen.push(computed)}result.push(value)}}if(isLarge){releaseArray(seen.array);releaseObject(seen)}else if(callback){releaseArray(seen)}return result}function createAggregator(setter){return function(collection,callback,thisArg){var result={};callback=lodash.createCallback(callback,thisArg,3);var index=-1,length=collection?collection.length:0;if(typeof length=="number"){while(++index<length){var value=collection[index];setter(result,value,callback(value,index,collection),collection)}}else{forOwn(collection,function(value,key,collection){setter(result,value,callback(value,key,collection),collection)})}return result}}function createWrapper(func,bitmask,partialArgs,partialRightArgs,thisArg,arity){var isBind=bitmask&1,isBindKey=bitmask&2,isCurry=bitmask&4,isCurryBound=bitmask&8,isPartial=bitmask&16,isPartialRight=bitmask&32;if(!isBindKey&&!isFunction(func)){throw new TypeError}if(isPartial&&!partialArgs.length){bitmask&=~16;isPartial=partialArgs=false}if(isPartialRight&&!partialRightArgs.length){bitmask&=~32;isPartialRight=partialRightArgs=false}var bindData=func&&func.__bindData__;if(bindData&&bindData!==true){bindData=slice(bindData);if(bindData[2]){bindData[2]=slice(bindData[2])}if(bindData[3]){bindData[3]=slice(bindData[3])}if(isBind&&!(bindData[1]&1)){bindData[4]=thisArg}if(!isBind&&bindData[1]&1){bitmask|=8}if(isCurry&&!(bindData[1]&4)){bindData[5]=arity}if(isPartial){push.apply(bindData[2]||(bindData[2]=[]),partialArgs)}if(isPartialRight){unshift.apply(bindData[3]||(bindData[3]=[]),partialRightArgs)}bindData[1]|=bitmask;return createWrapper.apply(null,bindData)}var creater=bitmask==1||bitmask===17?baseBind:baseCreateWrapper;return creater([func,bitmask,partialArgs,partialRightArgs,thisArg,arity])}function escapeHtmlChar(match){return htmlEscapes[match]}function getIndexOf(){var result=(result=lodash.indexOf)===indexOf?baseIndexOf:result;return result}function isNative(value){return typeof value=="function"&&reNative.test(value)}var setBindData=!defineProperty?noop:function(func,value){descriptor.value=value;defineProperty(func,"__bindData__",descriptor)};function shimIsPlainObject(value){var ctor,result;if(!(value&&toString.call(value)==objectClass)||(ctor=value.constructor,isFunction(ctor)&&!(ctor instanceof ctor))){return false}forIn(value,function(value,key){result=key});return typeof result=="undefined"||hasOwnProperty.call(value,result)}function unescapeHtmlChar(match){return htmlUnescapes[match]}function isArguments(value){return value&&typeof value=="object"&&typeof value.length=="number"&&toString.call(value)==argsClass||false}var isArray=nativeIsArray||function(value){return value&&typeof value=="object"&&typeof value.length=="number"&&toString.call(value)==arrayClass||false};var shimKeys=function(object){var index,iterable=object,result=[];if(!iterable)return result;if(!objectTypes[typeof object])return result;for(index in iterable){if(hasOwnProperty.call(iterable,index)){result.push(index)}}return result};var keys=!nativeKeys?shimKeys:function(object){if(!isObject(object)){return[]}return nativeKeys(object)};var htmlEscapes={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};var htmlUnescapes=invert(htmlEscapes);var reEscapedHtml=RegExp("("+keys(htmlUnescapes).join("|")+")","g"),reUnescapedHtml=RegExp("["+keys(htmlEscapes).join("")+"]","g");var assign=function(object,source,guard){var index,iterable=object,result=iterable;if(!iterable)return result;var args=arguments,argsIndex=0,argsLength=typeof guard=="number"?2:args.length;if(argsLength>3&&typeof args[argsLength-2]=="function"){var callback=baseCreateCallback(args[--argsLength-1],args[argsLength--],2)}else if(argsLength>2&&typeof args[argsLength-1]=="function"){callback=args[--argsLength]}while(++argsIndex<argsLength){iterable=args[argsIndex];if(iterable&&objectTypes[typeof iterable]){var ownIndex=-1,ownProps=objectTypes[typeof iterable]&&keys(iterable),length=ownProps?ownProps.length:0;while(++ownIndex<length){index=ownProps[ownIndex];result[index]=callback?callback(result[index],iterable[index]):iterable[index]}}}return result};function clone(value,isDeep,callback,thisArg){if(typeof isDeep!="boolean"&&isDeep!=null){thisArg=callback;callback=isDeep;isDeep=false}return baseClone(value,isDeep,typeof callback=="function"&&baseCreateCallback(callback,thisArg,1))}function cloneDeep(value,callback,thisArg){return baseClone(value,true,typeof callback=="function"&&baseCreateCallback(callback,thisArg,1))}function create(prototype,properties){var result=baseCreate(prototype);return properties?assign(result,properties):result}var defaults=function(object,source,guard){var index,iterable=object,result=iterable;if(!iterable)return result;var args=arguments,argsIndex=0,argsLength=typeof guard=="number"?2:args.length;while(++argsIndex<argsLength){iterable=args[argsIndex];if(iterable&&objectTypes[typeof iterable]){var ownIndex=-1,ownProps=objectTypes[typeof iterable]&&keys(iterable),length=ownProps?ownProps.length:0;while(++ownIndex<length){index=ownProps[ownIndex];if(typeof result[index]=="undefined")result[index]=iterable[index]}}}return result};function findKey(object,callback,thisArg){var result;callback=lodash.createCallback(callback,thisArg,3);forOwn(object,function(value,key,object){if(callback(value,key,object)){result=key;return false}});return result}function findLastKey(object,callback,thisArg){var result;callback=lodash.createCallback(callback,thisArg,3);forOwnRight(object,function(value,key,object){if(callback(value,key,object)){result=key;return false}});return result}var forIn=function(collection,callback,thisArg){var index,iterable=collection,result=iterable;if(!iterable)return result;if(!objectTypes[typeof iterable])return result;callback=callback&&typeof thisArg=="undefined"?callback:baseCreateCallback(callback,thisArg,3);for(index in iterable){if(callback(iterable[index],index,collection)===false)return result}return result};function forInRight(object,callback,thisArg){var pairs=[];forIn(object,function(value,key){pairs.push(key,value)});var length=pairs.length;callback=baseCreateCallback(callback,thisArg,3);while(length--){if(callback(pairs[length--],pairs[length],object)===false){break}}return object}var forOwn=function(collection,callback,thisArg){var index,iterable=collection,result=iterable;if(!iterable)return result;if(!objectTypes[typeof iterable])return result;callback=callback&&typeof thisArg=="undefined"?callback:baseCreateCallback(callback,thisArg,3);var ownIndex=-1,ownProps=objectTypes[typeof iterable]&&keys(iterable),length=ownProps?ownProps.length:0;while(++ownIndex<length){index=ownProps[ownIndex];if(callback(iterable[index],index,collection)===false)return result}return result};function forOwnRight(object,callback,thisArg){var props=keys(object),length=props.length;callback=baseCreateCallback(callback,thisArg,3);while(length--){var key=props[length];if(callback(object[key],key,object)===false){break}}return object}function functions(object){var result=[];forIn(object,function(value,key){if(isFunction(value)){result.push(key)}});return result.sort()}function has(object,key){return object?hasOwnProperty.call(object,key):false}function invert(object){var index=-1,props=keys(object),length=props.length,result={};while(++index<length){var key=props[index];result[object[key]]=key}return result}function isBoolean(value){return value===true||value===false||value&&typeof value=="object"&&toString.call(value)==boolClass||false}function isDate(value){return value&&typeof value=="object"&&toString.call(value)==dateClass||false}function isElement(value){return value&&value.nodeType===1||false}function isEmpty(value){var result=true;if(!value){return result}var className=toString.call(value),length=value.length;if(className==arrayClass||className==stringClass||className==argsClass||className==objectClass&&typeof length=="number"&&isFunction(value.splice)){return!length}forOwn(value,function(){return result=false});return result}function isEqual(a,b,callback,thisArg){return baseIsEqual(a,b,typeof callback=="function"&&baseCreateCallback(callback,thisArg,2))}function isFinite(value){return nativeIsFinite(value)&&!nativeIsNaN(parseFloat(value))}function isFunction(value){return typeof value=="function"}function isObject(value){return!!(value&&objectTypes[typeof value])}function isNaN(value){return isNumber(value)&&value!=+value}function isNull(value){return value===null}function isNumber(value){return typeof value=="number"||value&&typeof value=="object"&&toString.call(value)==numberClass||false}var isPlainObject=!getPrototypeOf?shimIsPlainObject:function(value){if(!(value&&toString.call(value)==objectClass)){return false}var valueOf=value.valueOf,objProto=isNative(valueOf)&&(objProto=getPrototypeOf(valueOf))&&getPrototypeOf(objProto);return objProto?value==objProto||getPrototypeOf(value)==objProto:shimIsPlainObject(value)};function isRegExp(value){return value&&typeof value=="object"&&toString.call(value)==regexpClass||false}function isString(value){return typeof value=="string"||value&&typeof value=="object"&&toString.call(value)==stringClass||false}function isUndefined(value){return typeof value=="undefined"}function mapValues(object,callback,thisArg){var result={};callback=lodash.createCallback(callback,thisArg,3);forOwn(object,function(value,key,object){result[key]=callback(value,key,object)});return result}function merge(object){var args=arguments,length=2;if(!isObject(object)){return object}if(typeof args[2]!="number"){length=args.length}if(length>3&&typeof args[length-2]=="function"){var callback=baseCreateCallback(args[--length-1],args[length--],2)}else if(length>2&&typeof args[length-1]=="function"){callback=args[--length]}var sources=slice(arguments,1,length),index=-1,stackA=getArray(),stackB=getArray();while(++index<length){baseMerge(object,sources[index],callback,stackA,stackB)}releaseArray(stackA);releaseArray(stackB);return object}function omit(object,callback,thisArg){var result={};if(typeof callback!="function"){var props=[];forIn(object,function(value,key){props.push(key)});props=baseDifference(props,baseFlatten(arguments,true,false,1));var index=-1,length=props.length;while(++index<length){var key=props[index];result[key]=object[key]}}else{callback=lodash.createCallback(callback,thisArg,3);forIn(object,function(value,key,object){if(!callback(value,key,object)){result[key]=value}})}return result}function pairs(object){var index=-1,props=keys(object),length=props.length,result=Array(length);while(++index<length){var key=props[index];result[index]=[key,object[key]]}return result}function pick(object,callback,thisArg){var result={};if(typeof callback!="function"){var index=-1,props=baseFlatten(arguments,true,false,1),length=isObject(object)?props.length:0;while(++index<length){var key=props[index];if(key in object){result[key]=object[key]}}}else{callback=lodash.createCallback(callback,thisArg,3);forIn(object,function(value,key,object){if(callback(value,key,object)){result[key]=value}})}return result}function transform(object,callback,accumulator,thisArg){var isArr=isArray(object);if(accumulator==null){if(isArr){accumulator=[]}else{var ctor=object&&object.constructor,proto=ctor&&ctor.prototype;accumulator=baseCreate(proto)}}if(callback){callback=lodash.createCallback(callback,thisArg,4);(isArr?forEach:forOwn)(object,function(value,index,object){return callback(accumulator,value,index,object)})}return accumulator}function values(object){var index=-1,props=keys(object),length=props.length,result=Array(length);while(++index<length){result[index]=object[props[index]]}return result}function at(collection){var args=arguments,index=-1,props=baseFlatten(args,true,false,1),length=args[2]&&args[2][args[1]]===collection?1:props.length,result=Array(length);while(++index<length){result[index]=collection[props[index]]}return result}function contains(collection,target,fromIndex){var index=-1,indexOf=getIndexOf(),length=collection?collection.length:0,result=false;fromIndex=(fromIndex<0?nativeMax(0,length+fromIndex):fromIndex)||0;if(isArray(collection)){result=indexOf(collection,target,fromIndex)>-1}else if(typeof length=="number"){result=(isString(collection)?collection.indexOf(target,fromIndex):indexOf(collection,target,fromIndex))>-1}else{forOwn(collection,function(value){if(++index>=fromIndex){return!(result=value===target)}})}return result}var countBy=createAggregator(function(result,value,key){hasOwnProperty.call(result,key)?result[key]++:result[key]=1});function every(collection,callback,thisArg){var result=true;callback=lodash.createCallback(callback,thisArg,3);var index=-1,length=collection?collection.length:0;if(typeof length=="number"){while(++index<length){if(!(result=!!callback(collection[index],index,collection))){break}}}else{forOwn(collection,function(value,index,collection){return result=!!callback(value,index,collection)})}return result}function filter(collection,callback,thisArg){var result=[];callback=lodash.createCallback(callback,thisArg,3);var index=-1,length=collection?collection.length:0;if(typeof length=="number"){while(++index<length){var value=collection[index];if(callback(value,index,collection)){result.push(value)}}}else{forOwn(collection,function(value,index,collection){if(callback(value,index,collection)){result.push(value)}})}return result}function find(collection,callback,thisArg){callback=lodash.createCallback(callback,thisArg,3);var index=-1,length=collection?collection.length:0;if(typeof length=="number"){while(++index<length){var value=collection[index];if(callback(value,index,collection)){return value}}}else{var result;forOwn(collection,function(value,index,collection){if(callback(value,index,collection)){result=value;return false}});return result}}function findLast(collection,callback,thisArg){var result;callback=lodash.createCallback(callback,thisArg,3);forEachRight(collection,function(value,index,collection){if(callback(value,index,collection)){result=value;return false}});return result}function forEach(collection,callback,thisArg){var index=-1,length=collection?collection.length:0;callback=callback&&typeof thisArg=="undefined"?callback:baseCreateCallback(callback,thisArg,3);if(typeof length=="number"){while(++index<length){if(callback(collection[index],index,collection)===false){break}}}else{forOwn(collection,callback)}return collection}function forEachRight(collection,callback,thisArg){var length=collection?collection.length:0;callback=callback&&typeof thisArg=="undefined"?callback:baseCreateCallback(callback,thisArg,3);if(typeof length=="number"){while(length--){if(callback(collection[length],length,collection)===false){break}}}else{var props=keys(collection);length=props.length;forOwn(collection,function(value,key,collection){key=props?props[--length]:--length;return callback(collection[key],key,collection)})}return collection}var groupBy=createAggregator(function(result,value,key){(hasOwnProperty.call(result,key)?result[key]:result[key]=[]).push(value)});var indexBy=createAggregator(function(result,value,key){result[key]=value});function invoke(collection,methodName){var args=slice(arguments,2),index=-1,isFunc=typeof methodName=="function",length=collection?collection.length:0,result=Array(typeof length=="number"?length:0);forEach(collection,function(value){result[++index]=(isFunc?methodName:value[methodName]).apply(value,args)});return result}function map(collection,callback,thisArg){var index=-1,length=collection?collection.length:0;callback=lodash.createCallback(callback,thisArg,3);if(typeof length=="number"){var result=Array(length);while(++index<length){result[index]=callback(collection[index],index,collection)}}else{result=[];forOwn(collection,function(value,key,collection){result[++index]=callback(value,key,collection)})}return result}function max(collection,callback,thisArg){var computed=-Infinity,result=computed;if(typeof callback!="function"&&thisArg&&thisArg[callback]===collection){callback=null}if(callback==null&&isArray(collection)){var index=-1,length=collection.length;while(++index<length){var value=collection[index];if(value>result){result=value}}}else{callback=callback==null&&isString(collection)?charAtCallback:lodash.createCallback(callback,thisArg,3);forEach(collection,function(value,index,collection){var current=callback(value,index,collection);if(current>computed){computed=current;result=value}})}return result}function min(collection,callback,thisArg){var computed=Infinity,result=computed;if(typeof callback!="function"&&thisArg&&thisArg[callback]===collection){callback=null}if(callback==null&&isArray(collection)){var index=-1,length=collection.length;while(++index<length){var value=collection[index];if(value<result){result=value}}}else{callback=callback==null&&isString(collection)?charAtCallback:lodash.createCallback(callback,thisArg,3);forEach(collection,function(value,index,collection){var current=callback(value,index,collection);if(current<computed){computed=current;result=value}})}return result}var pluck=map;function reduce(collection,callback,accumulator,thisArg){if(!collection)return accumulator;var noaccum=arguments.length<3;callback=lodash.createCallback(callback,thisArg,4);var index=-1,length=collection.length;if(typeof length=="number"){if(noaccum){accumulator=collection[++index]}while(++index<length){accumulator=callback(accumulator,collection[index],index,collection)}}else{forOwn(collection,function(value,index,collection){accumulator=noaccum?(noaccum=false,value):callback(accumulator,value,index,collection)})}return accumulator}function reduceRight(collection,callback,accumulator,thisArg){var noaccum=arguments.length<3;callback=lodash.createCallback(callback,thisArg,4);forEachRight(collection,function(value,index,collection){accumulator=noaccum?(noaccum=false,value):callback(accumulator,value,index,collection)});return accumulator}function reject(collection,callback,thisArg){callback=lodash.createCallback(callback,thisArg,3);return filter(collection,function(value,index,collection){return!callback(value,index,collection)})}function sample(collection,n,guard){if(collection&&typeof collection.length!="number"){collection=values(collection)}if(n==null||guard){return collection?collection[baseRandom(0,collection.length-1)]:undefined}var result=shuffle(collection);result.length=nativeMin(nativeMax(0,n),result.length);return result}function shuffle(collection){var index=-1,length=collection?collection.length:0,result=Array(typeof length=="number"?length:0);forEach(collection,function(value){var rand=baseRandom(0,++index);result[index]=result[rand];result[rand]=value});return result}function size(collection){var length=collection?collection.length:0;return typeof length=="number"?length:keys(collection).length}function some(collection,callback,thisArg){var result;callback=lodash.createCallback(callback,thisArg,3);var index=-1,length=collection?collection.length:0;if(typeof length=="number"){while(++index<length){if(result=callback(collection[index],index,collection)){break}}}else{forOwn(collection,function(value,index,collection){return!(result=callback(value,index,collection))})}return!!result}function sortBy(collection,callback,thisArg){var index=-1,isArr=isArray(callback),length=collection?collection.length:0,result=Array(typeof length=="number"?length:0);if(!isArr){callback=lodash.createCallback(callback,thisArg,3)}forEach(collection,function(value,key,collection){var object=result[++index]=getObject();if(isArr){object.criteria=map(callback,function(key){return value[key]})}else{(object.criteria=getArray())[0]=callback(value,key,collection)}object.index=index;object.value=value});length=result.length;result.sort(compareAscending);while(length--){var object=result[length];result[length]=object.value;if(!isArr){releaseArray(object.criteria)}releaseObject(object)}return result}function toArray(collection){if(collection&&typeof collection.length=="number"){return slice(collection)}return values(collection)}var where=filter;function compact(array){var index=-1,length=array?array.length:0,result=[];while(++index<length){var value=array[index];if(value){result.push(value)}}return result}function difference(array){return baseDifference(array,baseFlatten(arguments,true,true,1))}function findIndex(array,callback,thisArg){var index=-1,length=array?array.length:0;callback=lodash.createCallback(callback,thisArg,3);while(++index<length){if(callback(array[index],index,array)){return index}}return-1}function findLastIndex(array,callback,thisArg){var length=array?array.length:0;callback=lodash.createCallback(callback,thisArg,3);while(length--){if(callback(array[length],length,array)){return length}}return-1}function first(array,callback,thisArg){var n=0,length=array?array.length:0;if(typeof callback!="number"&&callback!=null){var index=-1;callback=lodash.createCallback(callback,thisArg,3);while(++index<length&&callback(array[index],index,array)){n++}}else{n=callback;if(n==null||thisArg){return array?array[0]:undefined}}return slice(array,0,nativeMin(nativeMax(0,n),length))}function flatten(array,isShallow,callback,thisArg){if(typeof isShallow!="boolean"&&isShallow!=null){thisArg=callback;callback=typeof isShallow!="function"&&thisArg&&thisArg[isShallow]===array?null:isShallow;isShallow=false}if(callback!=null){array=map(array,callback,thisArg)}return baseFlatten(array,isShallow)}function indexOf(array,value,fromIndex){if(typeof fromIndex=="number"){var length=array?array.length:0;fromIndex=fromIndex<0?nativeMax(0,length+fromIndex):fromIndex||0}else if(fromIndex){var index=sortedIndex(array,value);return array[index]===value?index:-1}return baseIndexOf(array,value,fromIndex)}function initial(array,callback,thisArg){var n=0,length=array?array.length:0;if(typeof callback!="number"&&callback!=null){var index=length;callback=lodash.createCallback(callback,thisArg,3);while(index--&&callback(array[index],index,array)){n++}}else{n=callback==null||thisArg?1:callback||n}return slice(array,0,nativeMin(nativeMax(0,length-n),length))}function intersection(){var args=[],argsIndex=-1,argsLength=arguments.length,caches=getArray(),indexOf=getIndexOf(),trustIndexOf=indexOf===baseIndexOf,seen=getArray();while(++argsIndex<argsLength){var value=arguments[argsIndex];if(isArray(value)||isArguments(value)){args.push(value);caches.push(trustIndexOf&&value.length>=largeArraySize&&createCache(argsIndex?args[argsIndex]:seen))}}var array=args[0],index=-1,length=array?array.length:0,result=[];outer:while(++index<length){var cache=caches[0];value=array[index];if((cache?cacheIndexOf(cache,value):indexOf(seen,value))<0){argsIndex=argsLength;(cache||seen).push(value);while(--argsIndex){cache=caches[argsIndex];if((cache?cacheIndexOf(cache,value):indexOf(args[argsIndex],value))<0){continue outer}}result.push(value)}}while(argsLength--){cache=caches[argsLength];if(cache){releaseObject(cache)}}releaseArray(caches);releaseArray(seen);return result}function last(array,callback,thisArg){var n=0,length=array?array.length:0;if(typeof callback!="number"&&callback!=null){var index=length;callback=lodash.createCallback(callback,thisArg,3);while(index--&&callback(array[index],index,array)){n++}}else{n=callback;if(n==null||thisArg){return array?array[length-1]:undefined}}return slice(array,nativeMax(0,length-n))}function lastIndexOf(array,value,fromIndex){var index=array?array.length:0;if(typeof fromIndex=="number"){index=(fromIndex<0?nativeMax(0,index+fromIndex):nativeMin(fromIndex,index-1))+1}while(index--){if(array[index]===value){return index}}return-1}function pull(array){var args=arguments,argsIndex=0,argsLength=args.length,length=array?array.length:0;while(++argsIndex<argsLength){var index=-1,value=args[argsIndex];while(++index<length){if(array[index]===value){splice.call(array,index--,1);length--}}}return array}function range(start,end,step){start=+start||0;step=typeof step=="number"?step:+step||1;if(end==null){end=start;start=0}var index=-1,length=nativeMax(0,ceil((end-start)/(step||1))),result=Array(length);while(++index<length){result[index]=start;start+=step}return result}function remove(array,callback,thisArg){var index=-1,length=array?array.length:0,result=[];callback=lodash.createCallback(callback,thisArg,3);while(++index<length){var value=array[index];if(callback(value,index,array)){result.push(value);splice.call(array,index--,1);length--}}return result}function rest(array,callback,thisArg){if(typeof callback!="number"&&callback!=null){var n=0,index=-1,length=array?array.length:0;callback=lodash.createCallback(callback,thisArg,3);while(++index<length&&callback(array[index],index,array)){n++}}else{n=callback==null||thisArg?1:nativeMax(0,callback)}return slice(array,n)}function sortedIndex(array,value,callback,thisArg){var low=0,high=array?array.length:low;callback=callback?lodash.createCallback(callback,thisArg,1):identity;value=callback(value);while(low<high){var mid=low+high>>>1;callback(array[mid])<value?low=mid+1:high=mid}return low}function union(){return baseUniq(baseFlatten(arguments,true,true))}function uniq(array,isSorted,callback,thisArg){if(typeof isSorted!="boolean"&&isSorted!=null){thisArg=callback;callback=typeof isSorted!="function"&&thisArg&&thisArg[isSorted]===array?null:isSorted;isSorted=false}if(callback!=null){callback=lodash.createCallback(callback,thisArg,3)}return baseUniq(array,isSorted,callback)}function without(array){return baseDifference(array,slice(arguments,1))}function xor(){var index=-1,length=arguments.length;while(++index<length){var array=arguments[index];if(isArray(array)||isArguments(array)){var result=result?baseUniq(baseDifference(result,array).concat(baseDifference(array,result))):array}}return result||[]}function zip(){var array=arguments.length>1?arguments:arguments[0],index=-1,length=array?max(pluck(array,"length")):0,result=Array(length<0?0:length);while(++index<length){result[index]=pluck(array,index)}return result}function zipObject(keys,values){var index=-1,length=keys?keys.length:0,result={};if(!values&&length&&!isArray(keys[0])){values=[]}while(++index<length){var key=keys[index];if(values){result[key]=values[index]}else if(key){result[key[0]]=key[1]}}return result}function after(n,func){if(!isFunction(func)){throw new TypeError}return function(){if(--n<1){return func.apply(this,arguments)}}}function bind(func,thisArg){return arguments.length>2?createWrapper(func,17,slice(arguments,2),null,thisArg):createWrapper(func,1,null,null,thisArg)
}function bindAll(object){var funcs=arguments.length>1?baseFlatten(arguments,true,false,1):functions(object),index=-1,length=funcs.length;while(++index<length){var key=funcs[index];object[key]=createWrapper(object[key],1,null,null,object)}return object}function bindKey(object,key){return arguments.length>2?createWrapper(key,19,slice(arguments,2),null,object):createWrapper(key,3,null,null,object)}function compose(){var funcs=arguments,length=funcs.length;while(length--){if(!isFunction(funcs[length])){throw new TypeError}}return function(){var args=arguments,length=funcs.length;while(length--){args=[funcs[length].apply(this,args)]}return args[0]}}function curry(func,arity){arity=typeof arity=="number"?arity:+arity||func.length;return createWrapper(func,4,null,null,null,arity)}function debounce(func,wait,options){var args,maxTimeoutId,result,stamp,thisArg,timeoutId,trailingCall,lastCalled=0,maxWait=false,trailing=true;if(!isFunction(func)){throw new TypeError}wait=nativeMax(0,wait)||0;if(options===true){var leading=true;trailing=false}else if(isObject(options)){leading=options.leading;maxWait="maxWait"in options&&(nativeMax(wait,options.maxWait)||0);trailing="trailing"in options?options.trailing:trailing}var delayed=function(){var remaining=wait-(now()-stamp);if(remaining<=0){if(maxTimeoutId){clearTimeout(maxTimeoutId)}var isCalled=trailingCall;maxTimeoutId=timeoutId=trailingCall=undefined;if(isCalled){lastCalled=now();result=func.apply(thisArg,args);if(!timeoutId&&!maxTimeoutId){args=thisArg=null}}}else{timeoutId=setTimeout(delayed,remaining)}};var maxDelayed=function(){if(timeoutId){clearTimeout(timeoutId)}maxTimeoutId=timeoutId=trailingCall=undefined;if(trailing||maxWait!==wait){lastCalled=now();result=func.apply(thisArg,args);if(!timeoutId&&!maxTimeoutId){args=thisArg=null}}};return function(){args=arguments;stamp=now();thisArg=this;trailingCall=trailing&&(timeoutId||!leading);if(maxWait===false){var leadingCall=leading&&!timeoutId}else{if(!maxTimeoutId&&!leading){lastCalled=stamp}var remaining=maxWait-(stamp-lastCalled),isCalled=remaining<=0;if(isCalled){if(maxTimeoutId){maxTimeoutId=clearTimeout(maxTimeoutId)}lastCalled=stamp;result=func.apply(thisArg,args)}else if(!maxTimeoutId){maxTimeoutId=setTimeout(maxDelayed,remaining)}}if(isCalled&&timeoutId){timeoutId=clearTimeout(timeoutId)}else if(!timeoutId&&wait!==maxWait){timeoutId=setTimeout(delayed,wait)}if(leadingCall){isCalled=true;result=func.apply(thisArg,args)}if(isCalled&&!timeoutId&&!maxTimeoutId){args=thisArg=null}return result}}function defer(func){if(!isFunction(func)){throw new TypeError}var args=slice(arguments,1);return setTimeout(function(){func.apply(undefined,args)},1)}function delay(func,wait){if(!isFunction(func)){throw new TypeError}var args=slice(arguments,2);return setTimeout(function(){func.apply(undefined,args)},wait)}function memoize(func,resolver){if(!isFunction(func)){throw new TypeError}var memoized=function(){var cache=memoized.cache,key=resolver?resolver.apply(this,arguments):keyPrefix+arguments[0];return hasOwnProperty.call(cache,key)?cache[key]:cache[key]=func.apply(this,arguments)};memoized.cache={};return memoized}function once(func){var ran,result;if(!isFunction(func)){throw new TypeError}return function(){if(ran){return result}ran=true;result=func.apply(this,arguments);func=null;return result}}function partial(func){return createWrapper(func,16,slice(arguments,1))}function partialRight(func){return createWrapper(func,32,null,slice(arguments,1))}function throttle(func,wait,options){var leading=true,trailing=true;if(!isFunction(func)){throw new TypeError}if(options===false){leading=false}else if(isObject(options)){leading="leading"in options?options.leading:leading;trailing="trailing"in options?options.trailing:trailing}debounceOptions.leading=leading;debounceOptions.maxWait=wait;debounceOptions.trailing=trailing;return debounce(func,wait,debounceOptions)}function wrap(value,wrapper){return createWrapper(wrapper,16,[value])}function constant(value){return function(){return value}}function createCallback(func,thisArg,argCount){var type=typeof func;if(func==null||type=="function"){return baseCreateCallback(func,thisArg,argCount)}if(type!="object"){return property(func)}var props=keys(func),key=props[0],a=func[key];if(props.length==1&&a===a&&!isObject(a)){return function(object){var b=object[key];return a===b&&(a!==0||1/a==1/b)}}return function(object){var length=props.length,result=false;while(length--){if(!(result=baseIsEqual(object[props[length]],func[props[length]],null,true))){break}}return result}}function escape(string){return string==null?"":String(string).replace(reUnescapedHtml,escapeHtmlChar)}function identity(value){return value}function mixin(object,source,options){var chain=true,methodNames=source&&functions(source);if(!source||!options&&!methodNames.length){if(options==null){options=source}ctor=lodashWrapper;source=object;object=lodash;methodNames=functions(source)}if(options===false){chain=false}else if(isObject(options)&&"chain"in options){chain=options.chain}var ctor=object,isFunc=isFunction(ctor);forEach(methodNames,function(methodName){var func=object[methodName]=source[methodName];if(isFunc){ctor.prototype[methodName]=function(){var chainAll=this.__chain__,value=this.__wrapped__,args=[value];push.apply(args,arguments);var result=func.apply(object,args);if(chain||chainAll){if(value===result&&isObject(result)){return this}result=new ctor(result);result.__chain__=chainAll}return result}}})}function noConflict(){context._=oldDash;return this}function noop(){}var now=isNative(now=Date.now)&&now||function(){return(new Date).getTime()};var parseInt=nativeParseInt(whitespace+"08")==8?nativeParseInt:function(value,radix){return nativeParseInt(isString(value)?value.replace(reLeadingSpacesAndZeros,""):value,radix||0)};function property(key){return function(object){return object[key]}}function random(min,max,floating){var noMin=min==null,noMax=max==null;if(floating==null){if(typeof min=="boolean"&&noMax){floating=min;min=1}else if(!noMax&&typeof max=="boolean"){floating=max;noMax=true}}if(noMin&&noMax){max=1}min=+min||0;if(noMax){max=min;min=0}else{max=+max||0}if(floating||min%1||max%1){var rand=nativeRandom();return nativeMin(min+rand*(max-min+parseFloat("1e-"+((rand+"").length-1))),max)}return baseRandom(min,max)}function result(object,key){if(object){var value=object[key];return isFunction(value)?object[key]():value}}function template(text,data,options){var settings=lodash.templateSettings;text=String(text||"");options=defaults({},options,settings);var imports=defaults({},options.imports,settings.imports),importsKeys=keys(imports),importsValues=values(imports);var isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";var reDelimiters=RegExp((options.escape||reNoMatch).source+"|"+interpolate.source+"|"+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+"|"+(options.evaluate||reNoMatch).source+"|$","g");text.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);source+=text.slice(index,offset).replace(reUnescapedString,escapeStringChar);if(escapeValue){source+="' +\n__e("+escapeValue+") +\n'"}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '"}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'"}index=offset+match.length;return match});source+="';\n";var variable=options.variable,hasVariable=variable;if(!hasVariable){variable="obj";source="with ("+variable+") {\n"+source+"\n}\n"}source=(isEvaluating?source.replace(reEmptyStringLeading,""):source).replace(reEmptyStringMiddle,"$1").replace(reEmptyStringTrailing,"$1;");source="function("+variable+") {\n"+(hasVariable?"":variable+" || ("+variable+" = {});\n")+"var __t, __p = '', __e = _.escape"+(isEvaluating?", __j = Array.prototype.join;\n"+"function print() { __p += __j.call(arguments, '') }\n":";\n")+source+"return __p\n}";var sourceURL="\n/*\n//# sourceURL="+(options.sourceURL||"/lodash/template/source["+templateCounter++ +"]")+"\n*/";try{var result=Function(importsKeys,"return "+source+sourceURL).apply(undefined,importsValues)}catch(e){e.source=source;throw e}if(data){return result(data)}result.source=source;return result}function times(n,callback,thisArg){n=(n=+n)>-1?n:0;var index=-1,result=Array(n);callback=baseCreateCallback(callback,thisArg,1);while(++index<n){result[index]=callback(index)}return result}function unescape(string){return string==null?"":String(string).replace(reEscapedHtml,unescapeHtmlChar)}function uniqueId(prefix){var id=++idCounter;return String(prefix==null?"":prefix)+id}function chain(value){value=new lodashWrapper(value);value.__chain__=true;return value}function tap(value,interceptor){interceptor(value);return value}function wrapperChain(){this.__chain__=true;return this}function wrapperToString(){return String(this.__wrapped__)}function wrapperValueOf(){return this.__wrapped__}lodash.after=after;lodash.assign=assign;lodash.at=at;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.chain=chain;lodash.compact=compact;lodash.compose=compose;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.createCallback=createCallback;lodash.curry=curry;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.filter=filter;lodash.flatten=flatten;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.functions=functions;lodash.groupBy=groupBy;lodash.indexBy=indexBy;lodash.initial=initial;lodash.intersection=intersection;lodash.invert=invert;lodash.invoke=invoke;lodash.keys=keys;lodash.map=map;lodash.mapValues=mapValues;lodash.max=max;lodash.memoize=memoize;lodash.merge=merge;lodash.min=min;lodash.omit=omit;lodash.once=once;lodash.pairs=pairs;lodash.partial=partial;lodash.partialRight=partialRight;lodash.pick=pick;lodash.pluck=pluck;lodash.property=property;lodash.pull=pull;lodash.range=range;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.shuffle=shuffle;lodash.sortBy=sortBy;lodash.tap=tap;lodash.throttle=throttle;lodash.times=times;lodash.toArray=toArray;lodash.transform=transform;lodash.union=union;lodash.uniq=uniq;lodash.values=values;lodash.where=where;lodash.without=without;lodash.wrap=wrap;lodash.xor=xor;lodash.zip=zip;lodash.zipObject=zipObject;lodash.collect=map;lodash.drop=rest;lodash.each=forEach;lodash.eachRight=forEachRight;lodash.extend=assign;lodash.methods=functions;lodash.object=zipObject;lodash.select=filter;lodash.tail=rest;lodash.unique=uniq;lodash.unzip=zip;mixin(lodash);lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.contains=contains;lodash.escape=escape;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.has=has;lodash.identity=identity;lodash.indexOf=indexOf;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isBoolean=isBoolean;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isNaN=isNaN;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isString=isString;lodash.isUndefined=isUndefined;lodash.lastIndexOf=lastIndexOf;lodash.mixin=mixin;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.result=result;lodash.runInContext=runInContext;lodash.size=size;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.template=template;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.all=every;lodash.any=some;lodash.detect=find;lodash.findWhere=find;lodash.foldl=reduce;lodash.foldr=reduceRight;lodash.include=contains;lodash.inject=reduce;mixin(function(){var source={};forOwn(lodash,function(func,methodName){if(!lodash.prototype[methodName]){source[methodName]=func}});return source}(),false);lodash.first=first;lodash.last=last;lodash.sample=sample;lodash.take=first;lodash.head=first;forOwn(lodash,function(func,methodName){var callbackable=methodName!=="sample";if(!lodash.prototype[methodName]){lodash.prototype[methodName]=function(n,guard){var chainAll=this.__chain__,result=func(this.__wrapped__,n,guard);return!chainAll&&(n==null||guard&&!(callbackable&&typeof n=="function"))?result:new lodashWrapper(result,chainAll)}}});lodash.VERSION="2.4.1";lodash.prototype.chain=wrapperChain;lodash.prototype.toString=wrapperToString;lodash.prototype.value=wrapperValueOf;lodash.prototype.valueOf=wrapperValueOf;forEach(["join","pop","shift"],function(methodName){var func=arrayRef[methodName];lodash.prototype[methodName]=function(){var chainAll=this.__chain__,result=func.apply(this.__wrapped__,arguments);return chainAll?new lodashWrapper(result,chainAll):result}});forEach(["push","reverse","sort","unshift"],function(methodName){var func=arrayRef[methodName];lodash.prototype[methodName]=function(){func.apply(this.__wrapped__,arguments);return this}});forEach(["concat","slice","splice"],function(methodName){var func=arrayRef[methodName];lodash.prototype[methodName]=function(){return new lodashWrapper(func.apply(this.__wrapped__,arguments),this.__chain__)}});return lodash}var _=runInContext();if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){root._=_;define(function(){return _})}else if(freeExports&&freeModule){if(moduleExports){(freeModule.exports=_)._=_}else{freeExports._=_}}else{root._=_}}).call(this)}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],14:[function(require,module,exports){"use strict";module.exports=require("./lib/core.js");require("./lib/done.js");require("./lib/es6-extensions.js");require("./lib/node-extensions.js")},{"./lib/core.js":15,"./lib/done.js":16,"./lib/es6-extensions.js":17,"./lib/node-extensions.js":18}],15:[function(require,module,exports){"use strict";var asap=require("asap");module.exports=Promise;function Promise(fn){if(typeof this!=="object")throw new TypeError("Promises must be constructed via new");if(typeof fn!=="function")throw new TypeError("not a function");var state=null;var value=null;var deferreds=[];var self=this;this.then=function(onFulfilled,onRejected){return new self.constructor(function(resolve,reject){handle(new Handler(onFulfilled,onRejected,resolve,reject))})};function handle(deferred){if(state===null){deferreds.push(deferred);return}asap(function(){var cb=state?deferred.onFulfilled:deferred.onRejected;if(cb===null){(state?deferred.resolve:deferred.reject)(value);return}var ret;try{ret=cb(value)}catch(e){deferred.reject(e);return}deferred.resolve(ret)})}function resolve(newValue){try{if(newValue===self)throw new TypeError("A promise cannot be resolved with itself.");if(newValue&&(typeof newValue==="object"||typeof newValue==="function")){var then=newValue.then;if(typeof then==="function"){doResolve(then.bind(newValue),resolve,reject);return}}state=true;value=newValue;finale()}catch(e){reject(e)}}function reject(newValue){state=false;value=newValue;finale()}function finale(){for(var i=0,len=deferreds.length;i<len;i++)handle(deferreds[i]);deferreds=null}doResolve(fn,resolve,reject)}function Handler(onFulfilled,onRejected,resolve,reject){this.onFulfilled=typeof onFulfilled==="function"?onFulfilled:null;this.onRejected=typeof onRejected==="function"?onRejected:null;this.resolve=resolve;this.reject=reject}function doResolve(fn,onFulfilled,onRejected){var done=false;try{fn(function(value){if(done)return;done=true;onFulfilled(value)},function(reason){if(done)return;done=true;onRejected(reason)})}catch(ex){if(done)return;done=true;onRejected(ex)}}},{asap:19}],16:[function(require,module,exports){"use strict";var Promise=require("./core.js");var asap=require("asap");module.exports=Promise;Promise.prototype.done=function(onFulfilled,onRejected){var self=arguments.length?this.then.apply(this,arguments):this;self.then(null,function(err){asap(function(){throw err})})}},{"./core.js":15,asap:19}],17:[function(require,module,exports){"use strict";var Promise=require("./core.js");var asap=require("asap");module.exports=Promise;function ValuePromise(value){this.then=function(onFulfilled){if(typeof onFulfilled!=="function")return this;return new Promise(function(resolve,reject){asap(function(){try{resolve(onFulfilled(value))}catch(ex){reject(ex)}})})}}ValuePromise.prototype=Promise.prototype;var TRUE=new ValuePromise(true);var FALSE=new ValuePromise(false);var NULL=new ValuePromise(null);var UNDEFINED=new ValuePromise(undefined);var ZERO=new ValuePromise(0);var EMPTYSTRING=new ValuePromise("");Promise.resolve=function(value){if(value instanceof Promise)return value;if(value===null)return NULL;if(value===undefined)return UNDEFINED;if(value===true)return TRUE;if(value===false)return FALSE;if(value===0)return ZERO;if(value==="")return EMPTYSTRING;if(typeof value==="object"||typeof value==="function"){try{var then=value.then;if(typeof then==="function"){return new Promise(then.bind(value))}}catch(ex){return new Promise(function(resolve,reject){reject(ex)})}}return new ValuePromise(value)};Promise.all=function(arr){var args=Array.prototype.slice.call(arr);return new Promise(function(resolve,reject){if(args.length===0)return resolve([]);var remaining=args.length;function res(i,val){try{if(val&&(typeof val==="object"||typeof val==="function")){var then=val.then;if(typeof then==="function"){then.call(val,function(val){res(i,val)},reject);return}}args[i]=val;if(--remaining===0){resolve(args)}}catch(ex){reject(ex)}}for(var i=0;i<args.length;i++){res(i,args[i])}})};Promise.reject=function(value){return new Promise(function(resolve,reject){reject(value)})};Promise.race=function(values){return new Promise(function(resolve,reject){values.forEach(function(value){Promise.resolve(value).then(resolve,reject)})})};Promise.prototype["catch"]=function(onRejected){return this.then(null,onRejected)}},{"./core.js":15,asap:19}],18:[function(require,module,exports){"use strict";var Promise=require("./core.js");var asap=require("asap");module.exports=Promise;Promise.denodeify=function(fn,argumentCount){argumentCount=argumentCount||Infinity;return function(){var self=this;var args=Array.prototype.slice.call(arguments);return new Promise(function(resolve,reject){while(args.length&&args.length>argumentCount){args.pop()}args.push(function(err,res){if(err)reject(err);else resolve(res)});fn.apply(self,args)})}};Promise.nodeify=function(fn){return function(){var args=Array.prototype.slice.call(arguments);var callback=typeof args[args.length-1]==="function"?args.pop():null;var ctx=this;try{return fn.apply(this,arguments).nodeify(callback,ctx)}catch(ex){if(callback===null||typeof callback=="undefined"){return new Promise(function(resolve,reject){reject(ex)})}else{asap(function(){callback.call(ctx,ex)})}}}};Promise.prototype.nodeify=function(callback,ctx){if(typeof callback!="function")return this;this.then(function(value){asap(function(){callback.call(ctx,null,value)})},function(err){asap(function(){callback.call(ctx,err)})})}},{"./core.js":15,asap:19}],19:[function(require,module,exports){(function(process){var head={task:void 0,next:null};var tail=head;var flushing=false;var requestFlush=void 0;var isNodeJS=false;function flush(){while(head.next){head=head.next;var task=head.task;head.task=void 0;var domain=head.domain;if(domain){head.domain=void 0;domain.enter()}try{task()}catch(e){if(isNodeJS){if(domain){domain.exit()}setTimeout(flush,0);if(domain){domain.enter()}throw e}else{setTimeout(function(){throw e},0)}}if(domain){domain.exit()}}flushing=false}if(typeof process!=="undefined"&&process.nextTick){isNodeJS=true;requestFlush=function(){process.nextTick(flush)}}else if(typeof setImmediate==="function"){if(typeof window!=="undefined"){requestFlush=setImmediate.bind(window,flush)}else{requestFlush=function(){setImmediate(flush)}}}else if(typeof MessageChannel!=="undefined"){var channel=new MessageChannel;channel.port1.onmessage=flush;requestFlush=function(){channel.port2.postMessage(0)}}else{requestFlush=function(){setTimeout(flush,0)}}function asap(task){tail=tail.next={task:task,domain:isNodeJS&&process.domain,next:null};if(!flushing){flushing=true;requestFlush()}}module.exports=asap}).call(this,require("_process"))},{_process:7}],20:[function(require,module,exports){var Promise=this.Promise||require("promise");function wrap(superagent){function PromiseRequest(){superagent.Request.apply(this,arguments)}PromiseRequest.prototype=Object.create(superagent.Request.prototype);PromiseRequest.prototype.end=function(cb){var _super=superagent.Request.prototype.end;var context=this;return new Promise(function(accept,reject){_super.call(context,function(err,value){if(cb){cb(err,value)}if(err){return reject(err)}accept(value)})})};var request=function(method,url){return new PromiseRequest(method,url)};request.wrap=wrap;request.get=function(url,data){var req=request("GET",url);if(data){req.query(data)}return req};request.head=function(url,data){var req=request("HEAD",url);if(data){req.send(data)}return req};request.del=function(url){return request("DELETE",url)};request.patch=function(url,data){var req=request("PATCH",url);if(data){req.send(data)}return req};request.post=function(url,data){var req=request("POST",url);if(data){req.send(data)}return req};request.put=function(url,data){var req=request("PUT",url);if(data){req.send(data)}return req};return request}module.exports=wrap(require("superagent"))},{promise:14,superagent:21}],21:[function(require,module,exports){var Emitter=require("emitter");var reduce=require("reduce");var root="undefined"==typeof window?this:window;function noop(){}function isHost(obj){var str={}.toString.call(obj);switch(str){case"[object File]":case"[object Blob]":case"[object FormData]":return true;default:return false}}function getXHR(){if(root.XMLHttpRequest&&("file:"!=root.location.protocol||!root.ActiveXObject)){return new XMLHttpRequest}else{try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}}return false}var trim="".trim?function(s){return s.trim()}:function(s){return s.replace(/(^\s*|\s*$)/g,"")};function isObject(obj){return obj===Object(obj)}function serialize(obj){if(!isObject(obj))return obj;var pairs=[];for(var key in obj){if(null!=obj[key]){pairs.push(encodeURIComponent(key)+"="+encodeURIComponent(obj[key]))}}return pairs.join("&")}request.serializeObject=serialize;function parseString(str){var obj={};var pairs=str.split("&");var parts;var pair;for(var i=0,len=pairs.length;i<len;++i){pair=pairs[i];parts=pair.split("=");obj[decodeURIComponent(parts[0])]=decodeURIComponent(parts[1])}return obj}request.parseString=parseString;request.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"};request.serialize={"application/x-www-form-urlencoded":serialize,"application/json":JSON.stringify};request.parse={"application/x-www-form-urlencoded":parseString,"application/json":JSON.parse};function parseHeader(str){var lines=str.split(/\r?\n/);var fields={};var index;var line;var field;var val;lines.pop();for(var i=0,len=lines.length;i<len;++i){line=lines[i];index=line.indexOf(":");field=line.slice(0,index).toLowerCase();val=trim(line.slice(index+1));fields[field]=val}return fields}function type(str){return str.split(/ *; */).shift()}function params(str){return reduce(str.split(/ *; */),function(obj,str){var parts=str.split(/ *= */),key=parts.shift(),val=parts.shift();if(key&&val)obj[key]=val;return obj},{})}function Response(req,options){options=options||{};this.req=req;this.xhr=this.req.xhr;this.text=this.req.method!="HEAD"?this.xhr.responseText:null;this.setStatusProperties(this.xhr.status);this.header=this.headers=parseHeader(this.xhr.getAllResponseHeaders());this.header["content-type"]=this.xhr.getResponseHeader("content-type");this.setHeaderProperties(this.header);this.body=this.req.method!="HEAD"?this.parseBody(this.text):null}Response.prototype.get=function(field){return this.header[field.toLowerCase()]};Response.prototype.setHeaderProperties=function(header){var ct=this.header["content-type"]||"";this.type=type(ct);var obj=params(ct);for(var key in obj)this[key]=obj[key]};Response.prototype.parseBody=function(str){var parse=request.parse[this.type];return parse&&str&&str.length?parse(str):null};Response.prototype.setStatusProperties=function(status){var type=status/100|0;this.status=status;this.statusType=type;this.info=1==type;this.ok=2==type;this.clientError=4==type;this.serverError=5==type;this.error=4==type||5==type?this.toError():false;this.accepted=202==status;this.noContent=204==status||1223==status;this.badRequest=400==status;this.unauthorized=401==status;this.notAcceptable=406==status;this.notFound=404==status;this.forbidden=403==status};Response.prototype.toError=function(){var req=this.req;var method=req.method;var url=req.url;var msg="cannot "+method+" "+url+" ("+this.status+")";var err=new Error(msg);err.status=this.status;err.method=method;err.url=url;return err};request.Response=Response;function Request(method,url){var self=this;Emitter.call(this);this._query=this._query||[];this.method=method;this.url=url;this.header={};this._header={};this.on("end",function(){var err=null;var res=null;try{res=new Response(self)}catch(e){err=new Error("Parser is unable to parse the response");err.parse=true;err.original=e}self.callback(err,res)})}Emitter(Request.prototype);Request.prototype.use=function(fn){fn(this);return this};Request.prototype.timeout=function(ms){this._timeout=ms;return this};Request.prototype.clearTimeout=function(){this._timeout=0;clearTimeout(this._timer);return this};Request.prototype.abort=function(){if(this.aborted)return;this.aborted=true;this.xhr.abort();this.clearTimeout();this.emit("abort");return this};Request.prototype.set=function(field,val){if(isObject(field)){for(var key in field){this.set(key,field[key])}return this}this._header[field.toLowerCase()]=val;this.header[field]=val;return this};Request.prototype.unset=function(field){delete this._header[field.toLowerCase()];delete this.header[field];return this};Request.prototype.getHeader=function(field){return this._header[field.toLowerCase()]};Request.prototype.type=function(type){this.set("Content-Type",request.types[type]||type);return this};Request.prototype.accept=function(type){this.set("Accept",request.types[type]||type);return this};Request.prototype.auth=function(user,pass){var str=btoa(user+":"+pass);this.set("Authorization","Basic "+str);return this};Request.prototype.query=function(val){if("string"!=typeof val)val=serialize(val);if(val)this._query.push(val);return this};Request.prototype.field=function(name,val){if(!this._formData)this._formData=new FormData;this._formData.append(name,val);return this};Request.prototype.attach=function(field,file,filename){if(!this._formData)this._formData=new FormData;this._formData.append(field,file,filename);return this};Request.prototype.send=function(data){var obj=isObject(data);var type=this.getHeader("Content-Type");if(obj&&isObject(this._data)){for(var key in data){this._data[key]=data[key]}}else if("string"==typeof data){if(!type)this.type("form");type=this.getHeader("Content-Type");if("application/x-www-form-urlencoded"==type){this._data=this._data?this._data+"&"+data:data}else{this._data=(this._data||"")+data}}else{this._data=data}if(!obj)return this;if(!type)this.type("json");return this};Request.prototype.callback=function(err,res){var fn=this._callback;this.clearTimeout();if(2==fn.length)return fn(err,res);if(err)return this.emit("error",err);fn(res)};Request.prototype.crossDomainError=function(){var err=new Error("Origin is not allowed by Access-Control-Allow-Origin");err.crossDomain=true;this.callback(err)};Request.prototype.timeoutError=function(){var timeout=this._timeout;var err=new Error("timeout of "+timeout+"ms exceeded");err.timeout=timeout;this.callback(err)};Request.prototype.withCredentials=function(){this._withCredentials=true;return this};Request.prototype.end=function(fn){var self=this;var xhr=this.xhr=getXHR();var query=this._query.join("&");var timeout=this._timeout;var data=this._formData||this._data;this._callback=fn||noop;xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(0==xhr.status){if(self.aborted)return self.timeoutError();return self.crossDomainError()}self.emit("end")};if(xhr.upload){xhr.upload.onprogress=function(e){e.percent=e.loaded/e.total*100;self.emit("progress",e)}}if(timeout&&!this._timer){this._timer=setTimeout(function(){self.abort()},timeout)}if(query){query=request.serializeObject(query);this.url+=~this.url.indexOf("?")?"&"+query:"?"+query}xhr.open(this.method,this.url,true);if(this._withCredentials)xhr.withCredentials=true;if("GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof data&&!isHost(data)){var serialize=request.serialize[this.getHeader("Content-Type")];if(serialize)data=serialize(data)}for(var field in this.header){if(null==this.header[field])continue;xhr.setRequestHeader(field,this.header[field])}this.emit("request",this);xhr.send(data);return this};request.Request=Request;function request(method,url){if("function"==typeof url){return new Request("GET",method).end(url)}if(1==arguments.length){return new Request("GET",method)}return new Request(method,url)}request.get=function(url,data,fn){var req=request("GET",url);if("function"==typeof data)fn=data,data=null;if(data)req.query(data);if(fn)req.end(fn);return req};request.head=function(url,data,fn){var req=request("HEAD",url);if("function"==typeof data)fn=data,data=null;if(data)req.send(data);if(fn)req.end(fn);return req};request.del=function(url,fn){var req=request("DELETE",url);if(fn)req.end(fn);return req};request.patch=function(url,data,fn){var req=request("PATCH",url);if("function"==typeof data)fn=data,data=null;if(data)req.send(data);if(fn)req.end(fn);return req};request.post=function(url,data,fn){var req=request("POST",url);if("function"==typeof data)fn=data,data=null;if(data)req.send(data);if(fn)req.end(fn);return req};request.put=function(url,data,fn){var req=request("PUT",url);if("function"==typeof data)fn=data,data=null;if(data)req.send(data);if(fn)req.end(fn);return req};module.exports=request},{emitter:22,reduce:23}],22:[function(require,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};
var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],23:[function(require,module,exports){module.exports=function(arr,fn,initial){var idx=0;var len=arr.length;var curr=arguments.length==3?initial:arr[idx++];while(idx<len){curr=fn.call(null,curr,arr[idx],++idx,arr)}return curr}},{}]},{},[1]);
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.controllers',
	'myApp.services',
	'myApp.directives',
	'myApp.filters',
	'ngCookies',
	'gettext',
	'superCache'
]).
	config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/:lang/matchmaking',
			{
				templateUrl: 'html/controllers/matchmaking.html',
				controller : 'MatchmakingCtrl'
			});

		$routeProvider.when('/:lang/',
			{
				templateUrl: 'html/controllers/rdv.html',
				controller : 'RdvCtrl'
			});
		$routeProvider.when('/:lang/party/create',
			{
				templateUrl: 'html/controllers/party-create.html',
				controller : 'PartyCreateCtrl'
			});
		$routeProvider.when('/:lang/party/waiting/:partyId',
			{
				templateUrl: 'html/controllers/party-waiting.html',
				controller : 'PartyWaitingCtrl'
			});
		$routeProvider.when('/:lang/matchmaking/waiting/:partyId',
			{
				templateUrl: 'html/controllers/matchmaking-waiting.html',
				controller : 'MatchmakingWaitingCtrl'
			});
		$routeProvider.when('/:lang/register',
			{
				templateUrl: 'html/controllers/register.html',
				controller : 'RegisterCtrl'
			});
		$routeProvider.when('/:lang/login',
			{
				templateUrl: 'html/controllers/login.html',
				controller : 'LoginCtrl'
			});
		$routeProvider.when('/:lang/profile/',
			{
				templateUrl: 'html/controllers/profile.html',
				controller : 'ProfileCtrl'
			});

		$routeProvider.when('/:lang/profile/:gameId/:plateformId/',
			{
				templateUrl: 'html/controllers/profile.html',
				controller : 'ProfileCtrl'
			});

		$routeProvider.when('/:lang/welcome',
			{
				templateUrl: 'html/controllers/rdv.html',
				controller : 'RdvCtrl',
				action     : 'welcome'
			});
		$routeProvider.when('/:lang/games',
			{
				templateUrl: 'html/controllers/games-profiles.html',
				controller : 'GamesProfilesCtrl',
				action     : 'games'
			});

		$routeProvider.when('/:lang/404/:msg?',
			{
				templateUrl: 'html/controllers/404.html',
				controller : '404Ctrl'
			});
		$routeProvider.when('/:lang/notification',
			{
				templateUrl: 'html/controllers/notification.html',
				controller : 'NotificationCtrl'
			});

		$routeProvider.when('/:lang/password/forget/:username/:forgetToken',
			{
				templateUrl: 'html/controllers/password-update.html',
				controller : 'PasswordUpdateCtrl',
				action     : 'forget'
			});

		$routeProvider.when('/:lang/password/update',
			{
				templateUrl: 'html/controllers/password-update.html',
				controller : 'PasswordUpdateCtrl',
				action     : 'update'
			});

		$routeProvider.when('/:lang/users/connected',
			{
				templateUrl: 'html/controllers/list-users.html',
				controller : 'ListUsersCtrl'
			});

		$routeProvider.when('/:lang/annonce/create',
			{
				templateUrl: 'html/controllers/annonce-create.html',
				controller : 'AnnonceCreateCtrl'
			});

		$routeProvider.when('/:lang/forum/',
			{
				templateUrl: 'html/controllers/forum.html',
				controller : 'ForumCtrl'
			});

		$routeProvider.when('/:lang/destiny/profile/:username',
			{
				templateUrl: 'html/controllers/profile-destiny.html',
				controller : 'ProfileDestinyCtrl'
			});

		$routeProvider.otherwise({redirectTo: '/fr'});

	}]);

angular.module('myApp.controllers', []);
angular.module('myApp.services', []);
angular.module('myApp.directives', []);
angular.module('myApp.filters', []);

angular.module('myApp').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('fr', {"<span class=\"title\">FAQ: </span><br>Without an Esbattle account, you only can create an announcement. To create or join a party, an account is required :)":"<span class=\"title\"><b>FAQ: </b></span><br/>- Sans compte Esbattle, vous pouvez seulement créer une annonce. Pour pouvoir créer ou rejoindre une partie, l'inscription au site est requis.<br/>- Partie: Une partie permet de proposer aux joueurs de se regrouper pour un raid, un assaut, une mission. Vous pouvez choisir l'heure à laquelle vous souhaitez démarrer, ainsi que le nombre de slots.<br/> Annonce: Une annonce comme son nom l'indique est juste un message si par exemple, vous recherchez un joueur, ou un raid (etc) sans avoir l'envie de créer et d'organiser une partie<br/>- Créer une partie: Lorsque vous venez de créer une partie, une URL vous sera transmise pour pouvoir la partager sur des forums, ou d'autres sites internet. Lorsqu'un joueur rejoindra votre partie, une notification apparaitra.","<span>IMPORTANT :</span>After creating the party, it will be possible to invit/promote some players or cancel the party. However, after two players in the party, it will unfortunately not be possible to cancel the party! If you leave the party, the second player will be promoted as the creator of the party. Please check your information before creating!":"<span>IMPORTANT :</span>Après avoir créé la partie, il sera possible d'inviter des joueur, d'annuler la partie mais pas de la modifier. Cependant, lorsque deux joueurs sont confirmés dans la partie, il n'est plus possible d'annuler la partie. Si vous quittez la partie, le second joueur sera promu en tant que créateur. Donc merci de vérifier vos informations avant de créer une partie !","A new player joined":"Un nouveau joueur a rejoint","A player leave":"Un joueur a quitté","ALL FIELDS ARE REQUIRED":"TOUS LES CHAMPS DOIVENT ETRE REMPLIS","Accept":"Accepter","Actions":"Actions","All":"Tous","Announcement":"Annonce","Appointment not found":"Rendez vous non trouvé","Are you sure to kick :":"Êtes-vous sûr de vouloir kicker:","Back":"Retour","Bad Username or Password.":"Mauvais nom d'utilisateur ou mot de passe.","Choose a character":"Choisissez un personnage","Class":"Class","Confirm Password":"Confirmez votre mot de passe","Create a party":"Créer une partie","Create a profile for this game and join !":"Créer un profil pour ce jeu et rejoignez !","Create an esbattle account to get your character from Destiny every time on www.esbattle.com.<br>You will also be able to to schedule party and join an existing party.<br><br>Your GamerTag or PSN ID will be used to get your Destiny characters.<br><br>A valid email is required if you forgot your password, we will send you an email to verify your\tidentity.<br>":"Creer un compte esbatte pour avoir vos personnages de Destiny sur www.esbattle.com.<br>Vous pourrez alors préparer une partie ou en rejoindre une existante<br><br>VotreGamerTag ou PSN ID sera utilisé pour récupérer vos personnages de Destiny<br><br>Un email valide est nécessaire si vous oubliez votre mot de passe, nous vous enverrons un email pour vérifier votre identité<br>","Creator":"Createur","Cropta's End":"La Chute de Cropta","Decline":"Refuser","Description":"Description","Email":"Adresse email","Email Address":"Adresse email","Ended":"Terminé","English":"Anglais","Enter a description":"Entrer une description","Enter your informations or":"Entrez vos informations ou","Enter your login and password":"Entrez votre login et mot de passe","Esbattle username":"Compte Esbattle","Find":"Chercher","Forget login or password ?":"Mot de passe oublié ?","French":"Français","Game":"Jeu","Game Infos for {{game.name}}":"Infos de jeux pour {{game.name}}","Game Profil":"Profil de jeux","GamerTag or PSN ID":"GamerTag ou PSN ID","Gamertag":"Gamertag","Guardian":"Gardien","Home":"Accueil","If you leave this page, the matchmaking will be cancel":"Si vous quittez cette page, le matchmaking sera annulé","Infos":"Infos","Kick":"Rejeter","Leave":"Quitter","Level":"Niveau","Login":"Connexion","Login !":"Connexion !","Login Esbattle":"Login Esbattle","Logout":"Déconnexion","Mail already send. Please check your mailBox (and your spam box)":"Email déjà envoyé. Merci de vérifier votre boite email (et votre dossier spam)","Mail send. Please check your mailBox (and your spam box)":"Email envoyé. Merci de vérifier votre boite email (et votre dossier spam)","My partys":"Mes parties","New announcement":"Nouvelle annonce","New character":"Nouveau personnage","New party on":"Nouvelle partie sur","Nightfall":"Nuit noire","No":"Non","Notification":"Notification","Notifications":"Notifications","OR":"OU","Open":"Ouvert","Party":"Partie","Password":"Mot de passe","Password Forgotten ?":"Mot de passe oublié ?","Password Updated !":"Mot de passe mis à jour !","Passwords doesn't match":"Les mots de passe ne correspondent pas","Personal Infos":"Informations personelles","Platform":"Platformes","Platform:":"Plateforme:","Player":"Joueur","Please check your GamerTag or PSN ID, we didn't found any Destiny characters":"Merci de vérifier votre GamerTag ou PSN ID, nous ne trouvons aucun personnage sur Destiny","Please waiting, we are looking for players...":"Merci de patienter, nous recherchons des joueurs...","Post an announcement":"Poster une annonce","Profil Name":"Nom du profil","Promote":"Nommer chef de groupe","Register":"Inscription","Register !":"Inscription !","Register on Esbattle.com":"Inscription sur Esbattle.com","Retrieve my account !":"Récupérer mon compte !","Send":"Envoyer","Send it":"Envoyer","Slots":"Slots","Sorry, you have been kicked by":"Désolé, vous avez été exclu par","Start":"Début","Start:":"Début:","Story":"Histoire","Story Challenge":"Histoire épique","Strike":"Assaut","Team":"Equipe","The username is already used.":"Ce nom d'utilisateur est déjà pris","This email is already used.":"Cet email est déjà pris","Tomorrow":"Demain","Update":"Mettre à jour","Update Password":"Mettre à jour le mot de passe","Update my password !":"Mettre à jour mon mot de passe !","Url of the party:":"Url de la partie:","Use this character":"Utiliser ce personnage","Username":"Nom d'utilisateur","Username on this game":"Nom d'utilisateur sur ce jeu","Vault of Glass":"Caveau de Verre","VaultOfGlass":"CaveauDeVerre","Waiting Players":"Joueurs voulant rejoindre la partie","Weekly Heroic Strike":"Assaut épique de la semaine","When":"Quand:","Yes":"Oui","You have been accepted by":"Vous avez été accepté par","You have been promoted as leader by":"Vous avez été promu comme chef par","Your gamertag":"Votre gamertag","Your message":"Votre message","an error occured, please try again later, sorry for the inconvenience":"une erreur est survenue, essayez plus tard, désolé pour le dérangement","create an account":"créer un compte","daily":"du jour","epic":"épique","from":"de","has leave. You lead":"a quitté. Vous contrôlez ","hunter":"chasseur","join the party !":"rejoins la partie !","on":"sur","online":"en ligne","password doesn't match":"Les mots de passe ne correspondent pas","this party":"cette partie","titan":"titan","to save your character for the next time !":"pour sauvegarder votre personnage la prochaine fois !","warlock":"arcaniste","your annoncement has been send and will appear in few second, please wait":"votre annonce a été envoyé et va apparaitre dans quelques secondes, merci de patienter","Ask to join the party":"Demander à rejoindre la partie","Formated Party":"Partie préformatée","Personalized Party":"Partie Personnalisée","This party is ended, create a new party !":"Cette partie est terminée, créez une nouvelle partie !","<span class=\"title\">What's new: 12 jan 2015</span><br>New Design and new feature :<br>Create an announcement with your destiny character, just put your plateform and your GamerTag ou PSN ID !<br>Choose your games console and watch all announcement or schedule party.<br>Use tag like #raid, #cropta, #caveaudeverre, #level30 to find easily what you want !<br>Create a schedule party easily with our new interface !":"<span class=\"title\">What's new: 12 jan 2015</span><br>Nouveau design et nouvelle fonctionnalité :<br>Créer une annonce avec votre personnage de Destiny, renseignez juste votre platefome et votre GamerTag ou PSN ID !<br>Sélectionnez une console de jeux et regardez toutes les annonces ou les parties planifiées<br>Utilisez les tags comme #raid, #cropta, #caveaudeverre, #level30 pour trouvez facilement ce que vous voulez!<br>Créer plus facilement une partie planifiée avec notre nouvelle interface !","<span class=\"title\">FAQ: </span><br>Without an Esbattle account, you only can create an accouncement. To create or join a party, an account is required :)":"<span class=\"title\">FAQ: </span>Sans inscription, vous pouvez seulement poster des annonces. Pour créer ou rejoindre une partie, un compte Esbattle est requis :)","<span class=\"title\">What's new: 10 jan 2015</span><br> With this new version, it's more simple to user the website. Now, just with your gamertag, all your characters will be automai":"<span class=\"title\">Nouveautés du 10 jan 2015</span> With this new version, it's more simple to user the website. Now, just with your gamertag, all your characters ","Join this party to see player's gamertag":"Rejoignez cette partie pour voir le gamertag des joueurs","Register with your email address":"S'enregistrer avec votre adresse email","Create a profil for this game and join !":"Créer un profil pour ce jeu et rejoignez !"});
/* jshint +W100 */
}]);
angular.module('myApp.controllers').controller('404Ctrl',
	['$scope','$routeParams',
		function ($scope,$routeParams) {
			'use strict';
			$scope.msg = $routeParams.msg;
			console.log($scope.msg);
		}
	]
);

angular.module('myApp.controllers').controller('AnnonceCreateCtrl',
	['$scope','rdv','$location','$filter','user','$rootScope','redirection','lang',
		function ($scope,rdv,$location,$filter,user,$rootScope,redirection,lang) {
			'use strict';

			$scope.lang = lang.getCurrent();

			$scope.currentUser = user.get();

		}
	]
);

angular.module('myApp.controllers').controller('ForumCtrl',
	['$scope','$routeParams',
		function ($scope,$routeParams) {
			'use strict';

		}
	]
);

angular.module('myApp.controllers').controller('GamesProfilesCtrl',
    ['$scope','user','rdv','$routeParams','redirection','lang',
        function ($scope,user,rdv,$routeParams,redirection,lang) {
            'use strict';
	        $scope.lang = lang.getCurrent();

	        $scope.currentUser = user.get();
			$scope.aProfils = [];
			if($scope.currentUser !== null){
				$scope.aProfils = $scope.currentUser.userGame;
			}


	        rdv.getFormInfo().then(function(data){
		        $scope.plateforms = data.plateforms;
		        $scope.games = data.games;
		        $scope.plateform = $scope.plateforms[0];
		        $scope.game = $scope.games[0];
	        });


	        $scope.submitFormGameInfo = function(){
		        if($scope.formGameProfil.$valid === false){
			        return;
		        }
		        $scope.formGameInfoUpdate = false;

				if(typeof $scope.profilId  === "undefined" || $scope.profilId  === ""){
					user.createUserGame($scope.plateform.id,$scope.game.id,$scope.profilName,$scope.gameUsername,$scope.data_1,$scope.data_2,$scope.data_3,$scope.data_4).success(function(data){
						$scope.aProfils = data.userGame;
						$scope.formGameInfoUpdate = true;
						$scope.$broadcast('refreshProfil');
					});
				}else {
					user.updateUserGame($scope.plateform.id,$scope.game.id,$scope.profilId,$scope.profilName,$scope.gameUsername,$scope.data_1,$scope.data_2,$scope.data_3,$scope.data_4).success(function(data){
						$scope.aProfils = data.userGame;
						$scope.formGameInfoUpdate = true;
						$scope.$broadcast('refreshProfil');
					});
				}
	        };

			$scope.selectProfil = function(profil){

				$scope.profilId = (profil!==null) ? profil.id : '';
				$scope.profilName = (profil!==null) ? profil.gameProfilName : '';
				$scope.gameUsername = (profil!==null) ? profil.gameUsername : '';
				$scope.data_1 = (profil!==null) ? profil.data1 : '';
				$scope.data_2 = (profil!==null) ? parseInt(profil.data2) : '';
				$scope.data_3 = (profil!==null) ? profil.data3 : '';
				$scope.data_4 = (profil!==null) ? profil.data4 : '';

				if(profil !== null){
					for(var keyP in $scope.plateforms){
						if($scope.plateforms[keyP].id == profil.plateform.id){
							$scope.plateform = $scope.plateforms[keyP];
						}
					}

					for(var keyG in $scope.games){
						if($scope.games[keyG].id == profil.game.id){
							$scope.game = $scope.games[keyG];
						}
					}
				}

			};
        }
    ]
);

angular.module('myApp.controllers').controller('ListUsersCtrl',
	['$scope','$routeParams','user','socket',
		function ($scope,$routeParams,user,socket) {
			'use strict';


			var currentUser = null;

			var refreshData = function() {
				user.getAll().success(function (data, status, headers, config) {
					console.log(data);
					console.log('listuser ctrl', socket.listUsers);

					for (var key in data) {
						data[key].connected = false;
						data[key].me = false;
						data[key].canAddToFriendList = true;
						data[key].canAddToBlackList = true;

						if (socket.listUsers[data[key].username]) {
							data[key].connected = true;
						}

						if(currentUser !== null && data[key].username === currentUser.username){
							data[key].me = true;
						}
					}

					$scope.aUsers = data;
				});

			};


			var init = function(){
				var refreshPromise = user.refresh();
				if(refreshPromise !== false){
					refreshPromise.success(function(data){
						console.log('user refresh',data);
						currentUser = data;
						socket.getUserList();
					});
				} else {
					socket.getUserList();
				}
			};


			$scope.$on('updateListUsers',function(event,data){
				console.log('updateListUsers',data);
				refreshData();
			});

			$scope.addToFriendList = function(friendUsername){
				var addFriendPromise = user.addFriend(friendUsername);
				if(addFriendPromise !== false){
					addFriendPromise(friendUsername).success(function(data){

					});
				}
			};

			$scope.removeFromFriendList = user.removeFriend;

			init();

		}
	]
);

angular.module('myApp.controllers').controller('LoginCtrl',
    ['$scope','user','redirection','lang',
        function ($scope,user,redirection,lang) {
			'use strict';

	        $scope.lang = lang.getCurrent();

			$scope.registerPageUrl = redirection.getRegisterPageUrl();

			var tentative = 0;
			var maxTentative = 2;
			$scope.bDisplayForgetPasswordForm = false;
			$scope.bDisplayForgetPasswordFormMailSend = false;

			$scope.displayForgetPasswordForm = function(){
				$scope.bDisplayForgetPasswordForm = true;
			};

	        $scope.login = function(){
		        if($scope.loginForm.$valid === false){
			        return;
		        }

		        user.log($scope.username,$scope.password).success(function(data){
			        $scope.userInfo = data;
					redirection.goBack();
			        $scope.$broadcast('refreshProfil');
		        }).error(function(data){
					$scope.error = data.msg;
					if(data.msg==='connection_refused'){
						tentative++;

						if(tentative > maxTentative){
							$scope.displayForgetPasswordForm();
						}
					}
				});
	        };

			$scope.forgetPassword = function(){
				user.forgetPassword($scope.email).success(function(data){
					$scope.bDisplayForgetPasswordFormMailSend = true;

				}).error(function(data){
					$scope.errorForgetPassword = data.msg;
				});
			};

        }
    ]
);

angular.module('myApp.controllers').controller('MatchmakingCtrl',
	['$scope','matchmaking','user','redirection','$filter',
		function ($scope,matchmaking,user,redirection,$filter) {
			'use strict';

			$scope.currentUser = user.get();
			$scope.matchmakingTemplate = null;
			$scope.profilSelected = null;

			var updateProfilsAvailable = function(){
				if($scope.currentUser !== null && $scope.game !== null){
					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame,null,null);
					if($scope.profils[0] && $scope.profilSelected === null){
						$scope.profilSelected = $scope.profils[0];
					}
				}
			};

			updateProfilsAvailable();

			/**
			 * récupère les configs pour la selection du type de matchmaking
			 */
			matchmaking.getConf().success(function(data){

				var groupOfTemplate = {};
				for(var key in data){
					if(!groupOfTemplate[data[key].description]) {
						groupOfTemplate[data[key].description] = [];
					}
					data[key].concatTags = "";
					for(var keyTag in data[key].tags){
						data[key].concatTags += "#"+data[key].tags[keyTag].nom+" ";
					}
					groupOfTemplate[data[key].description].push(data[key]);
				}
				$scope.groupOfTemplate = groupOfTemplate;
			});

			/**
			 * lance le matchmaking
			 */
			$scope.join = function(){
				if($scope.joinMatchmakingForm.$valid === false){
					return;
				}
				matchmaking.join($scope.templateSelectedModel.id,$scope.profilSelected.id).success(function(data){
					redirection.goToMatchmakingId(data.id);
				});
			};

			/**
			 * selectionne un type de matchmaking
			 * @param template
			 */
			$scope.selectGroupOfTemplate = function(template){
				$scope.matchmakingTemplate = template;
				$scope.templateSelectedModel = template[0];
			};

			$scope.createProfil = function(){
				redirection.goToGamesPage();
			};
		}
	]
);

angular.module('myApp.controllers').controller('MatchmakingWaitingCtrl',
    ['$scope','rdv','$routeParams','user','$location','$filter','redirection','$interval','activity','lang',
        function ($scope,rdv,$routeParams,user,$location,$filter,redirection,$interval,activity,lang) {
            'use strict';

	        $scope.lang = lang.getCurrent();

			$scope.currentUser = user.get();

			var manageAutorisation = function(){
				$scope.isLeader = false;
				$scope.canJoin = true;
				$scope.imOnGroup = false;

				if ($scope.currentUser !== null) {

					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame, $scope.rdv.game.id, $scope.rdv.plateform.id);

					if ($scope.profils[0]) {
						$scope.profilSelected = $scope.profils[0];
					}

					if ($scope.rdv.leader && $scope.rdv.leader.username === $scope.currentUser.username) {
						$scope.isLeader = true;
					}

					for (var key in $scope.rdv.users) {
						if ($scope.rdv.users[key].user.username === $scope.currentUser.username) {
							$scope.canJoin = false;
							$scope.imOnGroup = true;
						}
					}

					for (var key2 in $scope.rdv.usersInQueue) {
						if ($scope.rdv.usersInQueue[key2].user.username === $scope.currentUser.username) {
							$scope.canJoin = false;
						}
					}
				} else {
					$scope.canJoin = false;
				}
			};

	        var getRdvDetails = function(){
		        rdv.get($routeParams.partyId).success(function (data) {
			        $scope.rdv = data;

			        $scope.isFull = (data.users.length === data.nbParticipant);
			        manageAutorisation();
		        });
	        };

	        var refreshData = function() {
		        if($scope.currentUser !== null){
			        user.updateOnline($scope.currentUser).success(function(data){
				        getRdvDetails();
			        });
		        } else {
			        getRdvDetails();
		        }
	        };

	        $scope.leave = function(userId){
				stopAutoRefreshData();
		        rdv.leave($scope.rdv.id,userId,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
			        $scope.rdv = data;
					autoRefreshData();
		        });
	        };

			$scope.currentUrl = $location.absUrl();


			var refreshTime = 12000;
			var autoRefreshData = function(){
				stopAutoRefreshData();
				$scope.intervalId = $interval(function(){
					refreshData();
				}, refreshTime);
			};

			var stopAutoRefreshData = function(){
				$interval.cancel($scope.intervalId);
			};

			refreshData();
			autoRefreshData();

        }
    ]
);

angular.module('myApp.controllers').controller('NotificationCtrl',
    ['$scope','$routeParams','redirection','rdv','$filter','user','$interval','$rootScope',
        function ($scope,$routeParams,redirection,rdv,$filter,user,$interval,$rootScope) {
            'use strict';

	        $scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();

	        $scope.userInfo = user.get();
	        /**
	         * autoRefreshDataNotif
	         */
	        var refreshDataNotif = function(){
		        rdv.getNotifications().success(function(data){
			        if($scope.userInfo === null){
				        return;
			        }
			        $scope.notifications = $filter('filterNotification')(data,$scope.userInfo.id);
			        $rootScope.notificationsAlreadyRead = $scope.notifications;
		        });
	        };

	        var refreshTime = 12000;
	        var autoRefreshDataNotif = function(){
		        $interval.cancel($scope.intervaNotificationId);

		        if (angular.isDefined($scope.intervaNotificationId)) {
			        return;
		        }

		        $scope.intervaNotificationId = $interval(function(){
			        refreshDataNotif();
		        }, refreshTime);
	        };

	        refreshDataNotif();
	        autoRefreshDataNotif();
        }
    ]
);

angular.module('myApp.controllers').controller('PartyCreateCtrl',
	['$scope','rdv','$location','$filter','user','$rootScope','redirection','lang','gettextCatalog',
		function ($scope,rdv,$location,$filter,user,$rootScope,redirection,lang,gettextCatalog) {
			'use strict';

			$scope.lang = lang.getCurrent();

			$scope.currentUser = user.get();

			if($scope.currentUser === null){
				redirection.goToLogin();
				return;
			}

			$scope.dureeHours = 1;
			$scope.dureeMinutes = 0;

			$scope.game = null;
			$scope.plateform = null;
			$scope.profilSelected = null;

			rdv.getFormInfo().then(function(data){
				$scope.formInfo = data;
				$scope.game = $scope.formInfo.games[0];
			});

			$scope.today = new Date();

			$scope.day = new Date($scope.today.getFullYear(), $scope.today.getMonth(), $scope.today.getDate(), $scope.today.getHours(), $scope.today.getMinutes()+5,$scope.today.getSeconds());

			$scope.startHours = $scope.today.getHours();
			$scope.startMinutes = $scope.today.getMinutes();

			$scope.dayPlusTwo = new Date();
			$scope.dayPlusTwo.setTime($scope.dayPlusTwo.getTime() + 2 * 24 * 3600 * 1000);

			$scope.$watch('game',function(newValue,oldValue){
				updateProfilsAvailable();
			});

			$scope.$watch('profilSelected',function(newValue,oldValue){
				if(typeof newValue !== "undefined" && newValue !== null){
					$scope.updatePlateform(newValue.plateform);
				}
			});

			var updateProfilsAvailable = function(){
				if($scope.currentUser !== null && $scope.game !== null){
					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame,$scope.game.id,null);
				}
			};

			var updateTime = function(){
				var rdvDate = new Date();
				var now = new Date();
				rdvDate.setHours($scope.startHours);
				rdvDate.setMinutes($scope.startMinutes);

				$scope.bDemain = false;
				if(now.getTime() > rdvDate.getTime()){
					rdvDate.setTime(rdvDate.getTime() + 1 * 24 * 3600 * 1000);
					$scope.bDemain = true;
				}

				$scope.day = rdvDate;
			} ;

			$scope.$watch('startMinutes',function(newValue,OldValue){
				updateTime();
			});

			$scope.$watch('startHours',function(newValue,OldValue){
				updateTime();
			});

            $scope.submit = function(){

	            if($scope.myForm.$valid === false){
		            return;
	            }
                var game = $scope.game.id;
                var day = $scope.myForm.inputDayStart.$modelValue.getTime()/1000;
                var dureeHours = $scope.dureeHours;
                var dureeMinutes = $scope.dureeMinutes;
                var plateform = $scope.plateform.id;
                var tags = $scope.tags;
                var description = $scope.description;
                var slotTotal = $scope.slotTotal;
				var profilId = $scope.profilSelected.id

                rdv.add(plateform,game,tags,description,day,dureeHours+':'+dureeMinutes,slotTotal,profilId).success(function(data){
					redirection.goToRdvId(data.id);
                });
            };

			$scope.updatePlateform = function(plateform){
				$scope.plateform = plateform;
			};

			$scope.autocomplete = function(){
				var aTags = $scope.tags.split(' ');

				var previousTags = '';
				var aPreviousTags = [];
				for(var i = 0; i < aTags.length -1; i++){
					previousTags =  previousTags+aTags[i]+' ';
					aPreviousTags.push(aTags[i]);
				}

				$scope.autocompleteTag = [];
				for(var key in $scope.formInfo.tags){

					if(aPreviousTags.indexOf($scope.formInfo.tags[key].nom) > -1){
						continue;
					}
					$scope.autocompleteTag.push(previousTags +$scope.formInfo.tags[key].nom);
				}
			};

			$scope.createProfil = function(){
				redirection.goToGamesPage();
			};

			$scope.$on('templateSelectedModel',function(event,data){
				var templateSelectedModel = data[0];
				if(typeof templateSelectedModel == "undefined"){
					return;
				}
				$scope.tags = templateSelectedModel.concatTags;
				$scope.description = gettextCatalog.getString(templateSelectedModel.description);
				$scope.slotTotal = templateSelectedModel.nbParticipant;
			});

		}
	]
);

angular.module('myApp.controllers').controller('PartyWaitingCtrl',
    ['$scope','rdv','$routeParams','user','$location','$filter','redirection','$interval','activity','lang',
        function ($scope,rdv,$routeParams,user,$location,$filter,redirection,$interval,activity,lang) {
            'use strict';

	        $scope.lang = lang.getCurrent();

	        $scope.partyCreateUrl = redirection.getCreatePartyPageUrl();

			$scope.currentUser = user.get();

	        $scope.profilSelected = null;

			var manageAutorisation = function(){
				$scope.isLeader = false;
				$scope.canJoin = true;
				$scope.imOnGroup = false;

				if ($scope.currentUser !== null) {

					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame, $scope.rdv.game.id, $scope.rdv.plateform.id);

					if ($scope.rdv.leader && $scope.rdv.leader.username === $scope.currentUser.username) {
						$scope.isLeader = true;
					}

					for (var key in $scope.rdv.users) {
						if ($scope.rdv.users[key].user.username === $scope.currentUser.username) {
							$scope.canJoin = false;
							$scope.imOnGroup = true;
						}
					}

					for (var key2 in $scope.rdv.usersInQueue) {
						if ($scope.rdv.usersInQueue[key2].user.username === $scope.currentUser.username) {
							$scope.canJoin = false;
							$scope.imOnGroup = true;
						}
					}
				} else {
					$scope.canJoin = false;
					$scope.imOnGroup = false;
					$scope.isLeader = false;
				}
			};

	        var getRdvDetails = function(){
		        rdv.get($routeParams.partyId).success(function (data) {
			        $scope.rdv = data;

			        $scope.isFull = (data.users.length === data.nbParticipant);

			        $scope.isEnded = rdv.isEnded($scope.rdv);
			        $scope.isLive = rdv.isLive($scope.rdv);

			        updateProfilsAvailable();

			        manageAutorisation();
		        });
	        };

	        var refreshData = function() {
		        if($scope.currentUser !== null){
			        user.updateOnline($scope.currentUser).success(function(data){
				        getRdvDetails();
			        });
		        } else {
			        getRdvDetails();
		        }
	        };

			$scope.join = function(){
				if($scope.currentUser === null){
//@todo rediriger vers la page connexion / register
					return;
				}
				stopAutoRefreshData();

				rdv.join($scope.rdv.id,$scope.profilSelected.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};

			$scope.acceptUser = function(userId){
				stopAutoRefreshData();
				rdv.acceptUser(userId,$scope.rdv.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};

			$scope.kickUser = function(userId){
				stopAutoRefreshData();
				rdv.kickUser(userId,$scope.rdv.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};


	        $scope.leave = function(userId){
				stopAutoRefreshData();
		        rdv.leave($scope.rdv.id,userId,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
			        $scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
		        });
	        };

			$scope.promote = function(userId){
				stopAutoRefreshData();
				rdv.promote($scope.rdv.id,userId,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};

			$scope.createProfil = function(){
				redirection.goToGamesPage();
			};

			$scope.currentUrl = $location.absUrl();


			var refreshTime = 12000;
			var autoRefreshData = function(){
				stopAutoRefreshData();
				$scope.intervalId = $interval(function(){
					refreshData();
				}, refreshTime);
			};

			var stopAutoRefreshData = function(){
				$interval.cancel($scope.intervalId);
			};

	        var updateProfilsAvailable = function(){
		        if($scope.currentUser !== null && $scope.rdv !== null && $scope.rdv.game !== null && $scope.rdv.plateform !== null){
			        $scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame,$scope.rdv.game.id,$scope.rdv.plateform.id);
					if($scope.profils[0] && $scope.profilSelected === null){
				        $scope.profilSelected = $scope.profils[0];
			        }
		        }
	        };

			refreshData();
			autoRefreshData();

        }
    ]
);

angular.module('myApp.controllers').controller('PasswordUpdateCtrl',
    ['$scope','user','$route','$routeParams',
        function ($scope,user,$route,$routeParams) {
			'use strict';

			if($route.current.action === 'forget'){
				user.logByForgetToken($routeParams.username,$routeParams.forgetToken).error(function(data){
					$scope.error = data.msg;
				});
			}

			$scope.bDisplayUpdatePassword = false;

			$scope.updatePassword = function(){

				if($scope.password !== $scope.passwordVerif){
					$scope.error = 'password_not_equal';
				} else {
					user.updatePassword($scope.password).success(function(data){
						$scope.bDisplayUpdatePassword = true;
					}).error(function(data){
						$scope.error = data.msg;
					});
				}



			};

        }
    ]
);

angular.module('myApp.controllers').controller('ProfileCtrl',
    ['$scope','user','rdv','$routeParams','redirection','lang',
        function ($scope,user,rdv,$routeParams,redirection,lang) {
			'use strict';

	        $scope.lang = lang.getCurrent();

			$scope.currentUser = user.get();

			rdv.getFormInfo().then(function(data){
				$scope.plateforms = data.plateforms;
				$scope.games = data.games;

				$scope.plateform = data.plateforms[0];
				if($routeParams.plateformId){
					for(var key in data.plateforms){
						if(data.plateforms[key].id == $routeParams.plateformId){
							$scope.plateform = data.plateforms[key];
						}
					}
				}

				$scope.game = data.games[0];
				if($routeParams.gameId){
					for(var key in data.games){
						if(data.games[key].id == $routeParams.gameId){
							$scope.game = data.games[key];
						}
					}
				}

				$scope.updateFormData();

			});


			$scope.submitFormGameInfo = function(){
				if($scope.gameInfo.$valid === false){
					return;
				}
				$scope.formGameInfoUpdate = false;
				user.setUserGame($scope.plateform.id,$scope.game.id,$scope.profilName,$scope.gameUsername,$scope.data1,$scope.data2,$scope.data3,$scope.data4).success(function(data){
					$scope.formGameInfoUpdate = true;
				});
			};

			$scope.updateFormData = function(){
				$scope.formGameInfoUpdate = false;
				$scope.profilName = '';
				$scope.gameUsername = '';
				$scope.data1 = '';
				$scope.data2 = '';
				$scope.data3 = '';
				$scope.data4 = '';
				for(var key in $scope.currentUser.userGame){
					if($scope.currentUser.userGame[key].plateform.id === $scope.plateform.id){
						$scope.profilName = $scope.currentUser.userGame[key].gameProfilName;
						$scope.gameUsername = $scope.currentUser.userGame[key].gameUsername;
						$scope.data2 = $scope.currentUser.userGame[key].data2;
						$scope.data3 = $scope.currentUser.userGame[key].data3;
						$scope.data4 = $scope.currentUser.userGame[key].data4;
						$scope.data1 = $scope.currentUser.userGame[key].data1;
					}
				}
			};

			$scope.goBack = function(){
				redirection.goBack();
			};

        }
    ]
);

angular.module('myApp.controllers').controller('ProfileDestinyCtrl',
	['$scope','$routeParams',
		function ($scope,$routeParams) {
			'use strict';

		}
	]
);

angular.module('myApp.controllers').controller('RdvCtrl',
	['$scope','rdv','redirection','$route','tag','lang','$interval','user','bungie','annonce','$timeout','$filter','storage',
		function ($scope,rdv,redirection,$route,tag,lang,$interval,user,bungie,annonce,$timeout,$filter,storage) {
			'use strict';

			lang.initLang();

			$scope.currentUser = user.get();

			$scope.predicate = 'start';
			$scope.reverse = true;

			$scope.now = new Date();

			$scope.demain = new Date();
			$scope.demain.setTime($scope.demain.getTime() + 24 * 3600 * 1000);

			$scope.slotMinAvailable = 0;
			$scope.slotMaxAvailable = 6;

			$scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();
			$scope.partyCreateUrl = redirection.getCreatePartyPageUrl();
			$scope.annonceCreateUrl = redirection.getAnnonceCreateUrl();

			$scope.isLive = rdv.isLive;
			$scope.isEnded = rdv.isEnded;

			$scope.aCharacters = [];
			$scope.displayFormAnnonce = false;

			$scope.aMyRdv = [];
			$scope.aRdv = [];
			$scope.aRdvNormaux = [];

			$scope.tags = '';

			$scope.goToParty = function(id){
				redirection.goToRdvId(id);
			};


			$scope.updateTags = function(){
				var aTags = $scope.tags.split(' ');
				$scope.autoCompleteTags = tag.autoCompleteUserTags(aTags,$scope.allTags);

			};

			$scope.autoCompleteTags = [];

			$scope.allTags = [];

			rdv.getFormInfo().then(function(data){
				$scope.allTags = data.tags;
				$scope.autoCompleteTags = tag.autoCompleteUserTags([],$scope.allTags);
				$scope.aPlateforms = data.plateforms;
				setPlateformCookie();
			});

			var formatRdv = function(rdv){
				for(var key in rdv.users){
					if(rdv.users[key].user.id === rdv.leader.id){
						rdv.author = rdv.users[key];
						rdv.type = 'type_party';
					}
				}
			};


			var refreshRdvData = function(){

				annonce.get().success(function(data) {
					formatAnnonces(data);
					$scope.aRdv = $scope.aAnnoncesFormated.concat($scope.aRdvNormaux);
				});

				rdv.getAll().success(function(data) {
					// this callback will be called asynchronously
					// when the response is available
					for(var key in data){
						data[key].url = $scope.partyWaitingUrlRoot+data[key].id;
						formatRdv(data[key]);
					}

					$scope.aRdvNormaux = data;
					$scope.aRdv = $scope.aRdvNormaux.concat($scope.aAnnoncesFormated);

					//filterRdvWithMe:currentUser.id:plateformSelected:tags:slotMinAvailable:slotMaxAvailable
					if($scope.currentUser !== null){

						if(typeof $scope.plateform === "undefined"){
							var plateformId = null;
						}else {
							var plateformId = $scope.plateform.id;
						}

						//if($scope.plateform)
						$scope.aMyRdv = $filter('filterRdvWithMe')(data,$scope.currentUser.id,plateformId,$scope.tags,$scope.slotMinAvailable,$scope.slotMaxAvailable);
					}

				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});

			};

			$scope.displayWelcome = ($route.current.action === 'welcome');

			//autoRefresh
			var refreshTime = 12000;
			var autoRefreshData = function(){
				$scope.intervalId = $interval(function(){
					refreshRdvData();
				}, refreshTime);
			};


			$scope.getDestinyCharacters = function(){
				bungie.getCharacters($scope.plateform.id,$scope.plateform.bungiePlateformId,$scope.gamertag).success(function(data){
					$scope.aCharacters = data;
				}).error(function(data){
					$scope.aCharacters = [];
				});
			};

			$scope.selectedPerso = null;

			$scope.aAnnoncesFormated = [];

			var formatAnnonces = function(aAnnonces){
				var nbAnnonces = aAnnonces.length;

				for(var i=0; i< nbAnnonces;i++){
					$scope.aAnnoncesFormated[i] = {
						'id' : aAnnonces[i].id,
						'author' : aAnnonces[i].author,
						'game' : aAnnonces[i].game,
						'plateform' : aAnnonces[i].plateform,
						'tags' : aAnnonces[i].tags,
						'description' : aAnnonces[i].description,
						'start' : aAnnonces[i].created,
						'type' : 'type_annonce'
					};
				}
			};

			$scope.blockPostAnnonce = false;
			$scope.messageFormAnnonce = null;
			$scope.addAnnonce = function(){

				$scope.messageFormAnnonce = null;
				$scope.blockPostAnnonce = true;

				var userGameId = $scope.selectedPerso.id;
				var tags = $scope.annonce_tag;
				var description = $scope.annonce_description;
				annonce.create(tags,description,userGameId).success(function(data){
					$scope.annonce_tag = '';
					$scope.annonce_description = '';

					$timeout(function(){
						$scope.blockPostAnnonce = false;
					},2)

					$scope.messageFormAnnonce = 'your annoncement has been send and will appear in few second, please wait';
				}).error(function(data){
					console.error(data);
					$scope.annonce_tag = '';
					$scope.annonce_description = '';

					$timeout(function(){
						$scope.blockPostAnnonce = false;
					},2)

					$scope.messageFormAnnonce = 'an error occured, please try again later, sorry for the inconvenience';

				})
			};


			var setTypeFilter = function(){
				var type_rdv = storage.getPersistant('cookie_type_rdv');
				if(typeof type_rdv === "undefined"){
					$scope.type = 'type_all';
				} else {
					$scope.type = type_rdv;
				}
				$scope.$watch('type',function(newValue, oldValue){
					storage.setPersistant('cookie_type_rdv',newValue);
				});
			};


			var setPlateformCookie = function(){
				var plateform_rdv = storage.getPersistant('cookie_plateform_rdv_id');
				if(typeof plateform_rdv !== "undefined"){
					for(var key in $scope.aPlateforms){
						if($scope.aPlateforms[key].id == plateform_rdv){
							$scope.plateform = $scope.aPlateforms[key];
						}
					}
				}

				$scope.$watch('plateform',function(newValue, oldValue){
					if(typeof newValue !== "undefined" && newValue !== null){
						storage.setPersistant('cookie_plateform_rdv_id',newValue.id);
					}
				});
			};


			//init
			var init = function(){
				refreshRdvData();
				autoRefreshData();
				setTypeFilter();
			}

			init();
		}
	]
);

angular.module('myApp.controllers').controller('RegisterCtrl',
    ['$scope','user','$location','lang','redirection','rdv',
        function ($scope,user,$location,lang,redirection,rdv) {

	        $scope.lang = lang.getCurrent();

			rdv.getFormInfo().then(function(data){
				$scope.aPlateforms = data.plateforms;
			});

	        $scope.updateRegExpPassword = function(){
		        $scope.regExpPassword = '/'+$scope.password+'/';
	        };

	        $scope.checkPassword = function(){
		        $scope.errorPassword = false;
		        if($scope.password !== $scope.passwordverif){
			        $scope.errorPassword = true;
			        return;
		        }
	        };

	        $scope.submit = function(){


		        if($scope.registerForm.$valid === false ||  $scope.errorPassword === true){
			        return;
		        }

				$scope.username_already_taken = false;
				$scope.email_already_taken = false;
				$scope.gamertag_not_found = false;
		        user.register($scope.email,$scope.password,$scope.username,$scope.plateform.id,$scope.gamerTag).success(function(data){
			        redirection.goWelcomeHome();
		        }).error(function(data){
					console.log('error',data);
					$scope.aError = data;

					if(data.aError) {

						for (var key in data.aError) {

							console.log(data.aError[key]);
							if (data.aError[key] === 'username_already_taken') {
								$scope.username_already_taken = true;
							}

							if (data.aError[key] === 'email_already_taken') {
								$scope.email_already_taken = true;
							}

							if (data.aError[key] === 'gamertag_not_found') {
								$scope.gamertag_not_found = true;
							}
						}
					}
				});
	        };

        }
    ]
);

angular.module('myApp.directives')
	.directive('lfgFacebook', ['$window','$document',
		function($window,$document) {
			'use strict';
			return {
				link : function(){

					window.fbAsyncInit = function() {
						FB.init({
							appId      : '1482107158698739',
							xfbml      : true,
							version    : 'v2.0'
						});
					};

					(function(d, s, id){
						var js, fjs = d.getElementsByTagName(s)[0];
						if (d.getElementById(id)) {return;}
						js = d.createElement(s); js.id = id;
						js.src = "//connect.facebook.net/fr_FR/sdk.js";
						fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-facebook.html'
			};
		}
	]
);

angular.module('myApp.directives')
	.directive('lfgFooter', ['lang','$location',
		function(lang,$location) {
			return {
				link: function($scope, element, attrs) {
					lang.initLang();
					$scope.lang = lang.getCurrent();

					$scope.updateLang = function(langSelected){
						lang.change(langSelected);
						$scope.lang = langSelected;
					};

					var switchLangUrl = function(newLang){
						return $location.absUrl().replace($scope.lang,newLang);
					};

					$scope.switchLangUrlFr = switchLangUrl('fr');
					$scope.switchLangUrlEn = switchLangUrl('en');

				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-footer.html'
			};
		}
	]
);

angular.module('myApp.directives')
	.directive('lfgHeader', ['user','rdv','tag','lang','redirection','$interval','$filter','$document',
		function(user,rdv,tag,lang,redirection,$interval,$filter,$document) {
			'use strict';
			return {
				scope:{
					'lfgHeader':'='
				},
				link: function($scope, element, attrs) {
					lang.initLang();
					$scope.lang = lang.getCurrent();

					$scope.logout = function(){
						user.logout();
						$scope.userInfo = null;
						redirection.goHome();
					};




					$scope.homeUrl = redirection.getHomePageUrl();
					$scope.partyCreateUrl = redirection.getCreatePartyPageUrl();
					$scope.profilGameUrl = redirection.getProfilGamePageUrl();
					$scope.loginPageUrl = redirection.getLoginPageUrl();
					$scope.registerPageUrl = redirection.getRegisterPageUrl();
					$scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();
					$scope.gamesUrl = redirection.getGamesPageUrl();
					$scope.notifUrl = redirection.getNotifPageUrl();
					$scope.matchmakingUrl = redirection.getMatchmakingPageUrl();
					$scope.listUsersUrl = redirection.getListUsersUrl();

                    $scope.userInfo = user.get();


					/**
					 * autoRefreshDataNotif
					 */
					var refreshDataNotif = function(){
						rdv.getNotifications().success(function(data){
							if($scope.userInfo === null){
								return;
							}
							$scope.notifications = [];
							$scope.allMyNotifications = $filter('filterNotification')(data,$scope.userInfo.id);
							for(var key in $scope.allMyNotifications){
								if($scope.allMyNotifications[key].unread === true){
									$scope.notifications.push($scope.allMyNotifications[key]);
								}
							}

							if($scope.notifications.length > 0){
								$document[0].title = '('+$scope.notifications.length+') Esbattle.com';
							} else {
								$document[0].title = 'Esbattle.com';
							}

						});
					};

					var refreshTime = 12000;
					var autoRefreshDataNotif = function(){
						$interval.cancel($scope.intervaNotificationId);

						if (angular.isDefined($scope.intervaNotificationId)) {
							return;
						}

						$scope.intervaNotificationId = $interval(function(){
							refreshDataNotif();
						}, refreshTime);
					};

					refreshDataNotif();
					autoRefreshDataNotif();

				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-header.html'
			};
		}
	]
);

angular.module('myApp.directives')
	.directive('lfgInit', ['user','socket',
		function(user,socket) {
			'use strict';
			return {
				link: function($scope, element, attrs) {

					var currentUser = user.get();
					if(currentUser !== null){
						socket.addUser(currentUser.username);
					}

				},
				restrict: 'E'
			};
		}
	]
);

angular.module('myApp.directives')
	.directive('lfgInterval', ["$interval",
		function($interval) {
			'use strict';
			return {
				replace :true,
				scope:{
					'lfgInterval':'='
				},
				link: function($scope, element, attrs) {

					element.on('$destroy', function() {
						$interval.cancel($scope.lfgInterval);
						$scope.lfgInterval = undefined;
					});
				},
				restrict: 'A'
			};
		}
	]
);

angular.module('myApp.directives')
    .directive('lfgMatchmaking', ['matchmaking','user','redirection','$filter',
        function(matchmaking,user,redirection,$filter) {
            'use strict';
            return {
                scope:{
                    'lfgProfile':'='
                },
                link: function($scope, element, attrs) {

	                $scope.matchmakingTemplate = null;

	                /**
	                 * récupère les configs pour la selection du type de matchmaking
	                 */
	                matchmaking.getConf().success(function(data){

		                var groupOfTemplate = {};
		                for(var key in data){
			                if(!groupOfTemplate[data[key].description]) {
				                groupOfTemplate[data[key].description] = [];
			                }
			                data[key].concatTags = "";
			                for(var keyTag in data[key].tags){
				                data[key].concatTags += "#"+data[key].tags[keyTag].nom+" ";
			                }
			                groupOfTemplate[data[key].description].push(data[key]);
		                }
		                $scope.groupOfTemplate = groupOfTemplate;
	                });

	                /**
	                 * selectionne un type de matchmaking
	                 * @param template
	                 */
	                $scope.selectGroupOfTemplate = function(template){
		                $scope.matchmakingTemplate = template;
		                $scope.templateSelectedModel = template[0];
	                };

	                $scope.$watch('templateSelectedModel',function(newValue,oldValue){
		                $scope.$emit('templateSelectedModel',[newValue]);
	                });

                },
                restrict: 'E',
                templateUrl: 'html/directives/lfg-matchmaking.html'
            };
        }
    ]
);

angular.module('myApp.directives')
    .directive('lfgProfileBungie', [
        function(user) {
            'use strict';
            return {
                scope:{
                    'lfgProfileBungie':'=',
                    'userGame':'=',
                    'withPlateform':'@'
                },
                link: function($scope, element, attrs) {

                },
                restrict: 'E',
                templateUrl: 'html/directives/lfg-profile-bungie.html'
            };
        }
    ]
);

angular.module('myApp.directives')
    .directive('lfgProfile', ['user','storage',
        function(user,storage) {
            'use strict';
            return {
                scope:{
                    'lfgProfile':'=',
	                'selectedPerso':'=',
	                'aUserGame':'=',
                    'withPlateform':'@'
                },
                link: function($scope, element, attrs) {

	                $scope.currentUser = user.get();

	                $scope.selectPerso = function(persoSelected){
		                $scope.selectedPerso = persoSelected;
                        storage.setPersistant('cookie_selected_profil_id',persoSelected.id);
	                };

                    var setSelectedPerso = function(){
                        if($scope.currentUser !== null){
                            $scope.aUserGame = $scope.currentUser.userGame;
                        }

                        var selectedProfilCookieId = storage.getPersistant('cookie_selected_profil_id');
                        if(typeof selectedProfilCookieId !== "undefined"){
                            for(var key in $scope.aUserGame){
                                if($scope.aUserGame[key].id == selectedProfilCookieId){
                                    $scope.selectedPerso = $scope.aUserGame[key];
                                }
                            }
                        }

                        if($scope.selectedPerso === null && $scope.currentUser !== null && $scope.aUserGame.length > 0){
                            $scope.selectedPerso = $scope.aUserGame[0];
                        }
                    };

                    setSelectedPerso();
                },
                restrict: 'E',
                templateUrl: 'html/directives/lfg-profile.html'
            };
        }
    ]
);

angular.module('myApp.filters').filter('filterCharacters', function () {
	'use strict';
	return function (input, chars, breakOnWord) {
		if (isNaN(chars)) {
			return input;
		}
		if (chars <= 0) {
			return '';
		}
		if (input && input.length > chars) {
			input = input.substring(0, chars);

			if (!breakOnWord) {
				var lastspace = input.lastIndexOf(' ');
				//get last space
				if (lastspace !== -1) {
					input = input.substr(0, lastspace);
				}
			} else {
				while (input.charAt(input.length - 1) === ' ') {
					input = input.substr(0, input.length - 1);
				}
			}
			return input + '...';
		}
		return input;
	};
});
angular.module('myApp.filters').filter('filterGameProfil', [function () {
	'use strict';
	return function (userGameProfil,gameId,plateformId) {
		var aFilterdItems = [];

		for(var key in userGameProfil){
			if(userGameProfil[key].game.id !== gameId && gameId !== null){
				continue;
			}
			if(userGameProfil[key].plateform.id !== plateformId && plateformId !== null){
				continue;
			}
			aFilterdItems.push(userGameProfil[key]);
		}

		return aFilterdItems;
	};
}]);
angular.module('myApp.filters').filter('filterNotification', [
	'filter','user','$rootScope',
	function (filter,user,$rootScope) {
		'use strict';
		return function (items,userId) {

			var aNotifRead = [];
			if($rootScope.notificationsAlreadyRead){
				for(var key in $rootScope.notificationsAlreadyRead){
					aNotifRead.push($rootScope.notificationsAlreadyRead[key].id);
				}
			}

			var aFilteredItems = [];
			if(userId !== null) {
				for (var key in items) {
					if (items[key].destinataire.id === userId) {

						if(aNotifRead.indexOf(items[key].id) === -1){
							items[key].unread = true;
						}
						aFilteredItems.push(items[key]);
					}
				}
			}

			return aFilteredItems;
		};
	}
]);
angular.module('myApp.filters').filter('filterRdv', [function () {
	'use strict';
	return function (items,plateformId,tags) {

		var aFilterdItems = [];

		var aTags = [];
		if(typeof tags === "string" && tags !== ""){
			aTags = tags.split(' ');
		}

		var d = new Date();
		var now = d.getTime()/1000;

		for(var key in items){
			if(plateformId !== ""){
				if(items[key].plateform === null || items[key].plateform.id !== plateformId){
					continue;
				}
			}

			if(items[key].end < now){
				continue;
			}

			if(aTags.length === 0){
				aFilterdItems.push(items[key]);
				continue;
			}

			var aTagItem = [];
			for(var keyTagItem in items[key].tags){
				aTagItem.push(items[key].tags[keyTagItem].nom.toLowerCase());
			}

			var asTag = true;
			for(var keyTag in aTags){
				if(aTagItem.indexOf(aTags[keyTag].toLowerCase()) < 0){
					asTag = false;
				}
			}

			if(asTag === false){
				continue;
			}

			aFilterdItems.push(items[key]);
		}

		return aFilterdItems;
	};
}]);
angular.module('myApp.filters').filter('filterRdvLastPlace', [
	'filter',
	function (filter) {
	'use strict';
	return function (items,plateformId,tags,onlyLive,onlyInFuture,onlyWithPlace,onlyOnePlace,nbPlaceAvailable,type) {

		return filter.byPlateformsAndTags(items,plateformId,tags,onlyLive,onlyInFuture,onlyWithPlace,onlyOnePlace,nbPlaceAvailable,type);

	};
}]);
angular.module('myApp.filters').filter('filterRdvWithMe', [
	'filter',
	function (filter) {
	'use strict';
	return function (items,currentUserId,plateformId,tags,onlyOnePlace,nbPlaceAvailable) {

		return filter.byPlateformsAndTagsWithMe(items,currentUserId,plateformId,tags,onlyOnePlace,nbPlaceAvailable);

	};
}]);
angular.module('myApp.filters').filter('filterSince', function () {
	'use strict';
	return function (date2_ms) {
		var now = new Date();
		var date1_ms = now.getTime();
		// Calculate the difference in milliseconds
		var difference_ms = date1_ms - (date2_ms*1000);

		if(difference_ms < 0){
			now.setTime(date2_ms*1000);
			var month = now.getMonth()+1;
			if(month < 10){
				month = "0"+month;
			}
			var minutes = now.getMinutes();
			if(minutes < 10){
				minutes = "0"+minutes;
			}
			return now.getFullYear()+"-"+month+"-"+now.getDate()+" "+now.getHours()+":"+minutes;
		}

		var one_minute=1000*60*1;

		var diffMinutes = Math.round(difference_ms/one_minute);
		if(diffMinutes < 60){
			return diffMinutes+' minutes ago';
		}

		var one_hour=1000*60*60*1;
		var diffHours = Math.round(difference_ms/one_hour);
		if(diffHours < 24){
			return diffHours+' hours ago';
		}

		//Get 1 day in milliseconds
		var one_day=1000*60*60*24;
		var diffDays = Math.round(difference_ms/one_day);
		return diffDays+' days ago';

	};
});
angular.module('myApp.filters').filter('filterWords', function () {
	'use strict';
	return function (input, words) {
		if (isNaN(words)) {
			return input;
		}
		if (words <= 0) {
			return '';
		}
		if (input) {
			var inputWords = input.split(/\s+/);
			if (inputWords.length > words) {
				input = inputWords.slice(0, words).join(' ') + '...';
			}
		}
		return input;
	};
});
angular.module('superCache',[])
	.factory('superCache', ['$cacheFactory','$q','$timeout',
		function($cacheFactory,$q,$timeout) {
			'use strict';
			this.customCache = {
				myCache : $cacheFactory('super-cache',{capacity:200}),
				get : function(id){
					return this.myCache.get(id);
				},
				put : function(id,dataToCache){
					this.myCache.put(id,dataToCache);
				},
				removeAll : function(){
					this.myCache.removeAll();
				},
				promise : function(id){
					var cache = this.get(id);
					if(cache && typeof cache === "object"){
						var deferred = $q.defer();
						var promise = deferred.promise;

						$timeout(function(){
							deferred.resolve();
						},0);

						return promise.then(function(response){
							return cache;
						});
					} else {
						return false;
					}
				}
			};
			return this.customCache;
		}
	]
);
// I provide a request-transformation method that is used to prepare the outgoing
// request as a FORM post instead of a JSON packet.
//
angular.module('myApp').factory(
    "transformRequestAsFormPost",
    function () {

        // I prepare the request data for the form post.
        function transformRequest(data, getHeaders) {

            var headers = getHeaders();

            headers["Content-type"] = "application/x-www-form-urlencoded; charset=utf-8";

            return ( serializeData(data) );

        }


        // Return the factory value.
        return ( transformRequest );


        // ---
        // PRVIATE METHODS.
        // ---


        // I serialize the given Object into a key-value pair string. This
        // method expects an object and will default to the toString() method.
        // --
        // NOTE: This is an atered version of the jQuery.param() method which
        // will serialize a data collection for Form posting.
        // --
        // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
        function serializeData(data) {

            // If this is not an object, defer to native stringification.
            if (!angular.isObject(data)) {

                return ( ( data == null ) ? "" : data.toString() );

            }

            var buffer = [];

            // Serialize each key in the object.
            for (var name in data) {

                if (!data.hasOwnProperty(name)) {

                    continue;

                }

                var value = data[name];

                buffer.push(
                    encodeURIComponent(name) +
                    "=" +
                    encodeURIComponent(( value == null ) ? "" : value)
                );

            }

            // Serialize the buffer and clean it up for transportation.
            var source = buffer
                    .join("&")
                    .replace(/%20/g, "+")
                ;

            return ( source );

        }

    }
);
angular.module('myApp.services')
	.service('activity', ['$rootScope','$window',
		function($rootScope,$window) {
			'use strict';

			var sendInactivityAfer = 10 * 60 * 1000;
			var timeoutInactivity = null;
			this.setEvent = function(){
				$window.onfocus = function(){
					$rootScope.activityOnWindow = true;
				};

				$window.onblur = function (){
					$rootScope.activityOnWindow = false;
				};
			};

			this.isActiveWindow = function(){
				return $rootScope.activityOnWindow;
			};
		}
	]
);

angular.module('myApp.services')
	.service('annonce', ['$http','storage','api','$rootScope','$q','$timeout','$window','user',
		function($http,storage,api,$rootScope,$q,$timeout,$window,user) {
			'use strict';

			this.create = function(tags,description,userGameId){

				var username = null;
				var token = null;
				var currentUser = user.get();
				if(currentUser !== null){
					var username = $window.encodeURIComponent(currentUser.username);
					var token = $window.encodeURIComponent(currentUser.token);
				}

				tags = $window.encodeURIComponent(tags);
				description = $window.encodeURIComponent(description);
				userGameId = $window.encodeURIComponent(userGameId);
				return api.call('annonce/create/'+tags+'/'+description+'/'+userGameId);
			};

			this.get = function(){
				return api.call('annonce');
			};
		}

	]
);

angular.module('myApp.services')
	.service('api', ['$http','storage','redirection','$location',
		function($http,storage,redirection,$location) {
			'use strict';

			this.url = null;
			this.getApiUrl = function(){
				if(this.url !== null){
					return this.url;
				}
				var host = $location.host();
				if(host === 'www.esbattle.com'){
					this.url = 'http://api.esbattle.com/';
				}else {
					this.url = 'http://lfg.esbattle.com/app_dev.php/';
				}
				return this.url;
			};

			this.call = function(path){
				return $http.get(this.getApiUrl()+path).error(function(data, status, headers, config){

					switch(status){
						case 401 :
							storage.erasePersistant('user');
							redirection.goToLogin();
							break;

						case 403:
							//on ne fait rien, la requete n'est pas authorisée
							break;

						case 308:
							redirection.goHome();
							break;

						case 404:
							redirection.notFound(data.msg);
							break;

						default:
							break;
					}
				});
			};
		}
	]
);

angular.module('myApp.services')
	.service('bungie', ['$http','storage','api','$rootScope','$q','$timeout','$window','user',
		function($http,storage,api,$rootScope,$q,$timeout,$window,user) {
			'use strict';
			this.characters = null;

			this.getCharacters = function(plateforme,plateformeBungie,battleTag){

				var username = null;
				var token = null;
				var currentUser = user.get();
				if(currentUser !== null){
					var username = $window.encodeURIComponent(currentUser.username);
					var token = $window.encodeURIComponent(currentUser.token);
				}


				plateforme = $window.encodeURIComponent(plateforme);
				plateformeBungie = $window.encodeURIComponent(plateformeBungie);
				battleTag = $window.encodeURIComponent(battleTag);
				return api.call('bungie/characters/'+plateforme+'/'+plateformeBungie+'/'+battleTag+'/'+username+'/'+token);
			};
		}

	]
);

angular.module('myApp.services')
	.service('filter', [
		function() {
			'use strict';

			this.isExpired = function(rdv,now){
				return (rdv.end < now);
			};

			this.isLive = function(rdv,now){
				return (rdv.end > now && rdv.start < now + (5*60));
			};

			this.hasTagSelected = function(rdv,aTags){

				var aTagItem = [];
				for(var keyTagItem in rdv.tags){
					aTagItem.push(rdv.tags[keyTagItem].nom.toLowerCase());
				}

				var asTag = true;
				for(var keyTag in aTags){
					if(aTagItem.indexOf(aTags[keyTag].toLowerCase()) < 0){
						asTag = false;
					}
				}

				return asTag;
			};

			this.hasPlateformSelected = function(rdv,plateformId){
				var bHasPlateform = true;
				if(plateformId !== "" && typeof(plateformId) !== 'undefined'){
					if(rdv.plateform === null || rdv.plateform.id !== plateformId){
						bHasPlateform = false;
					}
				}

				return bHasPlateform;
			};

			this.getCurrentTimestampInSeconds = function(){
				return new Date().getTime()/1000;
			};

			this.tagsStringToArray = function(tags){
				var aTags = [];
				if(typeof tags === "string" && tags !== ""){
					aTags = tags.split(' ');
				}
				return aTags;
			};

			this.hasPlaceAvailable = function(rdv,placesAvailableMini,placeAvailableMax){

				if(!rdv.users){
					return true;
				}

				return (rdv.nbParticipant - rdv.users.length >= placesAvailableMini && rdv.nbParticipant - rdv.users.length <= placeAvailableMax);
			};

			this.hasType = function(rdv,type){
				if(type === 'type_all'){
					return true;
				} else if(type === 'type_annonce' && rdv.type === type){
					return true;
				} else if(type === 'type_party' && rdv.type !== 'type_annonce'){
					return true;
				}

				return false;
			};

			this.byPlateformsAndTags = function(items,plateformId,tags,onlyLive,onlyInFuture,onlyWithPlace,nbPlaceAvailableMin,nbPlaceAvailableMax,type){
				var aFilteredItems = [];

				var aTags = this.tagsStringToArray(tags);

				var now = this.getCurrentTimestampInSeconds();

				for(var key in items){

					if(this.hasPlateformSelected(items[key],plateformId) === false){
						continue;
					}

					if(onlyWithPlace === true && this.hasPlaceAvailable(items[key],nbPlaceAvailableMin,nbPlaceAvailableMax) === false){
						continue;
					}

					if(onlyLive === true && this.isLive(items[key],now) === false){
						continue;
					}

					if(onlyInFuture === true && (this.isExpired(items[key],now) === true || this.isLive(items[key],now) === true)){
						continue;
					}

					if (aTags.length !== 0 && this.hasTagSelected(items[key], aTags) === false) {
						continue;
					}

					if(this.hasType(items[key],type) === false){
						continue;
					}

					aFilteredItems.push(items[key]);
				}

				return aFilteredItems;
			};

			this.hasMeInGame = function(rdv,userId){

				for(var key in rdv.users){
					if(rdv.users[key].user.id === userId){
						return true;
					}
				}

				for(var key_2 in rdv.usersInQueue){
					if(rdv.usersInQueue[key_2].user.id === userId){
						return true;
					}
				}
				return false;
			};

			this.byPlateformsAndTagsWithMe = function(items,currentUserId,plateformId,tags,nbPlaceAvailableMin,nbPlaceAvailableMax){
				var aFilteredItems = [];

				var aTags = this.tagsStringToArray(tags);

				var now = this.getCurrentTimestampInSeconds();

				for(var key in items){

					if(this.hasMeInGame(items[key],currentUserId) === false){
						continue;
					}

					if(plateformId !== null && this.hasPlateformSelected(items[key],plateformId) === false){
						continue;
					}

					if(this.isExpired(items[key],now) === true){
						continue;
					}

					if (aTags.length !== 0 && this.hasTagSelected(items[key], aTags) === false) {
						continue;
					}

					aFilteredItems.push(items[key]);
				}

				return aFilteredItems;
			};
		}
	]
);

angular.module('myApp.services')
	.service('lang', ['gettextCatalog','$routeParams','$rootScope','$location',
		function(gettextCatalog,$routeParams,$rootScope,$location) {
			'use strict';

			this.initLang = function(){
				gettextCatalog.debug = true;

				if($routeParams.lang){
					this.updateLang($routeParams.lang);
				}else {
					this.updateLang('fr');
				}
			};

			this.getCurrent = function(){
				this.initLang();
				return $rootScope.lang;
			};

			this.updateLang = function(newLang){
				$rootScope.lang = newLang;
				gettextCatalog.setCurrentLanguage(newLang);// Corresponds au header 'Language' du fichier .po;
			};
		}
	]
);

angular.module('myApp.services')
	.service('matchmaking', ['$http','user','api','superCache','$window',
		function($http,user,api,superCache,$window) {
			'use strict';
			this.getConf = function(){
				return api.call('matchmaking/');
			};

			this.join = function(matchmakingId,profilId){
				var currentUser = user.get();
				var username = $window.encodeURIComponent(currentUser.username);
				return api.call('matchmaking/join/'+matchmakingId+'/'+profilId+'/'+username+'/'+currentUser.token);
			};
		}
	]
);

angular.module('myApp.services')
	.service('rdv', ['$http','user','api','superCache','$window',
		function($http,user,api,superCache,$window) {
			'use strict';
			this.getAll = function(){
				return api.call('rdv/');
			};

			this.getFormInfo = function(){
				var cache = superCache.promise('getFormInfo');
				if(cache !== false){
					return cache;
				}
				return api.call('rdv/form_info').success(function(data){
					superCache.put('getFormInfo',data);
				}).then(function(promise){
					return promise.data;
				});
			};

            this.add = function(plateform,game,tags,description,start,duree,nbParticipant,profilId){
                var currentUser = user.get();

	            plateform = $window.encodeURIComponent(plateform);
	            game = $window.encodeURIComponent(game);
	            tags = $window.encodeURIComponent(tags);
	            description = $window.encodeURIComponent(description);
	            start = $window.encodeURIComponent(start);
	            duree = $window.encodeURIComponent(duree);
	            nbParticipant = $window.encodeURIComponent(nbParticipant);
	            profilId = $window.encodeURIComponent(profilId);
	            var username = $window.encodeURIComponent(currentUser.username);

	            return api.call('rdv/add/'+plateform+'/'+game+'/'+tags+'/'+description+'/'+start+'/'+duree+'/'+nbParticipant+'/'+profilId+'/'+username+'/'+currentUser.token);
            };

			this.get = function(id){
				return api.call('rdv/get/'+id);
			};

			this.join = function(rdvId,userGameId,username,token){
				username = $window.encodeURIComponent(username);
				return api.call('rdv/join/'+rdvId+'/'+userGameId+'/'+username+'/'+token);
			};

			this.acceptUser = function(userId,rdvId,username,token){
				username = $window.encodeURIComponent(username);
				return api.call('rdv/accept_user/'+userId+'/'+rdvId+'/'+username+'/'+token);
			};

			this.kickUser = function(userId,rdvId,username,token){
				username = $window.encodeURIComponent(username);
				return api.call('rdv/kick_user/'+userId+'/'+rdvId+'/'+username+'/'+token);
			};

			this.leave = function(rdvId,userId,username,token){
				username = $window.encodeURIComponent(username);
				return api.call('rdv/leave/'+rdvId+'/'+userId+'/'+username+'/'+token);
			};

			this.promote = function(rdvId,userId,username,token){
				username = $window.encodeURIComponent(username);
				return api.call('rdv/promote/'+rdvId+'/'+userId+'/'+username+'/'+token);
			};

			this.getNotifications = function(){
				return api.call('notifications/');
			};

			this.isLive = function(rdv){
				var now = new Date();
				now = now.getTime()/1000;
				return (typeof rdv !== "undefined" && rdv.start < now && rdv.end > now);
			};

			this.isEnded = function(rdv){
				var now = new Date();
				now = now.getTime()/1000;
				return (typeof rdv !== "undefined" && rdv.end < now);
			};
		}
	]
);

angular.module('myApp.services')
	.service('redirection', ['$location','$rootScope','$window',
		function($location,$rootScope,$window) {
			'use strict';
			var getLang = function(){
				if($rootScope.lang === undefined){
					return 'fr';
				}
				return $rootScope.lang;
			};

			this.getLoginPageUrl = function(){
				return getLang()+'/login';
			};

			this.goToLogin = function(){
				$location.path(this.getLoginPageUrl());
			};

			this.getRegisterPageUrl = function(){
				return getLang()+'/register';
			};
			this.getNotifPageUrl = function(){
				return getLang()+'/notification';
			};
			this.getMatchmakingPageUrl = function(){
				return getLang()+'/matchmaking';
			};
			this.getGamesPageUrl = function(){
				return getLang()+'/games';
			};

			this.goToGamesPage = function(){
				$location.path(this.getGamesPageUrl());
			};

			this.goToRegister = function(){
				$location.path(this.getRegisterPageUrl());
			};

			this.getCreatePartyPageUrl = function(){
				return getLang()+'/party/create';
			};

			this.goCreateParty = function(){
				$location.path(this.getCreatePartyPageUrl());
			};

			this.goBack = function(){
				$window.history.back();
			};

			this.getPartyWaitingUrlRoot = function(){
				return getLang()+'/party/waiting/';
			};

			this.getPartyWaitingByIdUrl = function(id){
				return this.getPartyWaitingUrlRoot()+id;
			};

			this.goToRdvId = function(id){
				$location.path(this.getPartyWaitingByIdUrl(id));
			};

			this.goToMatchmakingId = function(id){
				$location.path(getLang()+'/matchmaking/waiting/'+id);
			};

			this.getHomePageUrl = function(){
				return getLang()+'/';
			};

			this.goHome = function(id){
				$location.path(this.getHomePageUrl());
			};

			this.getNotFoundPageUrl = function(msg){
				return getLang()+'/404/'+msg;
			};

			this.goWelcomeHome = function(){
				$location.path(getLang()+'/welcome');
			};

			this.notFound = function(msg){
				$location.path(this.getNotFoundPageUrl(msg));
			};

			this.getProfilGamePageUrl = function(gameId,plateformId){
				return getLang()+'/profile/'+gameId+'/'+plateformId;
			};

			this.getProfilGamePageByGameAndPlateformUrl = function(gameId,plateformId){
				return getLang()+'/profile/'+gameId+'/'+plateformId;
			};

			this.goToCreateProfilForGameAndPlateform = function(gameId,plateformId){
				this.goToGamesPage();
			};

			this.getListUsersUrl = function(){
				return getLang()+'/users/connected/';
			};

			this.getAnnonceCreateUrl = function(){
				return getLang()+'/annonce/create/';
			};
		}
	]
);

angular.module('myApp.services')
	.service('socket', ['$rootScope',
		function($rootScope) {
			'use strict';
			this.currentSocket = null;
			this.listUsers = {};

			this.on = function(event,callback){
				var socket = this.getCurrentSocket();
				socket.on(event, function (data) {
					console.log('event global',data);
					callback();
				});
			};

			this.initListener = function(socket){

				var that = this;
				// Whenever the server emits 'new message', update the chat body
				socket.on('new message', function (data) {
					console.log('new message',data);
				});

				// Whenever the server emits 'user joined', log it in the chat body
				socket.on('user joined', function (data) {
					console.log('user join',data);
					that.listUsers = data.listUsers;
					$rootScope.$broadcast('updateListUsers',[data.listUsers]);
				});

				// Whenever the server emits 'user left', log it in the chat body
				socket.on('user left', function (data) {
					console.log('user left',data);
					that.listUsers = data.listUsers;
					$rootScope.$broadcast('updateListUsers',[data.listUsers]);
				});

				// Whenever the server emits 'users list', log it in the chat body
				socket.on('users list', function (data) {
					console.log('users list',data);
					that.listUsers = data.listUsers;
					$rootScope.$broadcast('updateListUsers',[data.listUsers]);
				});

				// Whenever the server emits 'typing', show the typing message
				socket.on('typing', function (data) {
					console.log('typing',data);
				});

				// Whenever the server emits 'stop typing', kill the typing message
				socket.on('stop typing', function (data) {
					console.log('stop typing',data);
				});
			};

			this.getCurrentSocket = function(){
				this.initSocket();
				return this.currentSocket;
			};

			this.initSocket = function(){
				if(this.currentSocket === null && typeof(io) !== "undefined"){
					this.currentSocket = io.connect('http://www.esbattle.com:3000');
					this.initListener(this.currentSocket);
				}
			};

			this.addUser = function(username){
				var socket = this.getCurrentSocket();
				socket.emit('add user', username);
			};

			this.disconnect = function(){
				var socket = this.getCurrentSocket();
				socket.close();
				//socket.emit('disconnect');
			};

			this.getUserList = function(){
				var socket = this.getCurrentSocket();
				console.log('emit : ask users list');
				socket.emit('ask users list');
			};
		}
	]
);
/**
 * Ce service permet de gérer les stockage de données
 *
 * dans cet ordre de priorité
 * soit en localStorage et sessionStorage si disponible
 * soit avec une fonction propre au device
 * soit en cookie
 */
'use strict';
angular.module('myApp.services').service('storage',['$rootScope','$cookies',
	function($rootScope,$cookies){

		this.createCookie = function(name,value,days) {
			var expires = "";
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}
			document.cookie = name+"="+value+expires+"; path=/";
		};

		this.eraseCookie = function(name) {
			document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		};

		this.erasePersistant = function(name) {

			if(localStorage !== null){
				localStorage[name] = null;
			} else {
				document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			}
		};

		this.getPersistant = function(name){

			if(localStorage !== null){
				return localStorage[name];
			}
			var data = $cookies[name];
			return data;
		};

		this.setPersistant = function(name,value){

			if(localStorage !== null){
				localStorage[name]=value;
				return;
			}
			this.createCookie(name,value,360);
		};
	}
]);


angular.module('myApp.services')
	.service('tag', ['rdv',
		function(rdv) {
			'use strict';
			/**
			 * @desc autoCompleteUserTags retourne les tags utilisateurs complétés des autres tags disponibles
			 * @param aTags tags utilisateurs
			 */
			this.autoCompleteUserTags = function(aTags,allTags){


				var previousTags = '';
				var aPreviousTags = [];
				for(var i = 0; i < aTags.length -1; i++){
					previousTags =  previousTags+aTags[i]+' ';
					aPreviousTags.push(aTags[i]);
				}

				var autocompleteTag = [];
				for(var key in allTags){

					if(aPreviousTags.indexOf(allTags[key].nom) > -1){
						continue;
					}
					autocompleteTag.push(previousTags +allTags[key].nom);
				}

				return autocompleteTag;


			};

		}
	]
);
angular.module('myApp.services')
	.service('user', ['$http','storage','api','$rootScope','$q','$timeout','$window','socket',
		function($http,storage,api,$rootScope,$q,$timeout,$window,socket) {
			'use strict';
            this.data = '';

			this.fakePromise = function(){
				var deferred = $q.defer();
				var promise = deferred.promise;

				$timeout(function(){
					deferred.resolve();
				},0);

				return promise;
			};

			var storeUser = function(data){
				data.ttl = new Date(new Date().getTime()+ 2*60*60*1000).getTime();
				storage.setPersistant('user',JSON.stringify(data));
				socket.addUser(data.username);
			};

			this.log = function(username,password){
				username = $window.encodeURIComponent(username);
				return api.call('login/'+username+'/'+password).success(function(data){
					storeUser(data);
				});
			};

			this.logByToken = function(username,token){
				username = $window.encodeURIComponent(username);
				return api.call('login/token/'+username+'/'+token).success(function(data){
					storeUser(data);
				});
			};

			this.logByForgetToken = function(username,token){
				username = $window.encodeURIComponent(username);
				return api.call('login/forgetToken/'+username+'/'+token).success(function(data){
					storeUser(data);
				});
			};

			this.get = function(){
				var courantUser = storage.getPersistant('user');
				if(typeof(courantUser) !== "undefined"){
					var user = JSON.parse(courantUser);
					if(user !== null && user.ttl < new Date().getTime()){
						this.logout();
						this.logByToken(user.username,user.token).then(function(data){
							user = data;
						});
					}
					return user;
				}
				return null;
			};

			this.register = function(email,password,username,plateformId,gamertag){

				email = $window.encodeURIComponent(email);
				password = $window.encodeURIComponent(password);
				username = $window.encodeURIComponent(username);
				plateformId = $window.encodeURIComponent(plateformId);
				gamertag = $window.encodeURIComponent(gamertag);
				return api.call('register/'+email+'/'+password+'/'+username+'/'+plateformId+'/'+gamertag).success(function(data){
					storeUser(data);
				});
			};

			this.logout = function(){
				$rootScope.notificationsAlreadyRead = [];
				$rootScope.userGameSelected = null;
				storage.erasePersistant('user');
				socket.disconnect();
			};

			this.createUserGame = function(plateformId,gameId,profilName,gameUsername,data1,data2,data3,data4){

				plateformId = $window.encodeURIComponent(plateformId);
				gameId = $window.encodeURIComponent(gameId);
				profilName = $window.encodeURIComponent(profilName);
				gameUsername = $window.encodeURIComponent(gameUsername);
				data1 = $window.encodeURIComponent(data1);
				data2 = $window.encodeURIComponent(data2);
				data3 = $window.encodeURIComponent(data3);
				data4 = $window.encodeURIComponent(data4);

				var currentUser = this.get();
				var username = $window.encodeURIComponent(currentUser.username);

				if(typeof data1 === "undefined" || data1 === ""){
					data1='null';
				}
				if(typeof data2 === "undefined" || data2 === ""){
					data2='null';
				}
				if(typeof data3 === "undefined" || data3 === ""){
					data3='null';
				}
				if(typeof data4 === "undefined" || data4 === ""){
					data4='null';
				}

				return api.call('game_data/create/'+plateformId+'/'+gameId+'/'+profilName+'/'+gameUsername+'/'+data1+'/'+data2+'/'+data3+'/'+data4+'/'+username+'/'+currentUser.token).success(function(data){
					storeUser(data);
				});
			};

			this.updateUserGame = function(plateformId,gameId,profilId,profilName,gameUsername,data1,data2,data3,data4){

				plateformId = $window.encodeURIComponent(plateformId);
				gameId = $window.encodeURIComponent(gameId);
				profilId = $window.encodeURIComponent(profilId);
				profilName = $window.encodeURIComponent(profilName);
				gameUsername = $window.encodeURIComponent(gameUsername);
				data1 = $window.encodeURIComponent(data1);
				data2 = $window.encodeURIComponent(data2);
				data3 = $window.encodeURIComponent(data3);
				data4 = $window.encodeURIComponent(data4);

				var currentUser = this.get();
				var username = $window.encodeURIComponent(currentUser.username);

				if(typeof data1 === "undefined" || data1 === ""){
					data1='null';
				}
				if(typeof data2 === "undefined" || data2 === ""){
					data2='null';
				}
				if(typeof data3 === "undefined" || data3 === ""){
					data3='null';
				}
				if(typeof data4 === "undefined" || data4 === ""){
					data4='null';
				}

				return api.call('game_data/update/'+plateformId+'/'+gameId+'/'+profilId+'/'+profilName+'/'+gameUsername+'/'+data1+'/'+data2+'/'+data3+'/'+data4+'/'+username+'/'+currentUser.token).success(function(data){
					storeUser(data);
				});
			};

			this.forgetPassword = function(email){
				return api.call('forget_password/'+email);
			};

			this.updatePassword = function(password){
				var currentUser = this.get();
				var username = $window.encodeURIComponent(currentUser.username);
				return api.call('update_password/'+password+'/'+username+'/'+currentUser.token);
			};

			this.updateOnline = function(currentUser){
				var username = $window.encodeURIComponent(currentUser.username);
				return api.call('login/online/'+username+'/'+currentUser.token);
			};

			this.refresh = function(){
				var currentUser = this.get();
				if(currentUser === null){
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);
				return api.call('login/online/'+username+'/'+token).success(function(data){
					storeUser(data);
				});
			};

			this.getAll = function(){
				return api.call('users/');
			};

			this.addFriend = function(friendUsername){
				var currentUser = this.get();
				if(currentUser === null){
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);
				friendUsername = $window.encodeURIComponent(friendUsername);
				return api.call('user/friend/add/'+friendUsername+'/'+username+'/'+token);
			};

			this.removeFriend = function(friendUsername){
				var currentUser = this.get();
				if(currentUser === null){
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);
				friendUsername = $window.encodeURIComponent(friendUsername);
				return api.call('user/friend/remove/'+friendUsername+'/'+username+'/'+token);
			};
		}
	]
);
